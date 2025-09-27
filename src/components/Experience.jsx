import React from "react";
import ExperienceItem from "./ExperienceItem";

const professionalExperiences = [
  {
    title: "Software Engineer",
    subtitle: "Promoted from Software Engineering Intern",
    company: "Charles Schwab",
    duration: "May 2022 - Present",
    responsibilities: [
      "Built data pipelines and analytics solutions on Snowflake, optimizing data loads and validating Denodo migration with modular Python testing framework",
      "Expanded Pytest coverage to 80%+, reducing production defects by 20% while developing microservices using C# and Google Kubernetes Engine",
      "Developed ML models (decision trees, clustering, neural networks) for customer segmentation, enabling personalized financial strategies for clients",
      "Enhanced wealth management ETL processes using Informatica, SQL, and Denodo data virtualization platform"
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "PipeIQ (Generative AI Startup)",
    duration: "May 2023 - August 2023",
    responsibilities: [
      "Led machine learning team training LLMs for automated personalized sales emails, seamlessly integrating React frontend with generative AI backend",
      "Developed Python scripts automating email thread setup using Generative AI, achieving 30% reduction in response time via AWS Lambda, S3, and FastAPI",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company: "University of Illinois",
    duration: "November 2022 - August 2023",
    responsibilities: [
      "Developed optimized Python environment for automatic variable storage, improving memory management and runtime efficiency",
      "Automated testing framework for Jupyter notebooks, increasing testing efficiency through dependency management systems",
    ],
  },
  {
    title: "Course Assistant",
    company: "University of Illinois",
    duration: "January 2022 - May 2023",
    responsibilities: [
      "Delivered customized study sessions on data structures and computer architecture, providing educational support to 20+ students during office hours",
      "Created compelling study materials and presentations on data structures in C++, substantially improving student academic performance",
    ],
  },
];


const ExperienceSection = () => {
  return (
    <div className="experience">
      <h1 className="section-heading">Experience</h1>

      <div className="experience-content">
        <div className="experience-list">
          {professionalExperiences.map((exp, index) => (
            <div className="experience-item-container" key={index}>
              <ExperienceItem
                title={exp.title}
                subtitle={exp.subtitle}
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
