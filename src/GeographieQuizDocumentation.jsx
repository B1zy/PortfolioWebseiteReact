import React from 'react';

function GeographieQuizDocumentation() {
  return (
    <div className="documentation">
      <h2>Geographie-Quiz als interaktive WinForms-Applikation</h2>

      <section>
        <h3>Aufgabenstellung</h3>
        <p>
          Im Rahmen des Lernateliers haben wir uns entschieden, eine Windows-Forms-Applikation in C# zu entwickeln. 
          Das Ziel war es, ein Geographie-Quiz zu erstellen, das die Kenntnisse über Hauptstädte testet.
        </p>
        <ul>
          <li>Am Schluss dieses Lern- und Arbeitsauftrages sollen Sie ein fertiges Produkt mit Projektdokumentation erstellt haben.</li>
        </ul>
      </section>

      <section>
        <h3>Ziele</h3>
        <p>Meine persönlichen Ziele waren:</p>
        <ul>
          <li>Realisierung eines interaktiven Programms unter Verwendung von WinForms und dessen Steuerelementen.</li>
          <li>Anwendung von objektorientierten Prinzipien für eine strukturierte und wartbare Codebasis.</li>
        </ul>
      </section>

      <section>
        <h3>Produkt</h3>
        <p>
          Das Endergebnis ist eine C#-WinForms-Applikation, die Benutzer durch verschiedene Quizmodule führt. 
          Jedes Modul stellt Fragen zu einem anderen geographischen Thema.
        </p>
        <p>Ein vorbereitender Schritt war das Erstellen eines Programmablaufplans:</p>
        <img src="/PortfolioWebseiteReact/images/geoquiz-flowchart.png" alt="Geographie Quiz Flowchart" />
        <p>Der Quellcode des Projekts befindet sich im <a href="https://github.com/B1zy/LA1301-Jahr-2/tree/main" target="_blank" rel="noopener noreferrer">GitHub-Repo</a>.</p>
      </section>

      <section>
        <h3>Demonstration</h3>
        <p>
          Hier sieht man, dass ich auf die falsche Antwort geklickt habe und das Programm hat dies erkannt und mir mitgeteilt, dass ich die falsche Antwort gewählt habe.
          <img src= "/PortfolioWebseiteReact/images/111429-209092384-5d58bdca-0a9b-417f-97a6-1b3311c6ef0b.png" alt="Geographie Quiz Wrong Answer" />
        </p>
      </section>

      <section>
        <h3>Reflexion und Auswertung</h3>
        <p>
          Die grösste Herausforderung war die Aufteilung der Aufgaben und die Koordination im Team. 
          Wir mussten lernen, unsere Kommunikation zu verbessern, um Missverständnisse zu vermeiden. 
          Die Konzeption der User Stories und Testfälle half uns, die Anforderungen klar zu definieren und einen strukturierten Entwicklungsprozess zu etablieren.
        </p>
        <p>
          Das Feedback unserer Mitschüler war wertvoll, um die Benutzerfreundlichkeit und das Design der Quizoberfläche zu verbessern.
        </p>
        <p>
          Die Integration verschiedener Quizmodule in eine Anwendung und die Implementierung von Benutzerinteraktionen zeigt, dass wir dieses Ziel erreicht haben.
        </p>
        <p>
          Insgesamt war das Projekt eine lehrreiche Erfahrung in der Softwareentwicklung, von der Planung bis zur Ausführung. 
          Es hat unser Verständnis für die Entwicklung von interaktiven Anwendungen deutlich erweitert.
        </p>
      </section>
    </div>
  );
}

export default GeographieQuizDocumentation;
