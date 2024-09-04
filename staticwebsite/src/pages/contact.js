import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Contact = () => (
  <Layout>
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to reach out.</p>
  </Layout>
);

export const Head = () => <Seo title="Contact" />;

export default Contact;