import React from 'react';

function MemeGeneratorDocumentation() {
  return (
    <div className="documentation">
      <h2>Meme-Generator</h2>

      <section>
        <h3>Aufgabenstellung</h3>
        <p>
          Der Auftrag, den ich gewählt habe, war, einen Meme-Generator als Webapplikation zu erstellen und sich dabei intensiver mit der Entwicklung eines Frontends zu beschäftigen.
          Folgende Ziele wurden gesetzt:
        </p>
        <ul>
          <li>Z1: Es sollen einige Templates zur Verfügung stehen.</li>
          <li>Z2: Der Enduser soll den Text frei bestimmen können.</li>
        </ul>
      </section>

      <section>
        <h3>Produkt</h3>
        <p>
          Ein Meme-Generator ist eine Webseite oder App, die es Nutzern ermöglicht, schnell und einfach eigene Memes zu erstellen. 
          Mit einer benutzerfreundlichen Oberfläche können sie Bilder, Texte und Layouts kombinieren, um humorvolle Internet-Memes zu gestalten.
        </p>
        <p>
          Das Projekt zielt darauf ab, einen funktionsfähigen Meme-Generator zu erstellen, um die Anwendung von HTML, CSS, JavaScript und Express in einem praktischen Szenario zu vertiefen. 
          Besonders möchte ich Erfahrungen im Umgang mit Benutzereingaben, Bildmanipulation und Dateiuploads sammeln.
        </p>
      </section>

      <section>
        <h3>Demonstration</h3>
        <p>Hier ist ein Bild vom Meme-Generator Interface:</p>
        <img src="/PortfolioWebseiteReact/images/116445-Screenshot 2024-01-06 171610.png" alt="Meme Generator Interface" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
        <p>Und hier ist ein kurzes Demonstrationsvideo des Meme-Generators:</p>
        <video controls style={{ maxWidth: '100%', borderRadius: '10px' }}>
          <source src="/PortfolioWebseiteReact/videos/116434-2024-01-06 16-06-33.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section>
        <h3>Reflexion/Auswertung</h3>
        <p>
          Das Projekt hat mir wirklich viel gebracht und war definitiv eine Herausforderung. 
          Ich habe mich intensiv mit Dateiuploads und Overlay-Textfeldern auseinandergesetzt, was dem Meme-Generator mehr Tiefe und Benutzerfreundlichkeit verleiht. 
          Der Versuch, einen Server aufzubauen und ihn auf Heroku zu hosten, war eine steile Lernkurve. 
          Es wurde jedoch klar, dass diese fortgeschrittenen Funktionen für das Kernziel des Generators nicht unbedingt erforderlich waren. 
          Das hat mich dazu gebracht, meine Prioritäten neu zu setzen und mich auf das Wesentliche zu konzentrieren.
        </p>
        <p>
          Insgesamt bin ich mit dem Endprodukt zufrieden, aber natürlich gibt es immer Raum für Verbesserungen. 
          Insbesondere fiel mir auf, dass der heruntergeladene Text kleiner ist als in der Browser-Anzeige und möglicherweise nicht genau dem entspricht, was im Browser angezeigt wird.
        </p>
      </section>

      <section>
        <h4>Verifizierung der Ziele:</h4>
        <ul>
          <li>Z1: Es stehen einige Templates zur Verfügung.</li>
          <li>Z2: Der Enduser kann den Text frei bestimmen.</li>
        </ul>
      </section>
    </div>
  );
}

export default MemeGeneratorDocumentation;
