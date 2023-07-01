import React from "react";
import Home from "./components/Home";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";
import EducationSection from "./components/Education";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";

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
      <div className="education-section">
        <EducationSection />
      </div>
      <div className="projects-section">
        <ProjectsSection />
      </div>
      <div className="skills-section">
        <SkillsSection />
      </div>
    </div>
  );
};
export default App;
