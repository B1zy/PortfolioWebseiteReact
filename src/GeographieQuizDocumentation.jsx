import React from 'react';
import { useTranslation } from 'react-i18next';

function GeographieQuizDocumentation() {
  const { t } = useTranslation();
  
  return (
    <div className="documentation">
      <h2>{t('documentation.geographieQuiz.title')}</h2>

      <section>
        <h3>{t('documentation.geographieQuiz.task.title')}</h3>
        <p>
          {t('documentation.geographieQuiz.task.content')}
        </p>
        <ul>
          {t('documentation.geographieQuiz.task.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>{t('documentation.geographieQuiz.goals.title')}</h3>
        <p>{t('documentation.geographieQuiz.goals.content')}</p>
        <ul>
          {t('documentation.geographieQuiz.goals.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>{t('documentation.geographieQuiz.product.title')}</h3>
        <p>
          {t('documentation.geographieQuiz.product.content')}
        </p>
        <p>{t('documentation.geographieQuiz.product.flowchart')}</p>
        <img src="/images/geoquiz-flowchart.png" alt="Geographie Quiz Flowchart" />
        <p>
          <a href="https://github.com/B1zy/LA1301-Jahr-2/tree/main" target="_blank" rel="noopener noreferrer">
            {t('documentation.geographieQuiz.product.repo')}
          </a>
        </p>
      </section>

      <section>
        <h3>{t('documentation.geographieQuiz.demonstration.title')}</h3>
        <p>
          {t('documentation.geographieQuiz.demonstration.content')}
          <img src= "/images/111429-209092384-5d58bdca-0a9b-417f-97a6-1b3311c6ef0b.png" alt="Geographie Quiz Wrong Answer" />
        </p>
      </section>

      <section>
        <h3>{t('documentation.geographieQuiz.reflection.title')}</h3>
        <p>
          {t('documentation.geographieQuiz.reflection.content1')}
        </p>
        <p>
          {t('documentation.geographieQuiz.reflection.content2')}
        </p>
        <p>
          {t('documentation.geographieQuiz.reflection.content3')}
        </p>
        <p>
          {t('documentation.geographieQuiz.reflection.content4')}
        </p>
      </section>
    </div>
  );
}

export default GeographieQuizDocumentation;
