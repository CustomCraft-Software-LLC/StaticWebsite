import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import { auth } from '../auth/firebaseAuth'; 
import SignOut from '../components/SignOut';

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

const NavItem = styled.li``;

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

const Header = ({ siteTitle }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return (
    <HeaderWrapper>
      <Title to="/">{siteTitle}</Title>

      {/* Hamburger Menu for Mobile */}
      <Hamburger onClick={() => setNavOpen(prev => !prev)} />

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

          {/* Right Side */}
          {user ? (
            <NavItem>
              <SignOut />
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink to="/login" activeClassName="active">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/signup" activeClassName="active">
                  SignUp
                </NavLink>
              </NavItem>
            </>
          )}
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;