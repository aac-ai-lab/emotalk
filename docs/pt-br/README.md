---
layout: default
title: "Índice da documentação (pt-BR)"
---
# Índice da documentação (pt-BR)

**Idioma / Language:** [Português (Brasil)](README.html) | [English](../en/README.html)

Documentação do projeto Emotalk (aplicativo CAA com emojis).

| Documento | Conteúdo |
|-----------|----------|
| **[Recursos e justificativas](RECURSOS.html)** | Lista de todos os recursos do Emotalk e justificativa (base em evidências ou benefício) de cada um. |
| **[Vocabulário](VOCABULARY.html)** | Categorias e palavras (emojis) incluídas na prancha de comunicação. |
| **[Colourful Semantics](COLOURFUL_SEMANTICS.html)** | Papéis semânticos (Quem, O quê faz, O quê, Onde, Quando, Como/Descrever) e cores aplicadas na prancha. |
| **[Quadros (Frame Semantics / Fillmore)](FRAME_SEMANTICS.html)** | Quadros semânticos com vários papéis (Dar, Comer, Ir, Querer, etc.); ativação e uso no Emotalk. |
| **[Ícones centrais (MINSPEAK)](MINSPEAK.html)** | Modo ícones centrais (compação semântica); 6 ícones no primeiro ecrã; acesso em 2 toques. |
| **[Gramática de Dependências](DEPENDENCY_GRAMMAR.html)** | Tesnière; verbo como núcleo; compatibilidade do Emotalk (SVOMPT, Quadros, papéis) com esta perspetiva. |
| **[Case Grammar (Fillmore)](CASE_GRAMMAR.html)** | Casos (Agent, Patient, etc.); papéis e Quadros no Emotalk como realização da Case Grammar. |
| **[Semantic Role Labeling (SRL)](SEMANTIC_ROLE_LABELING.html)** | SRL em PLN; não implementado; viável via API backend; casos de uso e opções. |

## Visão geral

**Emotalk** é um aplicativo de comunicação aumentativa e alternativa (CAA) projetado para ajudar na expressão de ideias e sentimentos através de emojis. Aplica **Colourful Semantics** (papéis na frase codificados por cor), **Shape Coding** (formas por papel gramatical), **SVOMPT** (ordem da frase Sujeito–Verbo–Objeto–Modo–Lugar–Tempo), uso offline, persistência da frase e reordenar por arrastar e soltar. Para a descrição e justificativa de cada recurso, ver **[Recursos e justificativas](RECURSOS.html)**.

### Funcionalidades

- **Idiomas (pt-BR e EN):** Interface e fala em Português (Brasil) ou English; escolha em Configurações → Geral.
- **PWA (offline):** Instale e use sem internet; service worker faz cache do app.
- **Colourful Semantics:** Categorias e palavras com cores por papel na frase (Quem, O quê faz, O quê, Onde, Quando, Como/Descrever); ativar/desativar em Configurações → Legenda.
- **Shape Coding:** Formas distintas por papel (retângulo, hexágono, seta, etc.); ativar em Configurações → Legenda.
- **SVOMPT:** Ordenar frase ao falar, barra com slots S-V-O-M-P-T, modo guiado, ordenar barra; opções em Configurações → SVOMPT.
- **Barra de frase:** Adicione pictogramas para montar a frase; falar ou limpar; barra salva no localStorage.
- **Arrastar e soltar:** Reordene pictogramas na barra (desktop).
- **Configurações:** Modal com menu vertical (Geral, SVOMPT, Legenda, Histórico); idioma, velocidade da fala, fonte maior, opções SVOMPT, Colourful Semantics, Shape Coding, histórico de frases.
- **Histórico de uso:** Cada frase falada é registrada (texto + data); até 200 entradas; últimas 20 visíveis em Configurações → Histórico; opção de limpar.
- **Acessibilidade:** Navegação por teclado, ARIA, foco; opção de fonte maior.
- **Splash screen:** Splash minimal ao abrir.
- **Emojis:** Vocabulário com emojis para interface intuitiva e visual.

### Tecnologias

- **Progressive Web App (PWA):** manifest.json, service worker (sw.js), cache offline.
- **JavaScript e HTML/CSS:** Interface e lógica em `assets/js/index.js` e `assets/css/index.css`; vocabulário em `assets/js/vocabulary.js`; moldes de frase em `assets/js/sentenceFrames.js`; quadros Fillmore em `assets/js/frameSemantics.js`; ícones centrais em `assets/js/minspeak.js`; traduções em `assets/js/translations.js`. localStorage para frase, configurações e histórico de uso.
- **Speech Synthesis API:** Vocalização das frases e palavras (pt-BR ou inglês conforme o idioma).

### Instalação e execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/aac-ai-lab/emotalk.git
   cd emotalk
   ```
2. Abra o `index.html` no navegador ou inicie um servidor local:
   ```bash
   npx http-server
   ```
3. Acesse `http://localhost:8080` no navegador.

### Contribuição

Contribuições são bem-vindas: faça um fork do repositório, crie uma branch, faça suas alterações, envie e abra um Pull Request.

### Documentos relacionados

- **[Recursos e justificativas](RECURSOS.html)** — lista de todos os recursos do Emotalk e justificativa de cada um.
- **[Vocabulário](VOCABULARY.html)** — categorias e palavras (emojis) na prancha.
- **[Colourful Semantics](COLOURFUL_SEMANTICS.html)** — papéis semânticos e cores na prancha; opções Colourful Semantics e Shape Coding.
- **[Quadros (Frame Semantics / Fillmore)](FRAME_SEMANTICS.html)** — quadros semânticos com vários papéis; ativação e uso.
- **[Ícones centrais (MINSPEAK)](MINSPEAK.html)** — modo ícones centrais (compação semântica); 6 ícones no primeiro ecrã.
- **[Gramática de Dependências](DEPENDENCY_GRAMMAR.html)** — Tesnière; verbo como núcleo; compatibilidade do Emotalk com Dependency Grammar.
- **[Case Grammar (Fillmore)](CASE_GRAMMAR.html)** — Casos (Agent, Patient, etc.); papéis e Quadros como realização da Case Grammar.
- **[Semantic Role Labeling (SRL)](SEMANTIC_ROLE_LABELING.html)** — SRL em PLN; não implementado; viável via API backend; casos de uso.

### Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://github.com/aac-ai-lab/emotalk/blob/main/LICENSE) para detalhes.

### Contato

Perguntas ou sugestões: [franciscosouzaacer@gmail.com](mailto:franciscosouzaacer@gmail.com).

**Raiz do projeto:** [README](../../index.html) (visão geral e links para a documentação).
