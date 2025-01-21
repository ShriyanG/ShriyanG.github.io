import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const HamburgerMenu = () => {
  const scrollToSection = (section) => {
    scroll.scrollTo(section);
  };

  const handleLinkClick = (section, event) => {
    event.preventDefault();
    scrollToSection(section);
  };

  return (
    <div className="hamburger-menu">
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link
            to="about-section"
            smooth={true}
            duration={1000}
            onClick={(event) => handleLinkClick("about-section", event)}
            className="menu-link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="experience-section"
            smooth={true}
            duration={1000}
            onClick={(event) => handleLinkClick("experience-section", event)}
            className="menu-link"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="projects-section"
            smooth={true}
            duration={1000}
            onClick={(event) => handleLinkClick("projects-section", event)}
            className="menu-link"
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
