import React from "react";
import "../../css/hero.css";
import img from "../../Asset/Blue and Orange 3D Illustrative Technology Desktop Prototype.png";
import img2 from "../../Asset/Untitled design.png";

const HeroSection = () => {
  const openForm = () => {
    window.open("https://forms.gle/hdZ2rNwgYp84x6848", "_blank");
  };

  const openDemo = () => {
    window.open("https://mycrmflow-demo-main.vercel.app", "_blank");
  };

  return (
    <div className="hero-Box">
      <div className="hero-Container">
        <div className="hero-floating-wrapper1">
          <img src={img2} alt="CRM dashboard design element" className="hero-floating-img" />
        </div>

        <div className="hero-content">
          <h1>
            Best CRM Software for <br />
            Small Business Growth in 2025
          </h1>

          <h2 className="hidden-heading">Custom CRM to Increase Sales & Simplify Lead Management</h2>

          <h4>
            Discover a powerful <strong>custom CRM</strong> tailored for your business. <br />
            Whether you're in real estate or retail, CRM Flow helps <strong>increase sales</strong>, improve <strong>lead management</strong>, and drive real revenue growth. <br />
            Finally, the <strong>easy CRM</strong> that fits your workflow!
          </h4>

          <div className="hero-buttons">
            <button className="hro-btn" onClick={openForm}>
              Start Now
            </button>
            <button className="hro-btn" onClick={openDemo}>
              View CRM Demo
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={img} alt="Custom CRM solution interface" />
        </div>

        <div className="hero-floating-wrapper2">
          <img src={img2} alt="Illustrative CRM Design" className="hero-floating-img2" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
