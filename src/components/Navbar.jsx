import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollToSection = (section) => {
    scroll.scrollTo(section);
  };

  const handleLinkClick = (section, event) => {
    event.preventDefault();
    scrollToSection(section);
  };

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            onClick={(event) => handleLinkClick("about-section", event)}
            className="navbar-link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            onClick={(event) => handleLinkClick("about", event)}
            className="navbar-link"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            onClick={(event) => handleLinkClick("about", event)}
            className="navbar-link"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            onClick={(event) => handleLinkClick("about", event)}
            className="navbar-link"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            onClick={(event) => handleLinkClick("about", event)}
            className="navbar-link"
          >
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
