---
layout: default
title: "Semantic Role Labeling (SRL) (English)"
---
# Semantic Role Labeling (SRL) in Emotalk

**Language / Idioma:** [English](README.html) | [Português (Brasil)](../pt-br/SEMANTIC_ROLE_LABELING.html)

Emotalk **does not** currently implement **Semantic Role Labeling (SRL)**. This document explains what SRL is, how it differs from what the app already does, what it would be used for in Emotalk, and how it could be implemented in the future.

## What is SRL (Semantic Role Labeling)

In Natural Language Processing (NLP), **SRL** is the task of, given a sentence (or a predicate), **automatically assigning** semantic role labels to arguments: who is Agent, Patient, Theme, Location, etc. SRL systems are typically machine-learning models trained on annotated corpora (PropBank, FrameNet, CoNLL).

- **Input:** text (e.g. «John ate the apple in the garden.»)
- **Output:** predicate + roles (e.g. predicate = *ate*, Agent = *John*, Patient = *the apple*, Location = *in the garden*)

## What Emotalk has today (and what it does not)

| Aspect | Current Emotalk | SRL (NLP) |
|--------|-----------------|-----------|
| **Roles** | Yes: Who, What doing, What, Where, When, How. | Yes: Agent, Patient, Theme, Locative, etc. |
| **Assignment** | **Pre-assigned** in the vocabulary: each word has a fixed role in `vocabulary.js`. The user selects words and places them in slots. | **Automatic**: a model takes free text and returns who is Agent, Patient, etc. |
| **Input** | The user builds the sentence on the bar or in Frames; there is no free text as input. | Sentence as text (or audio → speech recognition → text). |

**Conclusion:** Emotalk uses **semantic roles** in its design (vocabulary, SVOMPT slots, Frames), but it does **not** have an SRL module that automatically labels roles in arbitrary sentences.

## What SRL would be used for in Emotalk

If SRL were implemented, the use cases would be:

1. **Free phrase (voice or text) → slot filling:** The user speaks or types a sentence; the system returns the roles (Who, What doing, What, Where, etc.) and could **suggest** filling the bar or Frames with compatible pictograms (mapping the identified words to the vocabulary).
2. **Pedagogical feedback:** Show the user a role-based reading of what they said, e.g. «You said: Who = John, Action = eat, What = apple.»
3. **Validation:** Compare the spoken sentence with what is on the bar and indicate whether the roles match.

When the sentence comes **only** from the bar (the user has already chosen pictograms per slot), SRL is not needed — the roles are already defined by the interface structure.

## Can it be implemented?

Yes. Options in brief:

| Approach | Description | Pros | Cons |
|----------|-------------|------|------|
| **Backend API** | Server (e.g. Python) with an SRL model (multilingual or PT). The app sends text (or audio → ASR → text) and receives roles. | Good models for PT; integration with PropBank/FrameNet. | Requires a server (and, for voice, ASR). |
| **Model in the browser** | Model exported to JavaScript/WebAssembly (e.g. Transformers.js, ONNX). Inference on the client. | Offline; no server. | Few SRL models for PT in the browser; large files; latency. |
| **Rules/heuristics** | Simple rules (e.g. first NP = subject) for very canonical sentences. | Lightweight; offline. | Only for very limited sentences; not robust SRL. |

**Recommendation:** The most realistic path is a **Python backend** with an SRL model (multilingual or for Portuguese, e.g. Hugging Face) that receives text and returns a structure like `{ predicate, Agent, Patient, Location, … }`. The app would call this API (e.g. after the user records voice → ASR → text → SRL). Then map the model’s labels (Agent, Patient, …) to Emotalk’s roles (Who, What, Where, etc.) and use the result to suggest slots, give feedback, or validate.

## Summary

- **SRL:** NLP task that automatically assigns semantic roles to arguments in a sentence.
- **Emotalk today:** uses semantic roles (pre-assigned in vocabulary and slots); does **not** have automatic SRL.
- **Future implementation:** feasible via backend API (SRL model + optional ASR); use cases: free phrase → slots, feedback, validation.

**Related documents:** [Resources and justifications](RESOURCES.html), [Case Grammar](CASE_GRAMMAR.html), [Frames (Frame Semantics)](FRAME_SEMANTICS.html), [Index](README.html).
