import React from "react";

const workExperiences = [
  {
    role: "Software Engineer",
    company: "HerPower AI",
    period: "2025 – 2026",
    summary:
      "Shipped full-stack features for an early-stage AI startup community platform—auth, forums, events, and admin workflows—using React and TypeScript. Built production REST APIs on PostgreSQL, owning schema design and backend services that support core user flows in a fast-release environment.",
    stack: ["TypeScript", "PostgreSQL", "React", "REST APIs"],
  },
  {
    role: "Software Development Engineer",
    company: "Convoloo.com",
    period: "2025",
    summary:
      "Built a full-stack AI book generation platform with Streamlit, LangChain, and OpenAI GPT, enabling multi-page personalized children's books with coordinated narrative and DALL·E 3 illustration pipelines. Designed LLM prompt orchestration and backend APIs, improving text-to-image consistency and reducing generation latency by 28% while shipping MVP to production.",
    stack: ["LangChain", "OpenAI", "DALL·E 3", "Python", "Streamlit"],
  },
  {
    role: "AI Research Assistant",
    company: "UC San Diego Health",
    period: "2024 – 2025",
    summary:
      "Developed deep learning models for real-time ultrasound image segmentation in a clinical research environment. Built end-to-end ML pipelines with TensorFlow—from data preprocessing through model training and deployment—supporting production-oriented medical imaging workflows.",
    stack: ["Python", "TensorFlow", "Computer Vision", "ML Pipelines"],
  },
  {
    role: "Software Engineer Intern",
    company: "Hainan Current Culture Media Co., Ltd.",
    period: "2023",
    summary:
      "Built Python backend workflows for an educational platform, generating Manim math animations and integrating visualization services with web clients. Optimized content rendering pipelines and end-to-end delivery performance across the learning product.",
    stack: ["Python", "REST APIs", "Manim", "Web Development"],
  },
];

const education = [
  {
    degree: "B.S. in Mathematics–Computer Science",
    school: "University of California, San Diego",
    location: "San Diego, CA",
    period: "Sep 2021 – Jun 2025",
    details: "Minors in Data Science and Business Economics",
    extracurricular: [
      { name: "Triton Quantitative Trading" },
      { name: "Chinese Computer Community" },
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        Experience <span>& Education</span>
      </h2>
      <div className="experience-container">
        <div className="experience-group">
          <h3 className="experience-subheading">Work Experience</h3>
          {workExperiences.map((item) => (
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

        <div className="experience-group">
          <h3 className="experience-subheading">Education</h3>
          {education.map((item) => (
            <article className="experience-card" key={`${item.school}-${item.period}`}>
              <div className="experience-card-header">
                <div>
                  <h3>{item.degree}</h3>
                  <p className="experience-company">{item.school}</p>
                </div>
                <span className="experience-period">
                  {item.period} · {item.location}
                </span>
              </div>
              <p className="experience-summary">{item.details}</p>
              <ul className="education-activities">
                {item.extracurricular.map((activity) => (
                  <li key={activity.name}>
                    <strong>{activity.name}</strong>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
