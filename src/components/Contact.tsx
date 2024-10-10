import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Global.css";

// Import images
import twitterIcon from "../Images/x-twitter-copy.svg";
import githubIcon from "../Images/github-3-copy.svg";
import linkedinIcon from "../Images/linkedin-copy.svg";

const Contact: React.FC = () => {
  const contactContentRef = useRef<HTMLDivElement>(null);
  const backButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const animateElements = () => {
      if (contactContentRef.current) {
        const elements = contactContentRef.current.querySelectorAll(".fade-in");
        (elements as NodeListOf<HTMLElement>).forEach((el, index) => {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, index * 200); // 200ms delay between each element
        });
      }
      // Animate back button
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
    <div>
      <header>
        <Link to="/" className="back-button fade-in" ref={backButtonRef}>
          <u>Back</u>
        </Link>
        <h1 className="heading">Contact</h1>
      </header>
      <br />
      <div className="contact-body" ref={contactContentRef}>
        <p className="outro fade-in">
          Let's turn your ideas into digital masterpieces! Whether it's coding
          magic or turning coffee into code, I'm here for it.
          <span className="infos fade-in"> Reach out,</span> and let's create
          something extraordinary together!
        </p>
        <br />
        <br />
        <div className="contacts">
          <ul>
            <li className="fade-in">
              <strong>Email me:</strong>{" "}
              <a href="mailto:Dillanxx@icloud.com" className="fade-in">
                Dillanxx@icloud.com
              </a>
            </li>

            <li className="fade-in">
              <strong>Shoot me a DM on </strong>
              <span className="contact-link fade-in">
                <a
                  href="https://twitter.com/dillanx1x"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterIcon} alt="Twitter" />
                </a>
              </span>
            </li>

            <li className="fade-in">
              Come over to
              <span className="contact-link fade-in">
                <a
                  href="https://github.com/DillanMilo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </span>
            </li>

            <li className="fade-in">
              Say "hey" on
              <span className="contact-link fade-in">
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
            <h2 className="heading fade-in">Web 3</h2>
            <li className="fade-in">
              <strong>My ENS:</strong>{" "}
              <a
                href="https://app.ens.domains/dillanxx.eth"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link fade-in"
              >
                dillanxx.eth
              </a>
            </li>

            <li className="fade-in">
              <strong>My SNS:</strong>{" "}
              <a
                href="https://sns.id/domain?domain=dillanxx"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link fade-in"
              >
                dillanxx.sol
              </a>
            </li>

            <li className="fade-in">
              <strong> My Base ENS</strong>
              <a 
              href="https://app.ens.domains/dillanxx.base.eth"
              target="-blank"
              rel="noopener noreferrer"
              className="contact-link fade-in"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
