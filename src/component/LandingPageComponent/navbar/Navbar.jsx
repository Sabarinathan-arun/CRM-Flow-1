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
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link smooth to="#home" className="logo logolink" aria-label="CRM Flow Home">
          <img src={logo} alt="CRM Flow Logo" />
          <span className="logo-title">CRM Flow</span>
        </Link>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`} id="navigation-menu">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link smooth to={link.path} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
