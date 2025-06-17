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
          <img src={img2} alt="CRM dashboard design element for small businesses" className="hero-floating-img" />
        </div>

        <div className="hero-content">
          <h1>
            Best CRM Software for <br />
            Small Business in 2025
          </h1>

          <h3 className="hidden-heading">Explore our <strong>custom CRM</strong> designed for your business. CRM Flow <strong>increase sales</strong>, enhances <strong>lead management</strong>, and drives revenue growth for real estate and retail. Experience an <strong>easy CRM</strong> that fits your workflow!</h3>


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
