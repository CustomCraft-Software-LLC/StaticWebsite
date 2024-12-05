import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const TermsSection = styled.section`
  padding: 40px 20px;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
`;

const TermsTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const TermsContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  p {
    margin-bottom: 20px;
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
`;

const Terms = () => {
  return (
    <Layout>
      <TermsSection>
        <TermsTitle>Terms of Service</TermsTitle>
        <TermsContent>
          <p>
            Welcome to [Your Company Name]. By using our website and services, you agree to abide by the following terms and conditions.
          </p>

          <h2>Acceptance of Terms</h2>
          <p>By accessing or using our services, you acknowledge that you have read, understood, and agree to these Terms of Service.</p>

          <h2>Use of Our Services</h2>
          <p>When using our services, you agree to:</p>
          <ul>
            <li>Provide accurate and truthful information.</li>
            <li>Comply with applicable laws and regulations.</li>
            <li>Refrain from any activity that disrupts or interferes with the service.</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and other materials, is the property of [Your Company Name] and protected by copyright laws. Unauthorized use of the content is strictly prohibited.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            [Your Company Name] shall not be liable for any damages resulting from the use or inability to use our services.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of the services constitutes acceptance of the revised terms.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about these terms, please contact us at [Your Contact Information].</p>
        </TermsContent>
      </TermsSection>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Terms of Service"
    description="Read our terms of service to understand the rules and guidelines for using our website and services."
  />
);

export default Terms;