import React from 'react';
import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <a href="https://github.com/b1zy" 
           target="_blank" 
           rel="noopener noreferrer"
           className="social-link">
          <i className="fab fa-github"></i>
        </a>
        
        <a href="https://linkedin.com/in/kamil-bielski-98b28a281" 
           target="_blank" 
           rel="noopener noreferrer"
           className="social-link">
          <i className="fab fa-linkedin"></i>
        </a>
        <span>© 2024 Kamil Bielski. All rights reserved.</span>
        <span className="contact-email">kamil.bielski.2006@gmail.com</span>

      </div>
    </footer>
  );
}

export default Footer;
