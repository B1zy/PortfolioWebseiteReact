import React from "react";
import "./AboutSection.css";

function AboutSection() {
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
      icon: "devicon-amazonwebservices-line-wordmark colored",
      color: "#FFFFFF",
    },
    { icon: "devicon-mongodb-plain colored", color: "#47A248" },
  ];

  const traits = [
    {
      title: "Problem Solver",
      description:
        "I enjoy tackling complex problems and finding elegant solutions.",
    },
    {
      title: "Fast Learner",
      description: "I quickly adapt to new technologies and environments.",
    },
    {
      title: "Team Player",
      description:
        "I collaborate effectively and communicate clearly with team members.",
    },
    {
      title: "Detail-Oriented",
      description:
        "I pay close attention to details to ensure high-quality results.",
    },
  ];

  return (
    <div className="about-container1">
      <h2 className="section-title"></h2>
      <div class="custom-shape-divider-bottom-1743750583">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="about-content">
        <div
          className="bio-container"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            alignItems: "flex-start",
          }}
        >
          {/* Photo and profile section - LEFT SIDE */}
          <div
            className="profile-section"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "250px",
              flexShrink: 0,
            }}
          >
            <div
              className="profile-image-container"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #f36c18",
                marginBottom: "1.5rem",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src="/PortfolioWebseiteReact/images/Lebenslauf_KamilBielski.jpeg"
                alt="Developer Portrait"
                className="profile-image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              className="profile-links"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                width: "100%",
              }}
            >
              <a
                href="/path/to/your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link resume-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.7rem 1rem",
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontWeight: "600",
                  backgroundColor: "#f36c18",
                  color: "white",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
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
                <i
                  className="fas fa-file-alt"
                  style={{ marginRight: "8px" }}
                ></i>{" "}
                Resume
              </a>
              <a
                href="https://linkedin.com/in/kamil-bielski-98b28a281"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link linkedin-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.7rem 1rem",
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontWeight: "600",
                  backgroundColor: "#0077B5",
                  color: "white",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
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
                <i
                  className="fab fa-linkedin"
                  style={{ marginRight: "8px" }}
                ></i>{" "}
                LinkedIn
              </a>
              <a
                href="https://github.com/b1zy"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link github-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.7rem 1rem",
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontWeight: "600",
                  backgroundColor: "#333",
                  color: "white",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
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
                <i className="fab fa-github" style={{ marginRight: "8px" }}></i>{" "}
                GitHub
              </a>
            </div>
          </div>

          {/* Bio text section - RIGHT SIDE */}
          <div className="bio" style={{ flex: "1" }}>
            <h3
              style={{
                marginBottom: "1rem",
                fontSize: "1.8rem",
                color: "#f36c18",
              }}
            >
              Who I Am
            </h3>
            <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
              I'm a passionate developer with experience in building web
              applications using modern technologies. My journey in programming
              began with small projects that gradually evolved into more complex
              applications. I enjoy solving problems and creating user-friendly
              interfaces.
            </p>
            <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
              When I'm not coding, you can find me exploring new technologies,
              playing games, or in the gym.
            </p>
          </div>
        </div>

        <div className="traits-section">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {traits.map((trait, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  textAlign: "center",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h4 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>
                  {trait.title} ✓
                </h4>
                <p style={{ lineHeight: "1.5", fontSize: "0.9rem" }}>
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-top-1743757542">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    </div>
      <div className="skills-section">
        <h3
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
        >
          My Skills
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px 0",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                width: "100px",
                height: "87px", // height = width * sin(60°)
                margin: "-15px", // Less negative margin for rows, smaller horizontal gap
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.3s",
                zIndex: index,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {/* Triangle background */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  clipPath:
                    index % 2 === 0
                      ? "polygon(50% 0%, 0% 100%, 100% 100%)" // Triangle pointing up
                      : "polygon(0% 0%, 100% 0%, 50% 100%)", // Triangle pointing down
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: `2px solid `,
                  borderColor: "rgb(255, 255, 255)",
                  borderRadius: "2px",
                  zIndex: -1,
                  transition: "background-color 0.3s",
                }}
              />

              {/* Content inside triangle */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: index % 2 === 0 ? "10px 0 0" : "0 0 10px", // Adjusted padding for better centering
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  zIndex: 2,
                  transform:
                    index % 2 === 0 ? "translateY(5px)" : "translateY(-5px)", // Fine-tune vertical positioning
                }}
              >
                <i
                  className={skill.icon}
                  style={{
                    fontSize: "2rem",
                    marginBottom: "0.3rem",
                  }}
                ></i>
                {/* Remove the name output since it's not provided in your skills array */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
