import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { getRandomColorCombination } from './randomColor'; // Import the random color function
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
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const [color1, color2] = getRandomColorCombination(); // Get a random color combination

  return (
    <Router>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#131313", // Keep a base dark background
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: [color1, color2], // Use the random color combination for particles
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
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
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/geographie-quiz" element={<GeographieQuizDocumentation />} />
          <Route path="/meme-generator" element={<MemeGeneratorDocumentation />} />
          <Route path="/mittagessenplaner" element={<MittagessenplanerDocumentation />} />
          <Route path="/verschlusselungswebseite" element={<VerschluesselungDocumentation />} />
        </Routes>
      </div>
      <Footer /> {/* Adding the Footer here */}
    </Router>
  );
}

export default App;
