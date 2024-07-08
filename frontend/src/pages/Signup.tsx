import { useState } from "react";
import axios from "axios";
import { BottomWarning } from "../component/BottomWarning";
import { Button } from "../component/Button";
import { Heading } from "../component/Heading";
import { InputBox } from "../component/InputBox";
import { SubHeading } from "../component/SubHeading";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      <div className="flex justify-center items-center w-full h-screen">
        <div className="hidden text-5xl font-sans font-extrabold pl-32 w-1/2 md:block">
          Elevate Your Digital Presence
          <br></br>
          <span className="text-xl font-normal text-purple-300   ">
            Unlock the power of our cutting-edge platform and transform your
            online experience.
          </span>
        </div>
        <div className="rounded-lg md:w-1/2 text-center p-2 h-max px-32">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setError(false);
              setEmail(e.target.value);
            }}
            placeholder="rohit@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setError(false);
              setPassword(e.target.value);
            }}
            placeholder="123456"
            label={"Password"}
          />
          <div>
            {error && (
              <div className="text-red-800 font-extrabold pb-2">
                Invalid UserName or Password
              </div>
            )}

            <Button
              onClick={async () => {
                try {
                  const response = await axios({
                    method: "POST",
                    url: "https://backend.rgoyal4122.workers.dev/api/v1/user/signup",
                    data: {
                      email,
                      password,
                    },
                  });
                  console.log(response.status);
                  // if(response.status == 400) {
                  //   error = true;
                  // }
                  localStorage.setItem("token", response.data.jwt);
                  navigate("/blog");
                } catch (err) {
                  setError(true);
                }
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/"}
          />
        </div>
      </div>
    </div>
  );
};
