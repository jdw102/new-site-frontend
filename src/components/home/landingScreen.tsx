import React from 'react'
import { Title, Button, Group, ActionIcon, Center, Tooltip } from "@mantine/core";
import Image from "next/image";
import {grabImage} from "../../lib/sanity-client";
import SocialLinks from './socialLinks';
import ScrollDownArrow from './scrollDown';





export const LandingScreen = async ({landingInfo}: {landingInfo: {
  backgroundImage: object,
  avatar: {picture: object},
  welcomeMessage: string,
  name: string,
  socialLinks: {url: string, icon: object, name: string}[],
  resume: object
}}) => {
    
    const messages = landingInfo.welcomeMessage.split('\n');
    

  return (
    <div style={{backgroundImage: `url(${grabImage(landingInfo.backgroundImage)})`, backgroundSize: 'cover', height: '100vh', position: 'relative'}}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.85)', // Adjust opacity as needed
        }} />
        <Image src={grabImage(landingInfo.avatar.picture)} alt="avatar" height={600} width={600} style={{position: 'absolute', bottom: '0', right: '0'}}/>
        <div style={{position: 'absolute', left: '25%', top: '30%'}}>
          <Title order={3} style={{textAlign: 'center'}} c="gray.3">
            {messages[0]}
          </Title>
          <Title order={1} style={{textAlign: 'center'}} c="gray.3">
            {landingInfo.name}
          </Title>
          <br />
          <br />
          <br />
          <Title order={3} style={{textAlign: 'center'}} c="gray.3">
            {messages[1]}
          </Title>
          <div style={{display: 'flex', justifyContent: 'center', margin: '3rem'}}>
            <Button>
              Contact Me
            </Button>
          </div>
          <SocialLinks socialLinks={landingInfo.socialLinks} resume={landingInfo.resume}/>
        </div>
        <div style={{position: 'absolute', left: '2%', top: '70%'}}>
          <ScrollDownArrow />
        </div>
      </div>
  )
}


export default LandingScreen;