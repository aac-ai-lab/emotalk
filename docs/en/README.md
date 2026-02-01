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
| **[Frames (Frame Semantics / Fillmore)](FRAME_SEMANTICS.html)** | Semantic frames with multiple roles (Giving, Eating, Going, Wanting, etc.); enabling and use in Emotalk. |
| **[Core icons (MINSPEAK)](MINSPEAK.html)** | Core icons mode (semantic compaction); 6 icons on first screen; 2-tap access. |
| **[Dependency Grammar](DEPENDENCY_GRAMMAR.html)** | Tesnière; verb as head; how Emotalk (SVOMPT, Frames, roles) aligns with this perspective. |
| **[Case Grammar (Fillmore)](CASE_GRAMMAR.html)** | Cases (Agent, Patient, etc.); roles and Frames in Emotalk as realisation of Case Grammar. |
| **[Semantic Role Labeling (SRL)](SEMANTIC_ROLE_LABELING.html)** | SRL in NLP; not implemented; feasible via backend API; use cases and options. |

## Overview

**Emotalk** is an augmentative and alternative communication (AAC) app designed to help express ideas and feelings through emojis. It applies **Colourful Semantics** (colour-coded sentence roles), **Shape Coding** (shapes by grammatical role), **SVOMPT** (Subject–Verb–Object–Manner–Place–Time sentence order), **Sentence frames** (moldes de frase), **Frames** (Frame Semantics / Fillmore), **Core icons** (MINSPEAK / semantic compaction), and supports offline use, phrase persistence, and drag-and-drop reordering. For a description and justification of each resource, see **[Resources and justifications](RESOURCES.html)**.

### Features

- **Languages (pt-BR and EN):** Interface and speech in Portuguese (Brazil) or English; choose in Settings → General.
- **PWA (offline):** Install and use without internet; service worker caches the app.
- **Colourful Semantics:** Categories and words colour-coded by sentence role (Who, What doing, What, Where, When, Describing); enable/disable in Settings → Legend.
- **Shape Coding:** Distinct shapes per role (rectangle, hexagon, arrow, etc.); enable in Settings → Legend.
- **SVOMPT:** Order phrase when speaking, bar with S-V-O-M-P-T slots, guided mode, sort bar; options in Settings → SVOMPT.
- **Sentence frames:** Phrases with one slot (e.g. «I want ___»); Frames button (📝); Settings → Frames.
- **Frames (Frame Semantics / Fillmore):** Multi-role frames (Giving, Eating, Going, Wanting, etc.); Frames button (🖼️); Settings → Fillmore frames. See **[Frames (Frame Semantics)](FRAME_SEMANTICS.html)**.
- **Core icons (MINSPEAK):** First screen with 6 icons; 2-tap access; Settings → Core icons. See **[Core icons (MINSPEAK)](MINSPEAK.html)**.
- **Phrase bar:** Add pictograms to build a sentence; speak or clear; bar is saved in localStorage.
- **Drag and drop:** Reorder pictograms in the phrase bar (desktop).
- **Settings:** Modal with vertical menu (General, SVOMPT, Legend, History, Frames, Core icons, Fillmore frames); language, speech rate, larger font, SVOMPT options, Colourful Semantics, Shape Coding, Sentence frames, Core icons, Frames (Fillmore), phrase history.
- **Usage history:** Each spoken phrase is stored (text + date); up to 200 entries; last 20 visible in Settings → History; option to clear.
- **Accessibility:** Keyboard navigation, ARIA labels, focus management; optional larger font.
- **Splash screen:** Minimal splash on open.
- **Emojis:** Vocabulary uses emojis for an intuitive, visual interface.

### Technologies

- **Progressive Web App (PWA):** manifest.json, service worker (sw.js), offline cache.
- **JavaScript and HTML/CSS:** Interface and logic in `assets/js/index.js` and `assets/css/index.css`; vocabulary in `assets/js/vocabulary.js`; sentence frames in `assets/js/sentenceFrames.js`; Fillmore frames in `assets/js/frameSemantics.js`; core icons in `assets/js/minspeak.js`; translations in `assets/js/translations.js`. localStorage for phrase, settings, and usage history.
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
- **[Frames (Frame Semantics / Fillmore)](FRAME_SEMANTICS.html)** — semantic frames with multiple roles; enabling and use.
- **[Core icons (MINSPEAK)](MINSPEAK.html)** — core icons mode (semantic compaction); 6 icons on first screen.
- **[Dependency Grammar](DEPENDENCY_GRAMMAR.html)** — Tesnière; verb as head; how Emotalk aligns with Dependency Grammar.
- **[Case Grammar (Fillmore)](CASE_GRAMMAR.html)** — Cases (Agent, Patient, etc.); roles and Frames as realisation of Case Grammar.
- **[Semantic Role Labeling (SRL)](SEMANTIC_ROLE_LABELING.html)** — SRL in NLP; not implemented; feasible via backend API; use cases.

### License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/aac-ai-lab/emotalk/blob/main/LICENSE) file for details.

### Contact

Questions or suggestions: [franciscosouzaacer@gmail.com](mailto:franciscosouzaacer@gmail.com).

**Project root:** [README](../../index.html) (overview and links to docs).
