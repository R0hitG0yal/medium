import { useState } from "react";
import { BottomWarning } from "../component/BottomWarning";
import { Button } from "../component/Button";
import { Heading } from "../component/Heading";
import { InputBox } from "../component/InputBox";
import { SubHeading } from "../component/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  //
  return (
    // <div className="bg-slate-300 h-screen flex justify-center">
    <div className="h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      <div className="flex justify-center items-center w-full h-screen">
        <div className="text-5xl font-sans font-extrabold pl-32 w-1/2 ">
          Elevate Your Digital Presence
          <br></br>
          <span className="text-xl font-normal text-purple-300   ">
            Unlock the power of our cutting-edge platform and transform your
            online experience.
          </span>
        </div>
        <div className="rounded-lg text-center p-2 px-32 w-1/2 ">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            placeholder="rohit@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            placeholder="123456"
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "https://backend.rgoyal4122.workers.dev/api/v1/user/signin",
                  {
                    email,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.jwt);
                navigate("/blog");
              }}
              label={"Sign in"}
            />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
