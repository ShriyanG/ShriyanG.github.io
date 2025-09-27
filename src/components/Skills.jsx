
const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "SQL", "C++", "Java", "C", "JavaScript", "TypeScript", "HTML", "CSS", "OCaml"]
    },
    {
      category: "Developer Tools & Frameworks",
      skills: ["React", "Linux", "Git", "Conda", "Pandas", "Docker", "Google Cloud Platform", "Firebase", "AWS Lambda", "MongoDB"]
    },
    {
      category: "Certifications",
      skills: ["Google Professional Cloud Developer (2024)", "Google Cloud Certified Associate Cloud Engineer (2023)"]
    }
  ];

  return (
    <div className="skills-section">
      <h1 className="section-heading">Skills & Certifications</h1>
      <div className="skills-content">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;