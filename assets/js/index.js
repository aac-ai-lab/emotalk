(function () {
    'use strict';

    var categories = window.categories || [];
    var STORAGE_QUICK = 'emotalk_quick';
    var STORAGE_SETTINGS = 'emotalk_settings';
    var STORAGE_HISTORY = 'emotalk_history';
    var MAX_HISTORY = 200;
    var currentCategory = null;
    var Translations = window.Translations || {};

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
    var historyList = document.getElementById('historyList');
    var clearHistoryBtn = document.getElementById('clearHistoryBtn');
    var toastEl = document.getElementById('toast');
    var langSelect = document.getElementById('langSelect');
    var langLabel = document.getElementById('langLabel');

    function getSettings() {
        try {
            var s = JSON.parse(localStorage.getItem(STORAGE_SETTINGS) || '{}');
            var lang = s.lang === 'en' ? 'en' : 'pt-BR';
            return {
                speechRate: typeof s.speechRate === 'number' ? s.speechRate : 1,
                fontLarge: !!s.fontLarge,
                lang: lang
            };
        } catch (e) {
            return { speechRate: 1, fontLarge: false, lang: 'pt-BR' };
        }
    }

    function getUI(key) {
        return Translations.getUI ? Translations.getUI(getSettings().lang, key) : key;
    }

    function getCategoryLabel(categoryNamePtBr) {
        return Translations.getCategoryLabel ? Translations.getCategoryLabel(getSettings().lang, categoryNamePtBr) : categoryNamePtBr;
    }

    function getWordLabel(wordNamePtBr, categoryNamePtBr) {
        return Translations.getWordLabel ? Translations.getWordLabel(getSettings().lang, wordNamePtBr, categoryNamePtBr) : wordNamePtBr;
    }

    function applyLanguage() {
        var lang = getSettings().lang;
        document.documentElement.lang = lang;
        if (document.title !== undefined) {
            document.title = getUI('appTitle');
        }
        var splash = document.getElementById('splashScreen');
        if (splash) splash.setAttribute('aria-label', getUI('splashAria'));
        if (playButton) {
            playButton.setAttribute('title', getUI('btnSpeak'));
            playButton.setAttribute('aria-label', getUI('btnSpeakAria'));
        }
        if (clearButton) {
            clearButton.setAttribute('title', getUI('btnClear'));
            clearButton.setAttribute('aria-label', getUI('btnClearAria'));
        }
        if (settingsButton) {
            settingsButton.setAttribute('title', getUI('btnSettings'));
            settingsButton.setAttribute('aria-label', getUI('btnSettings'));
        }
        if (backButton) {
            backButton.setAttribute('title', getUI('btnHome'));
            backButton.setAttribute('aria-label', getUI('btnHomeAria'));
        }
        var settingsTitle = document.getElementById('settingsTitle');
        if (settingsTitle) settingsTitle.textContent = getUI('settingsTitle');
        var speechRateLabel = document.querySelector('label[for="speechRate"]');
        if (speechRateLabel) speechRateLabel.textContent = getUI('speechRateLabel');
        var fontLargeLabel = document.querySelector('label[for="fontLarge"]');
        if (fontLargeLabel) fontLargeLabel.textContent = getUI('fontLargeLabel');
        if (langLabel) langLabel.textContent = getUI('langLabel');
        var legendTitle = settingsOverlay ? settingsOverlay.querySelector('.settings-legend strong') : null;
        if (legendTitle) legendTitle.textContent = getUI('legendTitle');
        var legendSpans = settingsOverlay ? settingsOverlay.querySelectorAll('.settings-legend span') : [];
        if (legendSpans.length >= 6) {
            legendSpans[0].nextSibling.textContent = ' ' + getUI('who');
            legendSpans[1].nextSibling.textContent = ' ' + getUI('whatDoing');
            legendSpans[2].nextSibling.textContent = ' ' + getUI('what');
            legendSpans[3].nextSibling.textContent = ' ' + getUI('where');
            legendSpans[4].nextSibling.textContent = ' ' + getUI('when');
            legendSpans[5].nextSibling.textContent = ' ' + getUI('howDescribe');
        }
        var historyTitleEl = settingsOverlay ? settingsOverlay.querySelector('.settings-history strong') : null;
        if (historyTitleEl) historyTitleEl.textContent = getUI('historyTitle');
        if (historyList) historyList.setAttribute('aria-label', getUI('historyAria'));
        if (clearHistoryBtn) clearHistoryBtn.textContent = getUI('clearHistory');
        if (settingsCloseBtn) settingsCloseBtn.textContent = getUI('close');
        if (settingsSave) settingsSave.textContent = getUI('save');

        categoriesDiv.innerHTML = '';
        showCategories();
        if (currentCategory) {
            wordsDiv.innerHTML = '';
            showWords(currentCategory);
        }
        quickIcons.querySelectorAll('.quick-icon').forEach(function (el) {
            var orig = el.getAttribute('data-original-name');
            var cat = el.getAttribute('data-category') || '';
            var textEl = el.querySelector('.quick-icon-text');
            if (textEl && orig != null) {
                textEl.textContent = getWordLabel(orig, cat);
                el.setAttribute('aria-label', textEl.textContent + getUI('quickIconAria'));
            }
        });
    }

    function applySettings() {
        var s = getSettings();
        document.body.classList.toggle('font-large', s.fontLarge);
        applyLanguage();
    }

    function showToast(msg) {
        toastEl.textContent = msg;
        toastEl.classList.add('show');
        setTimeout(function () {
            toastEl.classList.remove('show');
        }, 2500);
    }

    function getHistory() {
        try {
            var raw = localStorage.getItem(STORAGE_HISTORY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    }

    function saveToHistory(phrase) {
        if (!phrase || !phrase.trim()) return;
        var list = getHistory();
        list.push({ phrase: phrase.trim(), date: new Date().toISOString() });
        if (list.length > MAX_HISTORY) list = list.slice(-MAX_HISTORY);
        try {
            localStorage.setItem(STORAGE_HISTORY, JSON.stringify(list));
        } catch (e) {}
    }

    function clearHistory() {
        try {
            localStorage.removeItem(STORAGE_HISTORY);
        } catch (e) {}
    }

    function renderHistory() {
        if (!historyList) return;
        var list = getHistory();
        historyList.innerHTML = '';
        var show = list.slice(-20).reverse();
        if (show.length === 0) {
            historyList.innerHTML = '<li class="history-empty">' + getUI('historyEmpty') + '</li>';
            return;
        }
        var locale = getSettings().lang === 'en' ? 'en-GB' : 'pt-BR';
        show.forEach(function (entry) {
            var li = document.createElement('li');
            var d = new Date(entry.date);
            var dateStr = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
            li.innerHTML = '<span class="history-phrase">' + escapeHtml(entry.phrase) + '</span> <span class="history-date">' + dateStr + '</span>';
            historyList.appendChild(li);
        });
    }

    function escapeHtml(text) {
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function saveQuickBar() {
        var items = Array.from(quickIcons.querySelectorAll('.quick-icon')).map(function (el) {
            var namePtBr = el.getAttribute('data-original-name');
            if (namePtBr == null) {
                var nameEl = el.querySelector('.quick-icon-text');
                namePtBr = nameEl ? nameEl.textContent.trim() : '';
            }
            var iconEl = el.querySelector('.word-icon');
            var iconChar = iconEl ? (iconEl.textContent || '').trim() : '';
            var category = el.getAttribute('data-category') || '';
            if (!category && namePtBr) {
                for (var i = 0; i < categories.length; i++) {
                    for (var j = 0; j < categories[i].words.length; j++) {
                        if (categories[i].words[j].name === namePtBr) {
                            category = categories[i].name;
                            break;
                        }
                    }
                }
            }
            return namePtBr ? { name: namePtBr, icon: iconChar || '•', category: category } : null;
        }).filter(Boolean);
        try {
            localStorage.setItem(STORAGE_QUICK, JSON.stringify(items));
        } catch (e) {}
    }

    var quickIconDragging = false;

    function appendQuickIcon(word) {
        var categoryName = word.category || '';
        var namePtBr = word.name || '';
        var displayName = getWordLabel(namePtBr, categoryName);
        var semanticClass = getSemanticClass(categoryName);
        var quickIconDiv = document.createElement('div');
        quickIconDiv.classList.add('quick-icon', semanticClass);
        quickIconDiv.setAttribute('role', 'button');
        quickIconDiv.setAttribute('tabindex', '0');
        quickIconDiv.setAttribute('data-category', categoryName);
        quickIconDiv.setAttribute('data-original-name', namePtBr);
        quickIconDiv.setAttribute('aria-label', displayName + getUI('quickIconAria'));
        quickIconDiv.setAttribute('draggable', 'true');
        quickIconDiv.innerHTML = '<span class="word-icon" aria-hidden="true">' + (word.icon || '•') + '</span><span class="quick-icon-text">' + displayName + '</span>';

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
            var label = getCategoryLabel(category.name);
            var categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category', getSemanticClass(category.name));
            categoryDiv.setAttribute('role', 'button');
            categoryDiv.setAttribute('tabindex', '0');
            categoryDiv.setAttribute('aria-label', getUI('categoryAria') + ' ' + label);
            categoryDiv.innerHTML = '<div class="category-icon" aria-hidden="true">' + category.icon + '</div><div class="category-name">' + label + '</div>';
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
        currentCategory = category;
        categoriesDiv.style.display = 'none';
        wordsDiv.style.display = 'grid';
        wordsDiv.innerHTML = '';
        backButton.style.display = 'inline-block';
        var words = category.words;
        var semanticClass = getSemanticClass(category.name);
        words.forEach(function (word) {
            var label = getWordLabel(word.name, category.name);
            var wordDiv = document.createElement('div');
            wordDiv.classList.add('word', semanticClass);
            wordDiv.setAttribute('role', 'button');
            wordDiv.setAttribute('tabindex', '0');
            wordDiv.setAttribute('aria-label', getUI('wordAria') + ' ' + label);
            wordDiv.innerHTML = '<div class="word-icon" aria-hidden="true">' + word.icon + '</div><div class="word-name">' + label + '</div>';
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
        speakWord(word.name, categoryName);
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
            showToast(getUI('toastAddWords'));
            return;
        }
        var message = Array.from(children).map(function (el) {
            return el.textContent;
        }).join(' ');
        saveToHistory(message);
        var lang = getSettings().lang;
        var utterance = new SpeechSynthesisUtterance(message);
        utterance.voice = getVoice(lang);
        utterance.lang = lang === 'en' ? 'en' : 'pt-BR';
        utterance.rate = getSettings().speechRate;
        speechSynthesis.speak(utterance);
    }

    function speakWord(wordNamePtBr, categoryNamePtBr) {
        var text = getWordLabel(wordNamePtBr, categoryNamePtBr || '');
        var lang = getSettings().lang;
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = getVoice(lang);
        utterance.lang = lang === 'en' ? 'en' : 'pt-BR';
        utterance.rate = getSettings().speechRate;
        speechSynthesis.speak(utterance);
    }

    function speakCategory(categoryNamePtBr) {
        var text = getCategoryLabel(categoryNamePtBr);
        var lang = getSettings().lang;
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = getVoice(lang);
        utterance.lang = lang === 'en' ? 'en' : 'pt-BR';
        utterance.rate = getSettings().speechRate;
        speechSynthesis.speak(utterance);
    }

    function getVoice(lang) {
        var voices = speechSynthesis.getVoices();
        var code = lang === 'en' ? 'en' : 'pt-BR';
        return voices.find(function (v) {
            return v.lang.startsWith(code);
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
        if (langSelect) langSelect.value = s.lang;
        renderHistory();
        settingsOverlay.classList.add('open');
        speechRateInput.focus();
    });

    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', function () {
            clearHistory();
            renderHistory();
            showToast(getUI('toastHistoryCleared'));
        });
    }

    speechRateInput.addEventListener('input', function () {
        speechRateValue.textContent = speechRateInput.value;
    });

    settingsCloseBtn.addEventListener('click', function () {
        settingsOverlay.classList.remove('open');
    });
    settingsSave.addEventListener('click', function () {
        var lang = (langSelect && langSelect.value === 'en') ? 'en' : 'pt-BR';
        var s = {
            speechRate: parseFloat(speechRateInput.value) || 1,
            fontLarge: fontLargeCheck.checked,
            lang: lang
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
