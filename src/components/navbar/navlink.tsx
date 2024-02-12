import React, { useEffect } from 'react'
import { useState } from 'react'
import {
    useMantineColorScheme,
  } from '@mantine/core';
import { Anchor } from '@mantine/core';

const Navlink = ({link, key} : {link: string, key: number}) => {
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
        >
            <h3 >{link}</h3>
        </Anchor>
    )
}

export default Navlink