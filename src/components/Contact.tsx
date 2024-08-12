import React from "react";
import { Link } from "react-router-dom";
import "../Global.css";

// Import images
import twitterIcon from "../Images/x-twitter-copy.svg";
import githubIcon from "/Users/dillanmilosevich/Personal-Website/personal-website-react/src/Images/github-3-copy.svg";
import linkedinIcon from "/Users/dillanmilosevich/Personal-Website/personal-website-react/src/Images/linkedin-copy.svg";

const Contact: React.FC = () => {
  return (
    <div>
      <header>
        <Link to="/" className="back-button">
          <u>Back</u>
        </Link>
        <h1 className="heading">Contact</h1>
      </header>
      <br />
      <div className="contact-body">
        <p className="outro">
          Let's turn your ideas into digital masterpieces! Whether it's coding
          magic or turning coffee into code, I'm here for it.
          <span className="infos"> Reach out,</span> and let's create something
          extraordinary together!
        </p>
        <br />
        <br />
        <div className="contacts">
          <ul>
            <li>
              <strong>Email me:</strong>{" "}
              <a href="mailto:Dillanxx@icloud.com">Dillanxx@icloud.com</a>
            </li>
            <br />
            <li>
              <strong>Shoot me a DM on </strong>
              <span className="contact-link">
                <a
                  href="https://twitter.com/dillanx1x"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterIcon} alt="Twitter" />
                </a>
              </span>
            </li>
            <br />
            <br />
            <li>
              Come over to
              <span className="contact-link">
                <a
                  href="https://github.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </span>
            </li>
            <br />
            <br />
            <li>
              Say "hey" on
              <span className="contact-link">
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              </span>
            </li>
            <br />
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
