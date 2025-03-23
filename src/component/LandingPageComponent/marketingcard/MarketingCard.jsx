import React from 'react';
import '../../css/marketing.css'; 

const MarketingCard = () => {
  const openDemo = () => {
    window.open("https://frontend-master-tau.vercel.app/dashboard", "_blank");
  };
  return (
    <div className="marketing-card-container">
      <div className="marketing-card">
        <p className="marketing-card-text">
          Make every part of the customer lifecycle for marketing and sales teams more effective.
        </p>
        <button className="marketing-card-button" onClick={openDemo}>Try It</button>
      </div>
    </div>
  );
};

export default MarketingCard;
