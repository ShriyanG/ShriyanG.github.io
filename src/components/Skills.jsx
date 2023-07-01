import React from "react";
import pythonImage from "./pictures/python.png";
// Import other skill icons

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <div className="skills-title">Skills</div>
      <div className="skills-grid">
        {/* First set of skills */}
        <div className="skill-card">
          <img className="skill-icon" src={pythonImage} alt="Python icon" />
          <p className="skill-lang">Python</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={pythonImage} alt="Java icon" />
          <p className="skill-lang">C++</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={pythonImage} alt="CPP icon" />
          <p className="skill-lang">SQL</p>
        </div>

        {/* Second set of skills */}
        <div className="skill-card">
          <img className="skill-icon" src={pythonImage} alt="Python icon" />
          <p className="skill-lang">MongoDB</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={pythonImage} alt="Java icon" />
          <p className="skill-lang">HTML</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={pythonImage} alt="CPP icon" />
          <p className="skill-lang">CSS</p>
        </div>

        {/* Third set of skills */}
        <div className="skill-card">
          <img className="skill-icon" src={pythonImage} alt="Python icon" />
          <p className="skill-lang">Javascript</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={pythonImage} alt="Java icon" />
          <p className="skill-lang">React</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={pythonImage} alt="CPP icon" />
          <p className="skill-lang">Ocaml</p>
        </div>

        {/* Fourth set of skills */}
        <div className="skill-card">
          <img className="skill-icon" src={pythonImage} alt="Python icon" />
          <p className="skill-lang">NodeJS</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={pythonImage} alt="Java icon" />
          <p className="skill-lang">Java</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={pythonImage} alt="CPP icon" />
          <p className="skill-lang">Matlab</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
