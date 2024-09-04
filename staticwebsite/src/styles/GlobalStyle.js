import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Color Palette */
    --color-primary: #7026b9;
    --color-secondary: #f4f4f4;
    --color-text: #333333;
    --color-background: #ffffff;
    --color-link: #7026b9;
    --color-link-hover: #5a1e8f;

    /* Typography */
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    --font-mono: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

    /* Font Sizes */
    --font-size-base: 16px;
    --font-size-large: 18px;
    --font-size-small: 14px;

    /* Line Heights */
    --line-height-normal: 1.5;
    --line-height-tight: 1.25;
    --line-height-loose: 1.75;

    /* Spacing */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 32px;
    --space-xl: 64px;

    /* Borders */
    --border-radius: 4px;
    --border-color: #dddddd;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: var(--font-size-base);
    line-height: var(--line-height-normal);
    font-family: var(--font-sans);
    color: var(--color-text);
    background-color: var(--color-background);
  }

  body {
    margin: 0;
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: var(--color-link);
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  a:hover,
  a:focus {
    color: var(--color-link-hover);
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-md);
    font-weight: bold;
  }

  p {
    margin-bottom: var(--space-md);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--border-radius);
  }

  hr {
    border: none;
    border-top: 1px solid var(--border-color);
    margin: var(--space-lg) 0;
  }
`;

export default GlobalStyle;