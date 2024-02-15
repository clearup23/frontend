import React, { useState } from "react";
import "./ChangePassword.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8082/updatePassword",
        {
        //   email: email,
          currentPassword: newPassword,
          newPassword: confirmPassword,
        }
      );
      if (response.status === 200) {
        alert("Password Updated successfully");
        // setEmail("");
        // setOtp("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setErrorMessage("Error updating password");
      }
    } catch (error) {
      setErrorMessage("Error updating password: " + error.message);
    }
  };

  return (
    <div className="bodyy"> <div className="change-password-container">
      <h3>Change Password</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="newPassword">Current Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="password sent in mail"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">New Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Enter a new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error-message">{passwordError}</p>
        </div>
        <div className="form-group">
          <button type="submit">Reset Password</button>
        </div>
      </form>
      <div className="form-group">
        <span>
          <Link to="/Signin">Login Here</Link>
        </span>
      </div>
    </div></div>
   
  );
};

export default ChangePassword;
