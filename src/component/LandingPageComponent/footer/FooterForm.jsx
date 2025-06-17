import React, { useState } from "react";
import axios from "axios";
import "../../css/footer.css";
import Toast from "./alert/Toast";

const FooterForm = () => {
  const [formData, setFormData] = useState({
    Email: "",  
    Message: "",
  });
  const [response, setResponse] = useState("");

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

        const response = await axios.post(scriptURL, formBody,
          {
           headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
           },
         });
   
         setResponse(response.data);

      setFormData({ Email: "", Message: "" });

      showToast("Submitted successfully!", "success");
    } catch (error) {
      console.error("Error submitting form:", error);
      // showToast("Error submitting form.", "error");
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
      setResponse("");
    }, 3000);
  };

  return (
    <div className="footer-form">
      <h2>Let's Discuss Your Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="Email"
          className="footer-input"
          value={formData.Email}
          onChange={handleChange}
          placeholder="Your email address"
          required
        />

        <label>Message</label>
        <textarea
          name="Message"
          className="footer-input"
          value={formData.Message}
          onChange={handleChange}
          placeholder="Describe your project"
          required
          style={{ resize: "none" }}
        />

        <button type="submit">Submit</button>
      </form>

      {toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ show: false })} />}
    </div>
  );
};

export default FooterForm;
