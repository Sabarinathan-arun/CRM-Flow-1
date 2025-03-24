import React from "react";
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import FooterForm from "./FooterForm";
import "../../css/footer.css";
import { GrInstagram } from "react-icons/gr";
import logo from "../../Asset/crm flow 121.png"
const navLinks = [
  { name: "Home", path: "#home" },
  { name: "Feature", path: "#feature" },
  { name: "Solutions", path: "#solutions" },
  { name: "Why Us", path: "#why-us" },
];

const socialLinks = [
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/profitly/" },
];
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="CRM Flow logo" />
          <span className="footer-title">CRM Flow</span>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h2>Contact Us</h2>
            {/* <p>1777 West Street, Portland, OR 97205</p>
            <p>(+1) 123 456 7893</p> */}
            <p>support@mycrmflow.com</p>
          </div>

          <div className="footer-section">
            <h2>Useful Links</h2>
            <ul>
              {navLinks.map((list, index) => (
                <li key={index}>
                  <HashLink smooth to={list.path}>
                    {list.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Form Component */}
          <FooterForm />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          {socialLinks.map((list,index) =>(
            <a key={index} href={list.url} target="_blank">
              {list.icon}
           </a>
          ))}
       
        </div>
        <div>
          <p>
            © 2025 CRM Flow, Inc. · <a href="#">Privacy</a> ·{" "}
            <a href="#">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
