import React from 'react'
import { Card, CardSection, Anchor, Group, Text, Badge, Button, Image } from '@mantine/core'
import { grabImage } from '@/lib/sanity-client'

const ProjectCard = ({project} :
    {
        project: {
            title: string,
            description: string,
            date: string,
            techStack: string[],
            viewLink: {
                link: string,
                fieldType: string,
                file: object,
                text: string
            },
            thumbnail: object
        }
    }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md">
        <CardSection>
                <Image
                    alt={project.title}
                    src={grabImage(project.thumbnail)}
                    height={350}
                />
        </CardSection>
        <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{project.title}</Text>
            <Group>
            {
                project.techStack.map((tech, key) => (
                    <Badge key={key} color="pink" variant="filled" radius="xl">
                        {tech}
                    </Badge>
                ))
            }
            </Group>
        </Group>
        <Text size="sm" c="dimmed">
            {project.description}
        </Text>
        <Anchor href={project.viewLink.link} target="_blank" w={"100%"}>
            <Button  fullWidth mt="md" radius="md">
                {project.viewLink.text}
            </Button>
        </Anchor>
    </Card>
  )
}

export default ProjectCard