import React from "react";

const Project = ({ title, description, image, codeLink }) => {
  return (
    <div className="project">
      <h3 className="project-title">{title}</h3>
      <img className="project-image" src={image} alt={title} />
      <p className="project-description">{description}</p>
      <a href={codeLink} target="_blank" rel="noopener noreferrer">
        Project Code
      </a>
    </div>
  );
};

export default Project;
