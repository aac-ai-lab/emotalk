---
layout: default
title: "Resources and justifications (English)"
---
# Emotalk resources and justifications

**Language / Idioma:** [English](README.html) | [Português (Brasil)](../pt-br/RECURSOS.html)

This document describes all resources available in Emotalk and the justification (evidence base or benefit) for each, for use in AAC and speech therapy contexts.

---

## 1. Languages (pt-BR and English)

**What it is:** The interface and speech synthesis can be used in Portuguese (Brazil) or English. The user selects the language in Settings → General.

**Justification:** Supports use in bilingual contexts, with families or schools using English, and in international research or dissemination. Consistency between interface and speech language reduces confusion and supports comprehension.

---

## 2. Colourful Semantics (legend and colour by role)

**What it is:** Categories and words are colour-coded by their role in the sentence: Who (orange), What doing (yellow), What (green), Where (blue), When (brown), How/Describe (purple). It can be enabled or disabled in Settings → Legend.

**Justification:** Colourful Semantics is an evidence-based speech and language therapy approach used in AAC to teach sentence structure. Colours help the user recognise the *type* of word (subject, action, object, etc.) and order the sentence. The option to disable allows adaptation for users who prefer a neutral interface or have internalised the roles.

**Reference:** Colourful Semantics (Alison Bryan; language and sentence-structure development in clinical and educational contexts).

---

## 3. Shape Coding (shapes by grammatical role)

**What it is:** Each grammatical role can have a distinct shape: Who = rectangle, What doing = hexagon, What = arrow, Where = rounded corners, When = ellipse, How = diamond. Enabled in Settings → Legend. Can be used together with colours.

**Justification:** Shape Coding (Susan Ebbels) uses shapes to represent grammatical roles, reinforcing sentence structure visually and in addition to colour. Useful for users who benefit from multiple visual cues (colour + shape) or for whom shape is more discriminable than colour. Combining it with Colourful Semantics follows practices used in language intervention.

**Reference:** Shape Coding (Ebbels); use in grammar therapy and AAC.

---

## 4. SVOMPT (sentence order: Subject–Verb–Object–Manner–Place–Time)

**What it is:** A set of options in Settings → SVOMPT to support the canonical sentence order. All are optional and independent.

| Resource | Description | Justification |
|----------|-------------|---------------|
| **Order phrase when speaking (S-V-O-M-P-T)** | When tapping Speak, the phrase is spoken in S-V-O-M-P-T order even if the pictograms are in a different order on the bar. | Ensures vocalisation follows a consistent grammatical order without requiring manual reordering. Aids comprehension by the listener and reinforces the sentence model. |
| **Bar with S-V-O-M-P-T slots** | The phrase bar becomes six zones (S, V, O, M, P, T); each word is placed in its role slot. | Reinforces sentence structure visually and guides placement of each element. Used in therapy for explicit SVOMPT order training. |
| **Guided mode (suggest next slot)** | After adding a word, a suggestion for the next slot appears (e.g. «Next: Verb»). | Supports the user to complete the sentence step by step and follow S-V-O-M-P-T order. Reduces cognitive load and facilitates learning the structure. |
| **Sort bar by SVOMPT** | Each new word causes the bar to be reordered automatically by S-V-O-M-P-T (when the bar is not in slot mode). | Keeps visual order aligned with speech order and the grammatical model without requiring manual dragging. |

**Overall justification:** SVOMPT order is used in speech therapy and AAC to teach and stabilise sentence structure. Offering several options (speak ordered only, slots, guided, sort bar) allows adaptation to each user’s level and needs.

---

## 5. Phrase bar (building and persistence)

**What it is:** The user selects words from categories and they are added to a bar at the top. They can speak the phrase, clear the bar, or reorder pictograms by drag and drop (desktop). The phrase is saved in the browser (localStorage) and restored when the app is reopened.

**Justification:** The phrase bar is the core of message building in AAC: it allows constructing a sentence before vocalising it and reviewing or correcting it. Persistence avoids accidental loss when closing the browser and supports use in longer sessions. Drag and drop makes it easier to adjust order without deleting and re-adding.

---

## 6. Speech synthesis (Speech Synthesis API)

**What it is:** When tapping Speak, the phrase in the bar is vocalised by the system’s speech synthesis (pt-BR or English according to the selected language). Speech rate is configurable in Settings → General.

**Justification:** Vocalisation makes the message accessible to listeners who are not viewing the screen and supports real-time communication. Adjustable rate allows adaptation for users with slower processing needs or in difficult listening conditions.

