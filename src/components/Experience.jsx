import React from "react";
import ExperienceItem from "./ExperienceItem";

const professionalExperiences = [
  {
    title: "Software Engineer",
    company: "Avride",
    duration: "Apr 2026 - Present",
    responsibilities: [
      "Built and enhanced simulation evaluation metrics used in autonomous system testing pipelines, improving consistency and reliability of performance evaluation across large-scale simulation runs.",
      "Developed end-to-end data pipelines using Python to process large-scale simulation logs, integrating metric validation and analytics workflows that ensured the accuracy of production evaluation outputs.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Charles Schwab",
    duration: "Sept 2023 - Mar 2026",
    responsibilities: [
      "Architected and rebuilt end-to-end financial data pipelines in Python on VMs and Snowflake, modernizing legacy ETL workflows, optimizing data loads, and ensuring scalable, reliable processing across wealth & asset management datasets.",
      "Built analytics solutions with modular Python testing frameworks and Splunk, expanding Pytest coverage to 80%+, reducing production defects by 20%, and processing millions of records daily across multiple financial datasets.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "PipeIQ (Generative AI Startup)",
    duration: "May 2023 - August 2023",
    responsibilities: [
      "Led a machine learning team training LLMs for automated personalized sales emails and seamlessly integrating React-based front-end with GenAI backend on the company website, resulting in increased B2B customer engagement.",
      "Developed Python scripts to automate email thread setup for businesses using Generative AI, achieving a 30% reduction in response time, and seamlessly integrated them with the company website through AWS Lambda, S3, and FastAPI.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company: "University of Illinois at Urbana Champaign",
    duration: "November 2022 - August 2023",
    responsibilities: [
      "Optimized Python runtime environment to automatically persist and retrieve variables, improving memory utilization and reducing execution time across research workflows.",
      "Developed an automated notebook testing system to execute dependent cells and manage object hierarchies, streamlining validation and reducing experiment runtime.",
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
