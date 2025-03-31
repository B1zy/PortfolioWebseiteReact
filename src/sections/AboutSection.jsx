import React from 'react';
import './AboutSection.css';

function AboutSection() {
  const skills = [
    
    { name: "HTML5", icon: "devicon-html5-plain colored", color: "#E34F26" },
    { name: "CSS3", icon: "devicon-css3-plain colored", color: "#1572B6" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", color: "#F7DF1E" },
    { name: "React", icon: "devicon-react-original colored", color: "#61DAFB" },
    { name: "C#", icon: "devicon-csharp-plain colored", color: "#239120" },
    { name: "Git", icon: "devicon-git-plain colored", color: "#F05032" },
    { name: "Visual Studio", icon: "devicon-visualstudio-plain colored", color: "#5C2D91" }
  ];

  const traits = [
    {
      title: "Problem Solver",
      description: "I enjoy tackling complex problems and finding elegant solutions."
    },
    {
      title: "Fast Learner",
      description: "I quickly adapt to new technologies and environments."
    },
    {
      title: "Team Player",
      description: "I collaborate effectively and communicate clearly with team members."
    },
    {
      title: "Detail-Oriented",
      description: "I pay close attention to details to ensure high-quality results."
    }
  ];

  return (
    <div className="about-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="bio">
          <h3>Who I Am</h3>
          <p>
            I'm a passionate developer with experience in building web applications using modern technologies.
            My journey in programming began with small projects that gradually evolved into more complex applications.
            I enjoy solving problems and creating user-friendly interfaces.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, playing games, or enjoying outdoor activities.
          </p>
        </div>
          <div className="traits-section">
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
              gap: "2rem" 
            }}>
              {traits.map((trait, index) => (
                <div key={index} style={{ 
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  textAlign: "center",
                  transition: "transform 0.3s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <h4 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>{trait.title} ✓</h4>
                  <p style={{ lineHeight: "1.5", fontSize: "0.9rem" }}>{trait.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h3 style={{ textAlign: "center", marginBottom: "2rem", marginTop:"2rem" }}>My Skills</h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
            {skills.map((skill, index) => (
              <div key={index} style={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                width: "100px",
                textAlign: "center",
                transition: "transform 0.3s",
              }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <i className={skill.icon} style={{ fontSize: "2.5rem", marginBottom: "0.8rem" }}></i>
                <span style={{ fontSize: "0.9rem" }}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        
      
    </div>
  );
}

export default AboutSection;