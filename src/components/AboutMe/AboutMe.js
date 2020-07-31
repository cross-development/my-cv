//Core
import React from "react";
//Components
import MainInfo from "./MainInfo";
import Projects from "./Projects";
import WorkExp from "./WorkExp";
import Education from "./Education";
//Data
import projects from "../../data/projects.json";
//Style
import "../../styles/main.css";

const AboutMe = () => (
  <section className="about-me-container">
    <MainInfo />

    <Projects projects={projects} />

    <WorkExp />

    <Education />
  </section>
);

export default AboutMe;
