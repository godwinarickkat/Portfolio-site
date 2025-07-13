import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span>☰</span>
      </div>

      <div className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Case Studies</li>
          <li>Testimonials</li>
          <li>Recent Work</li>
          <li>Get In Touch</li>
          <li>
            <a href="https://www.linkedin.com/in/godwin-wilson/" target="_blank" rel="noopener noreferrer">
              <img src="/LinkedIn.png" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/godwinarickkat" target="_blank" rel="noopener noreferrer">
              <img src="/github.png" alt="GitHub" />
            </a>
          </li>
          <li>
            <img src="/leetcode.png" alt="LeetCode" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
