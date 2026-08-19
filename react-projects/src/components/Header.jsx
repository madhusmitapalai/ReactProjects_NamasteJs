import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

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
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/About">About us</Link>
            </li>
            <li>
              {" "}
              <Link to="/Contact">Contact us</Link>
            </li>
            <li>
              {" "}
              <Link to="/Cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
