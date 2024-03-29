"use client";
import React from 'react'
import { Stack, Title, Grid, GridCol, Center, Text } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import ProjectCard from './projectCard';
import {
    useMantineColorScheme,
  } from '@mantine/core';


const Projects = ({projects, blurb} : {
    projects: {
        title: string,
        description: string,
        date: string,
        techStack: string[],
        viewLink: {
            link: string,
            fieldType: string,
            file: object,
            text: string,
            githubLink: string
        },
        thumbnail: object
    }[],
    blurb: string
}) => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return (
            <Grid gutter="none" justify='space-apart'>
                <GridCol mb={100} span={{ base: 12, lg: 5 }} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Stack gap="xl" >
                        <Center>
                            <Title order={2} pl ={30} pr = {30} style={{textAlign: 'center', borderBottom: '10px var(--mantine-color-indigo-7) solid'}} w={300}>
                                Projects
                            </Title>
                        </Center>
                        <Center >
                            <Text w={"70%"}>
                                {blurb}
                            </Text>
                        </Center>
                    </Stack>
                </GridCol>
                <GridCol span={{ base: 12, lg: 7 }}  
                bg={colorScheme === 'dark' ? "var(--mantine-color-dark-5)" : "var(--mantine-color-indigo-1)"}>
                        <Carousel withIndicators dragFree controlsOffset="xs" c="indigo" w={"100%"} align="center">
                            {
                                projects.map((project, key) => (
                                    <CarouselSlide key={key} p={30} pl={45} pr={60} style={{justifyContent: 'center'}}>
                                        <ProjectCard project={project}/>
                                    </CarouselSlide>
                                ))
                            }
                        </Carousel>
                </GridCol>
            </Grid>
    )
}

export default Projects;