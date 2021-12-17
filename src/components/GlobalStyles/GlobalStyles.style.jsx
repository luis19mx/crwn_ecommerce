import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Open Sans Condensed', -apple-system, BlinkMacSystemFont,
            'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
          padding: 2vh 3vw;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-tap-highlight-color: transparent;

          @media (max-width: 800px) {
            padding-left: 1vw;
            padding-right: 1vw;
          }
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        button {
          color: inherit;
          font-family: inherit;
          font-size: 100%;
          font-weight: normal;
          border: none;
          display: block;
        }
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
      `}
    />
  );
}
