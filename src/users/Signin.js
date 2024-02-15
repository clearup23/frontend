import axios from "axios";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import "./Signin.css"
export default function Signin() {
  const [userEmail, setUserEmail] = useState();
  const { setUserData } = useUser();
  // console.log(userEmail);
  const [userPassword, setUserPassword] = useState();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8082/userSignIn", {
        params: {
          email: userEmail,
          password: userPassword,
        },
      });
      console.log(response);
      if (response.status === 200) {
        if (
          response.data.role === "student" ||
          response.data.role === "teacher"
        ) {
          // alert(response.data);
          setUserData(response.data);
          navigate("/");
        } else {
          if (response.data.role == "admin") {
          
            setUserData(response.data);
            navigate("/admin");
          }
        }
      }
    } catch (error) {
      console.log(error);
      // alert(error.response.data);
    }
  };
  return (
    <div className="signinbody"> <div
      className="signin-container"
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#fff",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)", // Shadow effect
      }}
    >
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="Submit" className="btn btn-outline-primary">
          Submit
        </button>
        <div className="text-center mt-3">
          <p>
            Don't have an account? <Link to="/Signup">Sign Up</Link>
          </p>
          <p>
            Forgot Password? <Link to="/ForgotPassword">Reset</Link>
          </p>
        </div>
      </form>
    </div></div>   
  );
}
