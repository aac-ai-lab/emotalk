---
layout: default
title: "Recursos e justificativas (pt-BR)"
---
# Recursos do Emotalk e justificativas

**Idioma / Language:** [Português (Brasil)](README.html) | [English](../en/RESOURCES.html)

Este documento descreve todos os recursos disponíveis no Emotalk e a justificativa (base em evidências ou benefício) de cada um, para uso em contexto de CAA e terapia da fala.

---

## 1. Idiomas (pt-BR e English)

**O que é:** A interface e a síntese de fala podem ser usadas em Português (Brasil) ou em Inglês. O utilizador escolhe o idioma em Configurações → Geral.

**Justificativa:** Permite o uso em contextos bilíngues, em famílias ou escolas que usam inglês, e em investigação ou divulgação internacional. A consistência entre o idioma da interface e o da fala reduz confusão e apoia a compreensão.

---

## 2. Colourful Semantics (legenda e cores por papel)

**O que é:** Categorias e palavras são codificadas por cor conforme o papel na frase: Quem (laranja), O quê faz (amarelo), O quê (verde), Onde (azul), Quando (marrom), Como/Descrever (roxo). Pode ser ativado ou desativado em Configurações → Legenda.

**Justificativa:** O Colourful Semantics é uma abordagem de terapia da fala e linguagem com base em evidências, usada em CAA para ensinar estrutura de frase. As cores ajudam o utilizador a perceber o *tipo* de palavra (sujeito, ação, objeto, etc.) e a ordenar a frase. A opção de desativar permite adaptar a pessoas que preferem interface neutra ou que já internalizaram os papéis.

**Referência:** Colourful Semantics (Alison Bryan; desenvolvimento de linguagem e estrutura de frase em contexto clínico e educacional).

---

## 3. Shape Coding (formas por papel gramatical)

**O que é:** Cada papel gramatical pode ter uma forma distinta: Quem = retângulo, O quê faz = hexágono, O quê = seta, Onde = cantos arredondados, Quando = elipse, Como = losango. Ativa-se em Configurações → Legenda. Pode ser usado em conjunto com as cores.

**Justificativa:** O Shape Coding (Susan Ebbels) usa formas para representar papéis gramaticais, reforçando a estrutura da frase de forma visual e complementar à cor. Útil para utilizadores que beneficiam de pistas visuais múltiplas (cor + forma) ou para quem a forma é mais discriminável que a cor. A combinação com Colourful Semantics segue práticas usadas em intervenção em linguagem.

**Referência:** Shape Coding (Ebbels); uso em terapia da gramática e em CAA.

---

## 4. SVOMPT (ordem da frase: Sujeito–Verbo–Objeto–Modo–Lugar–Tempo)

**O que é:** Conjunto de opções em Configurações → SVOMPT para apoiar a ordem canónica da frase. Todas são opcionais e independentes.

| Recurso | Descrição | Justificativa |
|--------|------------|----------------|
| **Ordenar frase ao falar (S-V-O-M-P-T)** | Ao carregar em Falar, a frase é dita na ordem S-V-O-M-P-T, mesmo que os pictogramas estejam noutra ordem na barra. | Garante que a vocalização segue uma ordem gramatical consistente, sem obrigar a reordenar manualmente. Ajuda na compreensão por parte do interlocutor e no reforço do modelo de frase. |
| **Barra com slots S-V-O-M-P-T** | A barra de frase passa a ter seis zonas (S, V, O, M, P, T); cada palavra é colocada no slot do seu papel. | Reforça visualmente a estrutura da frase e guia a colocação de cada elemento no lugar certo. Usado em terapia para treino explícito da ordem SVOMPT. |
| **Modo guiado (sugerir próximo slot)** | Após adicionar uma palavra, aparece uma sugestão do próximo slot (ex.: «Próximo: Verbo»). | Apoia o utilizador a completar a frase por etapas e a seguir a ordem S-V-O-M-P-T. Reduz carga cognitiva e facilita a aprendizagem da estrutura. |
| **Ordenar barra por SVOMPT** | Cada nova palavra faz a barra ser reordenada automaticamente por S-V-O-M-P-T (quando a barra não está em modo slots). | Mantém a ordem visual alinhada com a ordem da fala e com o modelo gramatical, sem exigir arrastar manualmente. |

