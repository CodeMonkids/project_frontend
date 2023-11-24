import { Theme } from '@emotion/react';

import typography from '@/theme/typography';

const theme: Theme = {
  palette: {
    common: {
      white: '#FEFEFE',
      black: '#1E1E1E',
    },
    text: {
      main: '#FF90C2',
    },
    pink: {
      100: '#FFF6F6',
      200: '#FFEDED',
      300: '#FF90C2',
    },
    gray: {
      100: '#F6F6F6',
      200: '#808080',
    },
  },
  typography,
};

export default theme;
