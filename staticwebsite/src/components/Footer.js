import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: var(--color-secondary);
  padding: var(--space-lg) var(--space-xl);
  text-align: center;
  color: var(--color-text-light);
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
  font-size: var(--font-size-small);
`;

const FooterText = styled.p`
  margin: 0.5rem 0;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const FooterLink = styled.a`
  color: var(--color-link);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus {
    color: var(--color-link-hover);
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>© {new Date().getFullYear()} CustomCraft Software, LLC</FooterText>
      <FooterText>
        <FooterLink href="https://www.customcraftsoftware.com/" target="_blank" rel="noopener noreferrer">
          CustomCraft Software, LLC
        </FooterLink>
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;