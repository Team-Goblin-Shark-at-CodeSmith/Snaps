import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";

const SignupContainer = () => {
    // Get username and password
    // Do a fetch request to the signup route

    const navigate = useNavigate();


    const signupHandler = () => {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        console.log('username: ', username);
        console.log('password: ', password);

        fetch('/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, password: password })
        })
            .then(res => {
                // document.getElementById('username').value = '';
                // document.getElementById('password').value = '';
                // navigate("/");
                console.log('Signup Fetch Promise Chain - THEN')
            })
            .catch((err) => { console.log('Error in signupHandler: ', err) });

        navigate("/");

        // fetch('/user/signup', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ username: username, password: password })
        // })
        // .then(res => {
        //     // console.log('User successfully added to db');
        // })
        // .catch(() => {
        //     console.log('Error in signupHandler');
        // })
    };

    // Render the signup page - very similar to login page
    return (
        <div className="login">
            <img id="login-logo" src="./images/snaps-logo.png" />
            <input type="text" id="signup-username" className="login-input" autoComplete='off' placeholder="Username"></input>
            <input type="password" id="signup-password" className="login-input" placeholder="Password"></input>
            <button className="Login" aria-label=" Sign Up" onClick={signupHandler}>Create Account</button>
            <h3>Welcome!</h3>
        </div >
    )

}

export default SignupContainer;