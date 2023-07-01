import React from "react";

const Project = ({ title, subtitle, description, image, codeLink }) => {
  return (
    <div className="project">
      <div className="project-left">
        <img className="project-image" src={image} alt={title} />
      </div>
      <div className="project-right">
        <h1 className="project-title">{title}</h1>
        <h2 className="project-subtitle">{subtitle}</h2>
        <p className="project-description">{description}</p>
        <a href={codeLink} target="_blank" rel="noopener noreferrer" className="code-link">
          Project Code
        </a>
      </div>
    </div>
  );
};

export default Project;
