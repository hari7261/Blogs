import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/projects" className="footer-link">Projects</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="#00ff99" />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#00ff99" />
          </a>
        </div>
        <p>© 2024 Ashwin Sundar. All Rights Reserved.</p>
        <p className="footer-tagline">Exploring the universe of technology and creativity.</p>
      </div>
    </footer>
  );
};

export default Footer;
