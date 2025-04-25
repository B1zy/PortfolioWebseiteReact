import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function IntroSection() {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      className="intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>{t('intro.hello')} <span className="highlight">Kamil Bielski</span></h1>
      
      <div className="intro-content">
        <p>{t('intro.description1')}</p>
        <p>{t('intro.description2')}</p>
      </div>
    </motion.div>
  );
}

export default IntroSection;