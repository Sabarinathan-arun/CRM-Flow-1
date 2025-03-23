import React from "react";
import "../../css/hero.css";
import img from "../../Asset/Blue and Orange 3D Illustrative Technology Desktop Prototype.png";
import img2 from "../../Asset/Untitled design.png";
const HeroSection = () => {
  const openForm = () => {
    window.open("https://forms.gle/hdZ2rNwgYp84x6848", "_blank");
  };

  const openDemo = () => {
    window.open("https://frontend-master-tau.vercel.app/dashboard", "_blank");
  };

  return (
    <div className="hero-Box">
      <div className="hero-Container">
        <div className="hero-floating-wrapper1">
          <img src={img2} alt="Floating Design" className="hero-floating-img" />
        </div>
        <div className="hero-content">
          <h1>
            Supercharge Your <br />
            Business with Custom <br />
            CRM Solutions!
          </h1>
          <h4>
            CRM Flow offers infinite flexibility, fueling growth and <br />{" "}
            driving better revenue—finally, a CRM that adapts to your business
            needs, not the other way around!
          </h4>
          <div className="hero-buttons">
            <button className="hro-btn" onClick={openForm}>
              Start Now
            </button>
            <button className="hro-btn " onClick={openDemo}>
              Demo
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={img} alt="" />
        </div>
        <div className="hero-floating-wrapper2">
          <img src={img2} alt="Floating Design2" className="hero-floating-img2" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
