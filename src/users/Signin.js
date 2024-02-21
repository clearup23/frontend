import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

export default function Signin() {
  const [userEmail, setUserEmail] = useState();
  const { setUserData } = useUser();
  console.log(userEmail);
  const [userPassword, setUserPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/userSignIn`, {
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
          alert(response.data);
          setUserData(response.data);
          navigate("/");
        } else {
          if (response.data.role === "admin") {
            alert(response.data);
            setUserData(response.data);
            navigate("/admin");
          }
        }
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#8fc4b7" }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "5px 5px 7px #9b9b9b -5px -5px 7px #ffffff",
          backgroundColor: "whitesmoke",
          width: "40%",
        }}
      >
        <form onSubmit={handleLogin} style={{ height: "100%" }}>
          <h1>Login</h1>
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
              placeholder="Enter your registered Email"
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
              placeholder="Enter your password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="text-center mt-3">
            <p>
              Don't have an account? <Link to="/Signup">Sign Up</Link>
            </p>
            <p>
              Forgot Password? <Link to="/ForgotPassword">Reset</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
