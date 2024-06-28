import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  //console.log(process.env.REACT_APP_BACKEND_URL);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  async function signUp() {
    const newUser = { name, email, password, mobile: number };
    console.log(newUser);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/register`,
        newUser
      );
      console.log(response, response.data);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      //setMessage(error.response.data.message || 'Something went wrong');
    }
  }
  return (
    <div className="signup-container">
      <h1 style={{ textAlign: "center" }}><u>SignUp</u></h1>
      <div className="form-group">
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Mobile Number</label>
        <input value={number} onChange={(e) => setNumber(e.target.value)} />
      </div>
      <button onClick={signUp}>SignUp</button>
    </div>
  );
}
