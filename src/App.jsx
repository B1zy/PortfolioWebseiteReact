import React, { useRef, useEffect, useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Need to install this package
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { getRandomColorCombination } from './randomColor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Add this import
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'devicon/devicon.min.css';
import './i18n'; // important!
// Import language dropdown component
import LanguageDropdown from './components/LanguageDropdown';
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
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Add this function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing tsParticles");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded:", container);
  }, []);

  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 100, // Increase particle count
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: [ "#FFFF00"] // Use vibrant colors
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 1, // More opaque
              random: true // Some randomness in opacity
            },
            size: {
              value: 4,
              random: true
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#FFA500",
              opacity: 0.6  ,
              width: 1.5
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true, // Random movement
              straight: false,
              out_mode: "out",
              bounce: false,
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "grab" // Change to grab for a different effect
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        }}
      />
      
      <header className="header">
        <div className="logo">
          <HashLink smooth to="/#top">{t('nav.logo')}</HashLink>
        </div>
        
        {/* Mobile burger menu button */}
        <div className="burger-menu-button" onClick={toggleMobileMenu}>
          <div className={`burger-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className="header-language-switcher"><LanguageDropdown /></div>
        </div>
        
        {/* Standard navigation for desktop */}
        <nav className="navbar desktop-nav">
          <ul>
            
            <li><HashLink smooth to="/#about">{t('nav.about')}</HashLink></li>
            <li><HashLink smooth to="/#projects">{t('nav.projects')}</HashLink></li>
            <li><HashLink smooth to="/#contact">{t('nav.contact')}</HashLink></li>
            <div className="header-language-switcher"><LanguageDropdown /></div>
          </ul>
        </nav>
        
        
        
        {/* Mobile navigation overlay */}
        <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <ul>
              <li><HashLink smooth to="/#top" onClick={closeMobileMenu}>{t('nav.home')}</HashLink></li>
              <li><HashLink smooth to="/#about" onClick={closeMobileMenu}>{t('nav.about')}</HashLink></li>
              <li><HashLink smooth to="/#projects" onClick={closeMobileMenu}>{t('nav.projects')}</HashLink></li>
              <li><HashLink smooth to="/#contact" onClick={closeMobileMenu}>{t('nav.contact')}</HashLink></li>
            </ul>
            
            {/* Add language dropdown at bottom of mobile menu */}
            <div className="mobile-language-switcher">
              <p className="language-label">{t('footer.language')}</p>
              <LanguageDropdown />
            </div>
          </nav>
        </div>
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
