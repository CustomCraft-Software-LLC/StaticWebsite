import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #7026b9;
    --color-text: #333;
    --color-background: #fff;
    --color-link: #7026b9;
    --color-link-hover: #5a1e8f;
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --font-size-base: 16px;
    --space-md: 16px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: var(--font-size-base);
    font-family: var(--font-sans);
    color: var(--color-text);
    background-color: var(--color-background);
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1; /* This allows the main content to grow and push footer down */
  }

  a {
    color: var(--color-link);
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: var(--color-link-hover);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin-bottom: var(--space-md);
  }

  p {
    margin-bottom: var(--space-md);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: var(--space-md) 0;
  }
`;

export default GlobalStyle;