import 'styles/global.css';

import { ThemeProvider } from 'next-themes';
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

import Navbar from 'components/Navbar';

const interVariable = Inter();

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className={`px-4 ${interVariable.className}`}>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ThemeProvider>
  );
}
