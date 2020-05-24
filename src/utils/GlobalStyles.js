import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto-condensed';
import 'typeface-roboto';

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
  }

  /* Add some sizing helpers */
  :root {
    --xl: 4rem;
    --lg: 3.5rem;
    --md: 2rem;
    --sm: 1.5rem;
    --xs: 1rem;
    --regular: 300;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: #000000;
    box-sizing: border-box;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
