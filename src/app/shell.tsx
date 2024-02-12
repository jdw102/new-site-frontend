import React from 'react'
import { AppShellMain, AppShell } from '@mantine/core';
import Navbar from '@/components/navbar/navbar';

const links = [
  "Home",
  "About",
  "Projects",
  "Contact"
]

const Shell = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  
  return (
    <AppShell
        header={{ height: 70 }}
      >
      <Navbar links={links} />
      <AppShellMain>
        {children}
      </AppShellMain>
    </AppShell>
  )
}

export default Shell