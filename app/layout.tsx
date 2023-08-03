import React, { ReactNode } from 'react';
import '@styles/global.css';
import { Inter } from 'next/font/google';
// import Nav from '../components/Nav'

export const metadata = {
  title: 'Computer Science blocks',
  description: 'From Physics and Mathematics to Computer Science',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" rel="preload">
      <body className="">
        <div className="gradient"></div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
