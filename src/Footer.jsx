import React from 'react';
import LanguageDropdown from './components/LanguageDropdown'; // Adjust path as needed
import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Kamil Bielski. All rights reserved.</p>
      <p>Kontakt: kamil.bielski.2006@gmail.com</p>
      <LanguageDropdown />
    </footer>
  );
}

export default Footer;
