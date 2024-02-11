import type { Metadata } from "next";
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, AppShellHeader, AppShellMain, AppShell, Group, Anchor } from '@mantine/core';
import { theme } from '../../theme';
import {Rubik} from 'next/font/google';
import Navbar from "@/components/navbar/navbar";
import '@mantine/carousel/styles.css';



const rubik = Rubik({
  weight: ['300','400', '500', '700'],
  display: 'swap',
  variable: '--Rubik',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


const links = [
  "Home",
  "About",
  "Projects",
  "Contact"
]


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/vercel.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}  defaultColorScheme="dark">
          <AppShell
        header={{ height: 70 }}
      >
            <Navbar links={links} />
            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
