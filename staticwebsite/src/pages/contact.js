import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${(props) => (props.alt ? "#f9f9f9" : "#fff")};
  text-align: center;
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
  p {
    margin-bottom: 2rem;
  }
`;

const ContactForm = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 600px;
  margin: 2rem auto;
  input, textarea {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  textarea {
    min-height: 120px;
  }
  button {
    padding: 0.8rem;
    background-color: #333;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  div {
    margin-bottom: 1.5rem;
    h3 {
      font-size: 1.2rem;
      color: #333;
    }
    p {
      font-size: 1rem;
      color: #555;
    }
  }
`;

const MapContainer = styled.div`
  margin-top: 2rem;
  iframe {
    width: 100%;
    height: 300px;
    border: 0;
    border-radius: 5px;
  }
`;

const SocialContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  img {
    width: 40px;
    height: 40px;
  }
`;

const Contact = () => (
  <Layout>
    <Section>
      <SectionTitle>Contact Us</SectionTitle>
      <SectionContent>
        <p>
          Have any questions or inquiries? Feel free to reach out by filling in
          the contact form below or use our contact information.
        </p>

        <ContactForm name="contact" method="POST" data-netlify="true" action="/success">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </ContactForm>

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

        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9111076354466!2d-74.00601508506749!3d40.71277537933044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3165bfbc23%3A0x49c49b5c6bcdf235!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1634849583714!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Our Office Location"
          />
        </MapContainer>

        <SocialContainer>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </SocialContainer>
      </SectionContent>
    </Section>
  </Layout>
);

export const Head = () => (
  <Seo title="Contact" description="Get in touch with us" />
);

export default Contact;