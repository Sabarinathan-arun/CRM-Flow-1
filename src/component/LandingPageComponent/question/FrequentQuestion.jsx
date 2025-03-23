import React from 'react';
import '../../css/question.css'; 

const FrequentQuestion = () => {
  const faqData = [
    {
      question: "What is CRM Flow?",
      answer: "CRM Flow is a customizable customer relationship management platform designed to streamline your business processes, manage customer interactions, and increase sales efficiency.",
    },
    {
      question: "Is CRM Flow easy to integrate?",
      answer: "Yes, CRM Flow integrates seamlessly with third-party tools and existing systems, ensuring smooth transitions.",
    },
    {
      question: "Are there any limits to upgrading and downgrading between plans?",
      answer: "Yes, CRM Flow is fully customizable to your needs, allowing you to upgrade or downgrade plans as required. We can easily add or remove features according to your requirements, ensuring flexibility and scalability at any time.",
    },
    {
      question: "How do I pay for CRM Flow?",
      answer: "You can pay for CRM Flow through various flexible payment options, including credit/debit cards, bank transfers, and other secure online payment methods. There is a one-time fee for the software, and after that, you only pay for any maintenance or changes if needed, ensuring flexibility and cost-efficiency.",
    },
    {
      question: "What happens if I need additional features or updates after purchasing CRM Flow?",
      answer: "If you need additional features or updates after purchasing CRM Flow, our team can easily implement the changes. We charge only for maintenance or any new features added, allowing you to customize the software as your business evolves without recurring subscription fees.",
    },
  ];


  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
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
