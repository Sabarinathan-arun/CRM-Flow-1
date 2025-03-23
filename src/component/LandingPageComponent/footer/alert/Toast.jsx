import React from "react";
import "../../../css/toast.css"
const Toast = ({ message, type, onClose }) => {
  return (
    <div className={`toast ${type}`}>
      {message}
      <button className="close-btn" onClick={onClose}>✖</button>
    </div>
  );
};

export default Toast;
