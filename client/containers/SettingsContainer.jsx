import React from 'react';
import { BrowserRouter as useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const SettingsContainer = () => {

    const updateUsernameHandler = () => {

        const newUsername = document.getElementById('username-update').value;

        const userInputs = { value: newUsername };

        fetch('/user/settings/username', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInputs)
        })
            .then((res) => {
                console.log('Settings Update Fetch Response: ', res);
            })
            .catch((err) => {
            })
    }

    const updateEmailHandler = () => {

        const newEmail = document.getElementById('email-update').value;

        const userInputs = { value: newEmail };

        fetch('/user/settings/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInputs)
        })
            .then((res) => {
                console.log('Settings Update Fetch Response: ', res);
            })
            .catch((err) => {
            })
    }

    const updatePasswordHandler = () => {

        const newPassword = document.getElementById('password-update').value;

        const userInputs = { value: newPassword };

        fetch('/user/settings/password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInputs)
        })
            .then((res) => {
                console.log('Settings Update Fetch Response: ', res);
            })
            .catch((err) => {
            })
    }

    return (
        <>
            <Navbar />
            <div id="settings-container">
                <h2>Update Information</h2>
                <input id="username-update" className="settings-input" type="text" placeholder="Username"></input>
                <button type="submit" id="submit-username" className="settings-buttons" onClick={updateUsernameHandler}>Update Username</button>

                <input id="email-update" className="settings-input" type="text" placeholder="Email"></input>
                <button type="submit" id="submit-email" className="settings-buttons" onClick={updateEmailHandler}>Update Email</button>

                <input id="password-update" className="settings-input" type="password" placeholder="Password"></input>
                <button type="submit" id="submit-password" className="settings-buttons" onClick={updatePasswordHandler}>Update Password</button>
            </div>
        </>
    )
}

export default SettingsContainer;