---

## 7. Settings (modal and vertical menu)

**What it is:** A settings modal with a vertical menu (General, SVOMPT, Legend, History, Frames, Core icons, Fillmore frames) groups all options: language, speech rate, larger font, SVOMPT options, enable/disable Colourful Semantics, enable/disable Shape Coding, and phrase history. Each section includes descriptions and usage suggestions.

**Justification:** Centralising options in one place reduces the apparent complexity of the main interface. The vertical menu and descriptions make settings easier to find and understand for therapists, educators, or families, and allow customising Emotalk without changing code.

---

## 8. Phrase history

**What it is:** Each spoken phrase is recorded (text and date/time). The last 20 are visible in Settings → History; the history can be cleared. Storage keeps up to 200 entries in the browser.

**Justification:** History allows reviewing and repeating phrases, useful in therapy or school for progress recording and for the user to recall what they said. The option to clear respects privacy when the device is shared.

---

## 9. Sentence frames (Moldes de frase)

**What it is:** Sentence frames are phrases with a fixed part and one blank slot to fill — for example «I want ___», «Where is ___?», or «I want to drink ___». The user taps the **Frames** button (📝) in the sidebar, chooses a frame from the list, then a word that fits the slot (objects, places, adjectives, etc., depending on the frame), and taps **Speak sentence** to hear the full sentence. The option can be enabled or disabled in Settings → Frames; when enabled, the Frames button is visible between Clear and Settings.

**Justification:** Sentence frames are a technique used in AAC and speech therapy to reduce the load of building a sentence from scratch: the structure is given and the user only fills the slot. This facilitates production of complete sentences and practises common grammatical structures (requests, location, states, etc.). The app filters words by semantic role (What, Where, How/Describe) so that only options that fit the frame’s slot are shown.

---

## 10. PWA and offline use

**What it is:** Emotalk can be installed as an app (PWA) from the browser and used offline. A service worker caches the required files.

**Justification:** In clinical, school, or home contexts, connectivity may be unstable or absent. Offline use ensures the board is always available when the user needs it, increasing confidence in the tool and adherence to use.

---

## 11. Splash screen

**What it is:** When opening the app, a splash screen with the name “Emotalk” is shown briefly; it disappears after a few seconds or on tap.

**Justification:** Gives the app an identity and a moment of transition before the main content, avoiding the interface appearing abruptly. Quick or tap-to-dismiss does not delay access to the board.

---

## 12. Vocabulary with emojis (categories and words)

**What it is:** The board includes multiple categories (drinks, people, activities, emotions, places, etc.) with words represented by emojis. The vocabulary is described in [Vocabulary](VOCABULARY.html).

**Justification:** Emojis are recognisable and reduce dependence on reading, suiting users with low literacy or language difficulties. Organisation by categories facilitates word finding and aligns with AAC boards and core/extended vocabulary models.

---

## 13. Accessibility (keyboard, ARIA, larger font)

**What it is:** Keyboard navigation (Enter and Space to activate buttons and items), ARIA attributes for screen readers, and a “Larger font” option in Settings → General to increase text and icon size.

**Justification:** Accessibility allows users with motor or visual limitations, or who rely on assistive technology, to use Emotalk. The larger font benefits users with low vision or use at a distance (e.g. on interactive whiteboards).

---

## 15. Frames (Frame Semantics / Fillmore)

**What it is:** In Settings → Fillmore frames you can enable the «Frames» (Frame Semantics) feature. The **Frames** button (🖼️) in the sidebar opens a window with semantic frames inspired by Charles J. Fillmore: each frame represents a situation with several roles (frame elements), e.g. «Giving» (donor, thing given, recipient), «Eating» (eater, food), «Going» (agent, goal), «Wanting», «Being», «Seeing». The user chooses a frame and fills each role with a word from the vocabulary (filtered by semantic role); the app speaks the full sentence. Unlike Sentence frames (one slot), Frames have 2 or 3 elements per frame.

**Justification:** Frame Semantics (Fillmore) describes lexical meaning in terms of semantic frames — situations with participants and roles. FrameNet and work in AAC/speech therapy use this approach to structure vocabulary and sentence production. Offering frames with multiple elements supports practice of longer, explicit sentences (e.g. «Mum gives apple to John») and aligns the interface with thematic roles and frame elements.

**Reference:** Frame Semantics (Charles J. Fillmore); FrameNet; thematic roles and frame elements in linguistics and AAC.

---

## 16. Dependency Grammar

