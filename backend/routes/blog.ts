import { Hono } from "hono";
import { jwt, sign, verify } from "hono/jwt";

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostInput, updatePostInput } from "@rgoyal4122/common-medium";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const jwt = c.req.header("Authorization");
  if (!jwt) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);
  if (!payload) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  c.set("userId", payload.id);
  await next();
});

blogRouter.post("/blog", async (c) => {
  const authorId = c.get("userId");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = createPostInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId,
    },
  });
  return c.json({
    id: post.id,
  });
});

blogRouter.put("/blog", async (c) => {
  const authorId = c.get("userId");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updatePostInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }
  prisma.post.update({
    where: {
      id: body.id,
      authorId,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.text("updated post");
});

blogRouter.get("/blog/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  console.log(id);
  const post = await prisma.post.findFirst({ where: { id } });
  return c.json(post);
});

blogRouter.get("/blog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const post = await prisma.post.findMany({});
  return c.json(post);
});
