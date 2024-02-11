import LandingScreen from "@/components/home/landingScreen";
import About from "@/components/about/about";
import {getData, createURL } from "../lib/sanity-client";
import { Divider } from "@mantine/core";
import Projects from "@/components/projects/projects";

export default async function Home() {
  const settingsURL = createURL("settings");
  const workExperiencesURL = createURL("workExperience");
  const projectsURL = createURL("project");
  const settingsData = await getData(settingsURL);
  const workExperiencesData = await getData(workExperiencesURL);
  const projectsData = await getData(projectsURL);
  const workExperiences = workExperiencesData.result;
  const homepageInfo = settingsData.result[0];
  const projects = projectsData.result;
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

  return (
    <main>
      <section id="home">
        <LandingScreen landingInfo={landingInfo}/>
      </section>
      <Divider />
      <section id="about" style={{margin: '5rem'}}>
        <About aboutInfo={aboutInfo} workExperiences={workExperiences}/>
      </section>
      <Divider />
      <section id="projects" >
        <Projects projects={projects} blurb={homepageInfo.projectBlurb}/>
      </section>
      <Divider />
      <section id="contact">
        <div style={{height: '100vh'}}/>
      </section>
    </main>
  );
}
