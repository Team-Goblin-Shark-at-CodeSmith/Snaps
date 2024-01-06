import React from "react";
import LoginContainer from "./LoginContainer.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

    return(

        <Router>
            <Routes>
                <Route path="/" element={<LoginContainer />} />
            </Routes>
        </Router>



    )
}

export default App;