import React from "react";
import { useTranslation } from 'react-i18next';

function AboutSection() {
  const { t } = useTranslation();
  
  const skills = [
    { icon: "devicon-html5-plain colored", color: "#E34F26" },
    { icon: "devicon-css3-plain colored", color: "#1572B6" },
    { icon: "devicon-javascript-plain colored", color: "#F7DF1E" },
    { icon: "devicon-react-original colored", color: "#61DAFB" },
    { icon: "devicon-csharp-plain colored", color: "#239120" },
    { icon: "devicon-git-plain colored", color: "#F05032" },
    { icon: "devicon-visualstudio-plain colored", color: "#5C2D91" },
    { icon: "devicon-powershell-plain colored", color: "#4B8BBE" },
    {
      icon: "devicon-amazonwebservices-line-wordmark coloreddevicon-amazonwebservices-plain-wordmark",
      color: "#FFFFFF",
    },
    { icon: "devicon-mongodb-plain colored", color: "#47A248" },
    {icon:"devicon-microsoftsqlserver-plain", color: "#FFFFFF"},
    {svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB"},
    {icon:"devicon-unity-plain colored", color: "#FFFFFF"},
    {icon:"devicon-docker-plain colored", color: "#2496ED"},
    {icon:"devicon-github-original colored", color: "#181717"}
  ];

  // Define the traits from translation keys
  const traits = [
    {
      key: "problemSolver",
      title: t('about.traits.problemSolver.title'),
      description: t('about.traits.problemSolver.description'),
    },
    {
      key: "fastLearner",
      title: t('about.traits.fastLearner.title'),
      description: t('about.traits.fastLearner.description'),
    },
    {
      key: "teamPlayer",
      title: t('about.traits.teamPlayer.title'),
      description: t('about.traits.teamPlayer.description'),
    },
    {
      key: "detailOriented",
      title: t('about.traits.detailOriented.title'),
      description: t('about.traits.detailOriented.description'),
    },
  ];

  return (
    <div className="about-container1">
      <h2 className="section-title"></h2>
      <div className="custom-shape-divider-bottom-1743750583">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="about-content">
        <div className="three-column-layout">
          {/* Column 1: Photo and profile section - LEFT SIDE */}
          <div className="profile-section">
            <div className="profile-image-container">
              <img
                src="/images/Lebenslauf_KamilBielski.jpeg"
                loading ="lazy"
                alt="Developer Portrait"
                className="profile-image"
              />
            </div>
            <div className="profile-links">
              <a
                href="/files/LebenslaufKamilBielski.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link resume-link"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#e05c08";
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 6px 10px rgba(243, 108, 24, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#f36c18";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <i className="fas fa-file-alt"></i> Resume
              </a>
              <a
                href="https://linkedin.com/in/kamil-bielski-98b28a281"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link linkedin-link"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#006396";
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 6px 10px rgba(0, 119, 181, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#0077B5";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com/b1zy"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link github-link"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#555";
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 6px 10px rgba(51, 51, 51, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#333";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>

          {/* Column 2: Bio text section - MIDDLE */}
          <div className="bio">
            <h3>{t('about.title')}</h3>
            <p>{t('about.bio')}</p>
            <p>{t('about.hobby')}</p>
          </div>

          {/* Column 3: Skills section - RIGHT SIDE */}
          <div className="compact-skills-section">
            <h3>{t('about.skills')}</h3>
            <div className="skills-rows">
              {skills.map((skill, index) => (
                <div key={index} className="skill-bubble">
                  {skill.icon ? (
                    <i className={skill.icon}></i>
                  ) : (
                    <img 
                      src={skill.svg} 
                      loading ="lazy"
                      alt="Skill icon" 
                      style={{ width: "28px", height: "28px" }} 
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traits section remains below the 3-column layout */}
        <div className="traits-section">
          <h3>{t('about.traits.title')}</h3>
          <div className="traits-grid compact">
            {traits.map((trait, index) => (
              <div
                key={trait.key}
                className="trait-card compact"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h4>{trait.title} ✓</h4>
                <p>{trait.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-top-1743757542">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default AboutSection;
