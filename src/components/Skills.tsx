import React from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "PHP"],
  },
  {
    category: "AI & LLMs",
    skills: [
      "OpenAI APIs",
      "LangChain",
      "Prompt Engineering",
      "LLM Applications",
      "AI Pipelines",
      "Text Generation",
      "DALL·E",
      "RAG",
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "Image Segmentation",
      "U-Net",
      "EfficientNet",
      "MobileNet",
      "CNNs",
      "Medical Imaging AI",
      "Data Augmentation",
      "Model Training",
      "Model Evaluation",
    ],
  },
  {
    category: "Full-Stack",
    skills: [
      "React",
      "Next.js",
      "Vite",
      "Node.js",
      "Web Applications",
      "Authentication",
      "RBAC",
      "React Hooks",
      "Frontend + Backend Integration",
    ],
  },
  {
    category: "Mobile",
    skills: [
      "Android Development",
      "MVVM",
      "Room",
      "SQLite",
      "Async Programming",
      "Android Studio",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Appwrite", "Data Modeling"],
  },
  {
    category: "APIs",
    skills: ["REST APIs", "GraphQL", "Plaid API", "Dwolla API", "Clarius Cast API"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "GitHub", "GitHub Actions", "CI/CD", "Linux"],
  },
  {
    category: "Systems",
    skills: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Systems",
      "Software Engineering",
      "System Design",
    ],
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
