import React from 'react';
import { BrowserRouter as useNavigate } from 'react-router-dom';

const SettingsContainer = () => {

    return (
        <>
            <div id="settings-container">
                <label>Update Username</label>
                <input id="username-update" type="text" placeholder="New Username"></input>
                <label>Update Email</label>
                <input id="email-update" type="text" placeholder="New Email"></input>
                <label>Update Pasword</label>
                <input id="password-update" type="text" placeholder="New Password"></input>
                <button type="submit" id="submit-settings">Save Changes</button>
            </div>
        </>
    )
}

export default SettingsContainer;