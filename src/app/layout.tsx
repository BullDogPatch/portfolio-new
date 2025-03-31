import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Craig Clayton | React & Next.js Developer',
  description:
    'Passionate front-end developer with a focus on building fast, modern, and accessible web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader showSpinner={false} />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className=''>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
