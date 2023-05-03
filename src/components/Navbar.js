import React, { useState, useRef } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>☰</span>
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            {" "}
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/participationHistory"> Participation History </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/playground"> Playground</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about"> About</Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}
