"use client";
import React from 'react';
import { AppShellHeader, Group, Anchor, Switch, Tooltip } from '@mantine/core';
import {
    useMantineColorScheme,
  } from '@mantine/core';


const Navbar = ({links} : {links: Array<String>}) => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return (
        <AppShellHeader >
            <Group h="100%" px="xl" justify="space-between" >
                    <Tooltip label="Toggle light/dark mode" position="bottom-start" refProp="rootRef" >
                        <Switch
                        onChange={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
                        />
                    </Tooltip>
                <Group>
                {links.map((link, key) => (
                    <Anchor
                    key={key}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    c={colorScheme === 'dark' ? "gray.3" : "indigo"}>
                    <h3>{link}</h3>
                    </Anchor>
                ))}
                </Group>
            </Group>
        </AppShellHeader>
    )
}

export default Navbar;