**Justificativa geral:** A ordem SVOMPT é usada em terapia da fala e em CAA para ensinar e estabilizar a estrutura da frase. Oferecer várias opções (só falar ordenado, slots, guiado, ordenar barra) permite adaptar ao nível e às necessidades de cada utilizador.

---

## 5. Barra de frase (montagem e persistência)

**O que é:** O utilizador escolhe palavras nas categorias e elas são adicionadas a uma barra no topo. Pode falar a frase, limpar a barra ou reordenar pictogramas por arrastar e soltar (desktop). A frase é guardada no navegador (localStorage) e restaurada ao reabrir a aplicação.

**Justificativa:** A barra de frase é o núcleo da construção da mensagem em CAA: permite montar uma frase antes de a vocalizar, rever e corrigir. A persistência evita perda acidental ao fechar o browser e apoia uso em sessões prolongadas. O arrastar e soltar facilita o ajuste da ordem sem apagar e voltar a adicionar.

---

## 6. Síntese de fala (Speech Synthesis API)

**O que é:** Ao carregar em Falar, a frase da barra é vocalizada pela síntese de fala do sistema (pt-BR ou inglês, conforme o idioma escolhido). A velocidade da fala é configurável em Configurações → Geral.

**Justificativa:** A vocalização torna a mensagem acessível a interlocutores que não estão a ver o ecrã e apoia a comunicação em tempo real. A velocidade ajustável permite adaptar a utilizadores com necessidades de processamento mais lento ou a contextos de escuta mais difícil.

---

## 7. Configurações (modal e menu vertical)

**O que é:** Um modal de configurações com menu vertical (Geral, SVOMPT, Legenda, Histórico, Moldes, Ícones centrais, Quadros) agrupa todas as opções: idioma, velocidade da fala, fonte maior, opções SVOMPT, ativar/desativar Colourful Semantics, ativar/desativar Shape Coding, e histórico de frases. Cada secção inclui descrições e sugestões de uso.

**Justificativa:** Centralizar as opções num único sítio reduz a complexidade aparente da interface principal. O menu vertical e as descrições tornam as configurações mais fáceis de encontrar e de entender por terapeutas, educadores ou famílias, e permitem personalizar o Emotalk sem alterar código.

---

## 8. Histórico de frases

**O que é:** Cada frase falada é registada (texto e data/hora). As últimas 20 são visíveis em Configurações → Histórico; pode limpar-se o histórico. O armazenamento guarda até 200 entradas no navegador.

**Justificativa:** O histórico permite rever e repetir frases, útil em contexto terapêutico ou escolar para registo de progresso e para o utilizador recordar o que disse. A opção de limpar respeita a privacidade quando o dispositivo é partilhado.

---

## 9. Moldes de frase (Sentence Frames)

**O que é:** Moldes de frase são frases com uma parte fixa e um espaço em branco para preencher — por exemplo «Eu quero ___», «Onde está ___?» ou «Quero beber ___». O utilizador carrega no botão **Moldes** (📝) na barra lateral, escolhe um molde na lista, depois uma palavra que se encaixa no espaço (objetos, lugares, adjetivos, etc., conforme o molde), e carrega em **Falar frase** para ouvir a frase completa. A opção pode ser ativada ou desativada em Configurações → Moldes; quando ativada, o botão Moldes fica visível entre Limpar e Configurações.

**Justificativa:** Os moldes de frase (Sentence Frames) são uma técnica usada em CAA e terapia da fala para reduzir a carga de construir a frase do zero: a estrutura já está dada e o utilizador só preenche o slot. Isso facilita a produção de frases completas e treina estruturas gramaticais comuns (pedidos, localização, estados, etc.). A aplicação filtra as palavras por papel semântico (O quê, Onde, Como/Descrever) para que só apareçam opções compatíveis com o espaço do molde.

---

## 10. PWA e uso offline

**O que é:** O Emotalk pode ser instalado como aplicação (PWA) a partir do navegador e usado offline. Um service worker faz cache dos ficheiros necessários.

