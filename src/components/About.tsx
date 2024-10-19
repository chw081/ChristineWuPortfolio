import React, { useState } from "react";

const About: React.FC = () => {
    return (
        <section className="about" id="about">
        <div className="about-img">
          <img src="img/aboutme.jpg" alt="About me" />
        </div>
        <div className="about-content">
          <h2 className="heading">ABOUT <span>Me</span></h2>
          <h3>Frontend Developer</h3>
          <p>
            Currently a MathCS junior student studying at UC San Diego. Minoring
            in Data Science and Business Econ.
          </p>
          <a href="aboutme.html" className="btn">
            Read more
          </a>
        </div>
      </section>
    )
}
export default About;