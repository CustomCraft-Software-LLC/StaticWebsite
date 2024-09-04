import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Index = () => {
  return (
    <Layout>
      <header>
        <h1>Welcome to Our Website</h1>
        <p>We’re glad you’re here. Explore more about us or get in touch.</p>
        <nav>
          <ul>
            <li>
              <Link to="/about" className="btn-primary">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="btn-primary">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Home"
    description="Welcome to our website. Learn more about us or get in touch."
  />
);

export default Index;