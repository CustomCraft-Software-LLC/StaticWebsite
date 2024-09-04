import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const About = () => (
  <Layout>
    <h1>About Us</h1>
    <p>Learn more about this traditional yet modern static website.</p>
  </Layout>
);

export const Head = () => (
  <Seo
    title="About"
    description="Learn more about this traditional yet modern static website."
  />
);

export default About;