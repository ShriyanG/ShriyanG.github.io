import React from "react";
import Home from "./components/Home";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";
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

      <div id="about-section" className="about-section">
        <AboutSection />
      </div>

      <div id="experience-section" className="experience-section">
        <ExperienceSection />
      </div>

      <div id="projects-section" className="projects-section">
        <ProjectsSection />
      </div>

      <div id="skills-section" className="skills-section">
        <SkillsSection />
      </div>
    </div>
  );
};

export default App;
