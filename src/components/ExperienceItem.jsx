import React from "react";

const ExperienceItem = ({
  title,
  company,
  location,
  duration,
  responsibilities,
}) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <p>{duration}</p>
        <div className="experience-header-right">
          <h3>
            {title} | {company}
          </h3>
        </div>
      </div>
      <div className="experience-responsibilities">
        {responsibilities.map((resp, index) => (
          <p key={index}>{resp}</p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
