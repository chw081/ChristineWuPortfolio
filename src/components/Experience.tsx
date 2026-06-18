import React from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "HerPower AI",
    period: "2024 – Present",
    summary:
      "Built full-stack community systems including auth, forums, events, and admin workflows. Developed production TypeScript APIs backed by PostgreSQL for early-stage startup platform features.",
    stack: ["TypeScript", "PostgreSQL", "React", "Full-stack"],
  },
  {
    role: "ML Research Developer",
    company: "UC San Diego Health",
    period: "2023 – 2024",
    summary:
      "Developed deep learning systems for medical imaging, including real-time ultrasound segmentation models and deployed ML pipelines for clinical research workflows.",
    stack: ["Python", "TensorFlow", "Medical Imaging", "ML Pipelines"],
  },
  {
    role: "Software Developer Intern",
    company: "Hainan Current Culture Media Co., Ltd.",
    period: "Jul – Sep 2023",
    summary:
      "Built interactive math tutorials with Python Manim, optimized rendering performance, and integrated visualization components into responsive web platforms.",
    stack: ["Python", "Manim", "Web Development"],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        Work <span>Experience</span>
      </h2>
      <div className="experience-container">
        {experiences.map((item) => (
          <article className="experience-card" key={`${item.company}-${item.period}`}>
            <div className="experience-card-header">
              <div>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
              </div>
              <span className="experience-period">{item.period}</span>
            </div>
            <p className="experience-summary">{item.summary}</p>
            <ul className="experience-stack">
              {item.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
