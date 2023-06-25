import React from "react";
import uiucImage from "./pictures/uiuc.png";
import schwabImage from "./pictures/schwab.png"

const ExperienceSection = () => {
  return (
    <div className="experience">
      <h1 className="experience-heading">Experience</h1>
      <div className="image-container">
        <img className="experience-image" src={schwabImage} alt="Charles Schwab"/>
        <img className="experience-image" src={uiucImage} alt="UIUC"/>
      </div>
    </div>
  );
};

export default ExperienceSection;
