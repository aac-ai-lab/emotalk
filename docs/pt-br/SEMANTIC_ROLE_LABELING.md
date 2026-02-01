---
layout: default
title: "Semantic Role Labeling (SRL) (pt-BR)"
---
# Semantic Role Labeling (SRL) no Emotalk

**Idioma / Language:** [Português (Brasil)](README.html) | [English](../en/SEMANTIC_ROLE_LABELING.html)

O Emotalk **não tem** atualmente **Semantic Role Labeling (SRL)** implementado. Este documento explica o que é SRL, a diferença em relação ao que o app já faz, para que serviria no Emotalk e como poderia ser implementado no futuro.

## O que é SRL (Semantic Role Labeling)

Em Processamento de Linguagem Natural (PLN), **SRL** é a tarefa de, dada uma frase (ou um predicado), **atribuir automaticamente** etiquetas de papéis semânticos aos argumentos: quem é Agent (agente), Patient (paciente), Theme (tema), Location (lugar), etc. Os sistemas de SRL são normalmente modelos de aprendizagem automática treinados em corpora anotados (PropBank, FrameNet, CoNLL).

- **Entrada:** texto (ex.: «O João comeu a maçã no jardim.»)
- **Saída:** predicado + papéis (ex.: predicado = *comeu*, Agent = *O João*, Patient = *a maçã*, Location = *no jardim*)

## O que o Emotalk tem hoje (e o que não tem)

| Aspecto | Emotalk atual | SRL (NLP) |
|---------|----------------|-----------|
| **Papéis** | Sim: Quem, O quê faz, O quê, Onde, Quando, Como. | Sim: Agent, Patient, Theme, Locative, etc. |
| **Atribuição** | **Pré-atribuída** no vocabulário: cada palavra tem um papel fixo em `vocabulary.js`. O utilizador escolhe palavras e coloca-as nos slots. | **Automática**: um modelo recebe texto livre e devolve quem é Agent, Patient, etc. |
| **Entrada** | O utilizador monta a frase na barra ou nos Quadros; não há texto livre como entrada. | Frase em texto (ou áudio → reconhecimento de fala → texto). |

**Conclusão:** O Emotalk usa **papéis semânticos** na conceção (vocabulário, slots SVOMPT, Quadros), mas **não** tem um módulo de SRL que faça etiquetagem automática de papéis em frases arbitrárias.

## Para que serviria o SRL no Emotalk

Se SRL fosse implementado, os casos de uso seriam:

1. **Frase livre (voz ou texto) → preenchimento de slots:** O utilizador diz ou escreve uma frase; o sistema devolve os papéis (Quem, O quê faz, O quê, Onde, etc.) e poderia **sugerir** o preenchimento da barra ou dos Quadros com pictogramas compatíveis (mapeando as palavras identificadas ao vocabulário).
2. **Feedback pedagógico:** Mostrar ao utilizador uma leitura em papéis da frase que disse, por exemplo: «Disseste: Quem = João, Ação = comer, O quê = maçã.»
3. **Validação:** Comparar a frase falada com o que está na barra e indicar se os papéis batem certo.

Quando a frase vem **apenas** da barra (o utilizador já escolheu pictogramas por slot), não é necessário SRL — os papéis já estão definidos pela estrutura da interface.

## É possível implementar?

Sim. Opções resumidas:

| Abordagem | Descrição | Prós | Contras |
|-----------|-----------|------|---------|
| **API no backend** | Servidor (ex.: Python) com um modelo de SRL (multilingual ou PT). O app envia texto (ou áudio → ASR → texto) e recebe papéis. | Modelos de qualidade para PT; integração com PropBank/FrameNet. | Requer servidor (e, se for por voz, ASR). |
| **Modelo no browser** | Modelo exportado para JavaScript/WebAssembly (ex.: Transformers.js, ONNX). Inferência no cliente. | Offline; sem servidor. | Poucos modelos de SRL em PT para browser; ficheiros grandes; latência. |
| **Regras/heurísticas** | Regras simples (ex.: primeiro NP = sujeito, etc.) para frases muito canónicas. | Leve; offline. | Só para frases muito limitadas; não é SRL robusto. |

**Recomendação:** O caminho mais realista é um **backend em Python** com um modelo de SRL (multilingual ou para português, e.g. Hugging Face) que receba texto e devolva uma estrutura do tipo `{ predicado, Agent, Patient, Location, … }`. O app chamaria essa API (por exemplo após o utilizador gravar voz → ASR → texto → SRL). Em seguida, mapear as etiquetas do modelo (Agent, Patient, …) para os papéis do Emotalk (Quem, O quê, Onde, etc.) e usar o resultado para sugerir slots, dar feedback ou validar.

## Resumo

- **SRL:** tarefa de PLN que atribui automaticamente papéis semânticos a argumentos numa frase.
- **Emotalk hoje:** usa papéis semânticos (pré-atribuídos no vocabulário e nos slots); **não** tem SRL automático.
- **Implementação futura:** viável via API no backend (modelo SRL + opcional ASR); casos de uso: frase livre → slots, feedback, validação.

**Documentos relacionados:** [Recursos e justificativas](RECURSOS.html), [Case Grammar](CASE_GRAMMAR.html), [Quadros (Frame Semantics)](FRAME_SEMANTICS.html), [Índice](README.html).
