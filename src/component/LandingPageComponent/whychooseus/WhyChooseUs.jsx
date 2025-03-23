import React from "react";
import "../../css/chooseus.css"; // Import external CSS

const WhyChooseUs = () => {
  const features = [
    { 
    id: 1, 
     title: "Flexibility" ,
     description: "Our CRM Flow is fully customizable, ensuring it adapts to your specific needs and business goals."
    },
    { id: 2, 
    title: "Cost-Effective",
    description: "Pay only once for the software and benefit from affordable maintenance as needed—no recurring fees."
    },
    { 
    id: 3, 
    title: "24/7 Assistance",
    description: "Enjoy around-the-clock support with our AI Assistant, keeping your business running smoothly at all times."
 },
  ];


  return (
    <div className="why-container" >
      <h1 className="why-title">WHY PEOPLE CHOOSE US</h1>
      <p className="why-subtitle">
      Learn why businesses rely on us to streamline operations and boost productivity with flexible, cost-effective solutions.
      </p>

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
