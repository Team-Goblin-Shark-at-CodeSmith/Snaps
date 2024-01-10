import React from "react";
import LoginContainer from "./containers/LoginContainer.jsx";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/styles.css';
import SnapsContainer from "./containers/SnapsContainer.jsx";
import SignupContainer from "./containers/SignupContainer.jsx"

const App = () => {

    return (

        <Router>
            <Routes>
                <Route path="/" element={<LoginContainer />} />
                <Route path="/signup" element={<SignupContainer />} />
                <Route path="/snaps" element={<SnapsContainer />} />
            </Routes>
        </Router>



    )
}

export default App;