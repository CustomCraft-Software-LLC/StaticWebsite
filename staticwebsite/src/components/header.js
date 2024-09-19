import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Styled Header component using styled-components
const HeaderWrapper = styled.header`
  background: var(--color-primary);
  padding: 1rem 2rem; /* Adjusted for more consistency */
  color: #fff;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* More pronounced shadow */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* More noticeable divider */
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background 0.3s ease; /* Smooth background transition */
  
  /* Responsive styling */
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem; /* Responsive size */
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #fff;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--color-accent);
  }
`;

const Nav = styled.nav`
  margin-top: 0.5rem; /* Reduced margin for a tighter layout */
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 2rem; /* Increased gap for better spacing */
  flex-wrap: wrap; /* Ensures items wrap on smaller screens */
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover,
  &:focus {
    color: var(--color-accent);
    transform: translateY(-5px); /* Enhanced hover effect */
  }

  &.active {
    color: var(--color-accent);
    text-decoration: underline;
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