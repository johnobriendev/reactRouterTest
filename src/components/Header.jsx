import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css"

const Header = () => {
  return (
    <div className="header">
      <h1>My React App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
      </nav>
    </div>
  );
};
export default Header;