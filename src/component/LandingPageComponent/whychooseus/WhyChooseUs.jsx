import React from "react";
import { Helmet } from "react-helmet";
import "../../css/chooseus.css";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Custom CRM That Fits Your Needs",
      description: "CRM Flow is fully customizabl, built to adapt to your unique workflows, industries, and sales goals. Perfect for small businesses aiming to grow fast.",
    },
    {
      id: 2,
      title: "Easy Lead Management",
      description: "Our Custom CRM offers simple lead management features so small business owners and real estate pros can boost revenue.",
    },
    {
      id: 3,
      title: "Data Security Solutions",
      description: "Keep information safe with end-to-end encryption, role-based access, and automated security alerts.",
    },
  ];

  return (
    <div className="why-container" >    
      <h1 className="why-title">Why Choose CRM Flow as the Best Custom CRM</h1>

      <div className="why-grid">
        {features.map((feature) => (
          <div key={feature.id} className="why-card">
            <div className="why-number">{feature.id}</div>
            <div className="why-content">
              <h2 className="why-heading">{feature.title}</h2>
              <p className="why-text">
               {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
