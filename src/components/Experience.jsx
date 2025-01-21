import React from "react";
import ExperienceItem from "./ExperienceItem";
const experiences = [
  {
    title: "Software Engineer",
    company: "Charles Schwab",
    duration: "September 2023 - Present",
    responsibilities: [
      "Implementing services and API endpoints in the wealth and asset management domain optimized for data loads and preparing for GCP deployment using C# and Google Kubernetes Engine.",
      "Expanding the testing suite for numerous services to above 80% while refactoring for adherence to local governance standards and dynamically adapting to Agile methodologies.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "PipeIQ (Generative AI Startup)",
    duration: "May 2023 - August 2023",
    responsibilities: [
      "Contributed to training Large Language Models for automated personalized sales emails and seamlessly integrated a React-based front-end with a generative AI backend on the company website, resulting in increased B2B customer engagement.",
      "Developed Python scripts to automate email thread setup for businesses using Generative AI, achieving a 30% reduction in response time, and seamlessly integrated them with the company website through AWS Lambda, S3, and FastAPI.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company: "University of Illinois",
    duration: "November 2022 - August 2023",
    responsibilities: [
      "Developed an optimized Python environment to automatically store all variables and Python objects to improve memory management and increase runtime efficiency.",
      "Automated testing by programmatically running selected cells and managing object dependencies using Python, resulting in increased testing efficiency.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Charles Schwab",
    duration: "May 2022 - August 2022",
    responsibilities: [
      "Experimented with a range of machine learning models, including decision trees, clustering algorithms, and neural networks to identify optimal Customer segmentation to build and offer personalized financial strategies to customers.",
      "Enhanced wealth management ETL processes by building workflows and optimizing database performance using Informatica, SQL, and Denodo data virtualization platform.",
    ],
  },
  {
    title: "Student and Course Assistant",
    company: "University of Illinois",
    duration: "November 2022 - August 2023",
    responsibilities: [
      "Completed Bachelor's of Computer Science at University of Illinois at Urbana Champaign with key coursework in Artificial Intelligence, Applied Machine Learning, and Database Systems.",
      "Delivered customized study sessions on data structures and computer architecture, and provided educational support to a team of 20 college students during office hours, resulting in a substantial improvement in their academic performance.",
      "Created compelling study materials and presentations on data structures in C++, aiding students in comprehending the course material while maintaining an average workload of 8 hours per week.",
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
