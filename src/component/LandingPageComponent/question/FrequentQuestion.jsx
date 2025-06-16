import React from 'react';
import '../../css/question.css'; 

const FrequentQuestion = () => {
  const faqData = [
    {
      question: "What is CRM Flow?",
      answer:
        "CRM Flow is a powerful custom CRM solution designed for small businesses. It helps manage customer interactions, automate lead management, and increase sales without the clutter of unnecessary features.",
    },
    {
      question: "Is CRM Flow easy to integrate with existing tools?",
      answer:
        "Absolutely. CRM Flow is an easy CRM that integrates seamlessly with your existing software stack, including third-party platforms, making onboarding quick and efficient.",
    },
    {
      question: "Can I upgrade or downgrade my CRM plan anytime?",
      answer:
        "Yes, CRM Flow offers full flexibility. You can easily upgrade or downgrade your CRM features based on your business needs, making it ideal for growing or evolving companies.",
    },
    {
      question: "How does CRM Flow pricing work?",
      answer:
        "CRM Flow offers a transparent pricing model. There’s a one-time setup cost, and then you only pay when you request updates or custom features—no ongoing subscription required. It’s the best CRM software for small businesses looking for cost-effective growth.",
    },
    {
      question: "Can I request custom features after purchasing CRM Flow?",
      answer:
        "Yes. As a fully customizable CRM, you can request new features or updates anytime. Our team will tailor the system as your business grows, helping you stay ahead without paying for features you don’t use.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <h2 className="hidden-h2">Learn About Our Custom CRM, Easy Integration, and Sales Growth</h2>

      {faqData.map((faq, index) => (
        <div key={index} className="faq-drawer">
          <input className="faq-drawer__trigger" id={`faq-drawer-${index}`} type="checkbox" />
          <label className="faq-drawer__title" htmlFor={`faq-drawer-${index}`}>{faq.question}</label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrequentQuestion;
