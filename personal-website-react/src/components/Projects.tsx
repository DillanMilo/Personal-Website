import React, { useState } from "react";
import "../Global.css";
import { useAnimation } from "../Hooks/useAnimation";

const Projects: React.FC = () => {
  const [visibleImage, setVisibleImage] = useState<string | null>(null);

  const showImage = (project: string) => {
    setVisibleImage(project);
  };

  return (
    <div id="projects">
      <header>
        <a href="/" className="back-button">
          <u>Back</u>
        </a>
        <h1 className="projects">
          <span>{useAnimation("<Projects>", 250)}</span>
        </h1>
        <br />
        <br />
      </header>
      <h3 className="tap">Tap on any below to view</h3>
      <ol className="project">
        <li onClick={() => showImage("trail")}>Trail Blazers</li>
        <br />
        <li onClick={() => showImage("blossom")}>Blossom & Bloom</li>
        <br />
        <li onClick={() => showImage("tea")}>Tea Cozy</li>
        <br />
        <li onClick={() => showImage("foto")}>Fotomatic</li>
        <br />
      </ol>
      <div
        id="trailImage"
        className="project-image"
        style={{ display: visibleImage === "trail" ? "block" : "none" }}
      >
        <img
          src="Resources/Images/projects/IMG_2247.jpeg"
          alt="Trail Blazers"
        />
      </div>
      <div
        id="blossomImage"
        className="project-image"
        style={{ display: visibleImage === "blossom" ? "block" : "none" }}
      >
        <img
          src="Resources/Images/projects/IMG_2248.jpeg"
          alt="Blossom & Bloom"
        />
      </div>
      <div
        id="teaImage"
        className="project-image"
        style={{ display: visibleImage === "tea" ? "block" : "none" }}
      >
        <img src="Resources/Images/projects/IMG_2246.jpeg" alt="Tea Cozy" />
      </div>
      <div
        id="fotoImage"
        className="project-image"
        style={{ display: visibleImage === "foto" ? "block" : "none" }}
      >
        <img src="Resources/Images/projects/IMG_2245.jpeg" alt="Fotomatic" />
      </div>
    </div>
  );
};

export default Projects;
