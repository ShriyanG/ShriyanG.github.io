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
        <p>My name is Shriyan and I am a computer science student with a passion for machine learning, data analytics, and software engineering. I am a continuous learner who is eager for opportunities to employ my diverse skill set to solve real-world problems.</p>
      </div>
    </div>
  );
};

export default AboutSection;
