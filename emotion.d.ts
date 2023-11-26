import '@emotion/react';

import React from 'react';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      common: {
        white: React.CSSProperties['color'];
        black: React.CSSProperties['color'];
      };
      text: {
        main: React.CSSProperties['color'];
      };
      pink: {
        100: React.CSSProperties['color'];
        200: React.CSSProperties['color'];
        300: React.CSSProperties['color'];
      };
      gray: {
        100: React.CSSProperties['color'];
        200: React.CSSProperties['color'];
      };
    };
    typography: {
      NPS: {
        regular: {
          fontFamily: React.CSSProperties['fontFamily'];
          fontWeight: React.CSSProperties['fontWeight'];
        };
        bold: {
          fontFamily: React.CSSProperties['fontFamily'];
          fontWeight: React.CSSProperties['fontWeight'];
        };
        extraBold: {
          fontFamily: React.CSSProperties['fontFamily'];
          fontWeight: React.CSSProperties['fontWeight'];
        };
      };
    };
  }
}
