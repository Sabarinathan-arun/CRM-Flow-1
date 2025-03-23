import React, { useState } from "react";

const FooterForm = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Replace with your Google Apps Script Web App URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbzw1adZ6HKAEsLdOAMHlp1fH__rnAZ-CS_ZVMHewjLQvBIdF3a7DOBZSJkGh9OsgS-WaA/exec"; // Put your Web App URL here

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Submitted successfully!");
        setFormData({ email: "", message: "" });
      } else {
        setResponseMessage("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Something went wrong.");
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

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default FooterForm;
