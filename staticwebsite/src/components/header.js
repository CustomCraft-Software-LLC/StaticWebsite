import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Styled Header component using styled-components
const HeaderWrapper = styled.header`
  background: var(--color-primary);
  padding: var(--space-lg);
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: var(--font-size-large);
`;

const Nav = styled.nav`
  margin-top: var(--space-md);
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: var(--space-md);
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
    color: var(--color-link-hover);
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