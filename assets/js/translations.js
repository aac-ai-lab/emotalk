(function () {
    'use strict';

    var UI = {
        'pt-BR': {
            appTitle: 'Emotalk - Comunicação Aumentativa e Alternativa',
            splashAria: 'Carregando Emotalk',
            btnSpeak: 'Falar',
            btnSpeakAria: 'Falar frase',
            btnClear: 'Limpar',
            btnClearAria: 'Limpar barra',
            btnSettings: 'Configurações',
            btnHome: 'Início',
            btnHomeAria: 'Voltar às categorias',
            settingsTitle: 'Configurações',
            settingsIntro: 'Ajuste a interface e as opções de fala conforme a necessidade do utilizador.',
            speechRateLabel: 'Velocidade da fala',
            fontLargeLabel: 'Fonte maior',
            legendTitle: 'Legenda (Colourful Semantics)',
            who: 'Quem',
            whatDoing: 'O quê faz',
            what: 'O quê',
            where: 'Onde',
            when: 'Quando',
            howDescribe: 'Como/Descrever',
            historyTitle: 'Histórico de frases',
            historyAria: 'Últimas frases faladas',
            historyEmpty: 'Nenhuma frase ainda.',
            clearHistory: 'Limpar histórico',
            close: 'Fechar',
            save: 'Salvar',
            toastAddWords: 'Adicione palavras na barra acima.',
            toastHistoryCleared: 'Histórico limpo.',
            categoryAria: 'Categoria',
            wordAria: 'Palavra',
            quickIconAria: '. Arrastar para reordenar, clique para remover.',
            langLabel: 'Idioma',
            svomptTitle: 'SVOMPT (ordem da frase)',
            svomptSpeakOrder: 'Ordenar frase ao falar (S-V-O-M-P-T)',
            svomptSlots: 'Barra com slots S-V-O-M-P-T',
            svomptGuided: 'Modo guiado (sugerir próximo slot)',
            svomptSortBar: 'Ordenar barra por SVOMPT',
            svomptNextSlot: 'Próximo: ',
            slotS: 'Sujeito (Quem)',
            slotV: 'Verbo (O quê faz)',
            slotO: 'Objeto (O quê)',
            slotM: 'Modo (Como)',
            slotP: 'Lugar (Onde)',
            slotT: 'Tempo (Quando)',
            hintLang: 'Escolha o idioma da interface e da síntese de fala. Ajuda a manter consistência para o utilizador.',
            hintSpeechRate: 'Valores menores = fala mais lenta; valores maiores = mais rápida. Use velocidade menor para melhor compreensão.',
            hintFontLarge: 'Aumenta o tamanho dos textos e ícones nas categorias e palavras. Recomendado para baixa visão ou uso à distância.',
            hintSvomptIntro: 'SVOMPT (Sujeito–Verbo–Objeto–Modo–Lugar–Tempo) é uma ordem de frase usada em terapia da fala e CAA. Ative as opções abaixo conforme a necessidade.',
            hintSvomptSpeakOrder: 'Ao carregar em Falar, a frase é dita na ordem S-V-O-M-P-T, mesmo que os pictogramas estejam noutra ordem na barra.',
            hintSvomptSlots: 'A barra de frase passa a ter 6 zonas (S, V, O, M, P, T). Cada palavra vai para o slot do seu papel, ajudando a estruturar a frase.',
            hintSvomptGuided: 'Após adicionar uma palavra, aparece uma sugestão do próximo slot (ex.: «Próximo: Verbo»). Útil para treinar a ordem da frase.',
            hintSvomptSortBar: 'Cada nova palavra faz a barra ser reordenada automaticamente por S-V-O-M-P-T. Só tem efeito quando «Barra com slots» está desativada.',
            hintLegend: 'As cores indicam o papel de cada palavra na frase (Quem, O quê faz, O quê, Onde, Quando, Como). Apoia a construção de frases.',
            colourfulSemanticsLabel: 'Ativar Legenda (Colourful Semantics)',
            colourfulSemanticsHint: 'Quando ativado, categorias e palavras mostram cores por papel na frase (Quem, O quê faz, etc.). Quando desativado, todos os itens usam estilo neutro.',
            shapeCodingLabel: 'Ativar Shape Coding (formas por papel)',
            shapeCodingHint: 'Cada papel gramatical ganha uma forma distinta: Quem = retângulo, O quê faz = hexágono, O quê = seta, Onde = cantos arredondados, Quando = elipse, Como = losango. Pode usar junto com as cores.',
            hintHistory: 'Mostra as últimas frases faladas. Útil para rever, repetir ou partilhar com o terapeuta ou educador.',
            menuGeneral: 'Geral',
            menuSvompt: 'SVOMPT',
            menuLegend: 'Legenda',
            menuHistory: 'Histórico',
            menuFrames: 'Moldes',
            btnFrames: 'Moldes',
            btnFramesAria: 'Abrir moldes de frase',
            framesTitle: 'Moldes de frase',
            framesIntro: 'Escolha um molde e depois uma palavra para completar a frase.',
            framesSlotLabel: 'Escolha uma palavra para o espaço:',
            framesSpeak: 'Falar frase',
            framesChooseWord: 'Escolha uma palavra',
            hintFrames: 'Moldes de frase (Sentence Frames) ajudam a construir frases com uma estrutura fixa e um espaço a preencher (ex.: «Eu quero ___»). Ative para mostrar o botão Moldes na barra lateral.',
            sentenceFramesLabel: 'Ativar Moldes de frase',
            sentenceFramesHint: 'Quando ativado, o botão Moldes permite escolher um molde (ex.: «Eu quero ___»), depois uma palavra compatível com o espaço, e falar a frase completa.'
        },
        'en': {
            appTitle: 'Emotalk - Augmentative and Alternative Communication',
            splashAria: 'Loading Emotalk',
            btnSpeak: 'Speak',
            btnSpeakAria: 'Speak sentence',
            btnClear: 'Clear',
            btnClearAria: 'Clear bar',
            btnSettings: 'Settings',
            btnHome: 'Home',
            btnHomeAria: 'Back to categories',
            settingsTitle: 'Settings',
            settingsIntro: 'Adjust the interface and speech options to suit the user’s needs.',
            speechRateLabel: 'Speech rate',
            fontLargeLabel: 'Larger font',
            legendTitle: 'Legend (Colourful Semantics)',
            who: 'Who',
            whatDoing: 'What doing',
            what: 'What',
            where: 'Where',
            when: 'When',
            howDescribe: 'How/Describe',
            historyTitle: 'Sentence history',
            historyAria: 'Last spoken sentences',
            historyEmpty: 'No sentences yet.',
            clearHistory: 'Clear history',
            close: 'Close',
            save: 'Save',
            toastAddWords: 'Add words to the bar above.',
            toastHistoryCleared: 'History cleared.',
            categoryAria: 'Category',
            wordAria: 'Word',
            quickIconAria: '. Drag to reorder, click to remove.',
            langLabel: 'Language',
            svomptTitle: 'SVOMPT (sentence order)',
            svomptSpeakOrder: 'Order phrase when speaking (S-V-O-M-P-T)',
            svomptSlots: 'Bar with S-V-O-M-P-T slots',
            svomptGuided: 'Guided mode (suggest next slot)',
            svomptSortBar: 'Sort bar by SVOMPT',
            svomptNextSlot: 'Next: ',
            slotS: 'Subject (Who)',
            slotV: 'Verb (What doing)',
            slotO: 'Object (What)',
            slotM: 'Manner (How)',
            slotP: 'Place (Where)',
            slotT: 'Time (When)',
            hintLang: 'Choose the language for the interface and speech synthesis. Helps keep the experience consistent for the user.',
            hintSpeechRate: 'Lower values = slower speech; higher values = faster. Use a lower rate for better comprehension.',
            hintFontLarge: 'Increases the size of text and icons in categories and words. Recommended for low vision or use at a distance.',
            hintSvomptIntro: 'SVOMPT (Subject–Verb–Object–Manner–Place–Time) is a sentence order used in speech therapy and AAC. Enable the options below as needed.',
            hintSvomptSpeakOrder: 'When you tap Speak, the phrase is spoken in S-V-O-M-P-T order, even if the pictograms are in a different order on the bar.',
            hintSvomptSlots: 'The phrase bar becomes 6 zones (S, V, O, M, P, T). Each word goes into its role slot, helping structure the sentence.',
            hintSvomptGuided: 'After adding a word, a suggestion for the next slot appears (e.g. «Next: Verb»). Useful for practising sentence order.',
            hintSvomptSortBar: 'Each new word causes the bar to be reordered automatically by S-V-O-M-P-T. Only applies when «Bar with slots» is off.',
            hintLegend: 'Colours show each word’s role in the sentence (Who, What doing, What, Where, When, How). Supports sentence building.',
            colourfulSemanticsLabel: 'Enable Legend (Colourful Semantics)',
            colourfulSemanticsHint: 'When on, categories and words show colours by role in the sentence (Who, What doing, etc.). When off, all items use a neutral style.',
            shapeCodingLabel: 'Enable Shape Coding (shapes by role)',
            shapeCodingHint: 'Each grammatical role gets a distinct shape: Who = rectangle, What doing = hexagon, What = arrow, Where = rounded, When = ellipse, How = diamond. Can be used with colours.',
            hintHistory: 'Shows the last spoken phrases. Useful for reviewing, repeating, or sharing with a therapist or educator.',
            menuGeneral: 'General',
            menuSvompt: 'SVOMPT',
            menuLegend: 'Legend',
            menuHistory: 'History',
            menuFrames: 'Frames',
            btnFrames: 'Frames',
            btnFramesAria: 'Open sentence frames',
            framesTitle: 'Sentence frames',
            framesIntro: 'Choose a frame, then a word to complete the sentence.',
            framesSlotLabel: 'Choose a word for the slot:',
            framesSpeak: 'Speak sentence',
            framesChooseWord: 'Choose a word',
            hintFrames: 'Sentence frames help build sentences with a fixed structure and one slot to fill (e.g. «I want ___»). Enable to show the Frames button in the sidebar.',
            sentenceFramesLabel: 'Enable Sentence frames',
            sentenceFramesHint: 'When on, the Frames button lets you choose a frame (e.g. «I want ___»), then a word that fits the slot, and speak the full sentence.'
        }
    };

    var SEMANTIC_LABELS = {
        'pt-BR': { who: 'Quem', whatDoing: 'O quê faz', what: 'O quê', where: 'Onde', when: 'Quando', howDescribe: 'Como/Descrever' },
        'en': { who: 'Who', whatDoing: 'What doing', what: 'What', where: 'Where', when: 'When', howDescribe: 'How/Describe' }
    };

    var CATEGORIES_EN = {
        bebidas: 'Drinks',
        petiscos: 'Snacks',
        atividades: 'Activities',
        emoções: 'Emotions',
        corpo: 'Body',
        roupas: 'Clothes',
        pessoas: 'People',
        descrever: 'Describe',
        cozinha: 'Kitchen',
        escola: 'School',
        animais: 'Animals',
        tecnologia: 'Technology',
        tempo: 'Weather',
        plantas: 'Plants',
        esportes: 'Sports',
        transportes: 'Transport',
        lugares: 'Places',
        alimentos: 'Food',
        saúde: 'Health',
        higiene: 'Hygiene',
        cores: 'Colours',
        casa: 'Home',
        ações: 'Actions'
    };

    function wordKey(cat, word) {
        return (cat + '.' + word).toLowerCase();
    }

    var WORDS_EN = {};
    var wordList = [
        ['bebidas', 'água', 'water'], ['bebidas', 'suco', 'juice'], ['bebidas', 'café', 'coffee'], ['bebidas', 'refrigerante', 'soda'], ['bebidas', 'leite', 'milk'], ['bebidas', 'chá', 'tea'], ['bebidas', 'cerveja', 'beer'], ['bebidas', 'vinho', 'wine'], ['bebidas', 'coquetel', 'cocktail'],
        ['petiscos', 'pipoca', 'popcorn'], ['petiscos', 'biscoito', 'biscuit'], ['petiscos', 'batata frita', 'chips'], ['petiscos', 'sorvete', 'ice cream'], ['petiscos', 'chocolate', 'chocolate'], ['petiscos', 'nuts', 'nuts'], ['petiscos', 'chips', 'crisps'], ['petiscos', 'cereal', 'cereal'], ['petiscos', 'quibe', 'kibbeh'],
        ['atividades', 'andar', 'walk'], ['atividades', 'correr', 'run'], ['atividades', 'nadar', 'swim'], ['atividades', 'pular', 'jump'], ['atividades', 'jogar', 'play'], ['atividades', 'dançar', 'dance'], ['atividades', 'andar de bicicleta', 'cycle'], ['atividades', 'escalar', 'climb'], ['atividades', 'praticar yoga', 'do yoga'],
        ['emoções', 'feliz', 'happy'], ['emoções', 'triste', 'sad'], ['emoções', 'animado', 'excited'], ['emoções', 'nervoso', 'nervous'], ['emoções', 'cansado', 'tired'], ['emoções', 'surpreso', 'surprised'], ['emoções', 'confuso', 'confused'], ['emoções', 'irritado', 'angry'], ['emoções', 'aliviado', 'relieved'],
        ['corpo', 'mão', 'hand'], ['corpo', 'cabeça', 'head'], ['corpo', 'braço', 'arm'], ['corpo', 'perna', 'leg'], ['corpo', 'pé', 'foot'], ['corpo', 'olho', 'eye'], ['corpo', 'orelha', 'ear'], ['corpo', 'boca', 'mouth'], ['corpo', 'nariz', 'nose'],
        ['roupas', 'camisa', 'shirt'], ['roupas', 'calça', 'trousers'], ['roupas', 'sapato', 'shoe'], ['roupas', 'chapéu', 'hat'], ['roupas', 'jaqueta', 'jacket'], ['roupas', 'saia', 'skirt'], ['roupas', 'casaco', 'coat'], ['roupas', 'meia', 'sock'], ['roupas', 'óculos', 'glasses'],
        ['pessoas', 'pai', 'dad'], ['pessoas', 'mãe', 'mum'], ['pessoas', 'amigo', 'friend'], ['pessoas', 'irmão', 'brother'], ['pessoas', 'irmã', 'sister'], ['pessoas', 'avô', 'grandad'], ['pessoas', 'avó', 'grandma'], ['pessoas', 'professor', 'teacher'], ['pessoas', 'aluno', 'student'],
        ['descrever', 'grande', 'big'], ['descrever', 'pequeno', 'small'], ['descrever', 'rápido', 'fast'], ['descrever', 'lento', 'slow'], ['descrever', 'quente', 'hot'], ['descrever', 'frio', 'cold'], ['descrever', 'alto', 'tall'], ['descrever', 'baixo', 'short'], ['descrever', 'leve', 'light'],
        ['cozinha', 'prato', 'plate'], ['cozinha', 'garfo', 'fork'], ['cozinha', 'cozinha', 'kitchen'], ['cozinha', 'xícara', 'cup'], ['cozinha', 'talher', 'cutlery'], ['cozinha', 'panela', 'pot'], ['cozinha', 'tampa', 'lid'], ['cozinha', 'espátula', 'spatula'], ['cozinha', 'batedeira', 'mixer'],
        ['escola', 'livro', 'book'], ['escola', 'professor', 'teacher'], ['escola', 'aluno', 'student'], ['escola', 'lousa', 'board'], ['escola', 'caderno', 'notebook'], ['escola', 'lápis', 'pencil'], ['escola', 'caneta', 'pen'], ['escola', 'mesa', 'table'], ['escola', 'cadeira', 'chair'],
        ['animais', 'cachorro', 'dog'], ['animais', 'gato', 'cat'], ['animais', 'pássaro', 'bird'], ['animais', 'peixe', 'fish'], ['animais', 'coelho', 'rabbit'], ['animais', 'cavalo', 'horse'], ['animais', 'elefante', 'elephant'], ['animais', 'tigre', 'tiger'], ['animais', 'urso', 'bear'],
        ['tecnologia', 'computador', 'computer'], ['tecnologia', 'telefone', 'phone'], ['tecnologia', 'internet', 'internet'], ['tecnologia', 'televisão', 'TV'], ['tecnologia', 'câmera', 'camera'], ['tecnologia', 'tablet', 'tablet'], ['tecnologia', 'impressora', 'printer'], ['tecnologia', 'rádio', 'radio'], ['tecnologia', 'carregador', 'charger'],
        ['tempo', 'sol', 'sun'], ['tempo', 'chuva', 'rain'], ['tempo', 'nuvem', 'cloud'], ['tempo', 'neve', 'snow'], ['tempo', 'vento', 'wind'], ['tempo', 'neblina', 'fog'], ['tempo', 'trovoada', 'storm'], ['tempo', 'arco-íris', 'rainbow'], ['tempo', 'calor', 'heat'],
        ['plantas', 'árvore', 'tree'], ['plantas', 'flor', 'flower'], ['plantas', 'folha', 'leaf'], ['plantas', 'cactus', 'cactus'], ['plantas', 'mato', 'bush'], ['plantas', 'grama', 'grass'], ['plantas', 'planta', 'plant'], ['plantas', 'lírio', 'lily'], ['plantas', 'orquídea', 'orchid'],
        ['esportes', 'futebol', 'football'], ['esportes', 'basquete', 'basketball'], ['esportes', 'tênis', 'tennis'], ['esportes', 'natação', 'swimming'], ['esportes', 'ciclismo', 'cycling'], ['esportes', 'golfe', 'golf'], ['esportes', 'rugby', 'rugby'], ['esportes', 'vôlei', 'volleyball'], ['esportes', 'boxe', 'boxing'],
        ['transportes', 'carro', 'car'], ['transportes', 'bicicleta', 'bicycle'], ['transportes', 'ônibus', 'bus'], ['transportes', 'avião', 'plane'], ['transportes', 'trem', 'train'], ['transportes', 'moto', 'motorbike'], ['transportes', 'barco', 'boat'], ['transportes', 'helicóptero', 'helicopter'], ['transportes', 'metro', 'metro'],
        ['lugares', 'casa', 'home'], ['lugares', 'escola', 'school'], ['lugares', 'hospital', 'hospital'], ['lugares', 'loja', 'shop'], ['lugares', 'parque', 'park'], ['lugares', 'restaurante', 'restaurant'], ['lugares', 'praia', 'beach'], ['lugares', 'hotel', 'hotel'], ['lugares', 'biblioteca', 'library'],
        ['alimentos', 'maçã', 'apple'], ['alimentos', 'banana', 'banana'], ['alimentos', 'laranja', 'orange'], ['alimentos', 'uva', 'grape'], ['alimentos', 'melancia', 'watermelon'], ['alimentos', 'manga', 'mango'], ['alimentos', 'abacaxi', 'pineapple'], ['alimentos', 'kiwi', 'kiwi'], ['alimentos', 'pêra', 'pear'],
        ['saúde', 'dor', 'pain'], ['saúde', 'médico', 'doctor'], ['saúde', 'remédio', 'medicine'], ['saúde', 'hospital', 'hospital'], ['saúde', 'termômetro', 'thermometer'], ['saúde', 'curativo', 'plaster'], ['saúde', 'injeção', 'injection'], ['saúde', 'estetoscópio', 'stethoscope'], ['saúde', 'enjoo', 'sickness'],
        ['higiene', 'escovar dentes', 'brush teeth'], ['higiene', 'banho', 'bath'], ['higiene', 'sabonete', 'soap'], ['higiene', 'shampoo', 'shampoo'], ['higiene', 'toalha', 'towel'], ['higiene', 'papel higiênico', 'toilet paper'], ['higiene', 'pente', 'comb'], ['higiene', 'espelho', 'mirror'], ['higiene', 'lavar mãos', 'wash hands'],
        ['cores', 'vermelho', 'red'], ['cores', 'laranja', 'orange'], ['cores', 'amarelo', 'yellow'], ['cores', 'verde', 'green'], ['cores', 'azul', 'blue'], ['cores', 'roxo', 'purple'], ['cores', 'rosa', 'pink'], ['cores', 'preto', 'black'], ['cores', 'branco', 'white'],
        ['casa', 'quarto', 'bedroom'], ['casa', 'banheiro', 'bathroom'], ['casa', 'sala', 'living room'], ['casa', 'cama', 'bed'], ['casa', 'sofá', 'sofa'], ['casa', 'chuveiro', 'shower'], ['casa', 'luz', 'light'], ['casa', 'porta', 'door'], ['casa', 'janela', 'window'],
        ['ações', 'querer', 'want'], ['ações', 'precisar', 'need'], ['ações', 'ir', 'go'], ['ações', 'vir', 'come'], ['ações', 'ajudar', 'help'], ['ações', 'parar', 'stop'], ['ações', 'abrir', 'open'], ['ações', 'fechar', 'close'], ['ações', 'esperar', 'wait']
    ];
    wordList.forEach(function (row) {
        WORDS_EN[wordKey(row[0], row[1])] = row[2];
    });

    function getUI(lang, key) {
        var L = UI[lang] || UI['pt-BR'];
        return L[key] != null ? L[key] : (UI['en'][key] || key);
    }

    function getCategoryLabel(lang, categoryNamePtBr) {
        if (lang === 'pt-BR') return categoryNamePtBr;
        return CATEGORIES_EN[categoryNamePtBr] != null ? CATEGORIES_EN[categoryNamePtBr] : categoryNamePtBr;
    }

    function getWordLabel(lang, wordNamePtBr, categoryNamePtBr) {
        if (lang === 'pt-BR') return wordNamePtBr;
        var key = wordKey(categoryNamePtBr || '', wordNamePtBr);
        return WORDS_EN[key] != null ? WORDS_EN[key] : wordNamePtBr;
    }

    function getSemanticLabel(lang, key) {
        var L = SEMANTIC_LABELS[lang] || SEMANTIC_LABELS['pt-BR'];
        return L[key] != null ? L[key] : key;
    }

    window.Translations = {
        UI: UI,
        getUI: getUI,
        getCategoryLabel: getCategoryLabel,
        getWordLabel: getWordLabel,
        getSemanticLabel: getSemanticLabel,
        supportedLangs: ['pt-BR', 'en']
    };
})();
