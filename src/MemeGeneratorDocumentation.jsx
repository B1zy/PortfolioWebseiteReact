import React from 'react';
import { useTranslation } from 'react-i18next';

function MemeGeneratorDocumentation() {
  const { t } = useTranslation();
  
  return (
    <div className="documentation">
      <h2>{t('documentation.memeGenerator.title')}</h2>

      <section>
        <h3>{t('documentation.memeGenerator.task.title')}</h3>
        <p>{t('documentation.memeGenerator.task.content')}</p>
        <ul>
          {t('documentation.memeGenerator.task.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>{t('documentation.memeGenerator.goals.title')}</h3>
        <p>{t('documentation.memeGenerator.goals.content')}</p>
        <ul>
          {t('documentation.memeGenerator.goals.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>{t('documentation.memeGenerator.product.title')}</h3>
        <p>{t('documentation.memeGenerator.product.content')}</p>
        
        <h4>{t('documentation.memeGenerator.product.features.title')}</h4>
        <ul>
          {t('documentation.memeGenerator.product.features.items', { returnObjects: true }).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h4>{t('documentation.memeGenerator.product.technologies.title')}</h4>
        <ul>
          {t('documentation.memeGenerator.product.technologies.items', { returnObjects: true }).map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <p>
          <a href="https://github.com/B1zy/La1302-Jahr-2/blob/main/Projektdokumentation.md" 
             target="_blank" 
             rel="noopener noreferrer">
            {t('documentation.memeGenerator.product.repo')}
          </a>
        </p>
      </section>

      <section>
        <h3>{t('documentation.memeGenerator.demonstration.title')}</h3>
        <p>{t('documentation.memeGenerator.demonstration.content')}</p>
        <video controls style={{ maxWidth: '100%', borderRadius: '10px' }}>
          <source src="/PortfolioWebseiteReact/videos/116434-2024-01-06 16-06-33.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section>
        <h3>{t('documentation.memeGenerator.reflection.title')}</h3>
        
        <h4>{t('documentation.memeGenerator.reflection.challenges.title')}</h4>
        <p>{t('documentation.memeGenerator.reflection.challenges.content')}</p>
        
        <h4>{t('documentation.memeGenerator.reflection.learnings.title')}</h4>
        <p>{t('documentation.memeGenerator.reflection.learnings.content')}</p>
        
        <h4>{t('documentation.memeGenerator.reflection.improvements.title')}</h4>
        <ul>
          {t('documentation.memeGenerator.reflection.improvements.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
        <h4>{t('documentation.memeGenerator.reflection.conclusion.title')}</h4>
        <p>{t('documentation.memeGenerator.reflection.conclusion.content')}</p>
      </section>
    </div>
  );
}

export default MemeGeneratorDocumentation;
