import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAnimation } from "../Hooks/useAnimation";
import "../Global.css";

const Projects: React.FC = () => {
  const [visibleImage, setVisibleImage] = useState<string | null>(null);
  const animatedTitle = useAnimation("<Projects>", 250);

  const showImage = (project: string) => {
    setVisibleImage(project);
  };

  return (
    <div id="projects">
      <header>
        <Link to="/" className="back-button">
          <u>Back</u>
        </Link>
        <h1 className="projects">
          <span id="animated-title">{animatedTitle}</span>
        </h1>
        <br />
        <br />
      </header>

      <h3 className="tap">Tap on any below to view</h3>
      <br />
      <br />
      <div className="projects">
        <div className="project">
          <a
            href="https://game-hub-x.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            -Game Hub
          </a>
          <p></p>
        </div>
      </div>
      <div className="projectdesc">
        This is my Game Hub project, showcasing various games and features.
      </div>
    </div>
  );
};

export default Projects;
