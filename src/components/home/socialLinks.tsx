"use client";
import React from 'react'
import { IconBrandLinkedin, IconBrandGithub, IconFile, IconHeartHandshake } from '@tabler/icons-react';
import { Group, ActionIcon, Center, Tooltip, Anchor, Stack } from "@mantine/core";
import { grabFile } from '@/lib/sanity-client';
import ScrollDownArrow from './scrollDown';



const getIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case "linkedin":
        return <IconBrandLinkedin width={"70%"} height={"70%"} size={40} />;
      case "github":
        return <IconBrandGithub width={"70%"} height={"70%"} size={40} />;
      case "handshake":
        return <IconHeartHandshake width={"70%"} height={"70%"} size={40} />;
      default:
        return <IconBrandLinkedin width={"70%"} height={"70%"} size={40} />;
    }
  }

const SocialLinks = ({socialLinks, resume, size}:
    {
        socialLinks: {url: string, name: string}[],
        resume?: object,
        size?: string
    }) => {
    return (
        <Center>
            <Group>
            {
                socialLinks.map((socialLink, key) => (
                <Tooltip key={key} label={socialLink.name} position="bottom">
                    <Anchor href={socialLink.url} target="_blank">
                        <ActionIcon variant="outline" color="gray" radius="xl" size={size? size: "xl"}>
                            {getIcon(socialLink.name)}
                        </ActionIcon>
                    </Anchor>
                </Tooltip>
                ))
            }
            {
            resume &&
            <Tooltip label = "Resume" position="bottom">
                <ActionIcon variant="outline" color="gray" radius="xl" size={size? size: "xl"} onClick={() => {
                    window.open(grabFile(resume), "_blank");
                }}>
                <IconFile width={"70%"} height={"70%"} size={40} />
                </ActionIcon>
            </Tooltip>
            }
            </Group>
      </Center>
    )
}

export default SocialLinks;