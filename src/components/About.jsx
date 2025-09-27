import React from "react";
import profileImage from "./pictures/profile.jpg";
import uiucLogo from "./pictures/uiuc.png";

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
            <div className="education-card">
              <div className="education-logo-section">
                <img src={uiucLogo} alt="University of Illinois logo" className="education-logo" />
              </div>
              <div className="education-content">
                <div className="degree-line">Bachelor of Science in Computer Science</div>
                <div className="coursework-line"><strong>Key Coursework:</strong> Artificial Intelligence, Applied ML, Deep Learning for Computer Vision, Systems Programming</div>
                <div className="gpa-line"><strong>GPA:</strong> 3.70/4.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
