import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "black",
};


function LoginNavbar() {

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-link"><Link to="/" style={linkStyle}>Login</Link></div>
        <div className="navbar-link"><Link to="/signup" style={linkStyle}>Signup</Link></div>
      </div>
    </div>
  );
}

export default LoginNavbar;