import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from './Footer';
import Header from './Header.js';


const Layout = ({ children }) => { 
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header siteTitle="static website" />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;