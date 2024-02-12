"use client";
import React from 'react';
import { AppShellHeader, Group, Switch, Tooltip } from '@mantine/core';
import {
    useMantineColorScheme,
  } from '@mantine/core';
import Navlink from './navlink';


const Navbar = ({links} : {links: Array<string>}) => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return (
        <AppShellHeader >
            <Group h="100%" px="xl" justify="space-between" >
                    <Tooltip label="Toggle light/dark mode" position="bottom-start" refProp="rootRef" >
                        <Switch
                        onChange={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
                        />
                    </Tooltip>
                <Group >
                {links.map((link, key) => (
                    <Navlink link={link} key={key}/>
                ))}
                </Group>
            </Group>
        </AppShellHeader>
    )
}

export default Navbar;