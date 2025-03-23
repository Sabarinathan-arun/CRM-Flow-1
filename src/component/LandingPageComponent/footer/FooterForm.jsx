import React, { useState } from "react";
import "../../css/footer.css";
import Toast from "./alert/Toast";

const FooterForm = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false); // Disable submit button during submission

  // Using environment variable for API URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbyYJYhBziwvPN3UQkNjLoAvx_kDbDZeFA1k_ak3NULxvWGG1l1iPw7qExsrPPlBlNHO4A/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });

    // Hide toast after 3 seconds
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

    setIsSubmitting(true); // Disable submit button

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "cors", // Using CORS for proper error handling
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // ✅ Show success toast
      showToast("Submitted successfully!");

      // ✅ Reset form
      setFormData({ email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      showToast("Something went wrong.", "error");
    } finally {
      setIsSubmitting(false); // Re-enable submit button
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

      {/* ✅ Show toast if needed */}
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
