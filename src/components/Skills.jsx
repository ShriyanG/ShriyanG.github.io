
import pythonLogo from "./pictures/python.png";
import javaLogo from "./pictures/java.png";
import jsLogo from "./pictures/javascript.png";
import reactLogo from "./pictures/react.png";
import cppLogo from "./pictures/c++.png";
import htmlLogo from "./pictures/html.png";
import cssLogo from "./pictures/css.png";
import sqlLogo from "./pictures/sql.png";
import nodejsLogo from "./pictures/nodejs.png";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Python", logo: pythonLogo },
    { name: "Java", logo: javaLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "C++", logo: cppLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "SQL", logo: sqlLogo },
    { name: "Node.js", logo: nodejsLogo }
  ];

  const additionalSkills = [
    "TypeScript", "Google Cloud Platform", "Docker", "Git", "Pandas", "NumPy", "AWS Lambda", "MongoDB", "Linux"
  ];

  const certifications = [
    {
      title: "Google Professional Cloud Developer",
      year: "2024",
      issuer: "Google Cloud",
      link: "https://www.linkedin.com/in/shriyan-gosavi-1968411a7/overlay/1717273192875/single-media-viewer/?profileId=ACoAADBbG8IBeRbdnxBx9K4gHcE0QU2Nor5BhQQ"
    },
    {
      title: "Google Cloud Certified Associate Cloud Engineer",
      year: "2023",
      issuer: "Google Cloud",
      link: "https://www.linkedin.com/in/shriyan-gosavi-1968411a7/details/certifications/1717273232906/single-media-viewer/?profileId=ACoAADBbG8IBeRbdnxBx9K4gHcE0QU2Nor5BhQQ"
    }
  ];

  return (
    <div className="skills-section">
      <h1 className="section-heading">Skills & Certifications</h1>
      <div className="skills-content">

        <div className="technical-skills">
          <h2 className="skills-subsection-title">Programming Languages & Frameworks</h2>
          <div className="skills-logos-container">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-logo-item">
                <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>

          <h2 className="skills-subsection-title additional-title">Tools & Technologies</h2>
          <div className="additional-skills-container">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="additional-skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h2 className="skills-subsection-title">Certifications</h2>
          <div className="certifications-container">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-item certification-link"
              >
                <div className="cert-icon">🏆</div>
                <div className="cert-details">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-info">{cert.issuer} • {cert.year}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillsSection;