import React from "react";
import "../Global.css";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
