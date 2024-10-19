import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      {/* HEADER DESIGN */}
      <header className="header">
        <a href="#" className="logo">
          Christine<span className="brand-color-text">Wu</span>
        </a>
        <i className="fa-solid fa-bars" id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HOME SECTION DESIGN */}
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

      {/* ABOUT SECTION DESIGN */}
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

      {/* SERVICES SECTION DESIGN */}
      <section className="services" id="services">
        <h2 className="heading">
          My <span>Services</span>
        </h2>
        <div className="services-container">
          <div className="services-box">
            <i className="fa-solid fa-code"></i>
            <h3>Web Development</h3>
            <p>
              Currently a MathCS junior student studying at UC San Diego.
              Minoring in Data Science and Business Econ.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-palette"></i>
            <h3>UI/UX Designing</h3>
            <p>
              Currently a MathCS junior student studying at UC San Diego.
              Minoring in Data Science and Business Econ.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-brands fa-app-store-ios"></i>
            <h3>App Development</h3>
            <p>
              Currently a MathCS junior student studying at UC San Diego.
              Minoring in Data Science and Business Econ.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION DESIGN */}
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Projects</span>
        </h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src="img/pj1.jpeg" alt="Project 1" />
            <div className="portfolio-layer">
              <h4>Music Playlist</h4>
              <p>
                A music player application containing a database of songs,
                multiple playback modes and playlists, providing convenient
                playback controls.
              </p>
              <a
                href="https://github.com/chw081/Music-Playlist"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>

          {/* Add more portfolio items as needed */}
        </div>
      </section>

      {/* CONTACT SECTION DESIGN */}
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
        <form id="contact-form">
          <div className="input-box">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" required />
          </div>
          <textarea
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>

      {/* FOOTER DESIGN */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by @christinewu | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <i className="fa-solid fa-angle-up"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
