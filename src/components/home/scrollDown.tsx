"use client";
import React, { useState, useEffect } from 'react';
import { IconArrowDown } from '@tabler/icons-react';
import { Text, Paper, Center, Divider, ActionIcon, Stack, Anchor } from '@mantine/core';

const ScrollDownArrow: React.FC = () => {
  const [isDownward, setIsDownward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDownward((prev) => !prev);
    }, 1000); // Change this value to adjust the interval of animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
        display: 'inline-block',
        transition: 'transform 0.3s ease-in-out',
        transform: isDownward ? 'translateY(0)' : 'translateY(10px)', // Adjust translateY value for the amount of push
    }}>
        <Anchor onClick={() => {
            const element = document.getElementById('about');
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }}>
            <Stack>
                <Text style={{  transform: 'rotate(-90deg) translateY(-110%)', marginTop: '3rem', marginBottom: '3rem',  }}>
                    SCROLL DOWN
                </Text>
                <IconArrowDown size={50}  />
            </Stack>
        </Anchor>
    </div>
  );
};

export default ScrollDownArrow;