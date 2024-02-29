import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import AddPost from "./pages/AddPost";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/edit" element={<AddPost />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
