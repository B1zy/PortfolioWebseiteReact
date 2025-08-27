import React from 'react';
import { useTranslation } from 'react-i18next';

function MittagessenplanerDocumentation() {
  const { t } = useTranslation();
  
  return (
    <div className="documentation">
      <h2>{t('documentation.mittagessenplaner.title')}</h2>

      <section>
        <h3>{t('documentation.mittagessenplaner.summary.title')}</h3>
        <p>
          {t('documentation.mittagessenplaner.summary.content')}
        </p>
      </section>

      <section>
        <h3>{t('documentation.mittagessenplaner.task.title')}</h3>
        <p>
          {t('documentation.mittagessenplaner.task.content')}
        </p>
        <h4>{t('documentation.mittagessenplaner.task.goals')}</h4>
        <ul>
          {t('documentation.mittagessenplaner.task.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>{t('documentation.mittagessenplaner.product.title')}</h3>
        <p>
          {t('documentation.mittagessenplaner.product.content')}
        </p>
        <h4>{t('documentation.mittagessenplaner.product.technologies')}</h4>
        <ul>
          {t('documentation.mittagessenplaner.product.items', { returnObjects: true }).map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <p>{t('documentation.mittagessenplaner.product.video')}</p>
        <video controls style={{ maxWidth: '100%', borderRadius: '10px' }}>
          <source src="/videos/2024-06-16 21-11-36.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p>{t('documentation.mittagessenplaner.product.screenshot')}</p>
        <img src="/images/122288-Screenshot 2024-06-16 211919.png" alt="MongoDB Users" style={{ maxWidth: '100%', borderRadius: '10px', marginTop: '20px' }} />

        <p>
          <a href="https://github.com/B1zy/LA1305-Jahr-2" target="_blank" rel="noopener noreferrer">
            {t('documentation.mittagessenplaner.product.repo')}
          </a>
        </p>
      </section>

      <section>
        <h3>{t('documentation.mittagessenplaner.reflection.title')}</h3>
        <h4>{t('documentation.mittagessenplaner.reflection.progress.title')}</h4>
        <p>
          {t('documentation.mittagessenplaner.reflection.progress.content')}
        </p>

        <h4>{t('documentation.mittagessenplaner.reflection.insights.title')}</h4>
        <p>
          {t('documentation.mittagessenplaner.reflection.insights.content')}
        </p>

        <h4>{t('documentation.mittagessenplaner.reflection.good.title')}</h4>
        <p>
          {t('documentation.mittagessenplaner.reflection.good.content')}
        </p>

        <h4>{t('documentation.mittagessenplaner.reflection.bad.title')}</h4>
        <p>
          {t('documentation.mittagessenplaner.reflection.bad.content')}
        </p>

        <h4>{t('documentation.mittagessenplaner.reflection.measures.title')}</h4>
        <ul>
          {t('documentation.mittagessenplaner.reflection.measures.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MittagessenplanerDocumentation;
