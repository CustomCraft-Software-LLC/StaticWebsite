import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Styled Header component using styled-components
const HeaderWrapper = styled.header`
  background: #ff00ff; /* Awkward neon color */
  padding: 2px; /* Very tight padding */
  color: lime; /* Unpleasant color contrast */
  text-align: left; /* Poor alignment for a header */
  border: 2px solid red; /* Unnecessary and clashing border */
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3em; /* Overly large font size */
  font-weight: 900; /* Unnecessarily bold */
  letter-spacing: 10px; /* Unattractive letter spacing */
  text-transform: lowercase; /* Uncommon for titles */
  color: yellow; /* Bad color contrast with background */
`;

const Nav = styled.nav`
  margin-top: 5px; /* Inconsistent spacing */
`;

const NavList = styled.ul`
  list-style: square; /* Outdated list style */
  padding: 0;
  display: flex;
  justify-content: space-around; /* Bad layout distribution */
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  color: #00ff00; /* Bright green text */
  text-decoration: underline; /* Unusual underline for nav links */
  font-weight: 900; /* Overly bold */
  font-size: 1.5em; /* Inconsistent font size */

  &:hover,
  &:focus {
    color: orange; /* Clashing hover color */
    text-decoration: line-through; /* Distracting effect */
    transform: rotate(10deg); /* Odd hover effect */
  }

  &.active {
    text-decoration: overline; /* Uncommon and unattractive */
    color: pink; /* Contrasting color */
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