"use client";
import React from 'react'
import { IconBrandLinkedin, IconBrandGithub, IconFile, IconHeartHandshake } from '@tabler/icons-react';
import { Group, ActionIcon, Center, Tooltip, Anchor } from "@mantine/core";
import { grabFile } from '@/lib/sanity-client';




const getIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case "linkedin":
        return <IconBrandLinkedin width={"70%"} height={"70%"} size={40} color='var(--mantine-color-gray-3)'/>;
      case "github":
        return <IconBrandGithub width={"70%"} height={"70%"} size={40} color='var(--mantine-color-gray-3)'/>;
      case "handshake":
        return <IconHeartHandshake width={"70%"} height={"70%"} size={40} color='var(--mantine-color-gray-3)'/>;
      default:
        return <IconBrandLinkedin width={"70%"} height={"70%"} size={40} color='var(--mantine-color-gray-3)'/>;
    }
  }

const SocialLinks = ({socialLinks, resume, size}:
    {
        socialLinks: {url: string, name: string}[],
        resume?: object,
        size?: string
    }) => {

    const downloadPDF = async (link: string) => {
      try {
          const response = await fetch(link);
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'jerry_worthy_resume.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
      } catch (error) {
          console.error('Error downloading PDF:', error);
      }
  };

    return (
        <Center>
            <Group>
            {
                socialLinks.map((socialLink, key) => (
                <Tooltip key={key} label={socialLink.name} position="bottom">
                    <Anchor href={socialLink.url} target="_blank">
                        <ActionIcon variant="outline"  radius="xl" size={size? size: "xl"}>
                            {getIcon(socialLink.name)}
                        </ActionIcon>
                    </Anchor>
                </Tooltip>
                ))
            }
            {
            resume &&
            <Tooltip label = "Resume" position="bottom">
                <ActionIcon  variant="outline" radius="xl" size={size? size: "xl"} onClick={() => {
                    downloadPDF(grabFile(resume));
                }}>
                <IconFile width={"70%"} height={"70%"} size={40} color='var(--mantine-color-gray-3)' />
                </ActionIcon >
            </Tooltip>
            }
            </Group>
      </Center>
    )
}

export default SocialLinks;