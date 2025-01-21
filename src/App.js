import React from "react";
import Home from "./components/Home";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";
import ProjectsSection from "./components/Projects";
import VerticalProgressBar from "./components/VerticalProgressBar";
import HamburgerIcon from "./components/HamburgerIcon";

const App = () => {
  return (
    <div className="app-container">
      <VerticalProgressBar />

      <div className="hamburger-menu-wrapper">
        <HamburgerIcon />
      </div>

      <div className="home-section">
        <Home />
      </div>

      <div className="about-section">
        <AboutSection />
      </div>

      <div className="experience-section">
        <ExperienceSection />
      </div>

      <div className="projects-section">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default App;
