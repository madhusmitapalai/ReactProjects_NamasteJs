import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-section">
          <img
            src="https://i.pinimg.com/474x/02/fd/5c/02fd5cc15841730936c0c5c555dae3a9.jpg"
            alt="logo"
          />
        </div>
        <div className="link-section">
          <ul>
            <li>Home</li>
            <li>About</li>

            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
