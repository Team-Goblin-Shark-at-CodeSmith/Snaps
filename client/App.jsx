import React from "react";
import LoginContainer from "./containers/LoginContainer.jsx";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/styles.css';
import SnapsContainer from "./containers/SnapsContainer.jsx";
import SignupContainer from "./containers/SignupContainer.jsx"
import SettingsContainer from "./containers/SettingsContainer.jsx"

const App = () => {

    return (
        <div className="main-div">
            <Router>
                {/* <LoginNavbar /> */}
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<LoginContainer />} />
                    <Route path="/signup" element={<SignupContainer />} />
                    <Route path="/snaps" element={<SnapsContainer />} />
                    <Route path="/settings" element={<SettingsContainer />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;