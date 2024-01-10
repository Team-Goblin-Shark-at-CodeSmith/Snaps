import React from "react";
import { Link} from "react-router-dom";

const linkStyle = {
  color: "black",
};


function Navbar() {

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-link"><Link to="/" style={linkStyle}>Login</Link></div>
        <div className="navbar-link"><Link to="/signup"  style={linkStyle}>Signup</Link></div>
        <div className="navbar-link"><Link to="/snaps"  style={linkStyle}>Snaps</Link></div>  
      </div>           
      <div className="navbar-user-info-link">User Info</div>
    </div>
  );
}

export default Navbar;