import React, { useEffect } from "react";
import Typed from "typed.js";
import ScrollReveal from 'scrollreveal';

const Home: React.FC = () => {
    useEffect(() => {
      const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web APP Developer', 'Software Engineer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
      });

      return () => {
        typed.destroy(); // Clean up the Typed.js instance when the component unmounts
      };
    }, []);

    useEffect(() => {
      ScrollReveal({ 
        distance: '80px',
        duration: 2000,
        delay: 200,
      });
  
      ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
      ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
      ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
      ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });
    }, []);

    return (
        <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, my name is</h3>
          <h1>Christine Wu</h1>
          <h3>And I'm a <span className="multiple-text"></span></h3>
          <p>
          Passionate developer with experience in web development, machine learning, and community leadership, 
          and academic foundation in Mathematics-Computer Science at UC San Diego.
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
          <a href="files/Christine_Wu_Resume.pdf" className="btn" download>
            Download CV
          </a>
        </div>

        <div className="home-img">
          <img src={`${process.env.PUBLIC_URL}/img/profiledp.jpeg`} alt="Christine Wu" />
        </div>
      </section>
    )
}
export default Home;