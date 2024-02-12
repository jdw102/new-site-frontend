import type { Metadata } from "next";
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../../theme';
import {Rubik} from 'next/font/google';
import '@mantine/carousel/styles.css';
import './global.css'
import Shell from "../components/navbar/navbar";



const rubik = Rubik({
  weight: ['300','400', '500', '700'],
  display: 'swap',
  variable: '--Rubik',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Jerry Worthy - Software and Electrical/Computer Engineer" ,
  description: "Welcome to my portfolio website! I'm Jerry Worthy, a passionate software engineer and electrical/computer engineer. Explore my profile, projects, and ways to connect with me via email, LinkedIn, and Handshake.",
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}  defaultColorScheme="dark">
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
}
