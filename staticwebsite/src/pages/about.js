import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: ${(props) => (props.alt ? "#f9f9f9" : "#fff")};
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const SectionContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  ul {
    list-style: none;
    padding: 0;
    font-weight: 500;

    li {
      margin-bottom: 1rem;
    }
  }
`;

const TeamContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
  max-width: 200px;
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  h3 {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #333;
  }
  p {
    color: #666;
  }
`;

const CallToAction = styled.div`
  padding: 3rem 2rem;
  background-color: #333;
  color: #fff;
  text-align: center;
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  a {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #fff;
    color: #333;
    text-decoration: none;
    border-radius: 5px;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const About = () => (
  <Layout>
    <Section>
      <SectionTitle>Our Story</SectionTitle>
      <SectionContent>
        <p>
          Founded in 2020, we started as a small team of passionate creators who
          wanted to revolutionize the digital space. Our mission has always been
          to blend traditional values with modern technology to craft experiences
          that leave a lasting impact.
        </p>
      </SectionContent>
    </Section>

    <Section alt>
      <SectionTitle>Our Values</SectionTitle>
      <SectionContent>
        <ul>
          <li>Innovation: Continuously pushing boundaries.</li>
          <li>Integrity: Honesty and transparency at our core.</li>
          <li>Excellence: Committed to quality in every project.</li>
        </ul>
      </SectionContent>
    </Section>

    <Section>
      <SectionTitle>Meet the Team</SectionTitle>
      <TeamContainer>
        <TeamMember>
          <img alt="Jane Doe" />
          <h3>Jane Doe</h3>
          <p>CEO & Founder</p>
        </TeamMember>
        <TeamMember>
          <img alt="John Smith" />
          <h3>John Smith</h3>
          <p>Lead Developer</p>
        </TeamMember>
        <TeamMember>
          <img alt="Sara Lee" />
          <h3>Sara Lee</h3>
          <p>Product Designer</p>
        </TeamMember>
      </TeamContainer>
    </Section>

    <Section alt>
      <SectionTitle>What We Do</SectionTitle>
      <SectionContent>
        <p>
          From web development to digital marketing, we specialize in solutions
          that bring our clients' visions to life through innovative digital
          experiences.
        </p>
      </SectionContent>
    </Section>

    <CallToAction>
      <h2>Ready to Work With Us?</h2>
      <a href="/contact">Get In Touch</a>
    </CallToAction>
  </Layout>
);

export const Head = () => (
  <Seo
    title="About"
    description="Discover our story, values, and the talented team behind our company's success. We're ready to help you achieve your goals."
  />
);

export default About;