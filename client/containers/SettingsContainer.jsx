import React from 'react';
import { BrowserRouter as useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const SettingsContainer = () => {

    const settingsHandler = () => {
        const newEmail = document.getElementById('email-update').value;
        const newUsername = document.getElementById('username-update').value;
        const newPassword = document.getElementById('password-update').value;

        const userInputs = { email: newEmail, username: newUsername, password: newPassword };

        fetch('/settings', {
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
                <input id="email-update" className="settings-input" type="text" placeholder="Email"></input>
                <input id="password-update" className="settings-input" type="text" placeholder="Password"></input>
                <button type="submit" id="submit-settings">Save Changes</button>
            </div>
        </>
    )
}

export default SettingsContainer;