import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto-condensed';
import 'typeface-roboto';
import { mq } from './presets';

const GlobalStyles = createGlobalStyle`
  /* Color palette */
  :root {
    --black: #000000;
    --lightGrey: #6d6d6d;
    --cssOrange: #ffa000;
    --darkGrey: #424242;
    --white: #ffffff;
    --htmlGreen: #15a710;
    --jsxBlue: #3eacf7;
    --jsYellow: #f7df1e;
  }
  /* Fonts */
  :root {
    --condensedFont: 'Roboto Condensed';
    --mainFont: 'Roboto';
    --lightFont: 200;
    --regularFont: 300;
    --boldFont: 500;
  }

  /* Add some sizing helpers */
  :root {
    --xxl: 5rem;
    --xl: 4rem;
    --lg: 3.5rem;
    --md: 2rem;
    --sm: 1.5rem;
    --xs: 1rem;
    --xxs: 0.5rem;
  }

  html {
    font-size: 10px;
  }

  body {
    /* Just so I can make the storybook background white! */
    background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};
    box-sizing: border-box;
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  .container {

    ${mq.phablet} {
      padding: 0 var(--md);
    }

    ${mq.desktop} {
      padding: 0 var(--md);
    }

    ${mq.xl} {
      padding: 0 var(--xxl);
    }
  }
`;

export default GlobalStyles;
