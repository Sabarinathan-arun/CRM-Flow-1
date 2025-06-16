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
          Supercharge Your Customer Journey – From First Click to Closed Deal.
        </h2>
        <button
          className="marketing-card-button"
          onClick={openDemo}
          aria-label="Open CRM Flow demo in a new tab"
        >
          Try CRM Flow Demo
        </button>
      </div>
    </section>
  );
};

export default MarketingCard;
