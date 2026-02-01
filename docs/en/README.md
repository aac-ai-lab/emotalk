---
layout: default
title: "Documentation index (English)"
---
# Documentation index (English)

**Language / Idioma:** [English](README.html) | [Português (Brasil)](../pt-br/README.html)

Emotalk project (AAC app with emojis) documentation.

| Document | Content |
|----------|---------|
| **[Vocabulary](VOCABULARY.html)** | Categories and words (emojis) included in the communication board. |
| **[Colourful Semantics](COLOURFUL_SEMANTICS.html)** | Semantic roles (Who, What doing, What, Where, When, Describing) and colour coding applied to the board. |

## Overview

**Emotalk** is an augmentative and alternative communication (AAC) app designed to help express ideas and feelings through emojis. It applies **Colourful Semantics** (colour-coded sentence roles) and supports offline use, phrase persistence, and drag-and-drop reordering.

### Features

- **PWA (offline):** Install and use without internet; service worker caches the app.
- **Colourful Semantics:** Categories and words are colour-coded by sentence role (Who, What doing, What, Where, When, Describing).
- **Phrase bar:** Add pictograms to build a sentence; speak or clear; bar is saved in localStorage.
- **Drag and drop:** Reorder pictograms in the phrase bar (desktop).
- **Settings:** Speech rate and larger font; legend of semantic colours in the settings modal.
- **Accessibility:** Keyboard navigation, ARIA labels, focus management; optional larger font.
- **Splash screen:** Minimal splash on open.
- **Emojis:** Vocabulary uses emojis for an intuitive, visual interface.

### Technologies

- **Progressive Web App (PWA):** manifest.json, service worker (sw.js), offline cache.
- **JavaScript and HTML/CSS:** Interface and logic; localStorage for phrase and settings.
- **Speech Synthesis API:** Vocalization of phrases and words (pt-BR).

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

### License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/aac-ai-lab/emotalk/blob/main/LICENSE) file for details.

### Contact

Questions or suggestions: [franciscosouzaacer@gmail.com](mailto:franciscosouzaacer@gmail.com).

**Project root:** [README](../../index.html) (overview and links to docs).
