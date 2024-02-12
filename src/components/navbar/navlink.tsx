import React, { ReactElement, useEffect } from 'react'
import { useState } from 'react'
import {
    useMantineColorScheme,
  } from '@mantine/core';
import { Anchor, Group } from '@mantine/core';

const Navlink = ({link, key, onClick, icon} : {link: string, key: number, onClick?: Function, icon?: ReactElement}) => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [color, setColor] = useState(colorScheme == 'dark' ? 'var(--mantine-color-gray-5)' : 'var(--mantine-color-indigo-4)');
    useEffect(() => {
        setColor(colorScheme == 'dark' ? 'var(--mantine-color-gray-5)' : 'var(--mantine-color-indigo-4)')
    }
    , [colorScheme])

    return (
        <Anchor
        key={key}
        c = {color}
        onMouseEnter={() => setColor(colorScheme === 'dark' ? 'var(--mantine-color-gray-3)' : 'var(--mantine-color-indigo-7)')}
        onMouseLeave={() => setColor(colorScheme === 'dark' ? 'var(--mantine-color-gray-5)' : 'var(--mantine-color-indigo-4)')}
        href={`#${link.toLowerCase()}`}
        onClick={(e) => {onClick && onClick();}}
        >
            <Group>
                {icon}
                <h3 >{link}</h3>
            </Group>
        </Anchor>
    )
}

export default Navlink