import React, { useState, useCallback } from 'react'; // Remove useEffect
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import HomePage from './Homepage';
import ContactPage from './ContactPage';
import Projects from './Projects'; // Import the Projects component
import GeographieQuizDocumentation from './GeographieQuizDocumentation';
import MemeGeneratorDocumentation from './MemeGeneratorDocumentation';
import MittagessenplanerDocumentation from './MittagessenplanerDocumentation';
import VerschluesselungDocumentation from './VerschluesselungDocumentation';
import Footer from './Footer'; // Import the Footer component
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';

function App() {
  const [container, setContainer] = useState(null);

  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine);
    } catch (err) {
      console.error("Failed to load particles:", err);
    }
  }, []);

  const particlesLoaded = useCallback(async (particlesContainer) => {
    setContainer(particlesContainer);
  }, []);

  return (
    <Router>
      <div className="page-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: true,
              zIndex: -1
            },
            background: {
              color: {
                value: "#131313",
              },
            },
            fpsLimit: 60,
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: {
                  h: 0,
                  s: 100,
                  l: 50
                },
                animation: {
                  h: {
                    enable: true,
                    speed: 5,
                    sync: true // Changed to true for synchronized color changes
                  },
                  s: {
                    enable: false,
                  },
                  l: {
                    enable: false,
                  }
                }
              },
              links: {
                enable: true,
                distance: 150,
                color: {
                  value: {
                    h: 0,
                    s: 100,
                    l: 50
                  },
                  animation: {
                    h: {
                      enable: true,
                      speed: 5,
                      sync: false // Changed to true for synchronized color changes
                    },
                    s: {
                      enable: false,
                    },
                    l: {
                      enable: false,
                    }
                  }
                },
                opacity: 0.5,
                width: 1,
                triangles: {
                  enable: false,
                  color: {
                    value: {
                      h: 0,
                      s: 100,
                      l: 50
                    },
                    animation: {
                      h: {
                        enable: true,
                        speed: 5,
                        sync: true
                      }
                    }
                  }
                }
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                  default: "out"
                },
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
              size: {
                value: { min: 1, max: 3 }
              },
              opacity: {
                value: 0.8
              }
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true // Disabled mouse hover effects
                },
                onClick: {
                  enable: false // Disabled click effects
                },
                resize: true
              }
            },
            detectRetina: true
          }}
        />
        <header className="header">
          <div className="logo">
            <Link to="/">My Portfolio</Link>
          </div>
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="app-container">  
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/geographie-quiz" element={<GeographieQuizDocumentation />} />
            <Route path="/meme-generator" element={<MemeGeneratorDocumentation />} />
            <Route path="/mittagessenplaner" element={<MittagessenplanerDocumentation />} />
            <Route path="/verschlusselungswebseite" element={<VerschluesselungDocumentation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
