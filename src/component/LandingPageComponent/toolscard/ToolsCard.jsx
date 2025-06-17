import React from 'react';
import '../../css/tool.css';
import { FcComboChart, FcNeutralTrading, FcSettings, FcTimeline } from 'react-icons/fc';
import { FaWpforms } from 'react-icons/fa';
import { SiElectronbuilder, SiGotomeeting } from 'react-icons/si';
import { BiSolidConversation, BiSolidCustomize } from 'react-icons/bi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdAssistant, MdOutlinePayments } from 'react-icons/md';

const ToolsCard = () => {
  const tools = [
    {
      title: "Custom CRM Smart Forms",
      description: "Create branded, user-friendly forms that streamline CRM lead management. Capture and convert leads with ease, perfect for small business growth.",
      icon: <FaWpforms size={30} aria-hidden="true" />,
    },
    {
      title: "Instant CRM Meeting Scheduler",
      description: "Book client meetings in seconds via Zoom, Google Meet, or Teams. An essential tool in the best CRM for real estate and sales engagement.",
      icon: <SiGotomeeting size={30} aria-hidden="true" />,
    },
    {
      title: "Unified CRM Lead Inbox",
      description: "Centralise conversations and improve team collaboration. Manage leads efficiently across email, chat, and more, boosting response time and increasing sales.",
      icon: <BiSolidConversation size={30} aria-hidden="true" />,
    },
    {
      title: "CRM Email Builder for Campaigns",
      description: "Design eye-catching campaigns and marketing emails in minutes with our custom CRM email builder, no coding required.",
      icon: <SiElectronbuilder size={30} />,
    },
    {
      title: "Real-Time CRM Live Chat",
      description: "Deliver instant support and nurture leads in real-time. Essential for any CRM software that aims to improve customer experience and close deals faster.",
      icon: <RiCustomerService2Fill size={30}/>,
    },
    {
      title: "24/7 AI Sales Assistant",
      description: "An AI-powered virtual CRM assistant that engages leads, supports clients, and drives conversions even when you're offline.",
      icon: <MdAssistant size={30}/>,
    },
    {
      title: "Flexible Custom CRM Plans",
      description: "Choose tailored CRM pricing that fits your needs—ideal for startups and small businesses looking to scale without overpaying.",
      icon: <BiSolidCustomize size={30}/>,
    },
    {
      title: "Easy CRM One-Time Payment",
      description: "Avoid monthly fees with our one-time payment CRM option. Perfect for businesses that want simplicity, control, and long-term savings.",
      icon: <MdOutlinePayments size={30}/>,
    },
  ];


    return (
        <div className="tools-container">
            <h1 className="tools-heading">Consolidate Tools. Save Time. Drive Growth.</h1>
            <div className="tools-grid">
                {tools.map((tool, index) => (
                    <div key={index} className="tool-card">
                        {/* Light Red Layer with Icon & Title */}
                        <div className="tool-content">
                            <div className="tool-icon">{tool.icon}</div>
                            <h2 className="tool-title">{tool.title}</h2>
                        </div>

                        {/* Full Card Details (Hidden Initially) */}
                        <div className="tool-details">
                            <div className="tool-icon">{tool.icon}</div>
                            <h2 className="tool-title">{tool.title}</h2>
                            <p className="tool-description">{tool.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToolsCard;
