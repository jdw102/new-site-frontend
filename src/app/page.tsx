import LandingScreen from "@/components/home/landingScreen";
import About from "@/components/about/about";
import {getData, createURL } from "../lib/sanity-client";
import { Divider } from "@mantine/core";

export default async function Home() {
  const settingsURL = createURL("settings");
  const workExperiencesURL = createURL("workExperience");
  const settingsData = await getData(settingsURL);
  const workExperiencesData = await getData(workExperiencesURL);
  const workExperiences = workExperiencesData.result;
  const homepageInfo = settingsData.result[0];
  const landingInfo = {
    backgroundImage: homepageInfo.backgroundImage,
    avatar: homepageInfo.avatar,
    welcomeMessage: homepageInfo.welcomeMessage,
    name: homepageInfo.name,
    socialLinks: homepageInfo.socialLinks,
    resume: homepageInfo.resume
  }
  const aboutInfo = {
    aboutMe: homepageInfo.about.aboutMe,
    title: homepageInfo.about.aboutTitle,
    image: homepageInfo.about.aboutImage
  }
  console.log(landingInfo.resume);


  return (
    <main>
      <section id="home">
        <LandingScreen landingInfo={landingInfo}/>
      </section>
      <Divider />
      <section id="about">
        <About aboutInfo={aboutInfo} workExperiences={workExperiences}/>
      </section>
      <Divider />
      <section id="projects">
        <div style={{height: '100vh'}}/>
      </section>
      <Divider />
      <section id="contact">
        <div style={{height: '100vh'}}/>
      </section>
    </main>
  );
}
