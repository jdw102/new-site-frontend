import { Grid, GridCol, Center, Title } from '@mantine/core'
import React from 'react'
import SocialLinks from '../home/socialLinks'
import Image from 'next/image'
import { grabImage } from '@/lib/sanity-client'

const Contact = ({blurb, email, image, socialLinks} :
    {
        blurb: string,
        email: string,
        image: object,
        socialLinks: {url: string, name: string}[]
    }) => {
  return (
    <Center >
        <Grid gutter="xl" align='center' p = {20} w={1000} >
            <GridCol span={{base: 6, md: 4}}>
                <div>
                    <Center >
                        <p style={{fontSize: '0.8rem', color:"var(--mantine-color-gray-3)" }}>
                            {blurb}
                        </p>
                    </Center>
                    <Center>
                        <SocialLinks socialLinks={socialLinks} size="sm"/>
                    </Center>
                </div>
            </GridCol>
            <GridCol span={{base: 6, md: 4}}>
                <Center>
                    <div>
                        <Title order={4} c="gray.3">
                                    Contact Me
                        </Title> 
                        <p style={{fontSize: '0.8rem', color:"var(--mantine-color-gray-3)" }}>
                            email: {email}
                            <br />
                            phone: Reach out!
                        </p>
                    </div>
                </Center>
            </GridCol>
            <GridCol span={{base: 12, md: 4}}>
                <Center>
                    <Image src={grabImage(image)} alt="contact" height={300} width={400} style={{borderRadius: '1rem'}}/>
                </Center>
            </GridCol>
        </Grid>
    </Center>
  )
}

export default Contact