(function () {
    'use strict';

    var categories = window.categories || [];
    var STORAGE_QUICK = 'emotalk_quick';
    var STORAGE_SETTINGS = 'emotalk_settings';

    var SEMANTIC_MAP = {
        pessoas: { key: 'who', label: 'Quem' },
        atividades: { key: 'what-doing', label: 'O quê faz' },
        ações: { key: 'what-doing', label: 'O quê faz' },
        lugares: { key: 'where', label: 'Onde' },
        casa: { key: 'where', label: 'Onde' },
        tempo: { key: 'when', label: 'Quando' },
        descrever: { key: 'describing', label: 'Como/Descrever' },
        emoções: { key: 'describing', label: 'Como/Descrever' },
        cores: { key: 'describing', label: 'Como/Descrever' }
    };

    function getSemanticClass(categoryName) {
        var m = SEMANTIC_MAP[categoryName];
        return m ? 'semantic-' + m.key : 'semantic-what';
    }

    var quickIcons = document.getElementById('quickIcons');
    var categoriesDiv = document.getElementById('categories');
    var wordsDiv = document.getElementById('words');
    var backButton = document.getElementById('backButton');
    var playButton = document.getElementById('playButton');
    var clearButton = document.getElementById('clearButton');
    var settingsOverlay = document.getElementById('settingsOverlay');
    var settingsButton = document.getElementById('settingsButton');
    var speechRateInput = document.getElementById('speechRate');
    var speechRateValue = document.getElementById('speechRateValue');
    var fontLargeCheck = document.getElementById('fontLarge');
    var settingsCloseBtn = document.getElementById('settingsClose');
    var settingsSave = document.getElementById('settingsSave');
    var toastEl = document.getElementById('toast');

    function getSettings() {
        try {
            var s = JSON.parse(localStorage.getItem(STORAGE_SETTINGS) || '{}');
            return {
                speechRate: typeof s.speechRate === 'number' ? s.speechRate : 1,
                fontLarge: !!s.fontLarge
            };
        } catch (e) {
            return { speechRate: 1, fontLarge: false };
        }
    }

    function applySettings() {
        var s = getSettings();
        document.body.classList.toggle('font-large', s.fontLarge);
    }

    function showToast(msg) {
        toastEl.textContent = msg;
        toastEl.classList.add('show');
        setTimeout(function () {
            toastEl.classList.remove('show');
        }, 2500);
    }

    function saveQuickBar() {
        var items = Array.from(quickIcons.querySelectorAll('.quick-icon')).map(function (el) {
            var nameEl = el.querySelector('.quick-icon-text');
            var iconEl = el.querySelector('.word-icon');
            var name = nameEl ? nameEl.textContent.trim() : '';
            var iconChar = iconEl ? (iconEl.textContent || '').trim() : '';
            var category = el.getAttribute('data-category') || '';
            if (!category) {
                for (var i = 0; i < categories.length; i++) {
                    for (var j = 0; j < categories[i].words.length; j++) {
                        if (categories[i].words[j].name === name) {
                            category = categories[i].name;
                            break;
                        }
                    }
                }
            }
            return name ? { name: name, icon: iconChar || '•', category: category } : null;
        }).filter(Boolean);
        try {
            localStorage.setItem(STORAGE_QUICK, JSON.stringify(items));
        } catch (e) {}
    }

    var quickIconDragging = false;

    function appendQuickIcon(word) {
        var categoryName = word.category || '';
        var semanticClass = getSemanticClass(categoryName);
        var quickIconDiv = document.createElement('div');
        quickIconDiv.classList.add('quick-icon', semanticClass);
        quickIconDiv.setAttribute('role', 'button');
        quickIconDiv.setAttribute('tabindex', '0');
        quickIconDiv.setAttribute('data-category', categoryName);
        quickIconDiv.setAttribute('aria-label', word.name + '. Arrastar para reordenar, clique para remover.');
        quickIconDiv.setAttribute('draggable', 'true');
        quickIconDiv.innerHTML = '<span class="word-icon" aria-hidden="true">' + (word.icon || '•') + '</span><span class="quick-icon-text">' + word.name + '</span>';

        quickIconDiv.addEventListener('click', function () {
            if (quickIconDragging) return;
            quickIconDiv.remove();
            saveQuickBar();
        });

        quickIconDiv.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                quickIconDiv.click();
            }
        });

        quickIconDiv.addEventListener('dragstart', function (e) {
            quickIconDragging = true;
            e.dataTransfer.setData('text/plain', String(Array.prototype.indexOf.call(quickIcons.children, quickIconDiv)));
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setDragImage(quickIconDiv, 0, 0);
            quickIconDiv.classList.add('dragging');
        });

        quickIconDiv.addEventListener('dragend', function () {
            quickIconDiv.classList.remove('dragging');
            quickIcons.querySelectorAll('.quick-icon').forEach(function (el) {
                el.classList.remove('drag-over');
            });
            setTimeout(function () {
                quickIconDragging = false;
            }, 0);
        });

        quickIconDiv.addEventListener('dragover', function (e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            if (e.currentTarget.classList.contains('dragging')) return;
            e.currentTarget.classList.add('drag-over');
        });

        quickIconDiv.addEventListener('dragleave', function (e) {
            e.currentTarget.classList.remove('drag-over');
        });

        quickIconDiv.addEventListener('drop', function (e) {
            e.preventDefault();
            e.currentTarget.classList.remove('drag-over');
            var fromIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
            var items = Array.from(quickIcons.querySelectorAll('.quick-icon'));
            var toIndex = items.indexOf(e.currentTarget);
            if (fromIndex === toIndex || fromIndex < 0) return;
            var dragged = items[fromIndex];
            quickIcons.insertBefore(dragged, e.currentTarget);
            saveQuickBar();
        });

        quickIcons.appendChild(quickIconDiv);
    }

    function restoreQuickBar() {
        try {
            var raw = localStorage.getItem(STORAGE_QUICK);
            if (!raw) return;
            var items = JSON.parse(raw);
            items.forEach(function (item) {
                appendQuickIcon(item);
            });
        } catch (e) {}
    }

    function showCategories() {
        categories.forEach(function (category) {
            var categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category', getSemanticClass(category.name));
            categoryDiv.setAttribute('role', 'button');
            categoryDiv.setAttribute('tabindex', '0');
            categoryDiv.setAttribute('aria-label', 'Categoria ' + category.name);
            categoryDiv.innerHTML = '<div class="category-icon" aria-hidden="true">' + category.icon + '</div><div class="category-name">' + category.name + '</div>';
            categoryDiv.addEventListener('click', function () {
                speakCategory(category.name);
                showWords(category);
            });
            categoryDiv.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    categoryDiv.click();
                }
            });
            categoriesDiv.appendChild(categoryDiv);
        });
    }

    function showWords(category) {
        categoriesDiv.style.display = 'none';
        wordsDiv.style.display = 'grid';
        wordsDiv.innerHTML = '';
        backButton.style.display = 'inline-block';
        var words = category.words;
        var semanticClass = getSemanticClass(category.name);
        words.forEach(function (word) {
            var wordDiv = document.createElement('div');
            wordDiv.classList.add('word', semanticClass);
            wordDiv.setAttribute('role', 'button');
            wordDiv.setAttribute('tabindex', '0');
            wordDiv.setAttribute('aria-label', 'Palavra ' + word.name);
            wordDiv.innerHTML = '<div class="word-icon" aria-hidden="true">' + word.icon + '</div><div class="word-name">' + word.name + '</div>';
            wordDiv.addEventListener('click', function () {
                addToQuickIcons(word, category.name);
            });
            wordDiv.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    wordDiv.click();
                }
            });
            wordsDiv.appendChild(wordDiv);
        });
    }

    function addToQuickIcons(word, categoryName) {
        speakWord(word.name);
        appendQuickIcon({ name: word.name, icon: word.icon, category: categoryName });
        saveQuickBar();
    }

    function clearQuickIcons() {
        quickIcons.innerHTML = '';
        saveQuickBar();
    }

    function playIcons() {
        var children = quickIcons.querySelectorAll('.quick-icon-text');
        if (!children.length) {
            showToast('Adicione palavras na barra acima.');
            return;
        }
        var message = Array.from(children).map(function (el) {
            return el.textContent;
        }).join(' ');
        var utterance = new SpeechSynthesisUtterance(message);
        utterance.voice = getVoice('pt-BR');
        utterance.rate = getSettings().speechRate;
        speechSynthesis.speak(utterance);
    }

    function speakWord(word) {
        var utterance = new SpeechSynthesisUtterance(word);
        utterance.voice = getVoice('pt-BR');
        utterance.rate = getSettings().speechRate;
        speechSynthesis.speak(utterance);
    }

    function speakCategory(category) {
        var utterance = new SpeechSynthesisUtterance(category);
        utterance.voice = getVoice('pt-BR');
        utterance.rate = getSettings().speechRate;
        speechSynthesis.speak(utterance);
    }

    function getVoice(lang) {
        var voices = speechSynthesis.getVoices();
        return voices.find(function (v) {
            return v.lang.startsWith(lang);
        }) || null;
    }

    function initSplash() {
        var splash = document.getElementById('splashScreen');
        if (!splash) return;
        function hideSplash() {
            splash.classList.add('hidden');
            setTimeout(function () {
                splash.remove();
            }, 500);
        }
        splash.addEventListener('click', hideSplash, { once: true });
        splash.addEventListener('touchstart', hideSplash, { once: true, passive: true });
        setTimeout(hideSplash, 2500);
    }

    function init() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').catch(function () {});
        }
        initSplash();
        applySettings();
        showCategories();
        restoreQuickBar();
    }

    backButton.addEventListener('click', function () {
        categoriesDiv.style.display = 'grid';
        wordsDiv.style.display = 'none';
        backButton.style.display = 'none';
    });

    playButton.addEventListener('click', playIcons);
    clearButton.addEventListener('click', clearQuickIcons);

    settingsButton.addEventListener('click', function () {
        var s = getSettings();
        speechRateInput.value = s.speechRate;
        speechRateValue.textContent = s.speechRate;
        fontLargeCheck.checked = s.fontLarge;
        settingsOverlay.classList.add('open');
        speechRateInput.focus();
    });

    speechRateInput.addEventListener('input', function () {
        speechRateValue.textContent = speechRateInput.value;
    });

    settingsCloseBtn.addEventListener('click', function () {
        settingsOverlay.classList.remove('open');
    });
    settingsSave.addEventListener('click', function () {
        var s = {
            speechRate: parseFloat(speechRateInput.value) || 1,
            fontLarge: fontLargeCheck.checked
        };
        try {
            localStorage.setItem(STORAGE_SETTINGS, JSON.stringify(s));
        } catch (e) {}
        applySettings();
        settingsOverlay.classList.remove('open');
    });

    settingsOverlay.addEventListener('click', function (e) {
        if (e.target === settingsOverlay) {
            settingsOverlay.classList.remove('open');
        }
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
