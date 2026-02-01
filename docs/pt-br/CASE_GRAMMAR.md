---
layout: default
title: "Case Grammar (Fillmore) (pt-BR)"
---
# Case Grammar (Fillmore) no Emotalk

**Idioma / Language:** [Português (Brasil)](README.html) | [English](../en/CASE_GRAMMAR.html)

O Emotalk não tem uma interface com a etiqueta «Case Grammar», mas os **papéis semânticos** que usa — Quem, O quê faz, O quê, Onde, Quando, Como — e os **Quadros** (Frame Semantics) são a realização prática da ideia de **Case Grammar** (Charles J. Fillmore). Este documento descreve a Case Grammar e a sua relação com o Emotalk.

## O que é a Case Grammar (Fillmore)

A **Case Grammar** (Fillmore, 1968) propõe que o verbo atribui **casos** (papéis semânticos profundos) aos seus argumentos: quem faz a ação (Agent), quem sofre ou é afetado (Patient/Theme), a quem se dá algo (Dative/Recipient), onde (Locative), com quê (Instrument), quando (Time), como (Manner), etc. Estes casos são independentes da função gramatical superficial (sujeito, objeto); o mesmo caso pode aparecer como sujeito ou objeto conforme o verbo e a voz.

- **Agent:** quem realiza a ação (ex.: *João* em *João come a maçã*).
- **Patient / Theme:** entidade afetada ou tema (ex.: *a maçã* em *João come a maçã*; *o livro* em *João dá o livro à Maria*).
- **Dative / Recipient:** destinatário (ex.: *à Maria* em *João dá o livro à Maria*).
- **Locative:** lugar (Onde).
- **Instrument:** meio (com quê).
- **Time:** quando; **Manner:** como.

A **Frame Semantics** (Fillmore, anos 1980) e o **FrameNet** evoluíram da Case Grammar: os “frame elements” são os papéis dos quadros verbais, equivalentes aos casos. No Emotalk, os Quadros (Dar, Comer, Ir, Querer, Estar, Ver) são precisamente quadros de casos: cada quadro define que casos (papéis) o verbo preenche.

## Relação com o Emotalk

| Conceito na Case Grammar | No Emotalk |
|--------------------------|------------|
| **Casos / papéis semânticos** | Quem ≈ Agent/Experiencer; O quê (objeto) ≈ Patient/Theme; A quem ≈ Dative/Recipient; Onde ≈ Locative; Quando ≈ Time; Como ≈ Manner. |
| **Cores e formas por papel** | Colourful Semantics e Shape Coding tornam cada “caso” visível (cor e forma por papel). |
| **Quadros verbais (case frames)** | O recurso **Quadros** (Frame Semantics) implementa case frames: cada quadro (Dar, Comer, Ir, etc.) define os papéis (casos) que o utilizador preenche. |
| **Slots S-V-O-M-P-T** | A barra com slots SVOMPT fixa a ordem superficial (Sujeito–Verbo–Objeto–Modo–Lugar–Tempo), mas os *papéis* por detrás são os mesmos que na Case Grammar. |

Assim, o Emotalk **já aplica** a perspetiva da Case Grammar: os papéis na prancha e nos Quadros são os “casos” fillmoreanos; a Frame Semantics (Quadros) é a evolução natural da Case Grammar no projeto. Não é necessário uma interface separada com o nome “Case Grammar” — Colourful Semantics, Shape Coding e Quadros são a interface.

## Resumo

- **Case Grammar (Fillmore, 1968):** o verbo atribui casos (Agent, Patient, Dative, Locative, etc.) aos argumentos; Frame Semantics e FrameNet derivam desta ideia.
- **Emotalk:** papéis Quem, O quê, Onde, Quando, Como = casos; Quadros = case frames por verbo; cores e formas por papel. A Case Grammar está implementada através dos papéis semânticos e dos Quadros (Frame Semantics).
- **Uso em CAA/terapia:** trabalhar “quem faz”, “o quê (é afetado)”, “a quem”, “onde”, “como” corresponde a trabalhar casos; os Quadros e a barra SVOMPT já suportam essa abordagem.

**Documentos relacionados:** [Recursos e justificativas](RECURSOS.html), [Colourful Semantics](COLOURFUL_SEMANTICS.html), [Quadros (Frame Semantics)](FRAME_SEMANTICS.html), [Gramática de Dependências](DEPENDENCY_GRAMMAR.html), [Índice](README.html).
