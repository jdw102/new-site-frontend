import React from 'react'
import { Card, CardSection, Anchor, Group, Center, Text, Badge, Button, Image, Tooltip, ActionIcon } from '@mantine/core'
import { grabImage } from '@/lib/sanity-client'
import FileModal from './fileModal'
import { useDisclosure } from '@mantine/hooks'
import { IconBrandGithub } from '@tabler/icons-react'

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
                text: string,
                githubLink: string
            },
            thumbnail: object
        }
    }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Card shadow="sm" radius="md" >
        <CardSection>
                <Image
                    alt={project.title}
                    src={grabImage(project.thumbnail)}
                    height={"100%"}
                />
        </CardSection>
        <Group justify="space-between" mt="md" mb="xs">
            <Group>
                <Text fw={500}>{project.title}</Text>
                {project.viewLink.githubLink && 
                <Tooltip label="View on Github" withArrow>
                    <ActionIcon color="gray" variant="outline" size="sm">
                        <IconBrandGithub size={20} onClick={() => window.open(project.viewLink.githubLink, "_blank")}/>
                    </ActionIcon>
                </Tooltip>
                }
            </Group>
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
        {
            project.viewLink.fieldType == "string" ?
            <Anchor href={project.viewLink.link} target="_blank" w={"100%"}>
                <Button  fullWidth mt="md" radius="md">
                    {project.viewLink.text}
                </Button>
            </Anchor>
            :
            <Button  fullWidth mt="md" radius="md" onClick={() => open()}>
                    {project.viewLink.text}
            </Button>
        }
        {
        project.viewLink.fieldType == "file" && <FileModal document={project.viewLink.file} title={project.title} opened={opened} close={close}/>
        }
    </Card>
  )
}

export default ProjectCard