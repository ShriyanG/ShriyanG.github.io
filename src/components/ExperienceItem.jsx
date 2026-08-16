import React from "react";

const ExperienceItem = ({
  title,
  subtitle,
  company,
  location,
  duration,
  responsibilities,
}) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <div className="experience-header-right">
          <h3>
            {title} | {company}
          </h3>
          {subtitle && <p className="experience-subtitle">{subtitle}</p>}
        </div>
        <p className="experience-duration">{duration}</p>
      </div>
      <div className="experience-responsibilities">
        {responsibilities.map((resp, index) => (
          <p key={index}>• {resp}</p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
