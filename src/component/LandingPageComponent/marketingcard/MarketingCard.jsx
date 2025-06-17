import React from 'react';
import '../../css/marketing.css';

const MarketingCard = () => {
  const openDemo = () => {
    window.open("https://mycrmflow-demo-main.vercel.app", "_blank");
  };

  return (
    <section className="marketing-card-container" aria-label="CRM Flow marketing demo">
      <div className="marketing-card">
        <h2 className="marketing-card-text">
          Close More Deals with a Custom CRM Built to Increase Sales.
        </h2>
        <button className="marketing-card-button" onClick={openDemo}>Try It</button>
      </div>
    </section>
  );
};

export default MarketingCard;
