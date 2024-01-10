import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import { setSnapsList } from "../redux/snapsSlice";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch(`/user/login/${username}/${password}`, {})
      .then((result) => result.json()) //value is set equal to the async result of 'result' sp result will equal value
      .then((value) => {
        navigate("/snaps");
        // Reset text field inputs to be empty after login pressed
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        console.log("Reached the fetch request and received values ", value);
        //place this somewhere else
        dispatch(setSnapsList(value));
      })
      .catch((error) => console.error(error));
  };

  const signupHandler = (e) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);

    // Might have to check the endpoint and also the properties because why doesn't dev server proxy work?
    fetch("/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
      })
      .catch(() => {
        console.log("Error in signupHandler");
      });
  };

  return (
    //added placeholders instead of using labels
    <div className="login">
      <img id="login-logo" src="./images/snaps-logo.png" />
      <input
        type="text"
        id="username"
        className="login-input"
        autoComplete="off"
        placeholder="Username"
      ></input>
      <input
        type="password"
        id="password"
        className="login-input"
        placeholder="Password"
      ></input>
      <button id="Login" onClick={loginHandler}>
        {" "}
        Login{" "}
      </button>
      <button id="signup-button" aria-label="Sign Up" onClick={signupHandler}>
        Don't have an account? <span id="signup-blue"> Sign Up</span>{" "}
      </button>
    </div>
  );
};

export default LoginContainer;
