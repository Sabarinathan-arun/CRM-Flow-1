import React from "react";
import Navbar from "./LandingPageComponent/navbar/Navbar";
import HeroSection from "./LandingPageComponent/HeroSection/HeroSection";
import ProductFeatures from "./LandingPageComponent/product/Feature";
import ToolsCard from "./LandingPageComponent/toolscard/ToolsCard";
import FrequentQuestion from "./LandingPageComponent/question/FrequentQuestion";
import ProcessSteps from "./LandingPageComponent/processstep/ProcessSteps";
import MarketingCard from "./LandingPageComponent/marketingcard/MarketingCard";
import Footer from "./LandingPageComponent/footer/Footer";
import WhyChooseUs from "./LandingPageComponent/whychooseus/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id='feature'>
        <ProductFeatures />
      </div>
      <div id='solutions'>
        <ToolsCard />
      </div>
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <div>
        <ProcessSteps />
      </div>
      <div>
        <FrequentQuestion />
      </div>
      <div>
        <MarketingCard />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
};

export default Home;
