import React from "react";
import profileImage from "./pictures/profile.jpg"
const AboutSection = () => {
  return (
    <div className = "about">
      <img className="profile-image" src={profileImage} alt="Profile" />
    </div>
  );
};

export default AboutSection;