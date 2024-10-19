import React, { useState } from "react";

const Services: React.FC = () => {
    return (
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
    )
}
export default Services;