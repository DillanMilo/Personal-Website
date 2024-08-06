import React from "react";
import { useAnimation } from "../Hooks/useAnimation";
import "../Global.css";

// Import images
import twitterIcon from "../Images/x-twitter-copy.svg";
import githubIcon from "/Users/dillanmilosevich/Personal-Website/personal-website-react/src/Images/github-3-copy.svg";
import linkedinIcon from "/Users/dillanmilosevich/Personal-Website/personal-website-react/src/Images/linkedin-copy.svg";

const Home: React.FC = () => {
  const nameText = useAnimation("Dillan.", 200);

  return (
    <div className="body">
      <header>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/about">Info</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="intro">
        <h3>Heya, my name is</h3>
        <h1 className="name">
          <span>{nameText}</span>
        </h1>
        <h1 className="build">I build stuff on the web.</h1>
        <br />
        <p className="intro-text">
          I’m a junior software engineer, weaving technology and creativity into
          every line of code. My foundation in a creative background, coupled
          with a love for tech, fuels my enthusiasm for software engineering.
          Building isn’t just a task; it’s a statement. Join me in the realm of
          possibilities as we transform your ideas into
          <span> tangible solutions.</span>
        </p>
        <br />
        <div className="projectbutton">
          <h2>
            <a href="/projects">Check out my projects</a>
          </h2>
        </div>
      </section>

      <footer className="footer">
        <div id="social">
          <ul>
            <li>
              <a
                href="https://twitter.com/dillanx1x"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
