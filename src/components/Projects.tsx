import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        Selected <span>Projects</span>
      </h2>
      <div className="projects-container">
        <div className="projects-box">
          <img src={`${process.env.PUBLIC_URL}/img/pj4.jpeg`} alt="Email Agent project" />
          <div className="projects-layer">
            <h4>Email Agent</h4>
            <p>
              An AI-powered personal email assistant that drafts and refines replies with context-aware prompts and
              structured workflows.
            </p>
            <a
              href="https://github.com/chw081/Personal-Email-Agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div className="projects-box">
          <img src={`${process.env.PUBLIC_URL}/img/pj1.jpeg`} alt="UCSD NGH Group project" />
          <div className="projects-layer">
            <h4>UCSD NGH Group</h4>
            <p>Real-time ultrasound image segmentation projects.</p>
            <a
              href="https://sites.google.com/ucsd.edu/ucsd-ngh-group/projects?authuser=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div className="projects-box">
          <img src={`${process.env.PUBLIC_URL}/img/pj2.jpeg`} alt="Banking app project" />
          <div className="projects-layer">
            <h4>Banking App</h4>
            <p>A personal modern banking platform with finance management dashboard for everyone.</p>
            <a
              href="https://banking-wine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div className="projects-box">
          <img src={`${process.env.PUBLIC_URL}/img/pj0.jpeg`} alt="Music playlist project" />
          <div className="projects-layer">
            <h4>Music Playlist</h4>
            <p>A music player app with a song database, playback modes, playlists, and convenient controls.</p>
            <a
              href="https://github.com/chw081/Music-Playlist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div className="projects-box">
          <img src={`${process.env.PUBLIC_URL}/img/pj5.jpeg`} alt="Recipes and ratings project" />
          <div className="projects-layer">
            <h4>Recipes &amp; Ratings</h4>
            <p>
              Predicting relationship between the features of recipes and rating of recipes using
              feature engineering and pipelines.
            </p>
            <a
              href="https://sicily496.github.io/report-of-recipes-and-ratings/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div className="projects-box">
          <img src={`${process.env.PUBLIC_URL}/img/pj6.jpeg`} alt="Manim tutorial project" />
          <div className="projects-layer">
            <h4>Manim Tutorial</h4>
            <p>
              Manim python explanatory mathematical videos that help instructors in primary education
              of basic math concepts.
            </p>
            <a
              href="https://github.com/chw081/manim-math-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
