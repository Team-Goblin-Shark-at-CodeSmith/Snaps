import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userLogo from '../../public/images/user.png'

const linkStyle = {
  color: "black",
};


function Navbar() {

  const navigate = useNavigate();
  const settingsHandler = () => {
    navigate("/settings");
  }

  return (
    <div className="navbar">
      <div className="navbar-links">
        {/* <div className="navbar-link"><Link to="/" style={linkStyle}>Login</Link></div> */}
        {/* <div className="navbar-link"><Link to="/signup" style={linkStyle}>Signup</Link></div> */}
        <div className="navbar-link"><Link to="/snaps" style={linkStyle}>Snaps</Link></div>
        <div><a onClick={settingsHandler}><img src={userLogo} id="userAvatar"></img></a></div>
      </div>
    </div>
  );
}

export default Navbar;