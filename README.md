# Projekt-Dokumentation

☝️ Alle Text-Stellen, welche mit einem ✍️ beginnen, können Sie löschen, sobald Sie die entsprechende Stellen ausgefüllt haben.

Kamil Bielski

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | einführung react |
|       | ...     |                                                              |
|       | 1.0.0   |                                                              |

## 1 Informieren

### 1.1 Ihr Projekt

Eine Webseite für meine Projekte.

Dort kann man die Dokumentationen lesen und das GitHub-Repository finden. Die Webseite werde ich mit React erstellen, um es kennenzulernen.
Die Webseite wird intuitiv und responsive gestaltet. Später will ich auch die Webseite selber hosten
### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ        | Beschreibung                                                                 |
| ---- | --------------- | ----------| --------------------------------------------------------------------------- |
| 1    | Muss            | Funktional | Als ein Nutzer möchte ich auf der Startseite die Kontaktinformationen sehen, damit ich den Entwickler erreichen kann. |
| 2    | Muss            | Funktional | Als ein Nutzer möchte ich auf einer Unterseite die Liste der Projekte sehen, damit ich die Projekte des Entwicklers einsehen kann. |
| 3    | Muss            | Funktional | Als ein Nutzer möchte ich die Dokumentationen der Projekte einsehen können, damit ich mehr über die Projekte erfahren kann. |
| 4    | Muss            | Funktional | Als ein Nutzer möchte ich auf jeder Projektseite einen Link zum GitHub-Repository sehen, damit ich den Quellcode der Projekte einsehen kann. |
| 5    | Muss            | Qualität   | Als ein Nutzer möchte ich, dass die Webseite auf mobilen Geräten gut dargestellt wird, damit ich auch unterwegs auf die Inhalte zugreifen kann. |
| 6    | Kann            | Funktional | Als ein Entwickler möchte ich die Webseite selbst hosten, damit ich vollständige Kontrolle über den Server habe. |
| 7    | Muss            | Qualität   | Als ein Nutzer möchte ich, dass die Webseite schnell lädt, damit ich eine angenehme Nutzungserfahrung habe. |


✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc.), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). Die User Story selber hat folgende Form: *Als ein 🤷‍♂️ möchte ich 🤷‍♂️, damit 🤷‍♂️*.

### 1.3 Testfälle
### 1.3 Testfälle

| TC-№ | Ausgangslage                                                 | Eingabe                                 | Erwartete Ausgabe                                            |
| ---- | ------------------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------ |
| 1.1  | Die Startseite wird aufgerufen.                              | Seite wird geladen                      | Kontaktinformationen werden auf der Startseite angezeigt.     |
| 2.1  | Eine Unterseite mit Projekten existiert.                     | Nutzer navigiert zur Projektseite       | Eine Liste der Projekte wird angezeigt.                      |
| 3.1  | Dokumentationen für Projekte sind auf der Webseite verfügbar. | Nutzer wählt ein Projekt und klickt auf Dokumentation | Die Dokumentation des gewählten Projekts wird angezeigt.     |
| 4.1  | Ein Projekt mit GitHub-Repository existiert.                 | Nutzer navigiert zur Projektseite       | Ein Link zum GitHub-Repository wird auf der Projektseite angezeigt. |
| 5.1  | Die Webseite wird auf einem mobilen Gerät aufgerufen.        | Seite wird auf einem mobilen Gerät geladen | Die Webseite wird responsive dargestellt und korrekt angezeigt. |
| 6.1  | Die Webseite ist auf einem eigenen Server bereitgestellt.    | Nutzer ruft die gehostete Webseite auf  | Die Webseite wird vom eigenen Server geladen.                 |
| 7.1  | Webseite ist auf einem Server mit allen Inhalten.            | Seite wird aufgerufen                   | Die Webseite lädt schnell und alle Inhalte werden angezeigt.  |


✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.


## 2 Planen
## 2 Planen

| AP-№ | Frist       | Zuständig      | Beschreibung                                                                 | geplante Zeit |
| ---- | ----------- | -------------- | ---------------------------------------------------------------------------- | ------------- |
| 1.A  | 08/23/2024  | Kamil Bielski  | GitHub-Repository erstellen                                                   | 5'            |
| 1.B  | 08/23/2024  | Kamil Bielski  | React-Grundlagen lernen und Projekt einrichten                                | 180'          |
| 2.A  | 08/30/2024  | Kamil Bielski  | Startseite erstellen mit Kontaktinformationen                                 | 30'           |
| 2.B  | 08/30/2024  | Kamil Bielski  | Unterseite mit Projekten erstellen                                            | 45'           |
| 3.A  | 09/06/2024  | Kamil Bielski  | Dokumentationen für die Projekte erstellen                                    | 45'           |
| 3.B  | 09/06/2024  | Kamil Bielski  | Verlinkung zu den GitHub-Repositories hinzufügen                              | 45'           |
| 4.A  | 09/13/2024  | Kamil Bielski  | Webseite responsive machen                                                   | 60'           |
| 5.A  | 10/18/2024  | Kamil Bielski  | Lernen, wie man eine Webseite auf einem Server hostet                         | 60'           |
| 5.B  | 10/18/2024  | Kamil Bielski  | Webseite auf einem Server hosten                                              | 60'           |
| 6.A  | 10/25/2024  | Kamil Bielski  | Webseite testen und Ladegeschwindigkeit optimieren                            | 45'           |
| 7.A  | 11/01/2024  | Kamil Bielski  | Endgültiges Portfolio der Projekte erstellen                                  | 45'           |


✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.




## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
