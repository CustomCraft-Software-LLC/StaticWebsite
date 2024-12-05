import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from './Footer';
import Header from './Header';


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

const Route = '/StaticWebsite';

export default Layout;