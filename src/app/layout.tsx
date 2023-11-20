import '../styles/globals.css';

import type { Metadata } from 'next';
import { Jua } from 'next/font/google';

const jua = Jua({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={jua.className}>{children}</body>
    </html>
  );
}
