import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title || '';
  const siteUrl = site.siteMetadata.siteUrl || '';

  return (
    <React.Fragment>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author || "Default Author"} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </React.Fragment>
  );
};

export default Seo;