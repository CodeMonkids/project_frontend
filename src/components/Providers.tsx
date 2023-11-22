'use client';

import { Global, ThemeProvider } from '@emotion/react';
import { ReactElement } from 'react';

import globalStyles from '@/styles/global.styles';
import theme from '@/styles/theme/theme';

interface Props {
  children: ReactElement;
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
}
