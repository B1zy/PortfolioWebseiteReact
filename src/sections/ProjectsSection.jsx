import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Geographie-Quiz als interaktive WinForms-Applikation",
      image: "/images/111429-209092384-5d58bdca-0a9b-417f-97a6-1b3311c6ef0b.png",
      github: "https://github.com/B1zy/LA1301-Jahr-2/tree/main",
      documentation: "/geographie-quiz",
      description: "An interactive geography quiz application built with WinForms."
    },
    {
      name: "Meme-Generator",
      video: "/videos/116434-2024-01-06 16-06-33.mp4",
      github: "https://github.com/B1zy/La1302-Jahr-2/blob/main/Projektdokumentation.md",
      documentation: "/meme-generator",
      description: "A web application that lets users create custom memes with various templates."
    },
    {
      name: "Mittagessenplaner",
      video: "/videos/2024-06-16 21-11-36.mp4",
      github: "https://github.com/B1zy/LA1305-Jahr-2",
      documentation: "/mittagessenplaner",
      description: "A lunch planning application to help organize meals for the week."
    },
    {
      name: "Verschlüsselungswebseite",
      video: "/videos/2024-03-13 11-26-51.mp4",
      github: "https://github.com/B1zy/La1303-Jahr-2",
      documentation: "/verschlusselungswebseite",
      description: "A website for encrypting and decrypting messages using various algorithms."
    }
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">Check out some of my recent work</p>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className="project-box"
            key={index}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-content">
              <h2>{project.name}</h2>
              <p className="project-description">{project.description}</p>
            </div>
            
            <div className="project-links">
              <Link to={project.documentation} className="doc-link">Documentation</Link>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
            </div>
            
            {/* Show video or image preview on hover */}
            {hoveredProject === index && (
              <div className="media-preview">
                {project.video ? (
                  <video
                    src={`/PortfolioWebseiteReact${project.video}`}
                    autoPlay
                    muted
                    loop
                    className="project-video-preview"
                  />
                ) : (
                  <img
                    src={`/PortfolioWebseiteReact${project.image}`}
                    alt={`${project.name} preview`}
                    className="project-image-preview"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;