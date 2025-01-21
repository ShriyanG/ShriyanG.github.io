import React from "react";
import { AiOutlineLink } from "react-icons/ai"; // Importing a link icon from react-icons

const Project = ({ title, description, image, codeLink }) => {
  return (
    <div
      className="project-item"
      onClick={() => window.open(codeLink, "_blank")}
    >
      <div className="project-content">
        <img src={image} alt={`${title} preview`} className="project-image" />
        <div className="project-header">
          <h3 className="project-title">
            {title} <AiOutlineLink className="project-link-icon" />
          </h3>
          <p className="project-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
