import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const PrivacySection = styled.section`
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
`;

const PrivacyTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const PrivacyContent = styled.div`
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

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  font-size: 1.1rem;
  color: #007acc;
  text-decoration: none;
  &:hover {
    color: #005f99;
  }
`;

const Privacy = () => {
  return (
    <Layout>
      <PrivacySection>
        <PrivacyTitle>Privacy Policy</PrivacyTitle>
        <PrivacyContent>
          <p>
            At [Your Company Name], we value your privacy. This privacy policy outlines how we collect, use, and protect your personal information.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Personal identification information (name, email address, etc.)</li>
            <li>Non-personal identification information (browser type, IP address, etc.)</li>
            <li>Cookies and tracking data</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Personalize your experience</li>
            <li>Communicate with you regarding updates and offers</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Your Data Protection Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li>Access: You can request access to the data we have about you.</li>
            <li>Correction: You can update or correct any incorrect information.</li>
            <li>Deletion: You can request to delete your personal data.</li>
            <li>Opt-Out: You can opt-out of communications at any time.</li>
          </ul>

          <h2>How We Protect Your Information</h2>
          <p>We implement a variety of security measures to ensure the protection of your personal data, including encryption and secure servers.</p>

          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. When we do, we will post the updated policy on this page with the date of the last revision.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at [Your Contact Information].</p>

          <BackLink to="/">Back to Home</BackLink>
        </PrivacyContent>
      </PrivacySection>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Privacy Policy"
    description="Read our privacy policy to understand how we handle your personal data and protect your privacy."
  />
);

export default Privacy;