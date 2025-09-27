import React from "react";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h1 className="section-heading">Get In Touch</h1>
      <div className="contact-content">
        <div className="contact-card">
          <div className="contact-message">
            <h3 className="contact-title">Let's Connect!</h3>
            <p className="contact-description">
              I'm always interested in discussing new opportunities, innovative projects,
              or just connecting with fellow developers and professionals.
            </p>
          </div>

          <div className="contact-methods">
            <a
              href="mailto:shriyan.gosavi@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4 className="contact-label">Email</h4>
                <p className="contact-value">shriyan.gosavi@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/shriyan-gosavi-1968411a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <h4 className="contact-label">LinkedIn</h4>
                <p className="contact-value">Connect with me</p>
              </div>
            </a>

            <a
              href="https://github.com/ShriyanG"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">💻</div>
              <div className="contact-details">
                <h4 className="contact-label">GitHub</h4>
                <p className="contact-value">View my code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;