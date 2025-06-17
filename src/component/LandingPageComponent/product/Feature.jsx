import React from 'react';
import '../../css/feature.css'; 
import Analytic from "../../Asset/Seamless Analytics Integration.gif";
import Support from "../../Asset/Multi-Platform Support.gif";
import Dash from "../../Asset/Customizable Dashboards.gif";
import Real from "../../Asset/Real-Time Collaboration.gif";

const ProductFeature = () => {
  const productFeatures = [
    {
      title: "Seamless Analytics Integration",
      description:
        "Understand customer behaviour instantly with real-time CRM analytics. Our custom CRM helps small businesses increase sales by offering data-driven insights. Monitor key performance indicators and lead trends to improve decision-making and grow faster.",
      image: Analytic
    },
    {
      title: "Multi-Platform Support",
      description:
        "Access your CRM anywhere, on any device. Whether you're managing leads on mobile or reviewing performance on desktop, CRM Flow delivers a seamless experience. Perfect for small businesses looking for flexible, easy CRM solutions.",
      image: Support
    },
    {
      title: "Customizable Dashboards",
      description:
        "Tailor your dashboard to focus on what matters most: leads, conversions, sales pipelines, and team performance. Our custom CRM allows small businesses to track lead management and increase efficiency using a clean, powerful interface."
      image: Dash
    },
    {
      title: "Real-Time Collaboration",
      description:
        "Boost productivity with real-time team collaboration. CRM Flow supports instant updates, task sharing, and communication across teams by making it the best CRM software for real estate, startups, and growing teams who need speed and simplicity."
      image: Real
    }
  ];

  return (
    <>
      <div className='product-heading'>
        <h2 className='hidden-h2'>Top Custom CRM Features to Increase Sales & Simplify Lead Management</h2>
      </div>

      <div className="product-feature-container">
        {productFeatures.map((feature, index) => (
          <div key={index} className={`product-feature ${index % 2 === 0 ? 'product-text-left' : 'product-text-right'}`}>
            <div className={`product-image ${index % 2 === 0 ? 'order-last' : ''}`}>
              <img src={feature.image} alt={`${feature.title} - CRM Feature`} />
            </div>
            <div className="product-content">
              <h2 className="product-title">{feature.title}</h2>
              <p className="product-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductFeature;
