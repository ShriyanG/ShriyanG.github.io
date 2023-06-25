import React from "react";

const EducationSection = () => {
  return (
    <div className="education-section">
      <h1 className="section-heading">Education</h1>
      <div className="education-details">
        <div className="institution-date-container">
          <h1 className="institution">
            University of Illinois - Urbana Champaign
          </h1>
          <p className="date">Aug 2020 - May 2023</p>
        </div>
        <p className="degree">Bachelor of Science in Computer Science</p>
        <div className="relevant-coursework">
          <h4 className="coursework-heading">Relevant Coursework</h4>
          <ul className="coursework-list">
            <li>Artificial Intelligence</li>
            <li>Applied Machine Learning</li>
            <li>Database Systems</li>
            <li>Deep Learning for Computer Vision</li>
            <li>Programming Languages and Compilers</li>
            <li>Systems Programming</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
