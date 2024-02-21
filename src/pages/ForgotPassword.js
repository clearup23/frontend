import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [user] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendOTP = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/checkEmailExists/${email}`
      ); // Use correct URL with protocol
      const data = response.data;
      console.log(data);
      if (data.exists) {
        const otpResponse = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/otp/${email}`
        ); // Use correct URL with protocol
        if (otpResponse.status === 200) {
          alert("OTP Sent to " + email + " Successfully");
          setOtp(otpResponse.data.otp);
        } else {
          alert("Error sending OTP");
        }
      } else {
        alert("Email does not exist. Please enter a registered email.");
      }
    } catch (error) {
      alert("Error checking email existence: " + error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/updatePassword`,
        {
          email: email,
          currentPassword: newPassword,
          newPassword: confirmPassword,
        }
      );
      if (response.status === 200) {
        alert("Password Updated successfully");
        setEmail("");
        setOtp("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setErrorMessage("Error updating password");
      }
    } catch (error) {
      setErrorMessage("Error updating password: " + error.message);
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();

    // Send request to backend to verify OTP using Axios
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/verifyOtp/${email}`, {
        otp: otp,
      }) // Include entered OTP in the request body
      .then((response) => {
        if (response.status === 200) {
          alert("OTP verified successfully");
          // Proceed with form submission after OTP verification
        } else {
          alert("Invalid OTP. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to verify OTP. Check console for details.");
      });
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
        <form onSubmit={handleSubmit} style={{ height: "100%" , display : "center" }}>
        <h2 className="text-center m-4">Forgot Password</h2>


    {/* <div className="forgot-container" style={{ height: "100vh", backgroundColor: "#8fc4b7", display: "flex", justifyContent: "center", alignItems: "center" }}> */}
      {/* <div className="forgot-form"> */}
        {/* <h2>Forgot Password</h2> */}
        {/* <form onSubmit={handleSubmit}> */}
          <p>{successMessage}</p>
          <p>{errorMessage}</p>
          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input
              type="text"
              className="input-field"
              id="email"
              name="email"
              placeholder="Enter Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          <button type="button"  className="btn btn-outline-primary" onClick={sendOTP}>
            Send OTP
          </button>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button type="button"   className="btn btn-outline-primary" onClick={handleVerifyOTP}>
            Verify OTP
          </button>
          </div>

          <div className="change-password">
          <h3 className="text-center m-4">Change Password</h3>
          <label htmlFor="newPassword">
            Current Password:
          </label>
          <input
            type="password"
            className="input-field"
            id="newPassword"
            name="newPassword"
            placeholder="Enter password which is sent to your Email"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">
            New Password:
          </label>
          <input
            type="password"
            className="input-field"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Enter New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p>{passwordError}</p>
          <div className="d-grid gap-2">
          <button type="submit"  className="btn btn-primary">Reset Password</button>
          </div>
          </div>
        <div className="text-center mt-3">
          <span>Have an account?  
            <Link to="/Signin">  Login Here</Link>
          </span>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
