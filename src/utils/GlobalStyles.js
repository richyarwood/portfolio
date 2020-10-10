import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto-condensed';
import 'typeface-muli';
import { mq } from './presets';

const GlobalStyles = createGlobalStyle`
  /* Color palette */
  :root {
    --bodyColor: #dfdfdf;
    --headingColor: #f5f5f5;
    --black: #000000;
    --cssOrange: #ffa000;
    --darkGrey: #1b1b1b;
    --htmlGreen: #15a710;
    --reactBlue: #3eacf7;
    --jsYellow: #ddc508;
    --lightGrey: #2f2f2f;
    --white: #ffffff;
    --pythonBlue: #356d9c;
    --postgresqlBlue: #2e5e8e;
    --sassPink: #d064e8;
    --jestGreen: #47cc50;
    --nodeGreen: #206124;
    --mongoGreen: #13aa52;
  }
  /* Fonts */
  :root {
    --mainFont: 'Roboto Condensed';
    --secondaryFont: 'Muli';
    --lightFont: 200;
    --regularFont: 400;
    --boldFont: 800;
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

  html,
  body {
    height: 100vh;
    width: 100vw;
  }

  html {
    font-size: 10px;
  }

  // TODO remove background color property?
  body {
    background-color: var(--black);
    margin: 0px;
    font-family: 'Muli';
    font-weight: var(--regularFont);
  }

  h1,
  h2,
  h3,
  h4 {
    color: var(--headingColor);
    font-weight: var(--boldFont);
    margin-bottom: 0px;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  p, ul, ol {
    color: var(--bodyColor);
    font-size: 1.6rem;
    line-height: 30px;
    margin: 0;
    margin-bottom: var(--md);
  }

  p > code {
    padding: 2px;
    margin: 0 3px;
    border-radius: 2px;
    font-size: 1.6rem;
    background-color: #888888;
    color: #000000;
  }

  a {
    text-decoration: none;
    color: var(--reactBlue);
    cursor: pointer;
  }

  .container {
      padding: var(--md);
      width: 100%;

    ${mq.tablet} {
      padding-left: var(--md);
      padding-right: var(--md);
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
