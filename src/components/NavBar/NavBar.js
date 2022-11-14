import React from "react"

import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
        alt="Netflix Logo"
      />
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
};

export default NavBar;
