import React, { useState } from "react";

const Contact: React.FC = () => {
    return (
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
    )
}
export default Contact;