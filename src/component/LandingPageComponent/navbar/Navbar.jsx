import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../../css/navbar.css";
import logo from "../../Asset/crm flow 121.png";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "Feature", path: "#feature" },
  { name: "Solutions", path: "#solutions" },
  { name: "Why Us", path: "#why-us" },
  { name: "Contact", path: "#contact" }  
];  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
        <Link smooth to="#home" className="logolink" >
          <img src={logo} alt="Logo" />
          </Link>
          <Link smooth to="#home" className="logolink" >
          <span className="logo-title">CRM Flow</span>
          </Link>
        </div>
        {/* Navigation List (Desktop & Mobile) */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link smooth to={link.path} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
