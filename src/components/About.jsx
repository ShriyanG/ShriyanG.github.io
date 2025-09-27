import React from "react";
import profileImage from "./pictures/profile.jpg";

const AboutSection = () => {
  return (
    <div className="about">
      <h1 className="section-heading">About</h1>
      <div className="about-content">
        <div className="profile-container">
          <img className="profile-image" src={profileImage} alt="Shriyan Gosavi's professional headshot" />
          <p className="hello-text">Hello!</p>
        </div>
        <div className="additional-info">
          <p>
            My name's Shriyan and I'm a software engineer passionate about machine
            learning and my favorite work is at the intersection of software
            development and finance.
          </p>

          <div className="education-info">
            <h3 className="education-heading">Education</h3>
            <div className="education-details">
              <div className="education-header">
                <span className="degree">Bachelor of Science in Computer Science</span>
                <span className="graduation">August 2023</span>
              </div>
              <p className="university">University of Illinois at Urbana-Champaign</p>
              <p className="gpa"><strong>GPA:</strong> 3.70/4.0</p>
              <p className="coursework">
                <strong>Key Coursework:</strong> Artificial Intelligence, Applied ML, Deep Learning for Computer Vision, Systems Programming
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
