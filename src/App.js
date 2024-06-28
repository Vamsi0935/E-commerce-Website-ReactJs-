import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import AddProduct from "./AddProduct/AddProduct";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
