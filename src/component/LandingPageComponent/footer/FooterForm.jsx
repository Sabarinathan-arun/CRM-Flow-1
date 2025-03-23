import React, { useState } from "react";
import "../../css/footer.css"; // Make sure your styles are linked correctly
import Toast from "./alert/Toast"; // Assuming you have a Toast component for notifications

const FooterForm = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace with your Google Apps Script Web App URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbzw1adZ6HKAEsLdOAMHlp1fH__rnAZ-CS_ZVMHewjLQvBIdF3a7DOBZSJkGh9OsgS-WaA/exec"; // Put your Web App URL here

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "cors", // Use "cors" mode to enable cross-origin requests
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      showToast("Submitted successfully!");
      setFormData({ email: "", message: "" }); // Reset form after submission
    } catch (error) {
      console.error("Error:", error);
      showToast("Something went wrong.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="footer-form">
      <h2>Let's Discuss Your Project</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="footer-input"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="footer-input"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project"
          required
          style={{ resize: "none" }}
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false })}
        />
      )}
    </div>
  );
};

export default FooterForm;
