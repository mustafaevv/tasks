import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Todo from "../pages/Todo";
import Product from "../pages/Product";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/search-product" element={<Product />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRouter;
