import React, { useState } from "react";

const Footer: React.FC = () => {
    return (
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
    )
}
export default Footer;