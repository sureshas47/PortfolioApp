import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default MyRoutes;
