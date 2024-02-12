"use client";
import React from 'react';
import { AppShellHeader, Group, Switch, Tooltip, Burger } from '@mantine/core';
import {
    useMantineColorScheme,
  } from '@mantine/core';
import Navlink from './navlink';
import { useState } from 'react';


const Navbar = ({links} : {links: Array<string>}) => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [open, setOpen] = useState(false);

    return (
        <AppShellHeader >
            <Group h="100%"  px="xl"  justify="space-between" >
                <Burger onClick={() => setOpen(!open)} opened={open} aria-label="Toggle navigation" hiddenFrom="sm" size="sm"/>
                <Tooltip label="Toggle light/dark mode" position="bottom-start" refProp="rootRef" >
                    <Switch
                    onChange={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
                    />
                </Tooltip>
                <Group visibleFrom='sm'>
                {links.map((link, key) => (
                    <Navlink link={link} key={key}/>
                ))}
                </Group>
            </Group>
        </AppShellHeader>
    )
}

export default Navbar;