import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: var(--color-secondary);
  padding: var(--space-lg);
  text-align: center;
  color: var(--color-text);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© {new Date().getFullYear()} CustomCraft Software, LLC</p>
      <p>
        <a href="https://www.customcraftsoftware.com/" target="_blank" rel="noopener noreferrer">
          CustomCraft Software, LLC
        </a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;