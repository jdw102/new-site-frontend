import LandingScreen from "@/components/home/landingScreen";
import About from "@/components/about/about";
import {getData, createURL } from "../lib/sanity-client";
import { Divider } from "@mantine/core";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";

export default async function Home() {
  const settingsURL = createURL("settings");
  const workExperiencesURL = createURL("workExperience");
  const projectsURL = createURL("project");
  const skillsURL = createURL("skill");
  const settingsData = await getData(settingsURL);
  const workExperiencesData = await getData(workExperiencesURL);
  const projectsData = await getData(projectsURL);
  const skillsData = await getData(skillsURL);
  const workExperiences = workExperiencesData.result;
  const homepageInfo = settingsData.result[0];
  const projects = projectsData.result;
  const skills = skillsData.result;
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
        {landingInfo &&
        <LandingScreen landingInfo={landingInfo}/>
        }
      </section>
      <Divider />
      <section id="about" style={{margin: '5rem'}}>
        {aboutInfo && workExperiences && skills &&
        <About aboutInfo={aboutInfo} workExperiences={workExperiences} skills={skills}/>}
      </section>
      <Divider />
      <section id="projects" style={{marginBottom: '5rem', marginTop: '5rem'}}>
        {projects && homepageInfo &&
        <Projects projects={projects} blurb={homepageInfo.projectBlurb}/>}
      </section>
      <Divider />
      <section id="contact" style={{backgroundColor: "var(--mantine-color-indigo-9)", padding:'2rem'}}>
        {homepageInfo &&
          <Contact blurb={homepageInfo.contactBlurb} email={homepageInfo.email} image={homepageInfo.contactImage} socialLinks={homepageInfo.socialLinks}/>}
      </section>
    </main>
  );
}
