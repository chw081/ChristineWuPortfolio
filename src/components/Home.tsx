import React, { useCallback, useEffect, useState } from "react";

const Home: React.FC = () => {
  const resumeUrl = `${process.env.PUBLIC_URL}/files/Christine_Wu_Resume.pdf`;
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const closeResume = useCallback(() => setIsResumeOpen(false), []);
  const openResume = useCallback(() => setIsResumeOpen(true), []);

  useEffect(() => {
    if (!isResumeOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeResume();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isResumeOpen, closeResume]);

  return (
    <section className="home" id="home">
      <div className="home-inner">
        <div className="home-content">
          <p className="home-eyebrow">Software Engineer · UC San Diego '25</p>

          <h1 className="home-name">Christine Wu</h1>

          <p className="home-headline">
            Building AI-integrated web systems and production-grade full-stack products.
          </p>

          <p className="home-summary">
            UC San Diego graduate with production experience across AI startups, LLM applications,
            and medical imaging research. Shipped full-stack platform features at HerPower AI and
            an AI book generation system with LangChain and DALL·E at Convoloo. At UC San Diego
            Health, built deep learning pipelines for real-time ultrasound segmentation.
          </p>

          <ul className="home-domains" aria-label="Technical focus areas">
            <li>AI & LLMs</li>
            <li>Full-Stack</li>
            <li>Machine Learning</li>
            <li>Python</li>
            <li>TypeScript</li>
            <li>System Design</li>
          </ul>

          <div className="home-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <button type="button" className="btn btn-secondary" onClick={openResume}>
              Resume
            </button>
            <a href="#contact" className="btn btn-secondary">
              Contact
            </a>
          </div>

          <div className="home-links">
            <a
              href="https://github.com/chw081"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span className="home-links-divider" aria-hidden="true">·</span>
            <a
              href="https://www.linkedin.com/in/christine-wu-2bab27243/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="home-links-divider" aria-hidden="true">·</span>
            <a href="mailto:cwu20210923@gmail.com" aria-label="Email">
              Email
            </a>
          </div>
        </div>

        <div className="home-media">
          <img
            src={`${process.env.PUBLIC_URL}/img/profiledp.jpeg`}
            alt="Christine Wu"
            width={300}
            height={400}
          />
        </div>
      </div>

      {isResumeOpen && (
        <div
          className="resume-modal-overlay"
          onClick={closeResume}
          role="presentation"
        >
          <div
            className="resume-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="resume-modal-header">
              <h2 id="resume-modal-title">Resume</h2>
              <div className="resume-modal-actions">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  Open in tab
                </a>
                <a href={resumeUrl} download className="btn btn-secondary btn-sm">
                  Download
                </a>
                <button
                  type="button"
                  className="resume-modal-close"
                  onClick={closeResume}
                  aria-label="Close resume"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="resume-modal-body">
              <iframe
                src={`${resumeUrl}#view=FitH`}
                title="Christine Wu Resume"
                className="resume-modal-frame"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
