import React from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C", "C++", "HTML", "CSS", "Bash"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "MySQL", "SQLite", "REST APIs"],
  },
  {
    category: "AI / ML",
    skills: ["TensorFlow", "Keras", "scikit-learn", "Pandas", "NumPy", "ML Pipelines"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Jupyter", "Linux", "JUnit"],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        Technical <span>Skills</span>
      </h2>
      <div className="skills-container">
        {skillGroups.map((group) => (
          <article className="skills-card" key={group.category}>
            <h3>{group.category}</h3>
            <ul className="skills-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
