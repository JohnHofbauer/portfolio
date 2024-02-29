"use client";
import { ThemeProvider } from "styled-components";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./ui/header/header";
import Hero from "./ui/hero/hero";
import BackgroundAnimation from "./ui/BackgroundAnimation/BackgroundAnimation";
import Projects from "./ui/Projects/Projects";
import Technologies from "./ui/Technologies/Technologies";
import AboutMe from "./ui/AboutMe/AboutMe";
import Accomplishments from "./ui/Accomplishments/Accomplishments";
import CertificationsComponent from "./ui/Certifications/Certifications";

import Footer from "./ui/footer/footer";

import theme from "./styles/theme"; // Import your theme object

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeProvider theme={theme}>
        <BackgroundAnimation />
        <Header />
        <Hero />
        <div id="Content">
          <Projects />
          <Technologies />
          <AboutMe />
          <Accomplishments />
          <CertificationsComponent />
          <Footer />
        </div>
      </ThemeProvider>
    </main>
  );
}
