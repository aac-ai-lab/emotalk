---
layout: default
title: "Case Grammar (Fillmore) (English)"
---
# Case Grammar (Fillmore) in Emotalk

**Language / Idioma:** [English](README.html) | [Português (Brasil)](../pt-br/CASE_GRAMMAR.html)

Emotalk does not have an interface labelled “Case Grammar”, but the **semantic roles** it uses — Who, What doing, What, Where, When, How — and **Frames** (Frame Semantics) are the practical realisation of **Case Grammar** (Charles J. Fillmore). This document describes Case Grammar and its relation to Emotalk.

## What is Case Grammar (Fillmore)

**Case Grammar** (Fillmore, 1968) proposes that the verb assigns **cases** (deep semantic roles) to its arguments: who does the action (Agent), who is affected (Patient/Theme), to whom something is given (Dative/Recipient), where (Locative), with what (Instrument), when (Time), how (Manner), etc. These cases are independent of surface grammatical function (subject, object); the same case may appear as subject or object depending on the verb and voice.

- **Agent:** who performs the action (e.g. *John* in *John eats the apple*).
- **Patient / Theme:** affected entity or theme (e.g. *the apple* in *John eats the apple*; *the book* in *John gives the book to Mary*).
- **Dative / Recipient:** recipient (e.g. *to Mary* in *John gives the book to Mary*).
- **Locative:** place (Where).
- **Instrument:** means (with what).
- **Time:** when; **Manner:** how.

**Frame Semantics** (Fillmore, 1980s) and **FrameNet** evolved from Case Grammar: “frame elements” are the roles in verbal frames, equivalent to cases. In Emotalk, Frames (Giving, Eating, Going, Wanting, Being, Seeing) are case frames: each frame defines which cases (roles) the verb fills.

## Relation to Emotalk

| Concept in Case Grammar | In Emotalk |
|-------------------------|------------|
| **Cases / semantic roles** | Who ≈ Agent/Experiencer; What (object) ≈ Patient/Theme; To whom ≈ Dative/Recipient; Where ≈ Locative; When ≈ Time; How ≈ Manner. |
| **Colour and shape by role** | Colourful Semantics and Shape Coding make each “case” visible (colour and shape by role). |
| **Verbal frames (case frames)** | The **Frames** (Frame Semantics) feature implements case frames: each frame (Giving, Eating, Going, etc.) defines the roles (cases) the user fills. |
| **S-V-O-M-P-T slots** | The bar with SVOMPT slots fixes surface order (Subject–Verb–Object–Manner–Place–Time), but the *roles* behind them are the same as in Case Grammar. |

So Emotalk **already applies** the Case Grammar perspective: the roles on the board and in Frames are Fillmore’s “cases”; Frame Semantics (Frames) is the natural evolution of Case Grammar in the app. A separate interface named “Case Grammar” is not needed — Colourful Semantics, Shape Coding, and Frames are that interface.

## Summary

- **Case Grammar (Fillmore, 1968):** the verb assigns cases (Agent, Patient, Dative, Locative, etc.) to arguments; Frame Semantics and FrameNet derive from this idea.
- **Emotalk:** roles Who, What, Where, When, How = cases; Frames = case frames per verb; colour and shape by role. Case Grammar is implemented through semantic roles and Frames (Frame Semantics).
- **Use in AAC/therapy:** working with “who does”, “what (is affected)”, “to whom”, “where”, “how” corresponds to working with cases; Frames and the SVOMPT bar already support this approach.

**Related documents:** [Resources and justifications](RESOURCES.html), [Colourful Semantics](COLOURFUL_SEMANTICS.html), [Frames (Frame Semantics)](FRAME_SEMANTICS.html), [Dependency Grammar](DEPENDENCY_GRAMMAR.html), [Index](README.html).
