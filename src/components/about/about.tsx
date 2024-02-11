import React from 'react'
import { Stack, Title, Grid, GridCol, Center, Avatar  } from '@mantine/core';
import { grabImage } from '@/lib/sanity-client';
import Work from './work';


const About = ({aboutInfo , workExperiences}: {aboutInfo: {
    aboutMe: string,
    title: string,
    image: object
},
workExperiences: { position: string; company: string, startDate: string, endDate: string, description: string, logo: object }[]

}) => {
    return (
        <Center m={100}>
            <Stack>
                <Grid gutter="xl" justify='space-apart'>
                    <GridCol  span={{ base: 12, lg: 4 }} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Stack>
                            <Center>
                                <Avatar variant="filled" radius="sm" size="xl" h={150} w={150} src={grabImage(aboutInfo.image)} />
                            </Center>
                            <Title order={2} pl ={30} pr = {30} style={{textAlign: 'center', borderBottom: '10px var(--mantine-color-indigo-7) solid'}}>
                                {aboutInfo.title}
                            </Title>
                        </Stack>
                    </GridCol>
                    <GridCol span={{ base: 12, lg: 8 }}  bg="var(--mantine-color-gray-light)" p={20} >
                                {
                                    aboutInfo.aboutMe.split('\n').map((paragraph, key) => (
                                        <p key={key}>
                                            &nbsp; &nbsp; &nbsp; &nbsp;{paragraph}
                                        </p>
                                    ))
                                }
                    </GridCol>
                </Grid>
                <Work workExperiences={workExperiences}/>
            </Stack>
        </Center>
    )
}

export default About;