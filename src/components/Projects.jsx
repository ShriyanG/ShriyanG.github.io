import React from "react";
import Project from "./Project";
import schwabImage from "./pictures/schwab.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1",
      description: "This is the description of Project 1.",
      image: schwabImage,
      codeLink: "https://github.com/your-username/project1",
    },
    {
      title: "Project 2",
      description: "This is the description of Project 2.",
      image: schwabImage,
      codeLink: "https://github.com/your-username/project2",
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-section">
      <h1 className = "projects-title"> Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
