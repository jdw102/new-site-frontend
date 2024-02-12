import React from 'react'
import { Title, Button } from "@mantine/core";
import Image from "next/image";
import {grabImage} from "../../lib/sanity-client";
import SocialLinks from './socialLinks';
import ScrollDownArrow from './scrollDown';





export const LandingScreen = async ({landingInfo}: {landingInfo: {
  backgroundImage: object,
  avatar: {picture: object},
  welcomeMessage: string,
  name: string,
  socialLinks: {url: string, name: string}[],
  resume: object
},

}) => {
    
    const messages = landingInfo.welcomeMessage.split('\n');
    

  return (
    <div  className={`slide-up ${true ? 'slide-up-enter-done' : ''}`} style={{backgroundImage: `url(${grabImage(landingInfo.backgroundImage)})`, backgroundSize: 'cover', height: '90vh', position: 'relative'}}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '90vh',
          backgroundColor: 'rgba(0, 0, 0, 0.85)', // Adjust opacity as needed
        }} />
        <div className = 'image-wrapper'>
          <Image src={grabImage(landingInfo.avatar.picture)} alt="avatar" height={500} width={500} style={{position: 'absolute', bottom: '0', right: '5%'}}/>
        </div>
        <div className='landing-message'>
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
            <a href='#contact'>
              <Button>
                Contact Me
              </Button>
            </a>
          </div>
          <SocialLinks socialLinks={landingInfo.socialLinks} resume={landingInfo.resume}/>
        </div>
        <div style={{position: 'absolute', left: '2%', top: '65%'}}>
          <ScrollDownArrow />
        </div>
      </div>
  )
}


export default LandingScreen;