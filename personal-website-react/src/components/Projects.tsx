import React from "react";
import "./Projects.css";

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <header>
        <a href="/" className="back-button">
          <u>Back</u>
        </a>
        <h1 className="projects">Projects</h1>
        <br />
        <br />
      </header>
      <h3 className="tap">Tap on any below to view</h3>
      <ol className="project">
        <li>
          <a
            href="https://game-hub-x.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Game Hub
          </a>
        </li>
        <br />
        {/* Add more project links here */}
      </ol>
    </div>
  );
};

export default Projects;
