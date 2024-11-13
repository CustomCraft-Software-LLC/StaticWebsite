import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const HeroSection = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 20px;
  background-color: var(--color-primary);
  color: #fff;
  min-height: 80vh;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 1.5rem;
    max-width: 600px;
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 80px 10px;
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

const ButtonGroup = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ButtonLink = styled(Link)`
  background-color: var(--color-accent);
  color: #fff;
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-accent-hover);
  }
`;

const Index = () => {
  return (
    <Layout>
      <HeroSection>
        <h1>Welcome to Our Website</h1>
        <p>We’re glad you’re here. Explore more about us or get in touch with our team.</p>
        <nav>
          <ButtonGroup>
            <li>
              <ButtonLink to="/about">About Us</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/contact">Contact Us</ButtonLink>
            </li>
          </ButtonGroup>
        </nav>
      </HeroSection>
    </Layout>
  );
};

// SEO component for metadata
export const Head = () => (
  <Seo
    title="Home"
    description="Welcome to our website. Learn more about us or get in touch with our team."
  />
);

export default Index;