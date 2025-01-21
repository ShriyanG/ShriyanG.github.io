import React from "react";
import profileImage from "./pictures/profile.jpg";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="profile-container">
        <img className="profile-image" src={profileImage} alt="Profile" />
        <p className="hello-text">Hello!</p>
      </div>
      <div className="additional-info">
        <p>
          My name's Shriyan and i'm a software engineer passionate about machine
          learning and my favorite work is at the intersection of software
          development and finance.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
