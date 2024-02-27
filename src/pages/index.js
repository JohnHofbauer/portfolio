import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import CoreValues from "../components/CoreValues/CoreValues";
import CertificationsComponent from "../components/Certifications/Certifications";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";

const Home = () => {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/png" href="images/icon/iconsmall.png" />
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <CoreValues />
      <Acomplishments />
      <CertificationsComponent />
    </Layout>
  );
};

export default Home;
