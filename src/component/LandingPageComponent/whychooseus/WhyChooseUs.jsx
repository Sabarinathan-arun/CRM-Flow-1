import React from "react";
import { Helmet } from "react-helmet";
import "../../css/chooseus.css";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Custom CRM Software That Fits You",
      description: "CRM Flow is fully customizable—built to adapt to your unique workflows, industries, and sales goals. Perfect for small businesses aiming to grow fast.",
    },
    {
      id: 2,
      title: "Cost-Effective & Easy CRM Solution",
      description: "Enjoy a one-time payment CRM with optional updates—no recurring fees. Designed to be the best CRM software for small business owners looking for long-term value.",
    },
    {
      id: 3,
      title: "24/7 AI Assistant to Increase Sales",
      description: "Boost customer engagement and never miss a lead. Our always-on AI Assistant provides real-time help and smart automation to power your sales pipeline.",
    },
  ];

  return (
    <section className="why-container" aria-label="Why Choose CRM Flow">
      <Helmet>
        <title>Why Choose CRM Flow - Best Custom CRM for Small Business</title>
        <meta
          name="description"
          content="Explore why CRM Flow is the best CRM software for small business. Get a fully custom CRM with cost-effective pricing, lead management, and 24/7 AI support to increase sales."
        />
      </Helmet>

      <h1 className="why-title">Why Choose CRM Flow – The Best Custom CRM</h1>
      <p className="why-subtitle">
        Discover why CRM Flow is trusted as the best CRM for small business—custom CRM features, 24/7 AI support, and smart tools to increase sales and improve lead management.
      </p>

      <div className="why-grid">
        {features.map((feature) => (
          <article key={feature.id} className="why-card" aria-label={feature.title}>
            <div className="why-number">{feature.id}</div>
            <div className="why-content">
              <h2 className="why-heading">{feature.title}</h2>
              <p className="why-text">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
