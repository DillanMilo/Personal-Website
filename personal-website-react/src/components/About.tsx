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
          Hi! I'm a software engineer who loves blending creativity with
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
          <li className="skills">Certified Front-End Engineer</li>
          <br />
          <ul>
            <li className="skillss">Web Development foundations</li>
            <li className="skillss">
              Creating and Deploying Interactive Websites
            </li>
            <li className="skillss">
              Strong foundation in HTML, CSS, and JavaScript
            </li>
            <li className="skillss">
              Proficient in modern front-end frameworks and libraries: React,
              Redux
            </li>
            <li className="skillss">Experienced in testing with Mocha</li>
          </ul>
          <br />
          <li className="skills">Version Control</li>
          <br />
          <ul>
            <li className="skillss">
              Proficient in Git and GitHub for version control and collaboration
            </li>
          </ul>
          <br />
          <li className="skills">Deployment</li>
          <br />
          <ul>
            <li className="skillss">
              Proficient with deploying applications using Vercel & Netlify
            </li>
          </ul>
          <br />
          <li className="skills">Problem Solving and Debugging</li>
          <br />
          <ul>
            <li className="skillss">
              Strong analytical and problem-solving skills, with a keen eye for
              detail
            </li>
          </ul>
          <br />
          <li className="skills">Back-End Development (in progress)</li>
          <br />
          <ul>
            <li className="skillss">
              Currently studying back-end technologies to become a full-stack
              developer
            </li>
            <li className="skillss">
              Hands-on experience with Node.js and Express.js
            </li>
            <li className="skillss">
              Working knowledge of database management (e.g., MongoDB, SQL)
            </li>
          </ul>
          <br />
          <li className="skills">Future Goals</li>
          <br />
          <ul>
            <li className="skillss">
              Complete full-stack development training and gain proficiency in
              back-end technologies
            </li>
            <li className="skillss">
              Continuously improve and stay updated with the latest trends in
              web development
            </li>
          </ul>
        </ul>
      </section>
    </div>
  );
};

export default About;
