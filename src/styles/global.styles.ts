import { css } from '@emotion/react';

const globalStyles = css`
  @font-face {
    font-family: 'NPSfont';
    font-weight: normal;
    src: url('/fonts/NPSfont/NPSfont_regular.ttf');
  }

  @font-face {
    font-family: 'NPSfont';
    font-weight: 700;
    src: url('/fonts/NPSfont/NPSfont_bold.ttf');
  }

  @font-face {
    font-family: 'NPSfont';
    font-weight: 800;
    src: url('/fonts/NPSfont/NPSfont_extrabold.ttf');
  }

  * {
    box-sizing: border-box;
    font-family: NPSfont, sans-serif;
  }

  body {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export default globalStyles;
