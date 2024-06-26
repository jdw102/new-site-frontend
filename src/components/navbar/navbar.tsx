"use client";
import React from 'react'
import { AppShellMain, AppShell, AppShellNavbar, AppShellHeader, Group, Burger, Tooltip, Switch, Divider } from '@mantine/core';
import {
  useMantineColorScheme,
} from '@mantine/core';
import Navlink from '@/components/navbar/navlink';
import { useDisclosure } from '@mantine/hooks';
import { IconHome, IconInfoCircle, IconTools, IconMessage } from '@tabler/icons-react';
import { useHeadroom } from '@mantine/hooks';


const links = [
  {
    name: "Home",
    icon: <IconHome size={20} />,
  },
  {
    name: "About",
    icon: <IconInfoCircle size={20} />,
  },
  {
    name: "Projects",
    icon: <IconTools size={20} />,
  },
  {
    name: "Contact",
    icon: <IconMessage size={20} />,
  }
]

const Shell = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [opened, { open, close, toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 70, collapsed: !pinned && !opened, offset: false }}
      navbar={{
        width: 10,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <AppShellHeader >
        <Group h="100%" px="xl" justify="space-between" >
          <Burger onClick={toggle} opened={opened} aria-label="Toggle navigation" hiddenFrom="sm" size="sm" />
          <Tooltip label="Toggle light/dark mode" position="bottom-start" refProp="rootRef" >
            <Switch
              checked={colorScheme === 'dark'}
              onChange={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
            />
          </Tooltip>
          <Group visibleFrom='sm'>
            {links.map((link, key) => (
              <Navlink link={link.name} key={key} />
            ))}
          </Group>
        </Group>
      </AppShellHeader>
      <AppShellMain style={{ marginTop: 70 }}>
        {children}
      </AppShellMain>
      <AppShellNavbar hiddenFrom="sm" w={300} mt={70}>
        {
          links.map((link, key) => (
            <div key={key} >
              <div style={{ marginLeft: '5rem' }}>
                <Group>
                  <Navlink icon={link.icon} link={link.name} onClick={() => close()} />
                </Group>
              </div>
              <Divider />
            </div>
          ))
        }
      </AppShellNavbar>
    </AppShell>
  )
}

export default Shell