**Justificativa:** Em contextos clínicos, escolares ou domésticos, a conectividade pode ser instável ou inexistente. O uso offline garante que a prancha está sempre disponível quando o utilizador precisa, aumentando a confiança na ferramenta e a adesão ao uso.

---

## 11. Splash screen

**O que é:** Ao abrir a aplicação, é mostrada brevemente uma tela de splash com o nome “Emotalk”; desaparece ao fim de alguns segundos ou com um toque.

**Justificativa:** Dá identidade à aplicação e um momento de transição antes do conteúdo principal, evitando que a interface apareça de forma abrupta. O desaparecimento rápido ou por toque não atrasa o acesso à prancha.

---

## 12. Vocabulário com emojis (categorias e palavras)

**O que é:** A prancha inclui múltiplas categorias (bebidas, pessoas, atividades, emoções, lugares, etc.) com palavras representadas por emojis. O vocabulário está descrito em [Vocabulário](VOCABULARY.html).

**Justificativa:** Os emojis são reconhecíveis e reduzem a dependência da leitura, adequando-se a utilizadores com baixa literacia ou com dificuldades de linguagem. A organização por categorias facilita a localização de palavras e está alinhada com pranchas de CAA e com modelos de vocabulário nuclear e alargado.

---

## 13. Acessibilidade (teclado, ARIA, fonte maior)

**O que é:** Navegação por teclado (Enter e Espaço para ativar botões e itens), atributos ARIA para leitores de ecrã, e opção “Fonte maior” em Configurações → Geral para aumentar o tamanho dos textos e ícones.

**Justificativa:** A acessibilidade permite que utilizadores com limitações motoras ou visuais, ou que dependem de tecnologias de apoio, possam usar o Emotalk. A fonte maior beneficia utilizadores com baixa visão ou uso à distância (por exemplo, em quadros interativos).

---

## 14. MINSPEAK / Ícones centrais (Compação semântica)

**O que é:** Em Configurações → Ícones centrais pode ativar o modo «ícones centrais» (inspirado em MINSPEAK / Semantic Compaction). O primeiro ecrã passa a mostrar apenas 6 ícones multissemânticos: Pessoas, Ações, Comida e bebida, Coisas, Lugares, Descrever/Sentir. Cada ícone agrupa várias categorias do vocabulário. Ao tocar num ícone, aparecem todas as palavras desse grupo — acesso em 2 toques em vez de navegar por muitas categorias. Quando desativado, mantém-se o modo por categorias (lista completa de categorias).

**Justificativa:** A compação semântica (MINSPEAK, Bruce Baker) usa ícones com múltiplos significados e sequências curtas (2–3 toques) para aceder a muito vocabulário com poucos ícones no ecrã, reduzindo a necessidade de trocar de ecrã e favorecendo a automatização de planos motores. O Emotalk implementa uma versão inspirada: ícones centrais que agrupam categorias existentes, mantendo o mesmo vocabulário e a mesma barra de frase, mas com um primeiro ecrã mais reduzido e acesso em 2 toques. Útil para utilizadores que beneficiam de menos opções no ecrã inicial ou de uma estrutura tipo «núcleo» (core) antes do vocabulário alargado.

**Referência:** MINSPEAK / Semantic Compaction (Bruce Baker); compação semântica em CAA; Unity, LAMP.

---

## 15. Quadros (Frame Semantics / Fillmore)

**O que é:** Em Configurações → Quadros (Fillmore) pode ativar o recurso «Quadros» (Frame Semantics). O botão **Quadros** (🖼️) na barra lateral abre uma janela com quadros semânticos inspirados em Charles J. Fillmore: cada quadro representa uma situação com vários papéis (frame elements), por exemplo «Dar» (quem dá, o quê é dado, a quem), «Comer» (quem come, comida), «Ir» (quem vai, para onde), «Querer», «Estar», «Ver». O utilizador escolhe um quadro e preenche cada papel com uma palavra do vocabulário (filtrada por papel semântico); a aplicação fala a frase completa. Diferente dos Moldes de frase (um só espaço), os Quadros têm 2 ou 3 elementos por quadro.

