import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const footerStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '40px 20px',
  textAlign: 'center',
  fontSize: '14px',
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  gap: '20px',
};

const sectionStyles = {
  margin: '10px 0',
};

const listStyles = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  gap: '20px',
};

const linkStyles = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px',
  fontSize: '14px',
  transition: 'color 0.3s ease',
};

const iconStyles = {
  color: '#fff',
  margin: '0 10px',
  fontSize: '20px',
  transition: 'color 0.3s ease',
};

const socialContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
};

const Footer = () => (
  <footer style={footerStyles}>
    <div style={{ ...containerStyles, flexDirection: 'row' }}>
      <div style={sectionStyles}>
        <ul style={listStyles}>
          <li>
            <a href="/about" style={linkStyles}>About Us</a>
          </li>
          <li>
            <a href="/contact" style={linkStyles}>Contact</a>
          </li>
          <li>
            <a href="/privacy" style={linkStyles}>Privacy Policy</a>
          </li>
          <li>
            <a href="/terms" style={linkStyles}>Terms of Service</a>
          </li>
        </ul>
      </div>

      <div style={socialContainerStyles}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyles}>
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={iconStyles}>
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={iconStyles}>
          <FaLinkedinIn />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={iconStyles}>
          <FaGithub />
        </a>
      </div>

      <div>
        <p>© {new Date().getFullYear()} </p>
      </div>
    </div>
  </footer>
);

export default Footer;