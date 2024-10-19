import React, { useState } from "react";

const Home: React.FC = () => {
    return (
        <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, my name is</h3>
          <h1>Christine Wu</h1>
          <h3>And I'm a <span className="multiple-text"></span></h3>
          <p>
            Currently a MathCS junior student studying at UC San Diego. Minoring
            in Data Science and Business Econ.
          </p>
          <div className="social-media">
            <a
              href="mailto:cwu20210923@gmail.com?subject=PortfolioContactMe&body=Hello%20World"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/christine-wu-2bab27243/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="http://www.instagram.com/chwu3615"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="http://discord.com/users/894108075932413972/">
              <i className="fa-brands fa-discord"></i>
            </a>
          </div>
          <a href="files/ChristineWu-Spring2024.pdf" className="btn" download>
            Download CV
          </a>
        </div>

        <div className="home-img">
          <img src="img/profiledp.jpeg" alt="Christine Wu" />
        </div>
      </section>
    )
}
export default Home;