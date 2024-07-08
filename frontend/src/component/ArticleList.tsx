import axios from "axios";
import React, { useEffect, useState } from "react";

interface author {
  email: string;
}

interface Article {
  title: string;
  author: author;
  content: string;
}

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function getArticles() {
      const res = await axios.get(
        "https://backend.rgoyal4122.workers.dev/api/v1/blog",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setArticles(res.data);
    }
    getArticles();
  }, []);

  return (
    <ul className="list-none space-y-4 md:px-16 md:pl-32 pt-2">
      {articles.map((article) => (
        <li key={article.title}>
          <a href="#" className="block bg-white rounded-md shadow-sm p-4">
            <span className="font-thin block truncate">by {article.author.email}</span>
            <span className="font-bold block truncate text-xl py-2">
              {article.title}
            </span>
            <span className="font-light block truncate">{article.content}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
