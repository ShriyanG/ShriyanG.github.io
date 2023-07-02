import React from "react";
import pythonImage from "./pictures/python.png";
import cplusImage from "./pictures/c++.png";
import sqlImage from "./pictures/sql.png";
import mongoImage from "./pictures/mongodb.jpg";
import htmlImage from "./pictures/html.png";
import cssImage from "./pictures/css.png";
import javascriptImage from "./pictures/javascript.png";
import reactImage from "./pictures/react.png";
import ocamlImage from "./pictures/ocaml.png";
import nodeImage from "./pictures/nodejs.png";
import javaImage from "./pictures/java.png";
import matlabImage from "./pictures/matlab.png";
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
          <img className="skill-icon" src={cplusImage} alt="Java icon" />
          <p className="skill-lang">C++</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={sqlImage} alt="CPP icon" />
          <p className="skill-lang">SQL</p>
        </div>

        {/* Second set of skills */}
        <div className="skill-card">
          <img className="skill-icon" src={mongoImage} alt="Python icon" />
          <p className="skill-lang">MongoDB</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={htmlImage} alt="Java icon" />
          <p className="skill-lang">HTML</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={cssImage} alt="CPP icon" />
          <p className="skill-lang">CSS</p>
        </div>

        {/* Third set of skills */}
        <div className="skill-card">
          <img className="skill-icon" src={javascriptImage} alt="Python icon" />
          <p className="skill-lang">Javascript</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={reactImage} alt="Java icon" />
          <p className="skill-lang">React</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={ocamlImage} alt="CPP icon" />
          <p className="skill-lang">Ocaml</p>
        </div>

        {/* Fourth set of skills */}
        <div className="skill-card">
          <img className="skill-icon" src={nodeImage} alt="Python icon" />
          <p className="skill-lang">NodeJS</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={javaImage} alt="Java icon" />
          <p className="skill-lang">Java</p>
        </div>
        <div className="skill-card">
          <img className="skill-icon" src={matlabImage} alt="CPP icon" />
          <p className="skill-lang">Matlab</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
