import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ProjectsSection() {
  const { t } = useTranslation();
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: "geographieQuiz",
      image: "/images/111429-209092384-5d58bdca-0a9b-417f-97a6-1b3311c6ef0b.png",
      github: "https://github.com/B1zy/LA1301-Jahr-2/tree/main",
      documentation: "/geographie-quiz",
      technologies: [
        { icon: "devicon-csharp-plain colored" }
      ]
    },
    {
      id: "memeGenerator",
      video: "/videos/116434-2024-01-06 16-06-33.mp4",
      github: "https://github.com/B1zy/La1302-Jahr-2/blob/main/Projektdokumentation.md",
      documentation: "/meme-generator",
      technologies: [
        { icon: "devicon-html5-plain colored" },
        { icon: "devicon-css3-plain colored" },
        { icon: "devicon-javascript-plain colored" }
      ]
    },
    {
      id: "mittagessenplaner",
      video: "/videos/2024-06-16 21-11-36.mp4",
      github: "https://github.com/B1zy/LA1305-Jahr-2",
      documentation: "/mittagessenplaner",
      technologies: [
        { icon: "devicon-html5-plain colored" },
        { icon: "devicon-css3-plain colored" },
        { icon: "devicon-javascript-plain colored" },
        { icon: "devicon-mongodb-plain colored" }
      ]
    },
    {
      id: "verschlusselungswebseite",
      video: "/videos/2024-03-13 11-26-51.mp4",
      github: "https://github.com/B1zy/La1303-Jahr-2",
      documentation: "/verschlusselungswebseite",
      technologies: [
        { icon: "devicon-html5-plain colored" },
        { icon: "devicon-css3-plain colored" },
        { icon: "devicon-javascript-plain colored" }
      ]
    }
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">{t('projects.title')}</h2>
      <p className="section-subtitle">{t('projects.subtitle')}</p>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className="project-box"
            key={index}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-content">
              <h2>{t(`projects.${project.id}.name`)}</h2>
              <p className="project-description">{t(`projects.${project.id}.description`)}</p>
              
              <div className="project-tech-stack">
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-icon" title={tech.name}>
                    <i className={tech.icon}></i>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="project-links">
              <Link to={project.documentation} className="doc-link">{t('projects.documentation')}</Link>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">{t('projects.github')}</a>
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
                    alt={`${t(`projects.${project.id}.name`)} preview`}
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