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
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Title>{siteTitle}</Title>
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  </HeaderWrapper>
);

export default Header;