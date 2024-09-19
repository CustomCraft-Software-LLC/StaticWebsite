import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaChevronDown, FaBars } from 'react-icons/fa';

// Styled Header component using styled-components
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

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #fff;
  text-transform: uppercase;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--color-accent);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--color-primary);
    padding: 1rem 0;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
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
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus {
    color: var(--color-accent);
    transform: translateY(-2px);
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
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  font-size: 0.75rem;
  transition: transform 0.3s ease;
  ${({ open }) => open && `transform: rotate(180deg);`}
`;

const Hamburger = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--color-accent);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const SocialContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

// Header component with dropdown and responsive hamburger menu
const Header = ({ siteTitle }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Title>{siteTitle}</Title>
      
      {/* Hamburger Menu for Mobile */}
      <Hamburger onClick={() => setNavOpen(!navOpen)} />

      {/* Main Navigation */}
      <Nav open={navOpen} aria-label="Main Navigation">
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
          <NavItem
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink as="button">
              Services <ChevronIcon open={servicesOpen} />
            </NavLink>
            <Dropdown show={servicesOpen}>
              <DropdownLink to="/services/web-development">Web Development</DropdownLink>
              <DropdownLink to="/services/app-development">App Development</DropdownLink>
              <DropdownLink to="/services/seo">SEO</DropdownLink>
            </Dropdown>
          </NavItem>
          <NavItem>
            <NavLink to="/portfolio" activeClassName="active">
              Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/blog" activeClassName="active">
              Blog
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