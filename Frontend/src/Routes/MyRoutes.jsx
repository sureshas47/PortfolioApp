import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Background from "../Components/Background";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
}

export default MyRoutes;
