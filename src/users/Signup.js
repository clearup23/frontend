import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    document: "",
    subject: "",
  });

  const { name, email, password, role, document, subject } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try{
    await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user`, {
      name: name,
      email: email,
      password: password,
      role: role,
      document: document,
      subject: subject,
    });
    alert("You have successfully registered");
    console.log("success");
    navigate("/Signin");
  } catch(error){
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

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setUser({ ...user, document_link: file });
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#8fc4b7",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="col-md-6 border rounded p-4 mt-2 shadow"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <h2 className="text-center m-4">Register User</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="FullName" className="form-label">
              Full Name:
            </label>
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

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email:
            </label>
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

          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password:
            </label>
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

          <div className="mb-3">
            <label htmlFor="Role" className="form-label">
              Role:
            </label>
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
              <option value="admin">Admin</option>
            </select>
          </div>

          {role === "teacher" && (
            <>
              <div className="mb-3">
                <label htmlFor="DocumentLink" className="form-label">
                  Upload Document (PDF):
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="document"
                  placeholder="Provide link for your certificate"
                  value={document}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Subject" className="form-label">
                  Choose Subject:
                </label>
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

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            <Link className="btn btn-outline-danger mx-2" to="/">
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
  );
}
