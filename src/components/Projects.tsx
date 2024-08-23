import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAnimation } from "../Hooks/useAnimation";
import "../Global.css";

const Projects: React.FC = () => {
  const projectsContentRef = useRef<HTMLDivElement>(null);
  const backButtonRef = useRef<HTMLAnchorElement>(null);
  const [visibleImage, setVisibleImage] = useState<string | null>(null);
  const animatedTitle = useAnimation("PProjects", 250); // Adjusted the text to "Projects"

  const showImage = (project: string) => {
    setVisibleImage(project);
  };

  useEffect(() => {
    const animateElements = () => {
      if (projectsContentRef.current) {
        const elements =
          projectsContentRef.current.querySelectorAll(".fade-in");
        // Cast to NodeListOf<HTMLElement>
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
    <div id="projects">
      <header>
        <Link to="/" className="back-button fade-in" ref={backButtonRef}>
          <u>Back</u>
        </Link>
        <h1 className="projects">
          <span id="animated-title">{animatedTitle}</span>
        </h1>
        <br />
      </header>
      <h3 className="tap">Tap on any below to view</h3>
      <br />
      <br />
      <div className="projects" ref={projectsContentRef}>
        <div className="project-box fade-in">
          <a
            href="https://game-hub-x.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="game-hub">-Game Hub</div>
          </a>
          <p className="project-desc fade-in">
            This is my Game Hub project, showcasing various games and features.
          </p>
        </div>
        <div className="project-box fade-in">
          <a
            href="https://reddit-mini-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="game-hub">-Reddit Mini</div>
          </a>
          <p className="project-desc fade-in">
            A streamlined React app that allows users to browse and interact
            with Reddit content in a minimalist interface.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
