import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Harvest Luxe. All rights reserved.</p>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/harvestluxe" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.tiktok.com/@harvestluxe" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="https://wa.me/2349069096147" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;