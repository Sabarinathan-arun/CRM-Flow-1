import React from "react";
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import FooterForm from "./FooterForm";
import "../../css/footer.css";
import { GrInstagram } from "react-icons/gr";
import logo from "../../Asset/crm flow 121.png";

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
    <footer className="footer-container" role="contentinfo">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="CRM Flow - Custom CRM Software Logo" />
          <span className="footer-title">CRM Flow</span>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p>Email: <a href="mailto:support@mycrmflow.com">support@mycrmflow.com</a></p>
            <p>Need a custom CRM? Reach out to us today.</p>
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

          {/* Lead generation form */}
          <FooterForm />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social" aria-label="Social media links">
          {socialLinks.map((list, index) => (
            <a
              key={index}
              href={list.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
            >
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

      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CRM Flow",
          url: "https://mycrmflow.com",
          logo: "https://mycrmflow.com/assets/crm-flow-logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            email: "support@mycrmflow.com",
            contactType: "Customer Support",
          },
          sameAs: [
            "https://www.linkedin.com/company/profitly/"
          ],
        })}
      </script>
    </footer>
  );
};

export default Footer;
