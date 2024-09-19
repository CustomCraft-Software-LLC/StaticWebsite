import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

// Section styled component for consistent section styling
const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${(props) => (props.alt ? "var(--color-light)" : "#fff")};
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.75;
  color: var(--color-text);

  p {
    margin-bottom: 1.5rem;
  }
`;

// Team Section
const TeamContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  max-width: 200px;
  text-align: center;
  margin-bottom: 2rem;

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: var(--color-primary);
  }

  p {
    color: var(--color-text-dark);
  }
`;

// CTA Section
const CallToAction = styled.div`
  padding: 3rem;
  background-color: var(--color-primary);
  color: #fff;
  text-align: center;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }

  a {
    background-color: #fff;
    color: var(--color-primary);
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: var(--color-accent);
      color: #fff;
    }
  }
`;

const About = () => (
  <Layout>
    <Section>
      <SectionTitle>Our Story</SectionTitle>
      <SectionContent>
        <p>
          Founded in 2020, our company has grown from a small group of like-minded innovators into a dedicated team
          passionate about creating digital experiences. Our journey began with a vision to bring the best solutions
          to clients around the world, and today we continue to evolve, blending tradition and modernity in everything
          we do.
        </p>
      </SectionContent>
    </Section>

    <Section alt>
      <SectionTitle>Our Values</SectionTitle>
      <SectionContent>
        <p>
          At the heart of our work are core values that define our approach:
        </p>
        <ul>
          <li><strong>Innovation:</strong> We strive to push boundaries and think outside the box.</li>
          <li><strong>Integrity:</strong> Trust and honesty guide our relationships with clients and colleagues.</li>
          <li><strong>Excellence:</strong> We aim to deliver the highest quality in every project we undertake.</li>
        </ul>
      </SectionContent>
    </Section>

    <Section>
      <SectionTitle>Meet the Team</SectionTitle>
      <TeamContainer>
        <TeamMember>
          <img src="/images/team-member1.jpg" alt="Team Member 1" />
          <h3>Jane Doe</h3>
          <p>CEO & Founder</p>
        </TeamMember>
        <TeamMember>
          <img src="/images/team-member2.jpg" alt="Team Member 2" />
          <h3>John Smith</h3>
          <p>Lead Developer</p>
        </TeamMember>
        <TeamMember>
          <img src="/images/team-member3.jpg" alt="Team Member 3" />
          <h3>Sara Lee</h3>
          <p>Product Designer</p>
        </TeamMember>
      </TeamContainer>
    </Section>

    <Section alt>
      <SectionTitle>What We Do</SectionTitle>
      <SectionContent>
        <p>
          From web development to product design and digital marketing, we specialize in creating customized solutions that
          drive results. Whether you're a startup looking to establish your presence or a well-established company seeking
          to innovate, we're here to help you achieve your goals.
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
    description="Learn more about our company, values, team, and services."
  />
);

export default About;