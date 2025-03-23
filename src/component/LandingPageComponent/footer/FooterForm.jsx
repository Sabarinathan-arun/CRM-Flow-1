import React, { useState } from "react";

import "../../css/footer.css";
import Toast from "./alert/Toast";

const FooterForm = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxYBiGgDx_ct9N96guTghUFogFQd1f4Bo1j0b_u4hgi/dev";


    // const scriptURL = process.env.REACT_APP_API_URL;
    // console.log("API URL:", scriptURL);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", 
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
    }
  };

  return (
    <div className="footer-form">
      <h2>Let's Discuss Your Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="footer-input"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          className="footer-input"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project"
          required
          style={{ resize: "none" }}
        />

        <button type="submit">Submit</button>
      </form>

      {/* ✅ Show toast if needed */}
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ show: false })} />}
    </div>
  );
};

export default FooterForm;
