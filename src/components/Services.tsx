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
            <h3>App Development</h3>
            <p>
              Looking to bring your web application idea to life? I specialize in 
              crafting full-stack web solutions tailored to your needs. Using 
              cutting-edge technologies like React, Next.js, and Node.js, I deliver 
              responsive, scalable, and user-friendly applications. From secure bank 
              transaction apps powered by Plaid to dynamic note-taking platforms, 
              I ensure every project meets the highest standards of functionality 
              and design. Let me transform your vision into reality.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-palette"></i>
            <h3>Software Engineering</h3>
            <p>
              Software development is at the core of what I do. With expertise rooted 
              in data structures, algorithms, and systems programming, I engineer 
              reliable and efficient solutions for complex problems. Whether optimizing 
              processes, designing educational tools, or creating innovative 
              recommendation systems, I ensure seamless integration, robust functionality, 
              and top-notch performance. Whatever the challenge, I’m here to deliver results.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-brands fa-app-store-ios"></i>
            <h3>Personal Portfolio</h3>
            <p>
              Ready to showcase your skills to the world? My portfolio solutions 
              focus on performance, usability, and aesthetics, delivering websites 
              that are as functional as they are visually appealing. Using technologies like 
              React, I create platforms that are fast, secure, and 
              fully optimized for any device. Whether you’re an aspiring professional, 
              an established business, or a creative individual, I'll help you build a 
              portfolio that leaves a lasting impression.
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