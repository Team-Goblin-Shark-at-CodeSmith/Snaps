import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import { setSnapsList } from "../redux/snapsSlice";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validLogin = false;

    await fetch(`/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((result) => result.json()) //value is set equal to the async result of 'result' sp result will equal value
      .then((value) => {
        console.log("Reached the fetch request and received values ", value);

        // ! This dispatch should be sending a list of the users snaps
        dispatch(setSnapsList(value.allSnaps));

        if (value.username && value.username === username) navigate("/snaps");
        else {
          document.getElementById("username").value = ""
          document.getElementById("password").value = "";
          alert("Username and/or password incorrect");
        }

      })
      .catch((error) => console.error(error));
  };

  const signupHandler = (e) => {
    navigate("/signup");
  };

  return (
    //added placeholders instead of using labels
    <>
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
        <button className="Login" onClick={loginHandler}>
          {" "}
          Login{" "}
        </button>
        <button
          className="signup-button"
          aria-label="Sign Up"
          onClick={signupHandler}
        >
          Don't have an account? <span id="signup-blue"> Sign Up</span>{" "}
        </button>
      </div>
    </>
  );
};

export default LoginContainer;
