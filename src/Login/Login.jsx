import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function login() {
    //console.log(email, password);
    const newUser = { email, password };
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
      newUser
    );
    console.log(response);
    if (response.status === 200) {
      navigate("/");
      localStorage.setItem("userRole", response.data.role);
      localStorage.setItem("userId", response.data.userId);
    }
  }
  return (
    <div className="login-container">
      <h1 style={{ textAlign: "center" }}><u>Login</u></h1>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={login}>Login</button>
    </div>
  );
}
