import React from 'react';
import { motion } from 'framer-motion'; // Optional for animations

function IntroSection() {
  return (
    <motion.div 
      className="intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello, I'm <span className="highlight">Kamil Bielski</span></h1>
      
      <div className="intro-content">
        <p>I create responsive and user-friendly web applications with modern technologies.</p>
        <p>Based in Switzerland, I'm passionate about building solutions that make a difference.</p>
      </div>
      
      
    </motion.div>
  );
}

export default IntroSection;