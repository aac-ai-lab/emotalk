---
layout: default
title: "Índice da documentação (pt-BR)"
---
# Índice da documentação (pt-BR)

**Idioma / Language:** [Português (Brasil)](README.html) | [English](../en/README.html)

Documentação do projeto Emotalk (aplicativo CAA com emojis).

| Documento | Conteúdo |
|-----------|----------|
| **[Vocabulário](VOCABULARY.html)** | Categorias e palavras (emojis) incluídas na prancha de comunicação. |
| **[Colourful Semantics](COLOURFUL_SEMANTICS.html)** | Papéis semânticos (Quem, O quê faz, O quê, Onde, Quando, Como/Descrever) e cores aplicadas na prancha. |

## Visão geral

**Emotalk** é um aplicativo de comunicação aumentativa e alternativa (CAA) projetado para ajudar na expressão de ideias e sentimentos através de emojis. Aplica **Colourful Semantics** (papéis na frase codificados por cor), uso offline, persistência da frase e reordenar por arrastar e soltar.

### Funcionalidades

- **PWA (offline):** Instale e use sem internet; service worker faz cache do app.
- **Colourful Semantics:** Categorias e palavras com cores por papel na frase (Quem, O quê faz, O quê, Onde, Quando, Como/Descrever).
- **Barra de frase:** Adicione pictogramas para montar a frase; falar ou limpar; barra salva no localStorage.
- **Arrastar e soltar:** Reordene pictogramas na barra (desktop).
- **Configurações:** Velocidade da fala e fonte maior; legenda das cores semânticas; histórico de frases (últimas 20) e “Limpar histórico” no modal de configurações.
- **Histórico de uso:** Cada frase falada é registrada (texto + data); até 200 entradas no localStorage; visualização das últimas 20 em Configurações e opção de limpar.
- **Acessibilidade:** Navegação por teclado, ARIA, foco; opção de fonte maior.
- **Splash screen:** Splash minimal ao abrir.
- **Emojis:** Vocabulário com emojis para interface intuitiva e visual.

### Tecnologias

- **Progressive Web App (PWA):** manifest.json, service worker (sw.js), cache offline.
- **JavaScript e HTML/CSS:** Interface e lógica em `assets/js/index.js` e `assets/css/index.css`; vocabulário em `assets/js/vocabulary.js`. localStorage para frase, configurações e histórico de uso.
- **Speech Synthesis API:** Vocalização das frases e palavras (pt-BR).

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

### Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://github.com/aac-ai-lab/emotalk/blob/main/LICENSE) para detalhes.

### Contato

Perguntas ou sugestões: [franciscosouzaacer@gmail.com](mailto:franciscosouzaacer@gmail.com).

**Raiz do projeto:** [README](../../index.html) (visão geral e links para a documentação).
