import '@emotion/react';

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
    };
  }
}
