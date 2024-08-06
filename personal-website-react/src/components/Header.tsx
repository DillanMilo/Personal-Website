import React from "react";
import { Link } from "react-router-dom";
import "../Global.css";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/about"></Link>
          </li>
          <li>
            <Link to="/projects"></Link>
          </li>
          <li>
            <Link to="/contact"></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