**Justificativa:** Frame Semantics (Fillmore) descreve o significado lexical em termos de quadros semânticos — situações com participantes e papéis. O FrameNet e trabalhos em CAA/terapia da fala usam esta abordagem para estruturar o vocabulário e a produção de frases. Oferecer quadros com vários elementos permite treinar frases mais longas e explícitas (ex.: «Mãe dá maçã a João») e alinha a interface com noções de papéis temáticos e frame elements.

**Referência:** Frame Semantics (Charles J. Fillmore); FrameNet; papéis temáticos e frame elements em linguística e CAA.

---

## 16. Gramática de Dependências (Dependency Grammar)

**O que é:** O Emotalk não tem uma interface específica de Gramática de Dependências (Tesnière), mas as suas funcionalidades são **conceptual e pedagogicamente compatíveis** com esta perspetiva: a frase é vista como uma rede de dependências em que o **verbo** é o núcleo (raiz) e os outros elementos (sujeito, objeto, modo, lugar, tempo) são dependentes. No Emotalk, o slot **O quê faz** (V) em SVOMPT e os **Quadros** (verbos: Dar, Comer, Ir, etc.) colocam o verbo no centro; os papéis Quem, O quê, Onde, Quando, Como (com cores e formas) correspondem aos dependentes. A barra com slots S-V-O-M-P-T e o «ordenar frase ao falar» reforçam a ordem em que o verbo está rodeado pelos seus dependentes.

**Justificativa:** A Gramática de Dependências (Lucien Tesnière) descreve a estrutura da frase em termos de relações núcleo–dependente. Em CAA e terapia da fala, a noção de «verbo no centro» pode ser usada para explicar a construção da frase. O Emotalk não desenha árvores de dependências na interface, mas a forma como organiza a frase (verbo + papéis, SVOMPT, Quadros) está alinhada com esta perspetiva e pode ser referida em contexto educativo ou terapêutico.

**Referência:** Tesnière, L. — *Éléments de syntaxe structurale*; Dependency Grammar; verbo como núcleo da frase.

**Documento dedicado:** [Gramática de Dependências](DEPENDENCY_GRAMMAR.html).

---

## Resumo

| Recurso | Onde configurar / usar | Base ou benefício principal |
|---------|------------------------|-----------------------------|
| Idiomas (pt-BR / EN) | Configurações → Geral | Bilinguismo, consistência interface–fala |
| Colourful Semantics | Configurações → Legenda | Evidência em terapia da fala e CAA |
| Shape Coding | Configurações → Legenda | Evidência (Ebbels); reforço visual por forma |
| SVOMPT (4 opções) | Configurações → SVOMPT | Ordem canónica da frase; intervenção em gramática |
| Barra de frase | Interface principal | Construção e vocalização da mensagem |
| Síntese de fala | Botão Falar; velocidade em Geral | Comunicação auditiva; velocidade ajustável |
| Configurações (modal) | Botão Configurações | Personalização sem alterar código |
| Histórico de frases | Configurações → Histórico | Revisão, repetição, registo |
| **Moldes de frase** | Botão Moldes (📝); Configurações → Moldes | Frases com slot; reduz carga e treina estruturas |
| **Ícones centrais (MINSPEAK)** | Configurações → Ícones centrais | Compação semântica; 2 toques; menos ícones no ecrã |
| **Quadros (Frame Semantics)** | Botão Quadros (🖼️); Configurações → Quadros (Fillmore) | Fillmore; quadros com vários papéis; frases completas |
| **Gramática de Dependências** | (conceito; sem UI dedicada) | Tesnière; verbo como núcleo; compatível com SVOMPT e Quadros |
| PWA / offline | Instalação no browser | Uso sem internet |
| Splash screen | Ao abrir a app | Identidade e transição suave |
| Vocabulário emojis | [Vocabulário](VOCABULARY.html) | Acesso visual, categorizado |
| Acessibilidade | Teclado, ARIA, Fonte maior | Inclusão e usabilidade |

**Documentos relacionados:** [Colourful Semantics](COLOURFUL_SEMANTICS.html), [Gramática de Dependências](DEPENDENCY_GRAMMAR.html), [Vocabulário](VOCABULARY.html), [Índice](README.html).
