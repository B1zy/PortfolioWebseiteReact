import React, { useState } from 'react';
import './styles.css'; // Your existing styles

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Geographie-Quiz als interaktive WinForms-Applikation",
      video: "path/to/geographie-quiz.mp4",
      github: "https://github.com/B1zy/LA1301-Jahr-2/tree/main",
      documentation: "/docs/geographie-quiz" // Internal route for the documentation
    },
    {
      name: "Meme-Generator",
      video: "path/to/meme-generator.mp4",
      github: "https://github.com/B1zy/La1302-Jahr-2/blob/main/Projektdokumentation.md",
      documentation: "/docs/meme-generator"
    },
    {
      name: "Mittagessenplaner",
      video: "path/to/mittagessenplaner.mp4",
      github: "https://github.com/B1zy/LA1305-Jahr-2",
      documentation: "/docs/mittagessenplaner"
    },
    {
      name: "Verschlüsselungswebseite",
      video: "path/to/verschlusselungswebseite.mp4",
      github: "https://github.com/B1zy/La1303-Jahr-2",
      documentation: "/docs/verschlusselungswebseite"
    },
  
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div
          className="project-box"
          key={index}
          onMouseEnter={() => setHoveredProject(index)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <h2>{project.name}</h2>
          <a href={project.documentation}>Documentation</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          
          {/* Show video preview on hover */}
          {hoveredProject === index && (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              className="project-video-preview"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
