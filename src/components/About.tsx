import React, { useEffect, useRef } from "react";
import "../Global.css";

const About: React.FC = () => {
  const infoContentRef = useRef<HTMLDivElement>(null);
  const backButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const animateElements = () => {
      if (infoContentRef.current) {
        const elements = infoContentRef.current.querySelectorAll(".fade-in");
        elements.forEach((el: Element, index: number) => {
          setTimeout(() => {
            (el as HTMLElement).style.opacity = "1";
            (el as HTMLElement).style.transform = "translateY(0)";
          }, index * 200); // 200ms delay between each element
        });
      }
      // Animate back button separately if needed
      if (backButtonRef.current) {
        setTimeout(() => {
          if (backButtonRef.current) {
            backButtonRef.current.style.opacity = "1";
            backButtonRef.current.style.transform = "translateY(0)";
          }
        }, 0); // No delay for the back button
      }
    };

    animateElements();
  }, []);

  return (
    <div id="info">
      <header>
        <br />
        <br />
        <a href="/" className="back-button fade-in" ref={backButtonRef}>
          <u>Back</u>
        </a>
      </header>
      <section id="info-content" ref={infoContentRef}>
        <h1 className="infotitle fade-in">
          <u>About Me</u>
        </h1>
        <p className="fade-in">
          Hi! I'm a software engineer who loves blending creativity with
          technology. My journey in tech is fueled by a passion for both coding
          and design, allowing me to bring unique, engaging digital experiences
          to life. Whether I'm crafting intuitive interfaces or building robust
          backend systems, I thrive on{" "}
          <span className="infos fade-in">innovation and collaboration.</span>{" "}
          Let's team up and create something extraordinary together!
        </p>
        <h2 className="skillsh fade-in">
          <u>Skills</u>
        </h2>
        <ul>
          <li className="skills fade-in">Certified Front-End Engineer</li>
          <br />
          <ul>
            <li className="skillss fade-in">Web Development foundations</li>
            <li className="skillss fade-in">
              Creating and Deploying Interactive Websites
            </li>
            <li className="skillss fade-in">
              Strong foundation in HTML, CSS, and JavaScript
            </li>
            <li className="skillss fade-in">
              Proficient in modern front-end frameworks and libraries: React,
              Redux
            </li>
            <li className="skillss fade-in">
              Experienced in testing with Mocha
            </li>
          </ul>
          <br />
          <li className="skills fade-in">Version Control</li>
          <br />
          <ul>
            <li className="skillss fade-in">
              Proficient in Git and GitHub for version control and collaboration
            </li>
          </ul>
          <br />
          <li className="skills fade-in">Deployment</li>
          <br />
          <ul>
            <li className="skillss fade-in">
              Proficient with deploying applications using Vercel & Netlify
            </li>
          </ul>
          <br />
          <li className="skills fade-in">Problem Solving and Debugging</li>
          <br />
          <ul>
            <li className="skillss fade-in">
              Strong analytical and problem-solving skills, with a keen eye for
              detail
            </li>
          </ul>
          <br />
          <li className="skills fade-in">Back-End Development (in progress)</li>
          <br />
          <ul>
            <li className="skillss fade-in">
              Currently studying back-end technologies to become a full-stack
              developer
            </li>
            <li className="skillss fade-in">
              Hands-on experience with Node.js and Express.js
            </li>
            <li className="skillss fade-in">
              Working knowledge of database management (e.g., MongoDB, SQL)
            </li>
          </ul>
          <br />
          <li className="skills fade-in">Future Goals</li>
          <br />
          <ul>
            <li className="skillss fade-in">
              Complete full-stack development training and gain proficiency in
              back-end technologies
            </li>
            <br />
            <li className="skillss fade-in">
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
