import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${(props) => (props.alt ? "var(--color-light)" : "#fff")};
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 3rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.75;
  color: var(--color-text);

  p {
    margin-bottom: 2rem;
  }
`;

// Contact form styles
const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 800px;
  margin: 2rem auto;

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1.1rem;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: var(--color-primary);
      outline: none;
    }
  }

  textarea {
    grid-column: span 2;
    min-height: 160px;
  }

  button {
    grid-column: span 2;
    padding: 1rem;
    background-color: var(--color-primary);
    color: #fff;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-accent);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  text-align: left;

  div {
    margin-bottom: 2rem;

    h3 {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--color-primary-dark);
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.1rem;
      margin: 0;
      color: var(--color-text);
    }
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const MapContainer = styled.div`
  margin-top: 3rem;

  iframe {
    width: 100%;
    height: 400px;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const SocialContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  a {
    img {
      width: 45px;
      height: 45px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.15);
      }
    }
  }
`;

const Contact = () => (
  <Layout>
    <Section>
      <SectionTitle>Contact Us</SectionTitle>
      <SectionContent>
        <p>
          Have any questions or inquiries? Feel free to reach out by filling in
          the contact form below or use our contact information. We’re here to
          help!
        </p>

        {/* Contact Form */}
        <ContactForm
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </ContactForm>

        {/* Contact Information */}
        <ContactInfo>
          <div>
            <h3>Our Address</h3>
            <p>123 Main Street, Suite 101, New York, NY 10001</p>
          </div>
          <div>
            <h3>Phone Number</h3>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>contact@ourwebsite.com</p>
          </div>
        </ContactInfo>

        {/* Google Map */}
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9111076354466!2d-74.00601508506749!3d40.71277537933044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3165bfbc23%3A0x49c49b5c6bcdf235!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1634849583714!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Our Office Location"
          />
        </MapContainer>

        {/* Social Media Links */}
        <SocialContainer>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </SocialContainer>
      </SectionContent>
    </Section>
  </Layout>
);

export const Head = () => (
  <Seo
    title="Contact"
    description="Get in touch with us"
  />
);

export default Contact;