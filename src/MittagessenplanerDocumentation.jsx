import React from 'react';

function MittagessenplanerDocumentation() {
  return (
    <div className="documentation">
      <h2>Mittagessenplaner: Webanwendung zur Verwaltung und Planung von Mittagessen</h2>

      <section>
        <h3>Zusammenfassung</h3>
        <p>
          Der Mittagessenplaner ist eine Webanwendung, die es Nutzern ermöglicht, sich für verschiedene Orte zum Mittagessen anzumelden und zu sehen, wer sonst noch dort sein wird. 
          Dies erleichtert es den Nutzern, ihre Freunde zu finden und gemeinsam Mittag zu essen. 
          Das Projekt umfasst die Implementierung von Benutzerregistrierung, -anmeldung, Anzeige von Mittagessensorten und Check-In-Funktionalität unter Verwendung von MongoDB, Express, Node.js und einfachem HTML/CSS/JavaScript für das Frontend.
        </p>
      </section>

      <section>
        <h3>Aufgabenstellung / Ziele</h3>
        <p>
          Das Ziel war es, eine Webanwendung zu entwickeln, die verschiedene Mittagessensorte speichert und es Benutzern ermöglicht, sich für ein Datum an einem dieser Orte einzuchecken. 
          Dabei sollten Technologien wie MongoDB, Express, Node.js und JavaScript eingesetzt werden.
        </p>
        <h4>Ziele:</h4>
        <ul>
          <li>Entwicklung einer benutzerfreundlichen Registrierung und Anmeldung (Muss)</li>
          <li>Anzeige der verschiedenen Mittagessensorte (Muss)</li>
          <li>Implementierung einer Check-In-Funktionalität (Muss)</li>
          <li>Speicherung der Daten in einer NoSQL-Datenbank (Muss)</li>
          <li>Anzeige der Check-Ins der Nutzer (Kann)</li>
        </ul>
      </section>

      <section>
        <h3>Produkt</h3>
        <p>
          Der Mittagessenplaner ist eine Webanwendung, die es Nutzern ermöglicht, sich zu registrieren, anzumelden, verschiedene Mittagessensorte anzuzeigen und sich für diese einzuchecken. 
          Die Anwendung verwendet MongoDB zur Speicherung der Daten und Express.js für das Backend. 
          Die Frontend-Komponenten bestehen aus HTML, CSS und JavaScript.
        </p>
        <h4>Verwendete Technologien:</h4>
        <ul>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>

        <p>Hier ist eine Videodemonstration des Mittagessenplaners:</p>
        <video controls style={{ maxWidth: '100%', borderRadius: '10px' }}>
          <source src="/PortfolioWebseiteReact/videos/2024-06-16 21-11-36.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p>Hier ist ein Screenshot der MongoDB-Benutzerdaten:</p>
        <img src="/PortfolioWebseiteReact/images/122288-Screenshot 2024-06-16 211919.png" alt="MongoDB Users" style={{ maxWidth: '100%', borderRadius: '10px', marginTop: '20px' }} />

        <p>
          <a href="https://github.com/B1zy/LA1305-Jahr-2" target="_blank" rel="noopener noreferrer">Link zum GitHub Repo</a>
        </p>
      </section>

      <section>
        <h3>Reflexion / Auswertung</h3>
        <h4>Projektverlauf</h4>
        <p>
          Das Projekt begann mit der Grundstruktur und der Implementierung der Benutzerregistrierung und -anmeldung. Anschließend wurden die verschiedenen Mittagessensorte hinzugefügt und im Frontend angezeigt. 
          Die Check-In-Funktionalität wurde als letztes implementiert.
        </p>

        <h4>Erkenntnisse und Schwierigkeiten</h4>
        <p>
          Während der Entwicklung traten Probleme mit der Token-Authentifizierung auf, insbesondere, weil beim Registrierungsprozess kein <code>userId</code> zu den Benutzerdaten hinzugefügt wurde. 
          Dies führte dazu, dass die Check-In-Funktionalität teilweise nicht funktionierte.
        </p>

        <h4>Was lief gut?</h4>
        <p>
          Die Grundstruktur und die Implementierung der Registrierung und Anmeldung verliefen reibungslos. 
          Die Anzeige der Mittagessensorte im Frontend funktionierte ebenfalls wie geplant.
        </p>

        <h4>Was lief nicht gut?</h4>
        <p>
          Die Token-Authentifizierung und die fehlende <code>userId</code> führten zu Problemen beim Check-In-Prozess.
        </p>

        <h4>Konkrete Maßnahmen für zukünftige Projekte</h4>
        <ul>
          <li>Frühe und gründliche Tests der Authentifizierungsprozesse, um sicherzustellen, dass alle notwendigen Daten korrekt gespeichert werden.</li>
          <li>Häufigere Überprüfungen und Tests der gesamten Funktionalität während der Entwicklung.</li>
        </ul>
      </section>
    </div>
  );
}

export default MittagessenplanerDocumentation;
