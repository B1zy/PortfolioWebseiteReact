import React from 'react';
import { useTranslation } from 'react-i18next';

function VerschluesselungDocumentation() {
  const { t } = useTranslation();
  
  return (
    <div className="documentation">
      <h2>{t('documentation.verschluesselung.title')}</h2>

      <section>
        <h3>{t('documentation.verschluesselung.task.title')}</h3>
        <p>{t('documentation.verschluesselung.task.content')}</p>
      </section>

      <section>
        <h3>{t('documentation.verschluesselung.goals.title')}</h3>
        <ul>
          {t('documentation.verschluesselung.goals.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>{t('documentation.verschluesselung.product.title')}</h3>
        <p>
          {t('documentation.verschluesselung.product.content')}
        </p>

        <h4>{t('documentation.verschluesselung.product.method.title')}</h4>
        <p>
          {t('documentation.verschluesselung.product.method.content')}
        </p>

        <h4>{t('documentation.verschluesselung.product.technologies.title')}</h4>
        <ul>
          {t('documentation.verschluesselung.product.technologies.items', { returnObjects: true }).map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <h4>{t('documentation.verschluesselung.product.codeExample')}</h4>
        <pre>
          <code>
            {`function encode() {
  const message = document.getElementById("encodeMessage").value;
  const shift = generateRandomKey(); // Use a random shift for each encoding
  let encodedMessage = '';

  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      encodedMessage += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      encodedMessage += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
    } else {
      encodedMessage += message.charAt(i);
    }
  }

  document.getElementById("encodedMessage").value = encodedMessage;
  document.getElementById("decodeKey").value = shift.toString(); // Display the key used for encoding
}`}
          </code>
        </pre>


        <h4>{t('documentation.verschluesselung.product.examples')}</h4>
        <p>{t('documentation.verschluesselung.product.encryptedMessage')}</p>
        <img src="/PortfolioWebseiteReact/images/119301-Screenshot 2024-03-15 105549.png" alt="Falscher Schlüssel" style={{ maxWidth: '100%', borderRadius: '10px', marginTop: '20px' }} />

        <h4>{t('documentation.verschluesselung.video')}</h4>
        <video controls style={{ maxWidth: '100%', borderRadius: '10px' }}>
          <source src="/PortfolioWebseiteReact/videos/2024-03-13 11-26-51.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section>
        <h3>{t('documentation.verschluesselung.reflection.title')}</h3>
        <h4>{t('documentation.verschluesselung.reflection.reflection.title')}</h4>
        <p>
          {t('documentation.verschluesselung.reflection.reflection.content')}
        </p>

        <h4>{t('documentation.verschluesselung.reflection.difficulties.title')}</h4>
        <p>
          {t('documentation.verschluesselung.reflection.difficulties.content')}
        </p>

        <h4>{t('documentation.verschluesselung.reflection.conclusion.title')}</h4>
        <p>
          {t('documentation.verschluesselung.reflection.conclusion.content')}
        </p>
      </section>
    </div>
  );
}

export default VerschluesselungDocumentation;
