import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto-condensed';
import { mq } from './presets';

const GlobalStyles = createGlobalStyle`
  /* Color palette */
  :root {
    --black: #000000;
    --lightGrey: #5C5756;
    --cssOrange: #ffa000;
    --darkGrey: #282828;
    --white: #ffffff;
    --htmlGreen: #15a710;
    --jsxBlue: #3eacf7;
    --jsYellow: #f7df1e;
  }
  /* Fonts */
  :root {
    /* --condensedFont: 'Roboto Condensed';
    --mainFont: 'Roboto Condensed'; */
    --lightFont: 200;
    --regularFont: 400;
    --boldFont: 600;
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

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};
    margin: 0;
    font-family: 'Roboto Condensed';
    font-weight: var(--lightFont);
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  .container {
      padding-left: var(--md);
      padding-right: var(--md);

    ${mq.tablet} {
      padding-left: var(--xl);
      padding-right: var(--xl);
    }
  }

  .container--remove {
      margin-left: calc(var(--md) * -1);
      margin-right: calc(var(--md) * -1);

    ${mq.tablet} {
      margin-left: calc(var(--xl) * -1);
      margin-right: calc(var(--xl) * -1);
    }
  }
`;

export default GlobalStyles;
