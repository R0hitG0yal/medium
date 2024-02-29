import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";
import React, { useState } from "react";
import { InputBox } from "../component/InputBox";
import Sidebar from "../component/Sidebar";

const AddPost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        label="Publish"
        onClick={async () => {
          const res = await axios.post(
            "https://backend.rgoyal4122.workers.dev/api/v1/blog",
            {
              title,
              content,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          console.log(res.data);
        }}
      />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4">
          <InputBox
            label="title"
            placeholder="Enter title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <InputBox
            label="content"
            placeholder="Enter content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddPost;
