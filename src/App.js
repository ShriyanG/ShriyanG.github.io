import React from "react";
import Home from "./components/Home";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";

const App = () => {
  return (
    <div className="app-container">
      <div className="home-section">
        <Home />
      </div>
      <div className="about-section">
        <AboutSection />
      </div>
      <div className="experience-section">
        <ExperienceSection />
      </div>
    </div>
  );
};
export default App;