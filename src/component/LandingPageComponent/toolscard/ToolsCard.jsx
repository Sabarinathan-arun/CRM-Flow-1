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
            title: "Smart Forms",
            description: "Capture customer insights effortlessly with sleek, intuitive forms that blend into your brand's style. Share them anywhere, anytime.",
            icon: <FaWpforms size={30}/>, 
        },
        {
            title: "Instant Meet",
            description: "Booking a meeting should be as easy as a click. Connect instantly with your clients over Zoom, Google Meet, or Teams without the fuss.",
            icon: <SiGotomeeting  size={30}/>, 
        },
        {
            title: "Unified Conversations",
            description: "Bring your team’s conversations together in one place—boost productivity and never miss a lead with a single inbox for all.",
            icon: <BiSolidConversation size={30}/>, 
        },
        {
            title: "Creative Email Builder",
            description: "Design emails that dazzle—create eye-catching campaigns, newsletters, and updates in minutes with a seamless drag-and-drop tool.",
            icon: <SiElectronbuilder size={30}/>,
        },
        {
            title: "Real-Time Customer Chat",
            description: "Talk to your customers in real-time, delivering tailored solutions instantly. Foster relationships, not just transactions.",
            icon: <RiCustomerService2Fill  size={30}/>, 
        },
        {
            title: "24/7 AI Assistant",
            description: "Let smart AI bots do the heavy lifting. Engage customers, generate leads, and offer support round-the-clock, even when you're not there.",
            icon: <MdAssistant size={30}/>,
        },
        {
            title: "Customizable Plans",
            description: "Bring your team’s conversations together in one place—boost productivity and never miss a lead with a single inbox for all.",
            icon: <BiSolidCustomize size={30}/>, 
        },
        {
            title: "One-Time Payment",
            description: "Pay a one-time fee for CRM Flow. After the initial purchase, you only pay for maintenance or any updates you may need over time.",
            icon: <MdOutlinePayments  size={30}/>, 
        }
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
