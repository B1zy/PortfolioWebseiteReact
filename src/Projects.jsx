import React, { useState } from 'react';
import './styles.css'; // Your existing styles

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Geographie-Quiz als interaktive WinForms-Applikation",
      image: "/images/111429-209092384-5d58bdca-0a9b-417f-97a6-1b3311c6ef0b.png", // Image for GeoQuiz
      github: "https://github.com/B1zy/LA1301-Jahr-2/tree/main",
      documentation: "/geographie-quiz" // Internal route for the documentation
    },
    {
      name: "Meme-Generator",
      video: "/videos/116434-2024-01-06 16-06-33.mp4", // Correct path to the meme-generator video
      github: "https://github.com/B1zy/La1302-Jahr-2/blob/main/Projektdokumentation.md",
      documentation: "/meme-generator"
    },
    {
      name: "Mittagessenplaner",
      video: "/videos/2024-06-16 21-11-36.mp4", // Correct path to the lunch planner video
      github: "https://github.com/B1zy/LA1305-Jahr-2",
      documentation: "/mittagessenplaner"
    },
    {
      name: "Verschlüsselungswebseite",
      video: "/videos/2024-03-13 11-26-51.mp4", // Correct path to the encryption website video
      github: "https://github.com/B1zy/La1303-Jahr-2",
      documentation: "/verschlusselungswebseite"
    }
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
          
          {/* Show video or image preview on hover */}
          {hoveredProject === index && (
            <>
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  className="project-video-preview"
                />
              ) : (
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="project-image-preview"
                />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
