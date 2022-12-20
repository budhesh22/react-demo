import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/components/header.scss";

const Header = () => {
  return (
    <header>
      <div className="main-nav">
        <div className="nav-logo">
          <Link className="nav-link" to="/">
            <h3>Demo</h3>
          </Link>
        </div>
        <div className="nav-list-sec">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
