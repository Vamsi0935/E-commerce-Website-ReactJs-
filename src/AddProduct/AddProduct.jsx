import React, { useState } from "react";
import "./addproduct.css";
import axios from "axios";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const userRole = localStorage.getItem("userRole");
  async function handleAddProduct() {
    const newProduct = {
      name,
      price,
      description,
      category,
      stock,
      role: userRole,
    };
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/products/add`,
      newProduct
    );
    console.log(response);
  }
  return (
    <div className="add-product-container">
      <h1 style={{ textAlign: "center" }}>
        <u>Add Product</u>
      </h1>
      <div className="form-group">
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label>Price</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
        <label>Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Category</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
        <label>Stock</label>
        <input value={stock} onChange={(e) => setStock(e.target.value)} />
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}
