import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Header from './Header';

const Main = styled.main`
  padding: var(--space-lg) 0;
`;

const Footer = styled.footer`
  background: var(--color-secondary);
  padding: var(--space-lg);
  text-align: center;
  color: var(--color-text);
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header siteTitle="My Gatsby Site" />
    <Main>{children}</Main>
    <Footer>
      © {new Date().getFullYear()} Built with Gatsby
    </Footer>
  </>
);

export default Layout;