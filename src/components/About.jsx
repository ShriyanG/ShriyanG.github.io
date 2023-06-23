import React from "react";
import profileImage from "./pictures/profile.jpg";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="profile-container">
        <img className="profile-image" src={profileImage} alt="Profile" />
        <div className="text-container">
          <p className="hello-text">Hello!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
