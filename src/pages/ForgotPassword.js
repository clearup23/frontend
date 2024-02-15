import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";
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
  const Navigate = useNavigate;
  
  const sendOTP = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8082/checkEmailExists/${email}`
      );
      const data = response.data;
      console.log(data);
      if (data.exists) {
        const otpResponse = await axios.get(
          `http://localhost:8082/otp/${email}`
        );
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
        "http://localhost:8082/updatePassword",
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

    axios
      .post(`http://localhost:8082/verifyOtp/${email}`, {
        otp: otp,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("OTP verified successfully");
          Navigate("/change-password");
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
    <div className="body">
      <div className="forgot-container">
        <div className="forgot-form">
          <h3>Forgot Password</h3>
          <form onSubmit={handleSubmit}>
            <p>{successMessage}</p>
            <p>{errorMessage}</p>
            <div className="form-group">
              <label className="label" htmlFor="email">
                Email ID
              </label>
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
            </div>

            <div className="buttons-container">
              <button type="button" onClick={sendOTP}>
                Send OTP
              </button>
            </div>

            <div className="verify-otp-container">
              <label className="label" htmlFor="otp">
                Enter OTP:
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <div className="verify-otp-container">
                <button type="button" onClick={handleVerifyOTP}>
                  Verify OTP
                </button>
              </div>
            </div>
          </form>

          <div className="form-group"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
