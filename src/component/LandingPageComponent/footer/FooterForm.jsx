import React, { useState } from "react";
import axios from "axios";
import "../../css/footer.css";
import Toast from "./alert/Toast";

const FooterForm = () => {
  const [formData, setFormData] = useState({ Email: "", Message: "" });
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Email.trim() || !formData.Message.trim()) {
      showToast("Please fill in all fields.", "error");
      return;
    }

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzQGDTwa3kl5u7fPeNRgAqlStcSAkWmo_ZUhMMOkECb4FmkVuiW9PyVCH2b51hLl8Wotw/exec";

      const formBody = new URLSearchParams();
      formBody.append("Email", formData.Email);
      formBody.append("Message", formData.Message);

      await axios.post(scriptURL, formBody, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      setFormData({ Email: "", Message: "" });
      showToast("Your message was sent successfully!", "success");
    } catch (error) {
      console.error("Submission failed:", error);
      showToast("Something went wrong. Please try again later.", "error");
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000);
  };

  return (
    <div className="footer-form" role="form" aria-label="Project discussion form">
      <h2>Start Your Custom CRM Project With Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="Email"
          className="footer-input"
          value={formData.Email}
          onChange={handleChange}
          placeholder="you@company.com"
          required
          aria-required="true"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="Message"
          className="footer-input"
          value={formData.Message}
          onChange={handleChange}
          placeholder="Tell us about your requirements or idea..."
          required
          aria-required="true"
          style={{ resize: "none" }}
        />

        {/* Honeypot field for spam protection (optional) */}
        {/* <input type="text" name="bot-field" style={{ display: "none" }} /> */}

        <button type="submit" className="footer-button">
          Submit
        </button>
      </form>

      {toast.show && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast({ show: false })} />
      )}
    </div>
  );
};

export default FooterForm;
