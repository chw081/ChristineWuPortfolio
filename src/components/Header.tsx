import React, { useEffect } from "react";

const Header: React.FC = () => {
    useEffect(() => {
      // Query DOM elements
      const menuIcon = document.querySelector("#menu-icon") as HTMLElement | null;
      const navbar = document.querySelector(".navbar") as HTMLElement | null;

      // Only proceed if elements are found
      if (menuIcon && navbar) {
        // Toggle menu icon and navbar
        menuIcon.addEventListener("click", () => {
          menuIcon.classList.toggle("fa-xmark");
          navbar.classList.toggle("active");
        });
      }

      // Scroll section active link logic
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("header nav a");

      const handleScroll = () => {
        const top = window.scrollY;
        sections.forEach((sec) => {
          const offset = sec.offsetTop - 150;
          const height = sec.offsetHeight;
          const id = sec.getAttribute("id");

          if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (id) {
                const activeLink = document.querySelector(`header nav a[href*='${id}']`);
                activeLink?.classList.add("active");
              }
            });
          }
        });

        // Sticky navbar
        const header = document.querySelector("header");
        if (header) {
          header.classList.toggle("sticky", window.scrollY > 100);
        }

        // Remove toggle icon and navbar when scrolling
        if (menuIcon && navbar) {
          menuIcon.classList.remove("fa-xmark");
          navbar.classList.remove("active");
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
        <header className="header">
        <a href="#home" className="logo">
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