import React from "react";
import LoginContainer from "./containers/LoginContainer.jsx";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/styles.css';
import SnapsContainer from "./containers/SnapsContainer.jsx";
import Navbar from "./containers/SnapsContainer.jsx";

const App = () => {

    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginContainer />} />
                    <Route path="/snaps" element={<SnapsContainer />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;