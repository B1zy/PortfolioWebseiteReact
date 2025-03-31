import React from 'react';

function VerschluesselungDocumentation() {
  return (
    <div className="documentation">
      <h2>Verschlüsselungswebseite</h2>

      <section>
        <h3>Aufgabenstellung</h3>
        <p>
          Die Aufgabe bestand darin, eine Applikation zu erstellen, mit der verschiedene Verschlüsselungsverfahren ausgewählt und angewendet werden können, 
          sodass man untereinander verschlüsselte Nachrichten und eventuell Bilder austauschen kann. 
          Unsere Gruppe (Kamil, Shaheer) hat sich entschieden, anstatt einer App eine Webseite zu erstellen.
        </p>
      </section>

      <section>
        <h3>Ziele</h3>
        <ul>
          <li>Wörter verschlüsseln können</li>
          <li>Wörter mit einem Key entschlüsseln können</li>
        </ul>
      </section>

      <section>
        <h3>Produkt</h3>
        <p>
          Wir haben eine Webseite erstellt, mit der man Wörter oder sogar Sätze verschlüsseln und entschlüsseln kann. 
          Zuerst gibt man das Wort bzw. den Satz ein und drückt auf "Encode". Danach wird das verschlüsselte Wort angezeigt und man erhält gleichzeitig einen Schlüssel, 
          mit dem die Nachricht entschlüsselt werden kann.
        </p>

        <h4>Verschlüsselungsverfahren</h4>
        <p>
          Für das Verschlüsselungsverfahren haben wir uns für die Caesar-Verschlüsselung entschieden. Diese funktioniert, indem Buchstaben im Alphabet um eine festgelegte Anzahl von Stellen verschoben werden. 
          Der Schlüssel ist die Anzahl der Stellen, um die verschoben wurde. Wir haben uns für diese Methode entschieden, weil sie einfach zu implementieren war und wir darüber in Modul 114 gelernt haben.
        </p>

        <h4>Technologien</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>

        <h4>Codebeispiel</h4>
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


        <h4>Beispiele:</h4>
        <p>Verschlüsselte Nachricht mit richtigen Schlüssel:</p>
        <img src="/PortfolioWebseiteReact/images/119301-Screenshot 2024-03-15 105549.png" alt="Falscher Schlüssel" style={{ maxWidth: '100%', borderRadius: '10px', marginTop: '20px' }} />

        <h4>Videodemonstration</h4>
        <video controls style={{ maxWidth: '100%', borderRadius: '10px' }}>
          <source src="/PortfolioWebseiteReact/videos/2024-03-13 11-26-51.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section>
        <h3>Reflexion / Auswertung</h3>
        <h4>Reflexion</h4>
        <p>
          Das Projekt verlief grundsätzlich positiv, da wir uns intensiv mit verschiedenen Verschlüsselungsmethoden beschäftigten. 
          Allerdings stießen wir auf Herausforderungen bei der Teamkoordination, was zu ineffizienter Zeitnutzung führte. 
          Trotzdem fiel die Entscheidung für eine Verschlüsselungsmethode positiv aus.
        </p>

        <h4>Schwierigkeiten</h4>
        <p>
          Ein Hindernis war unsere morgendliche Müdigkeit, die unsere Produktivität beeinträchtigte. Für zukünftige Projekte ist es wichtig, frühzeitige Lösungen für dieses Problem zu finden. 
          Wir sollten auch unsere Teamarbeit verbessern und eine klarere Aufgabenverteilung sicherstellen, um Zeitverluste zu vermeiden.
        </p>

        <h4>Fazit</h4>
        <p>
          Trotz der Schwierigkeiten waren wir in der Lage, unsere Ziele zu erreichen, wenn auch nicht so effizient wie erhofft. 
          Dies zeigt, dass eine verbesserte Teamkoordination und Organisation für den Erfolg entscheidend sind.
        </p>
      </section>
    </div>
  );
}

export default VerschluesselungDocumentation;
