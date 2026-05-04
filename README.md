# ImmoScout24 Landingpage

Diese Website ist die offizielle Landingpage fuer den ImmoScout24 Organisator:
https://www.immoscout24-organisator.de

Der ImmoScout24 Organisator ist eine Browser-Extension, die deine ImmoScout24-Suche direkt in der Plattform erweitert. Statt Notizen in externen Tools, Tabellen oder Chatverlaeufen zu verstreuen, legst du alle Infos direkt am Favoriten oder Expose ab.

## Was die Extension macht

- Notizen direkt an Immobilien speichern
- Status pro Immobilie setzen (z. B. gespeichert, kontaktiert, besichtigt)
- Schlagworte und Highlights fuer schnellere Priorisierung nutzen
- Favoriten strukturiert gruppieren und schneller vergleichen

## Nutzen

- Mehr Uebersicht bei vielen Objekten
- Schnellere Entscheidungen durch klaren Status je Immobilie
- Weniger Medienbruch, weil alles direkt in ImmoScout24 bleibt
- Lokale Speicherung im Browser statt externer SaaS-Tools

## Browser-Support

Die Extension ist verfuegbar fuer:

- Google Chrome - [im Web Store öffnen](https://chromewebstore.google.com/detail/immoscout24-organisator/djmakpjgidbgchnhhplcigkfkcioaija)
- Mozilla Firefox - [im Web Store öffnen](https://addons.mozilla.org/de/firefox/addon/immoscout24-organizer)
- Microsoft Edge - [im Web Store öffnen](https://microsoftedge.microsoft.com/addons/detail/immoscout24-organisator/godffgckocjmdfcomoaincfiafackebl)

## Homepage

Homepage mit weiteren Informationen

- [www.immoscout24-organisator.de](https://www.immoscout24-organisator.de)

## Technisches

### Voraussetzungen

- Node.js 20+
- npm

### Lokale Entwicklung

1. Abhaengigkeiten installieren:
   - `npm install`
2. Dev-Server starten:
   - `npm run dev`

### Build und Vorschau

- Produktions-Build erstellen:
  - `npm run build:landing`
- Build lokal pruefen:
  - `npm run preview`

Der Build wird in `landing-dist/` erzeugt.

### Deployment (GitHub Pages)

Der Deploy-Workflow liegt in `workflows/pages.yml`.

- Pull Requests: Build und Artifact-Upload
- Push auf `main`: Build + Deploy
- `workflow_dispatch`: manueller Build/Deploy

Optional kann der Base Path ueber `GITHUB_PAGES_BASE_PATH` gesetzt werden.
Ohne Variable verwendet Vite den Standard `./`.

### Projektstruktur

- `index.html` - Seiten-Markup
- `src/main.ts` - Interaktionen (z. B. Lightbox)
- `src/styles.css` - Styling
- `public/` - statische Assets (Icons, Logos, Screenshots)
- `workflows/pages.yml` - CI/CD fuer GitHub Pages

## Dahinter

Der ImmoScout24 Organisator wird von [TechRock](https://techrock.de) entwickelt und gepflegt.

- https://techrock.de