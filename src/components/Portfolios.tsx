import React, { useState } from "react";

const Portfolios: React.FC = () => {
    return (
        <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Projects</span>
        </h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
              <img src="img/pj1.jpeg" alt="" />
              <div className="portfolio-layer">
                  <h4>UCSD NGH Group</h4>
                  <p>Real-time ultrasound image segmentation projects.</p>
                  <a href="https://sites.google.com/ucsd.edu/ucsd-ngh-group/projects?authuser=0" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>

          <div className="portfolio-box">
              <img src="img/pj2.jpeg" alt="" />
              <div className="portfolio-layer">
                  <h4>Banking APP</h4>
                  <p>A personal modern banking platform with finance management dashboard for everyone.</p>
                  <a href="https://banking-wine.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>

          <div className="portfolio-box">
              <img src="img/pj0.jpeg" alt="" />
              <div className="portfolio-layer">
                  <h4>Music Playlist</h4>
                  <p>A music player app with a song database, playback modes, playlists, and convenient controls.</p>
                  <a href="https://github.com/chw081/Music-Playlist" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>

          <div className="portfolio-box">
              <img src="img/pj4.jpeg" alt="" />
              <div className="portfolio-layer">
                  <h4>2048 Game</h4>
                  <p>A popular single-player puzzle game of merging tiles to get 2048.</p>
                  <a href="https://github.com/chw081/2048-Puzzle-Game" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>

          <div className="portfolio-box">
              <img src="img/pj5.jpeg" alt="" />
              <div className="portfolio-layer">
                  <h4>Recipes&Ratings</h4>
                  <p>Predicting relationship between the features of recipes 
                  and rating of recipes using feature engineering and pipelines.</p>
                  <a href="https://sicily496.github.io/report-of-recipes-and-ratings/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>

          <div className="portfolio-box">
              <img src="img/pj6.jpeg" alt="" />
              <div className="portfolio-layer">
                  <h4>Manim Tutorial</h4>
                  <p>Manim python explanatory mathematical videos that helps instructor in
                  primary education of basic math concepts.</p>
                  <a href="https://github.com/chw081/manim-math-demo" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>
        </div>
      </section>
    )
}
export default Portfolios;