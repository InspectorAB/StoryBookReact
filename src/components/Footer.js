// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="logo-placeholder.png" alt="Logo" />
          <span>Untitled UI</span>
        </div>
        <div className="footer-subscribe">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="footer-rights">
          <span>© 2077 Untitled UI. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
