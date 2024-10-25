# Projekt-Dokumentation


Kamil Bielski

| Datum       | Version | Zusammenfassung                                              |
| ----------- | ------- | ------------------------------------------------------------ |
| 8/23/2024   | 0.0.1   | Einführung in React, Aufbau der Projektstruktur               |
| 8/30/2024   | 0.1.0   | Grundlegendes Setup von React-Routing und Particles-Integration |
| 9/6/2024    | 0.2.0   | Erstellung erster Projektkomponenten (HomePage, ContactPage)  |
| 9/13/2024   | 0.3.0   | Implementierung der Projektdokumentationen, erste Entwürfe für Design |
| 10/18/2024  | 0.9.0   | Verbesserungen der Projektdokumentationen und Anpassungen der Navigation, Hinzufügen der Video-Hover-Funktion für Projekte |
| 10/25/2024  | 1.0.0   | Letzte Überarbeitung, Style-Finishing, Footer und Abschluss der Projektdokumentationen, Projektabgabe |


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






## 5 Kontrollieren

## 5 Kontrollieren

| TC-№ | Datum       | Resultat                                             | Tester |
| ---- | ----------- | ---------------------------------------------------- | ------ |
| 1.1  | 25.10.2024  | Kontaktinformationen werden auf der Startseite angezeigt. | Kamil  |
| 2.1  | 25.10.2024  | Eine Liste der Projekte wird angezeigt.              | Kamil  |
| 3.1  | 25.10.2024  | Die Dokumentation des gewählten Projekts wird angezeigt. | Kamil  |
| 4.1  | 25.10.2024  | Ein Link zum GitHub-Repository wird auf der Projektseite angezeigt. | Kamil  |
| 5.1  | 25.10.2024  | Die Webseite wird responsive dargestellt und korrekt angezeigt. | Kamil  |
| 6.1  | 25.10.2024  | Die Webseite wird vom eigenen Server geladen.        | Kamil  |
| 7.1  | 25.10.2024  | Die Webseite lädt schnell und alle Inhalte werden angezeigt. | Kamil  |




