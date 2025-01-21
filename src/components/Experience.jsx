import React from "react";
import ExperienceItem from "./ExperienceItem";
const experiences = [
  {
    title: "Software Engineer",
    company: "Charles Schwab",
    location: "Austin, TX",
    duration: "September 2023 - Present",
    responsibilities: [
      "Implementing services and API endpoints in the wealth and asset management domain optimized for data loads and preparing for GCP deployment using C# and Google Kubernetes Engine.",
      "Expanding the testing suite for numerous services to above 80% while refactoring for adherence to local governance standards and dynamically adapting to Agile methodologies.",
    ],
  },
  {
    title: "Research Assistant",
    company: "University of Illinois",
    location: "Urbana-Champaign, IL",
    duration: "Aug 2022 - Dec 2023",
    responsibilities: [
      "Worked on machine learning models for stock prediction.",
      "Built pipelines to process financial datasets.",
      "Presented findings at academic conferences.",
    ],
  },
  {
    title: "Research Assistant",
    company: "University of Illinois",
    location: "Urbana-Champaign, IL",
    duration: "Aug 2022 - Dec 2023",
    responsibilities: [
      "Worked on machine learning models for stock prediction.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <div className="experience">
      <div className="experience-content">
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-item-container" key={index}>
              <ExperienceItem
                title={exp.title}
                company={exp.company}
                location={exp.location}
                duration={exp.duration}
                responsibilities={exp.responsibilities}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
