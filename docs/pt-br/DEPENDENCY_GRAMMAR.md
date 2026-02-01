---
layout: default
title: "Gramática de Dependências (pt-BR)"
---
# Gramática de Dependências no Emotalk

**Idioma / Language:** [Português (Brasil)](README.html) | [English](../en/DEPENDENCY_GRAMMAR.html)

O Emotalk não implementa uma interface específica de **Gramática de Dependências** (Dependency Grammar), mas as suas funcionalidades — SVOMPT, papéis semânticos (Colourful Semantics), Shape Coding, Moldes de frase e Quadros (Frame Semantics) — são compatíveis e alinhadas com esta perspetiva linguística. Este documento descreve a Gramática de Dependências e como o Emotalk se relaciona com ela.

## O que é a Gramática de Dependências

A **Gramática de Dependências** (Dependency Grammar) remonta a **Lucien Tesnière** (*Éléments de syntaxe structurale*, 1959). Nesta abordagem, a frase é vista como uma rede de **dependências** entre palavras: cada palavra (exceto uma, o **núcleo** ou **raiz**) depende de outra. A relação é **assimétrica**: há um **núcleo** (regente) e um **dependente**. Em muitas tradições, o **verbo** é considerado o núcleo da frase (o nó raiz), e os outros elementos — sujeito, objeto, adjuntos — dependem dele.

- **Núcleo (regente):** o elemento que “comanda” a relação (ex.: o verbo *come* em *O João come a maçã*).
- **Dependente:** o elemento que se liga ao núcleo (ex.: *O João* como sujeito, *a maçã* como objeto).

As relações são frequentemente etiquetadas (sujeito, objeto, modificador, etc.), o que se aproxima dos **papéis gramaticais ou semânticos** usados no Emotalk (Quem, O quê faz, O quê, Onde, Quando, Como).

## Relação com o Emotalk

| Conceito na Dependency Grammar | No Emotalk |
|-------------------------------|------------|
| **Verbo como núcleo/raiz** | O slot **O quê faz** (V) em SVOMPT é o verbo; os Quadros (Fillmore) são evocados por verbos (Dar, Comer, Ir, Querer, Estar, Ver). |
| **Dependentes do verbo** | Sujeito (Quem), Objeto (O quê), Modo (Como), Lugar (Onde), Tempo (Quando) — slots S, O, M, P, T e papéis nos Quadros. |
| **Papéis/etiquetas** | Colourful Semantics (cores por papel) e Shape Coding (formas por papel) tornam explícitos os papéis; Moldes e Quadros fixam a estrutura e os slots. |
| **Estrutura hierárquica** | A barra com slots S-V-O-M-P-T e o “ordenar frase ao falar” reforçam a ordem em que o verbo central está rodeado pelos seus dependentes. |

Assim, o Emotalk **não desenha árvores de dependências** na interface, mas a forma como organiza a frase — verbo no centro, papéis à volta, ordem SVOMPT e quadros verbais — é **conceptual e pedagogicamente compatível** com a ideia de que o verbo é o núcleo e os outros elementos são dependentes. Isso pode ser útil para educadores e terapeutas que trabalham com Dependency Grammar ou com noções de “palavra central” da frase.

## Resumo

- **Dependency Grammar (Tesnière):** frase como rede de dependências núcleo–dependente; verbo como raiz.
- **Emotalk:** verbo no slot V (SVOMPT), papéis S, O, M, P, T e Quadros verbais; cores e formas por papel. Compatível com a perspetiva de “verbo no centro” e dependentes à volta.
- **Uso em CAA/terapia:** explicar que “a ação (verbo) é o centro e quem/o quê/onde/como se ligam a ela” apoia a construção da frase e pode ser alinhado com materiais baseados em Dependency Grammar.

**Documentos relacionados:** [Recursos e justificativas](RECURSOS.html), [Colourful Semantics](COLOURFUL_SEMANTICS.html), [Quadros (Frame Semantics)](FRAME_SEMANTICS.html), [Índice](README.html).
