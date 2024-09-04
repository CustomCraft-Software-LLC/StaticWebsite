import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Styled Header component using styled-components
const HeaderWrapper = styled.header`
  background: var(--color-primary);
  padding: var(--space-md) var(--space-lg);
  color: #fff;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Softer shadow for elegance */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle divider */
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background 0.3s ease; /* Smooth background transition for scroll effect */
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.2rem; /* Slightly smaller for a sleek look */
  font-weight: 700;
  letter-spacing: 1.5px; /* Balanced letter spacing */
  text-transform: uppercase;
  color: #fff;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--color-accent); /* Accent color on hover */
  }
`;

const Nav = styled.nav`
  margin-top: var(--space-sm); /* Tighter spacing for a modern look */
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: var(--space-lg); /* Spacious and aligned navigation */
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500; /* Slightly lighter for a refined feel */
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus {
    color: var(--color-accent);
    text-decoration: none;
    transform: translateY(-3px); /* Gentle hover effect */
  }

  &.active {
    color: var(--color-link-hover);
    text-decoration: underline; /* Underline for active state */
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <Title>{siteTitle}</Title>
      <Nav aria-label="Main Navigation">
        <NavList>
          <NavItem>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;