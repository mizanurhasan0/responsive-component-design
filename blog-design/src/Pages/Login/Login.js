import React from "react";
import "./login.css";

export const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your Email"
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          plaveholder="Enter your password.."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegistrationButton">Register</button>
    </div>
  );
};
