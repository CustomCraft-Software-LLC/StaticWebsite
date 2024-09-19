import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaChevronDown, FaBars } from 'react-icons/fa';

// Styled Header component
const HeaderWrapper = styled.header`
  background: var(--color-primary);
  padding: 1rem 2rem;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const Title = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent);
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Nav = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--color-primary);
    padding: 1rem 0;
    z-index: 999;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent);
  }

  &.active {
    color: var(--color-accent);
    text-decoration: underline;
  }
`;

const Dropdown = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--color-primary-dark);
  padding: 0.5rem 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const DropdownLink = styled(Link)`
  display: block;
  color: #fff;
  padding: 0.5rem 0;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--color-accent);
  }
`;

const ChevronIcon = styled(FaChevronDown)`
  margin-left: 5px;
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  ${({ open }) => open && `transform: rotate(180deg);`}
`;

const Hamburger = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

// Header component with dropdown and responsive hamburger menu
const Header = ({ siteTitle }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Title to="/">{siteTitle}</Title>

      {/* Hamburger Menu for Mobile */}
      <Hamburger onClick={() => setNavOpen(!navOpen)} />

      {/* Main Navigation */}
      <Nav open={navOpen}>
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