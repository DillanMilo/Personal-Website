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
          Welcome to my digital space! I'm Dillan, a passionate software
          engineer on a journey to craft innovative solutions. My fascination
          with technology is only rivaled by my love for creativity. Whether I'm
          immersed in coding or exploring the intersection of{" "}
          <span className="infos">design and functionality,</span> I find joy in
          transforming ideas into tangible digital experiences. Join me as we
          navigate the ever-evolving landscape of technology, where every line
          of code tells a unique story.
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
