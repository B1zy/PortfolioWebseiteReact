import React, { useRef, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Need to install this package
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { getRandomColorCombination } from './randomColor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'devicon/devicon.min.css';

// Import section components
import IntroSection from './sections/IntroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './Footer';

// Import documentation pages
import GeographieQuizDocumentation from './GeographieQuizDocumentation';
import MemeGeneratorDocumentation from './MemeGeneratorDocumentation';
import MittagessenplanerDocumentation from './MittagessenplanerDocumentation';
import VerschluesselungDocumentation from './VerschluesselungDocumentation';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <BrowserRouter basename="/PortfolioWebseiteReact">
      <ScrollToTop />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#ff0000", "#00ff00"]
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.5,
              random: false
            },
            size: {
              value: 3,
              random: true
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            }
          },
          retina_detect: true
        }}
      />
      
      <header className="header">
        <div className="logo">
          <HashLink smooth to="/#top">My Portfolio</HashLink>
        </div>
        <nav className="navbar">
          <ul>
            <li><HashLink smooth to="/#top">Home</HashLink></li>
            <li><HashLink smooth to="/#about">About Me</HashLink></li>
            <li><HashLink smooth to="/#projects">Projects</HashLink></li>
            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
          </ul>
        </nav>
      </header>

      <Routes>
        {/* Main site is the default route */}
        <Route path="/" element={
          <div className="main-content">
            <section id="top" className="intro-section">
              <IntroSection />
            </section>
            
            <section id="about" className="about-section">
              <AboutSection />
            </section>
            
            <section id="projects" className="projects-section">
              <ProjectsSection />
            </section>
            
            <section id="contact" className="contact-section">
              <ContactSection />
            </section>
          </div>
        } />
        
        {/* Documentation pages remain as separate routes */}
        <Route path="/geographie-quiz" element={<GeographieQuizDocumentation />} />
        <Route path="/meme-generator" element={<MemeGeneratorDocumentation />} />
        <Route path="/mittagessenplaner" element={<MittagessenplanerDocumentation />} />
        <Route path="/verschlusselungswebseite" element={<VerschluesselungDocumentation />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
