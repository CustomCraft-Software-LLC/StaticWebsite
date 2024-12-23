import  React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const HeroSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 20px;
  min-height: 80vh;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    max-width: 500px;
    margin-bottom: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

const ButtonLink = styled(Link)`
  background-color: #333;
  color: #fff;
  padding: 8px 16px;
  font-size: 1rem;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background-color: #111;
    color: #fff;
  }
`;

const Route = '/StaticWebsite'

const Index = () => {
  return ( 
    <Layout>
      <HeroSection>
        <h1>Welcome to Our Website</h1>
        <p>Explore more about us or get in touch with our team.</p>
        <ButtonGroup>
          <ButtonLink to={`${Route}/about`}>About Us</ButtonLink>
          <ButtonLink to={`${Route}/contact`}>Contact Us</ButtonLink>
        </ButtonGroup>
      </HeroSection>
    </Layout>
  );
}

export const Head = () => (
  <Seo
    title="Home"
    description="Welcome to our website. Learn more about us or get in touch with our team."
  />
);

export default Index;