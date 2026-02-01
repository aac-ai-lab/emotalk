---
layout: default
title: "Dependency Grammar (English)"
---
# Dependency Grammar in Emotalk

**Language / Idioma:** [English](README.html) | [Português (Brasil)](../pt-br/DEPENDENCY_GRAMMAR.html)

Emotalk does not implement a dedicated **Dependency Grammar** interface, but its features — SVOMPT, semantic roles (Colourful Semantics), Shape Coding, Sentence frames, and Frames (Frame Semantics) — are compatible and aligned with this linguistic perspective. This document describes Dependency Grammar and how Emotalk relates to it.

## What is Dependency Grammar

**Dependency Grammar** goes back to **Lucien Tesnière** (*Éléments de syntaxe structurale*, 1959). In this approach, the sentence is seen as a network of **dependencies** between words: each word (except one, the **head** or **root**) depends on another. The relation is **asymmetric**: there is a **head** (governor) and a **dependent**. In many traditions, the **verb** is taken as the head of the sentence (the root node), and other elements — subject, object, adjuncts — depend on it.

- **Head (governor):** the element that “commands” the relation (e.g. the verb *eats* in *John eats the apple*).
- **Dependent:** the element that attaches to the head (e.g. *John* as subject, *the apple* as object).

Relations are often labelled (subject, object, modifier, etc.), which is close to the **grammatical or semantic roles** used in Emotalk (Who, What doing, What, Where, When, How).

## Relation to Emotalk

| Concept in Dependency Grammar | In Emotalk |
|-------------------------------|------------|
| **Verb as head/root** | The **What doing** (V) slot in SVOMPT is the verb; Frames (Fillmore) are evoked by verbs (Giving, Eating, Going, Wanting, Being, Seeing). |
| **Dependents of the verb** | Subject (Who), Object (What), Manner (How), Place (Where), Time (When) — S, O, M, P, T slots and roles in Frames. |
| **Roles/labels** | Colourful Semantics (colour by role) and Shape Coding (shape by role) make roles explicit; Sentence frames and Frames fix structure and slots. |
| **Hierarchical structure** | The bar with S-V-O-M-P-T slots and “order phrase when speaking” reinforce the order in which the central verb is surrounded by its dependents. |

So Emotalk does **not** draw dependency trees in the interface, but the way it organises the sentence — verb at the centre, roles around it, SVOMPT order, and verbal frames — is **conceptually and pedagogically compatible** with the idea that the verb is the head and other elements are dependents. This can support educators and therapists who work with Dependency Grammar or with the notion of the “central word” of the sentence.

## Summary

- **Dependency Grammar (Tesnière):** sentence as a network of head–dependent relations; verb as root.
- **Emotalk:** verb in slot V (SVOMPT), roles S, O, M, P, T, and verbal Frames; colour and shape by role. Compatible with the “verb at the centre” view and dependents around it.
- **Use in AAC/therapy:** explaining that “the action (verb) is the centre and who/what/where/how attach to it” supports sentence building and can be aligned with materials based on Dependency Grammar.

**Related documents:** [Resources and justifications](RESOURCES.html), [Colourful Semantics](COLOURFUL_SEMANTICS.html), [Frames (Frame Semantics)](FRAME_SEMANTICS.html), [Index](README.html).
