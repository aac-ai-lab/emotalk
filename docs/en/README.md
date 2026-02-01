---
layout: default
title: "Documentation index (English)"
---
# Documentation index (English)

**Language / Idioma:** [English](README.html) | [Português (Brasil)](../pt-br/README.html)

Emotalk project (AAC app with emojis) documentation.

| Document | Content |
|----------|---------|
| **[Resources and justifications](RESOURCES.html)** | List of all Emotalk resources and the justification (evidence base or benefit) for each. |
| **[Vocabulary](VOCABULARY.html)** | Categories and words (emojis) included in the communication board. |
| **[Colourful Semantics](COLOURFUL_SEMANTICS.html)** | Semantic roles (Who, What doing, What, Where, When, Describing) and colour coding applied to the board. |

## Overview

**Emotalk** is an augmentative and alternative communication (AAC) app designed to help express ideas and feelings through emojis. It applies **Colourful Semantics** (colour-coded sentence roles), **Shape Coding** (shapes by grammatical role), **SVOMPT** (Subject–Verb–Object–Manner–Place–Time sentence order), and supports offline use, phrase persistence, and drag-and-drop reordering. For a description and justification of each resource, see **[Resources and justifications](RESOURCES.html)**.

### Features

- **Languages (pt-BR and EN):** Interface and speech in Portuguese (Brazil) or English; choose in Settings → General.
- **PWA (offline):** Install and use without internet; service worker caches the app.
- **Colourful Semantics:** Categories and words colour-coded by sentence role (Who, What doing, What, Where, When, Describing); enable/disable in Settings → Legend.
- **Shape Coding:** Distinct shapes per role (rectangle, hexagon, arrow, etc.); enable in Settings → Legend.
- **SVOMPT:** Order phrase when speaking, bar with S-V-O-M-P-T slots, guided mode, sort bar; options in Settings → SVOMPT.
- **Phrase bar:** Add pictograms to build a sentence; speak or clear; bar is saved in localStorage.
- **Drag and drop:** Reorder pictograms in the phrase bar (desktop).
- **Settings:** Modal with vertical menu (General, SVOMPT, Legend, History); language, speech rate, larger font, SVOMPT options, Colourful Semantics, Shape Coding, phrase history.
- **Usage history:** Each spoken phrase is stored (text + date); up to 200 entries; last 20 visible in Settings → History; option to clear.
- **Accessibility:** Keyboard navigation, ARIA labels, focus management; optional larger font.
- **Splash screen:** Minimal splash on open.
- **Emojis:** Vocabulary uses emojis for an intuitive, visual interface.

### Technologies

- **Progressive Web App (PWA):** manifest.json, service worker (sw.js), offline cache.
- **JavaScript and HTML/CSS:** Interface and logic in `assets/js/index.js` and `assets/css/index.css`; vocabulary in `assets/js/vocabulary.js`; translations (interface and vocabulary pt-BR/EN) in `assets/js/translations.js`. localStorage for phrase, settings, and usage history.
- **Speech Synthesis API:** Vocalization of phrases and words (pt-BR or English according to language).

### Installation and run

1. Clone the repository:
   ```bash
   git clone https://github.com/aac-ai-lab/emotalk.git
   cd emotalk
   ```
2. Open `index.html` in a browser or run a local server:
   ```bash
   npx http-server
   ```
3. Open `http://localhost:8080` in the browser.

### Contributing

Contributions are welcome: fork the repo, create a branch, commit your changes, push, and open a Pull Request.

### Related documents

- **[Resources and justifications](RESOURCES.html)** — list of all Emotalk resources and justification for each.
- **[Vocabulary](VOCABULARY.html)** — categories and words (emojis) on the board.
- **[Colourful Semantics](COLOURFUL_SEMANTICS.html)** — semantic roles and colours on the board; Colourful Semantics and Shape Coding options.

### License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/aac-ai-lab/emotalk/blob/main/LICENSE) file for details.

### Contact

Questions or suggestions: [franciscosouzaacer@gmail.com](mailto:franciscosouzaacer@gmail.com).

**Project root:** [README](../../index.html) (overview and links to docs).
