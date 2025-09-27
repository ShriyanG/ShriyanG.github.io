import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li>
          <button
            onClick={() => scrollToSection('about-section')}
            className="navbar-link"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('experience-section')}
            className="navbar-link"
          >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('projects-section')}
            className="navbar-link"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('skills-section')}
            className="navbar-link"
          >
            Skills
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
