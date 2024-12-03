import React, { useState } from "react";

const About: React.FC = () => {
    return (
        <section className="about" id="about">
        <div className="about-img">
          <img src="img/aboutme.jpg" alt="About me" />
        </div>
        <div className="about-content">
          <h2 className="heading">ABOUT <span>Me</span></h2>
          <h3>Software Engineer, Web App Developer</h3>
          <p>
          I’m a developer passionate about building intuitive, accessible, and high-performing 
          software that bridges thoughtful design with precise engineering. I thrive at the 
          intersection of functionality and creativity, crafting solutions that not only work seamlessly 
          but also deliver engaging and user-centric experiences.
          </p>
          <p>
          Currently, I’m pursuing a B.S. in Mathematics-Computer Science at the University of 
          California, San Diego, with minors in Data Science and Business Economics. My academic and 
          professional journey has allowed me to explore diverse areas, from developing financial dashboards 
          and personalized recommender systems to creating interactive educational tools with Python.
          </p>
          <p>As a Software Developer Intern, I enhanced user engagement by optimizing performance and integrating 
          responsive visual components into web platforms. My projects span web applications, machine learning 
          systems, and dynamic interfaces, showcasing my proficiency in React, Next.js, TensorFlow, and a 
          variety of programming languages.
          </p>
          <a href="aboutme.html" className="btn">
            Read more
          </a>
        </div>
      </section>
    )
}
export default About;