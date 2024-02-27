import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";

const SignupContainer = () => {
  // Get username and password
  // Do a fetch request to the signup route

  const navigate = useNavigate();

  const signupHandler = () => {
    const email = document.getElementById("signup-email").value;
    const firstName = document.getElementById("signup-firstName").value;
    const lastName = document.getElementById("signup-lastName").value;
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    const userInputs = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
    };

    fetch("/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInputs),
    })
      .then((res) => {
        // document.getElementById('username').value = '';
        // document.getElementById('password').value = '';
        // navigate("/");
        console.log("Signup Fetch Promise Chain - THEN");
      })
      .catch((err) => {
        console.log("Error in signupHandler: ", err);
      });

    navigate("/");
  };

  const backTLogin = () => {
    navigate("/");
  };

  // Render the signup page - very similar to login page
  return (
    <div className="login">
      <img id="login-logo" src="./images/snaps-logo.png" />
      <input
        type="text"
        id="signup-email"
        className="login-input"
        autoComplete="off"
        placeholder="Email"
      ></input>
      <input
        type="text"
        id="signup-firstName"
        className="login-input"
        autoComplete="off"
        placeholder="First Name"
      ></input>
      <input
        type="text"
        id="signup-lastName"
        className="login-input"
        autoComplete="off"
        placeholder="Last Name"
      ></input>
      <input
        type="text"
        id="signup-username"
        className="login-input"
        autoComplete="off"
        placeholder="Username"
      ></input>
      <input
        type="password"
        id="signup-password"
        className="login-input"
        placeholder="Password"
      ></input>
      <button className="Login" aria-label=" Sign Up" onClick={signupHandler}>
        Create Account
      </button>
      <button className="login-input" onClick={backTLogin}>
        Back to Login
      </button>
    </div>
  );
};

export default SignupContainer;