**What it is:** Emotalk does not have a dedicated Dependency Grammar (Tesnière) interface, but its features are **conceptually and pedagogically compatible** with this view: the sentence is seen as a network of dependencies where the **verb** is the head (root) and other elements (subject, object, manner, place, time) are dependents. In Emotalk, the **What doing** (V) slot in SVOMPT and **Frames** (verbs: Giving, Eating, Going, etc.) put the verb at the centre; the roles Who, What, Where, When, How (with colour and shape) correspond to dependents. The bar with S-V-O-M-P-T slots and “order phrase when speaking” reinforce the order in which the verb is surrounded by its dependents.

**Justification:** Dependency Grammar (Lucien Tesnière) describes sentence structure in terms of head–dependent relations. In AAC and speech therapy, the notion of “verb at the centre” can be used to explain sentence building. Emotalk does not draw dependency trees in the interface, but the way it organises the sentence (verb + roles, SVOMPT, Frames) is aligned with this perspective and can be referred to in educational or therapeutic contexts.

**Reference:** Tesnière, L. — *Éléments de syntaxe structurale*; Dependency Grammar; verb as head of the sentence.

**Dedicated document:** [Dependency Grammar](DEPENDENCY_GRAMMAR.html).

---

## 17. Case Grammar (Fillmore)

**What it is:** **Case Grammar** (Fillmore, 1968) proposes that the verb assigns **cases** (deep semantic roles) to its arguments: Agent (who does), Patient/Theme (what is affected), Dative/Recipient (to whom), Locative (where), Time (when), Manner (how). Emotalk **already implements** this perspective: the roles on the board — Who, What doing, What, Where, When, How — correspond to those cases; the **Frames** (Frame Semantics) feature is case frames per verb (Giving, Eating, Going, etc.); Colourful Semantics and Shape Coding make each case visible by colour and shape. There is no separate interface labelled “Case Grammar” — semantic roles and Frames are that interface.

**Justification:** Case Grammar and Frame Semantics (Fillmore’s evolution) are used in linguistics and in AAC/speech therapy to structure sentence production by roles. Documenting the relation allows educators and therapists who work with cases (Agent, Patient, Dative, etc.) to recognise the same logic in Emotalk and use Frames and the SVOMPT bar in alignment with Case Grammar.

**Reference:** Fillmore, C. J. — “The case for case” (1968); Case Grammar; Frame Semantics and FrameNet as evolution.

**Dedicated document:** [Case Grammar (Fillmore)](CASE_GRAMMAR.html).

---

## Summary

| Resource | Where to configure / use | Main basis or benefit |
|----------|--------------------------|------------------------|
| Languages (pt-BR / EN) | Settings → General | Bilingualism; interface–speech consistency |
| Colourful Semantics | Settings → Legend | Evidence in speech therapy and AAC |
| Shape Coding | Settings → Legend | Evidence (Ebbels); visual reinforcement by shape |
| SVOMPT (4 options) | Settings → SVOMPT | Canonical sentence order; grammar intervention |
| Phrase bar | Main interface | Message building and vocalisation |
| Speech synthesis | Speak button; rate in General | Auditory communication; adjustable rate |
| Settings (modal) | Settings button | Customisation without changing code |
| Phrase history | Settings → History | Review, repetition, recording |
| **Sentence frames** | Frames button (📝); Settings → Frames | Phrases with slot; reduces load and practises structures |
| **Core icons (MINSPEAK)** | Settings → Core icons | Semantic compaction; 2-tap access; fewer icons on screen |
| **Frames (Frame Semantics)** | Frames button (🖼️); Settings → Fillmore frames | Fillmore; multi-role frames; full sentences |
| **Dependency Grammar** | (concept; no dedicated UI) | Tesnière; verb as head; compatible with SVOMPT and Frames |
| **Case Grammar (Fillmore)** | Roles + Frames (already implemented) | Cases (Agent, Patient, etc.); Frames = case frames |
| PWA / offline | Install from browser | Use without internet |
| Splash screen | On app open | Identity and smooth transition |
| Emoji vocabulary | [Vocabulary](VOCABULARY.html) | Visual, categorised access |
| Accessibility | Keyboard, ARIA, Larger font | Inclusion and usability |

**Related documents:** [Case Grammar](CASE_GRAMMAR.html), [Colourful Semantics](COLOURFUL_SEMANTICS.html), [Dependency Grammar](DEPENDENCY_GRAMMAR.html), [Vocabulary](VOCABULARY.html), [Index](README.html).
