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
                  <h4>Music Playlist</h4>
                  <p>A music player application containing a database of songs,  
                  multiple playback modes and playlists, providing convenient playback controls.</p>
                  <a href="https://github.com/chw081/Music-Playlist" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>

          <div className="portfolio-box">
              <img src="img/pj1.jpeg" alt="" />
              <div className="portfolio-layer">
                  <h4>Huffman Coding</h4>
                  <p>A project on lossless data compression algorithm that includes 
                  encoding and decoding function. Code available upon request.</p>
                  <a href="#contact"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>

          <div className="portfolio-box">
              <img src="img/pj1.jpeg" alt="" />
              <div className="portfolio-layer">
                  <h4>2048 Game</h4>
                  <p>A popular single-player puzzle game that aims to slide numbered 
                  tiles on a 4x4 grid to combine them in order to get a tile with the number 2048.</p>
                  <a href="https://github.com/chw081/2048-Puzzle-Game" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>

          <div className="portfolio-box">
              <img src="img/pj1.jpeg" alt="" />
              <div className="portfolio-layer">
                  <h4>Graph Structure</h4>
                  <p>A project for undirected graph, finding the shortest path, the connected 
                  components, and the smallest edge threshold. Code available upon request.</p>
                  <a href="#contact"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>

          <div className="portfolio-box">
              <img src="img/pj1.jpeg" alt="" />
              <div className="portfolio-layer">
                  <h4>Recipes&Ratings</h4>
                  <p>Predicting relationship between the features of recipes 
                  and rating of recipes using feature engineering and pipelines.</p>
                  <a href="https://sicily496.github.io/report-of-recipes-and-ratings/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
          </div>

          <div className="portfolio-box">
              <img src="img/pj1.jpeg" alt="" />
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