import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Section = styled.section`
  padding: 6rem 3rem;
  background-color: ${(props) => (props.alt ? "var(--color-light)" : "#fff")};
  text-align: center;
  transition: background-color 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

// Section Title styling
const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  margin-bottom: 3rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: color 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// Section content styling
const SectionContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--color-text);
  padding: 0 2rem;

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    li {
      margin-bottom: 1rem;
      font-weight: 500;
      font-size: 1.1rem;
      line-height: 1.7;

      strong {
        color: var(--color-primary);
      }
    }
  }
`;

// Team section styling
const TeamContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3rem;
  gap: 2rem;
`;

const TeamMember = styled.div`
  max-width: 250px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  img {
    border-radius: 50%;
    width: 180px;
    height: 180px;
    object-fit: cover;
    border: 4px solid var(--color-primary);
    transition: border-color 0.3s ease;

    &:hover {
      border-color: var(--color-accent);
    }
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.4rem;
    color: var(--color-primary-dark);
    transition: color 0.3s ease-in-out;
  }

  p {
    color: var(--color-text-dark);
    font-weight: 500;
  }
`;

// Call to Action Section
const CallToAction = styled.div`
  padding: 4rem 3rem;
  background-color: var(--color-primary);
  color: #fff;
  text-align: center;
  transition: background-color 0.3s ease-in-out;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  a {
    background-color: #fff;
    color: var(--color-primary);
    padding: 0.85rem 1.8rem;
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background-color: var(--color-accent);
      color: #fff;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;

// Main About Us Component
const About = () => (
  <Layout>
    <Section>
      <SectionTitle>Our Story</SectionTitle>
      <SectionContent>
        <p>
          Founded in 2020, we started as a small team of passionate creators who wanted to revolutionize the digital space. 
          Over time, we have grown into a full-service agency, offering tailored solutions that drive results. 
          Our mission has always been to blend traditional values with modern technology to craft experiences that leave a lasting impact.
        </p>
      </SectionContent>
    </Section>

    <Section alt>
      <SectionTitle>Our Values</SectionTitle>
      <SectionContent>
        <p>
          At the core of our work are the principles that guide everything we do:
        </p>
        <ul>
          <li><strong>Innovation:</strong> Continuously pushing boundaries to create new possibilities.</li>
          <li><strong>Integrity:</strong> Honesty and transparency form the foundation of our relationships.</li>
          <li><strong>Excellence:</strong> Our commitment to delivering unparalleled quality in every project.</li>
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
          From web development and product design to digital marketing, we specialize in creating solutions tailored to our clients' unique needs.
          We believe in the power of collaboration, working closely with our clients to understand their vision and bring it to life through innovative digital experiences.
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