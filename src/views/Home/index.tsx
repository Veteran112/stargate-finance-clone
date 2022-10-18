import React from "react";
import AboutStargateSection from "./component/AboutStargateSection";
import HeroSection from "./component/HeroSection";
import RoadmapSection from "./component/RoadmapSection";

function HomePage() {
  return (
    <div className="strokes_bg">
      <HeroSection />
      <AboutStargateSection />
      <RoadmapSection />
    </div>
  );
}

export default HomePage;
