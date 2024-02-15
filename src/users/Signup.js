import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./Signup.css";
export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    document: "",
    subject: "",
    otp: "",
  });

  const { name, email, password, role, document, subject, otp } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8082/user", {
        ...user,
      });

      alert("You have successfully registered");
      console.log("success");
      navigate("/Signin");
    } catch (error) {
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data === "Email already registered"
      ) {
        alert("Email already exists. Please use a different email.");
      } else {
        console.error("Error occurred:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  const validateEmail = (email) => {
    // You can implement a more comprehensive email validation here
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="signupbody">
      <div className="container">
        <div className="row">
          <div className="col-md-3 offset-md-4 offset-sm-3 offset-4">
            <div className="form-container">
              <h2 className="text-center m-4">Register User</h2>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="FullName">Full Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Role">Role:</label>
                  <select
                    className="form-select"
                    name="role"
                    value={role}
                    onChange={(e) => onInputChange(e)}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>
                {role === "teacher" && (
                  <>
                    <div className="form-group">
                      <label htmlFor="DocumentLink">
                        Upload Document (PDF):
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="document"
                        value={document}
                        onChange={(e) => onInputChange(e)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Subject">Choose Subject:</label>
                      <select
                        className="form-select"
                        name="subject"
                        value={subject}
                        onChange={(e) => onInputChange(e)}
                        required
                      >
                        <option value="">Select Subject</option>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="english">English</option>
                        <option value="social">Social</option>
                      </select>
                    </div>
                  </>
                )}
                <div className="form-group">
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                  <Link to="/" className="cancel-btn">
                    Cancel
                  </Link>
                </div>
              </form>
              <div className="text-center mt-3">
                <p>
                  Already have an account? <Link to="/Signin">Sign In</Link>
                </p>
                <p>
                  Forgot Password? <Link to="/ForgotPassword">Reset</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
