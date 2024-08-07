import React from "react";
import "../Global.css";

const About: React.FC = () => {
  return (
    <div id="info">
      <header>
        <br />
        <br />
        <a href="/" className="back-button">
          <u>Back</u>
        </a>
        <h1 className="infotitle">
          <u>About Me</u>
        </h1>
      </header>
      <section id="info-content">
        <p>
          Hi! I'm Dillan, a software engineer who loves blending creativity with
          technology. My journey in tech is fueled by a passion for both coding
          and design, allowing me to bring unique, engaging digital experiences
          to life. Whether I'm crafting intuitive interfaces or building robust
          backend systems, I thrive on{" "}
          <span className="infos">innovation and collaboration.</span> Let's
          team up and create something extraordinary together!
        </p>
        <h2 className="skillsh">
          <u>Skills</u>
        </h2>
        <ul>
          <li className="skills">Web Development Foundations</li>
          <br />
          <li className="skills">
            Creating and Deploying Interactive Websites
          </li>
          <br />
          <li className="skills">
            Front-end Development (HTML, CSS, Javascript, React, Redux, Mocha)
          </li>
          <br />
          <li className="skills">Certified in Software Engineering</li>
          <br />
        </ul>
      </section>
    </div>
  );
};

export default About;
