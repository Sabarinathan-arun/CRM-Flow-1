import React from 'react';
import '../../css/feature.css'; 
import Analytic from "../../Asset/Seamless Analytics Integration.gif"
import Support from "../../Asset/Multi-Platform Support.gif"
import Dash from "../../Asset/Customizable Dashboards.gif"
import Real from "../../Asset/Real-Time Collaboration.gif"
const ProductFeature = () => {
  const productFeatures = [
    {
      title: "Seamless Analytics Integration",
      description: "Gain insights into customer behavior with real-time analytics, enabling you to make data-driven decisions that enhance your business. By analyzing customer interactions and trends, you can quickly adapt, improve satisfaction, and optimize strategies for long-term success, keeping your business ahead.",
      image: Analytic
    },
    {
      title: "Multi-Platform Support",
      description: "CRM Flow integrates seamlessly across devices, allowing you to manage operations anytime, anywhere. With cross-platform functionality, you can easily access and control business processes from any device, ensuring smooth and efficient management whether you're in the office or on the go.",
      image: Support
    },
    {
      title: "Customizable Dashboards",
      description: "Personalize your dashboard to prioritize the metrics that matter most to your business, providing clear insights at a glance. With an intuitive, clutter-free interface, you can streamline data analysis, making it easier to focus on what drives your success.",
      image: Dash
    },
    {
      title: "Real-Time Collaboration",
      description: "Collaborate with your team in real-time, fostering seamless communication and boosting productivity. By staying connected, team members can instantly share updates, streamline tasks, and work more efficiently, ensuring smoother workflows and better outcomes for your business.",
      image: Real
    }
  ];


  return (
    <>
    <div className='product-heading' >
        <h1>Product Features</h1>
    </div>
    <div className="product-feature-container">
      {productFeatures.map((feature, index) => (
        <div key={index} className={`product-feature ${index % 2 === 0 ? 'product-text-left' : 'product-text-right'}`}>
          <div className={`product-image ${index % 2 === 0 ? 'order-last' : ''}`}>
            <img src={feature.image} alt={feature.title} />
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
