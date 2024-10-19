import React, { useState } from "react";

const Header: React.FC = () => {
    return (
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
    )
}
export default Header;