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

    var SVOMPT_ORDER = ['who', 'what-doing', 'what', 'describing', 'where', 'when'];
    var SVOMPT_LETTERS = ['S', 'V', 'O', 'M', 'P', 'T'];

    function getSemanticClass(categoryName) {
        var m = SEMANTIC_MAP[categoryName];
        return m ? 'semantic-' + m.key : 'semantic-what';
    }

    function getSemanticKey(categoryName) {
        var m = SEMANTIC_MAP[categoryName];
        return m ? m.key : 'what';
    }

    function getSvomptOrderIndex(categoryName) {
        var key = getSemanticKey(categoryName);
        var i = SVOMPT_ORDER.indexOf(key);
        return i >= 0 ? i : 2;
    }

    function getSlotLetter(categoryName) {
        var i = getSvomptOrderIndex(categoryName);
        return SVOMPT_LETTERS[i] || 'O';
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
    var svomptSpeakOrderCheck = document.getElementById('svomptSpeakOrder');
    var svomptSlotsCheck = document.getElementById('svomptSlots');
    var svomptGuidedCheck = document.getElementById('svomptGuided');
    var svomptSortBarCheck = document.getElementById('svomptSortBar');
    var svomptTitleEl = document.getElementById('svomptTitle');
    var colourfulSemanticsCheck = document.getElementById('colourfulSemanticsCheck');
    var shapeCodingCheck = document.getElementById('shapeCodingCheck');
    var sentenceFramesCheck = document.getElementById('sentenceFramesCheck');
    var framesButton = document.getElementById('framesButton');
    var framesOverlay = document.getElementById('framesOverlay');
    var framesList = document.getElementById('framesList');
    var framesWords = document.getElementById('framesWords');
    var framesPreview = document.getElementById('framesPreview');
    var framesSpeakBtn = document.getElementById('framesSpeakBtn');
    var framesCloseBtn = document.getElementById('framesCloseBtn');
    var framesIntro = document.getElementById('framesIntro');
    var framesSlotLabel = document.getElementById('framesSlotLabel');

    function getSettings() {
        try {
            var s = JSON.parse(localStorage.getItem(STORAGE_SETTINGS) || '{}');
            var lang = s.lang === 'en' ? 'en' : 'pt-BR';
            return {
                speechRate: typeof s.speechRate === 'number' ? s.speechRate : 1,
                fontLarge: !!s.fontLarge,
                lang: lang,
                svomptSpeakOrder: !!s.svomptSpeakOrder,
                svomptSlots: !!s.svomptSlots,
                svomptGuided: !!s.svomptGuided,
                svomptSortBar: !!s.svomptSortBar,
                colourfulSemantics: s.colourfulSemantics !== false,
                shapeCoding: !!s.shapeCoding,
                sentenceFrames: s.sentenceFrames !== false
            };
        } catch (e) {
            return { speechRate: 1, fontLarge: false, lang: 'pt-BR', svomptSpeakOrder: false, svomptSlots: false, svomptGuided: false, svomptSortBar: false, colourfulSemantics: true, shapeCoding: false, sentenceFrames: true };
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
        var settingsIntroEl = document.getElementById('settingsIntro');
        if (settingsIntroEl) settingsIntroEl.textContent = getUI('settingsIntro');
        var hintIds = ['hintLang', 'hintSpeechRate', 'hintFontLarge', 'hintSvomptIntro', 'hintSvomptSpeakOrder', 'hintSvomptSlots', 'hintSvomptGuided', 'hintSvomptSortBar', 'hintLegend', 'hintColourfulSemantics', 'hintShapeCoding', 'hintHistory'];
        var hintKeys = ['hintLang', 'hintSpeechRate', 'hintFontLarge', 'hintSvomptIntro', 'hintSvomptSpeakOrder', 'hintSvomptSlots', 'hintSvomptGuided', 'hintSvomptSortBar', 'hintLegend', 'colourfulSemanticsHint', 'shapeCodingHint', 'hintHistory'];
        hintIds.forEach(function (id, i) {
            var el = document.getElementById(id);
            if (el && hintKeys[i]) el.textContent = getUI(hintKeys[i]);
        });
        var speechRateLabel = document.querySelector('label[for="speechRate"]');
        if (speechRateLabel) speechRateLabel.textContent = getUI('speechRateLabel');
        var fontLargeLabel = document.querySelector('label[for="fontLarge"]');
        if (fontLargeLabel) fontLargeLabel.textContent = getUI('fontLargeLabel');
        if (langLabel) langLabel.textContent = getUI('langLabel');
        var legendTitle = document.getElementById('settingsPanelLegend') ? document.querySelector('#settingsPanelLegend strong') : null;
        if (legendTitle) legendTitle.textContent = getUI('legendTitle');
        var legendSpans = settingsOverlay ? settingsOverlay.querySelectorAll('.settings-legend-inner span') : [];
        if (legendSpans.length >= 6) {
            legendSpans[0].nextSibling.textContent = ' ' + getUI('who');
            legendSpans[1].nextSibling.textContent = ' ' + getUI('whatDoing');
            legendSpans[2].nextSibling.textContent = ' ' + getUI('what');
            legendSpans[3].nextSibling.textContent = ' ' + getUI('where');
            legendSpans[4].nextSibling.textContent = ' ' + getUI('when');
            legendSpans[5].nextSibling.textContent = ' ' + getUI('howDescribe');
        }
        var historyTitleEl = document.getElementById('settingsPanelHistory') ? document.querySelector('#settingsPanelHistory strong') : null;
        if (historyTitleEl) historyTitleEl.textContent = getUI('historyTitle');
        var navIds = ['settingsNavGeneral', 'settingsNavSvompt', 'settingsNavLegend', 'settingsNavHistory', 'settingsNavFrames'];
        var navKeys = ['menuGeneral', 'menuSvompt', 'menuLegend', 'menuHistory', 'menuFrames'];
        navIds.forEach(function (id, i) {
            var el = document.getElementById(id);
            if (el && navKeys[i]) el.textContent = getUI(navKeys[i]);
        });
        if (colourfulSemanticsCheck) {
            var csLabel = colourfulSemanticsCheck.closest('label');
            if (csLabel && csLabel.childNodes[1]) csLabel.childNodes[1].textContent = ' ' + getUI('colourfulSemanticsLabel');
        }
        if (shapeCodingCheck) {
            var scLabel = shapeCodingCheck.closest('label');
            if (scLabel && scLabel.childNodes[1]) scLabel.childNodes[1].textContent = ' ' + getUI('shapeCodingLabel');
        }
        if (historyList) historyList.setAttribute('aria-label', getUI('historyAria'));
        if (clearHistoryBtn) clearHistoryBtn.textContent = getUI('clearHistory');
        if (settingsCloseBtn) settingsCloseBtn.textContent = getUI('close');
        if (settingsSave) settingsSave.textContent = getUI('save');
        if (svomptTitleEl) svomptTitleEl.textContent = getUI('svomptTitle');
        var svomptLabels = settingsOverlay ? settingsOverlay.querySelectorAll('.settings-svompt-inner label') : [];
        if (svomptLabels.length >= 4) {
            svomptLabels[0].childNodes[1].textContent = ' ' + getUI('svomptSpeakOrder');
            svomptLabels[1].childNodes[1].textContent = ' ' + getUI('svomptSlots');
            svomptLabels[2].childNodes[1].textContent = ' ' + getUI('svomptGuided');
            svomptLabels[3].childNodes[1].textContent = ' ' + getUI('svomptSortBar');
        }
        if (framesButton) {
            framesButton.setAttribute('title', getUI('btnFrames'));
            framesButton.setAttribute('aria-label', getUI('btnFramesAria'));
        }
        var framesModalTitle = document.getElementById('framesModalTitle');
        if (framesModalTitle) framesModalTitle.textContent = getUI('framesTitle');
        if (framesIntro) framesIntro.textContent = getUI('framesIntro');
        if (framesSlotLabel) framesSlotLabel.textContent = getUI('framesSlotLabel');
        if (framesSpeakBtn) framesSpeakBtn.textContent = getUI('framesSpeak');
        var framesSettingsTitle = document.getElementById('framesSettingsTitle');
        if (framesSettingsTitle) framesSettingsTitle.textContent = getUI('framesTitle');
        var framesWhatIsEl = document.getElementById('framesWhatIs');
        if (framesWhatIsEl) framesWhatIsEl.textContent = getUI('framesWhatIs');
        var sentenceFramesLabelEl = document.getElementById('sentenceFramesLabel');
        if (sentenceFramesLabelEl) sentenceFramesLabelEl.textContent = getUI('sentenceFramesLabel');
        if (framesCloseBtn) framesCloseBtn.setAttribute('aria-label', getUI('close'));

        categoriesDiv.innerHTML = '';
        showCategories();
        if (currentCategory) {
            wordsDiv.innerHTML = '';
            showWords(currentCategory);
        }
        ensureBarStructure();
    }

    function applySettings() {
        var s = getSettings();
        document.body.classList.toggle('font-large', s.fontLarge);
        document.body.classList.toggle('colourful-semantics-off', !s.colourfulSemantics);
        document.body.classList.toggle('shape-coding-on', !!s.shapeCoding);
        if (framesButton) framesButton.style.display = s.sentenceFrames ? 'inline-block' : 'none';
        applyLanguage();
    }

    function getQuickBarItemsFromDOM() {
        var nodes = quickIcons.querySelectorAll('.quick-icon');
        return Array.from(nodes).map(function (el) {
            var name = el.getAttribute('data-original-name') || '';
            var cat = el.getAttribute('data-category') || '';
            var iconEl = el.querySelector('.word-icon');
            var icon = iconEl ? (iconEl.textContent || '').trim() : '•';
            return { name: name, icon: icon, category: cat };
        }).filter(function (item) { return item.name; });
    }

    function getSlotContainer(letter) {
        var sel = quickIcons.querySelector('.quick-slot[data-slot="' + letter + '"]');
        return sel || null;
    }

    function createSlotsIfNeeded() {
        if (!getSettings().svomptSlots) return;
        if (quickIcons.querySelector('.quick-slot')) return;
        SVOMPT_LETTERS.forEach(function (letter) {
            var slot = document.createElement('div');
            slot.className = 'quick-slot';
            slot.setAttribute('data-slot', letter);
            slot.setAttribute('aria-label', getUI('slot' + letter));
            quickIcons.appendChild(slot);
        });
    }

    function ensureBarStructure(items) {
        if (items == null) items = getQuickBarItemsFromDOM();
        var useSlots = getSettings().svomptSlots;
        quickIcons.innerHTML = '';
        if (useSlots) {
            SVOMPT_LETTERS.forEach(function (letter) {
                var slot = document.createElement('div');
                slot.className = 'quick-slot';
                slot.setAttribute('data-slot', letter);
                slot.setAttribute('aria-label', getUI('slot' + letter));
                quickIcons.appendChild(slot);
            });
        }
        items.forEach(function (item) {
            appendQuickIcon(item);
        });
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
        var list = [];
        if (getSettings().svomptSlots && quickIcons.querySelector('.quick-slot')) {
            SVOMPT_LETTERS.forEach(function (letter) {
                var slot = getSlotContainer(letter);
                if (!slot) return;
                slot.querySelectorAll('.quick-icon').forEach(function (el) {
                    var namePtBr = el.getAttribute('data-original-name');
                    if (namePtBr == null) {
                        var nameEl = el.querySelector('.quick-icon-text');
                        namePtBr = nameEl ? nameEl.textContent.trim() : '';
                    }
                    var iconEl = el.querySelector('.word-icon');
                    var iconChar = iconEl ? (iconEl.textContent || '').trim() : '';
                    var category = el.getAttribute('data-category') || '';
                    if (namePtBr) list.push({ name: namePtBr, icon: iconChar || '•', category: category });
                });
            });
        } else {
            list = Array.from(quickIcons.querySelectorAll('.quick-icon')).map(function (el) {
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
            if (getSettings().svomptSortBar) list.sort(function (a, b) { return getSvomptOrderIndex(a.category) - getSvomptOrderIndex(b.category); });
        }
        try {
            localStorage.setItem(STORAGE_QUICK, JSON.stringify(list));
        } catch (e) {}
    }

    function sortQuickBarBySvopt() {
        if (getSettings().svomptSlots) return;
        var items = Array.from(quickIcons.querySelectorAll('.quick-icon'));
        if (items.length < 2) return;
        items.sort(function (a, b) {
            return getSvomptOrderIndex(a.getAttribute('data-category')) - getSvomptOrderIndex(b.getAttribute('data-category'));
        });
        items.forEach(function (el) { quickIcons.appendChild(el); });
        saveQuickBar();
    }

    function getNextSvoptSlot() {
        var filled = {};
        quickIcons.querySelectorAll('.quick-icon').forEach(function (el) {
            var cat = el.getAttribute('data-category') || '';
            var letter = getSlotLetter(cat);
            filled[letter] = true;
        });
        for (var i = 0; i < SVOMPT_LETTERS.length; i++) {
            if (!filled[SVOMPT_LETTERS[i]]) return SVOMPT_LETTERS[i];
        }
        return null;
    }

    var quickIconDragging = false;

    function appendQuickIcon(word) {
        if (getSettings().svomptSlots) createSlotsIfNeeded();
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
            var items = Array.from(quickIcons.querySelectorAll('.quick-icon'));
            e.dataTransfer.setData('text/plain', String(items.indexOf(quickIconDiv)));
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
            var parent = e.currentTarget.parentNode;
            parent.insertBefore(dragged, e.currentTarget);
            saveQuickBar();
        });

        var container = getSettings().svomptSlots ? getSlotContainer(getSlotLetter(word.category || '')) : quickIcons;
        if (container) container.appendChild(quickIconDiv);
        else quickIcons.appendChild(quickIconDiv);
    }

    function restoreQuickBar() {
        try {
            var raw = localStorage.getItem(STORAGE_QUICK);
            if (!raw) return;
            var items = JSON.parse(raw);
            if (items.length) ensureBarStructure(items);
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
        if (getSettings().svomptSortBar && !getSettings().svomptSlots) sortQuickBarBySvopt();
        if (getSettings().svomptGuided) {
            var next = getNextSvoptSlot();
            if (next) showToast(getUI('svomptNextSlot') + getUI('slot' + next));
        }
    }

    function clearQuickIcons() {
        if (getSettings().svomptSlots && quickIcons.querySelector('.quick-slot')) {
            quickIcons.querySelectorAll('.quick-slot').forEach(function (slot) { slot.innerHTML = ''; });
        } else {
            quickIcons.innerHTML = '';
        }
        saveQuickBar();
    }

    function playIcons() {
        var icons = quickIcons.querySelectorAll('.quick-icon');
        if (!icons.length) {
            showToast(getUI('toastAddWords'));
            return;
        }
        var list = Array.from(icons).map(function (el) {
            var textEl = el.querySelector('.quick-icon-text');
            var cat = el.getAttribute('data-category') || '';
            return { text: textEl ? textEl.textContent : '', category: cat };
        });
        if (getSettings().svomptSpeakOrder) list.sort(function (a, b) { return getSvomptOrderIndex(a.category) - getSvomptOrderIndex(b.category); });
        var message = list.map(function (x) { return x.text; }).join(' ');
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

    var selectedFrame = null;
    var selectedWord = null;

    function getFrameTemplate(frame) {
        if (!frame) return '';
        var lang = getSettings().lang;
        return lang === 'en' ? (frame.templateEn || frame.templatePt) : (frame.templatePt || frame.templateEn);
    }

    function getCategoriesBySlotRole(slotRole) {
        return categories.filter(function (cat) {
            return getSemanticKey(cat.name) === slotRole;
        });
    }

    function renderFramesList() {
        if (!framesList) return;
        var list = window.SENTENCE_FRAMES || [];
        framesList.innerHTML = '';
        list.forEach(function (frame) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = getFrameTemplate(frame).replace('___', '…');
            btn.classList.add('frame-item');
            if (selectedFrame && selectedFrame.id === frame.id) btn.classList.add('selected');
            btn.addEventListener('click', function () {
                selectedFrame = frame;
                selectedWord = null;
                framesList.querySelectorAll('button').forEach(function (b) { b.classList.remove('selected'); });
                btn.classList.add('selected');
                if (framesSlotLabel) framesSlotLabel.style.display = 'block';
                renderFramesWords(frame.slotRole);
                updateFramesPreview();
                if (framesSpeakBtn) framesSpeakBtn.disabled = true;
            });
            framesList.appendChild(btn);
        });
    }

    function renderFramesWords(slotRole) {
        if (!framesWords) return;
        framesWords.innerHTML = '';
        var cats = getCategoriesBySlotRole(slotRole);
        cats.forEach(function (cat) {
            (cat.words || []).forEach(function (word) {
                var label = getWordLabel(word.name, cat.name);
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'frame-word';
                btn.setAttribute('aria-label', label);
                btn.innerHTML = '<span class="word-icon" aria-hidden="true">' + (word.icon || '•') + '</span><span class="word-name">' + escapeHtml(label) + '</span>';
                btn.addEventListener('click', function () {
                    selectedWord = { name: word.name, category: cat.name, icon: word.icon };
                    updateFramesPreview();
                    if (framesSpeakBtn) framesSpeakBtn.disabled = false;
                    framesWords.querySelectorAll('button').forEach(function (b) { b.classList.remove('selected'); });
                    btn.classList.add('selected');
                });
                framesWords.appendChild(btn);
            });
        });
    }

    function updateFramesPreview() {
        if (!framesPreview) return;
        if (!selectedFrame) {
            framesPreview.textContent = '';
            return;
        }
        var template = getFrameTemplate(selectedFrame);
        if (selectedWord) {
            var label = getWordLabel(selectedWord.name, selectedWord.category);
            framesPreview.textContent = template.replace('___', label);
        } else {
            framesPreview.textContent = template;
        }
    }

    function openFramesModal() {
        selectedFrame = null;
        selectedWord = null;
        if (framesSlotLabel) framesSlotLabel.style.display = 'none';
        if (framesWords) framesWords.innerHTML = '';
        if (framesPreview) framesPreview.textContent = '';
        if (framesSpeakBtn) framesSpeakBtn.disabled = true;
        renderFramesList();
        if (framesOverlay) framesOverlay.classList.add('open');
    }

    function closeFramesModal() {
        if (framesOverlay) framesOverlay.classList.remove('open');
    }

    function speakFrameAndClose() {
        if (!selectedFrame || !selectedWord) return;
        var template = getFrameTemplate(selectedFrame);
        var label = getWordLabel(selectedWord.name, selectedWord.category);
        var phrase = template.replace('___', label);
        saveToHistory(phrase);
        var lang = getSettings().lang;
        var utterance = new SpeechSynthesisUtterance(phrase);
        utterance.voice = getVoice(lang);
        utterance.lang = lang === 'en' ? 'en' : 'pt-BR';
        utterance.rate = getSettings().speechRate;
        speechSynthesis.speak(utterance);
        closeFramesModal();
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

    if (framesButton) {
        framesButton.addEventListener('click', function () {
            openFramesModal();
        });
    }
    if (framesCloseBtn) {
        framesCloseBtn.addEventListener('click', closeFramesModal);
    }
    if (framesSpeakBtn) {
        framesSpeakBtn.addEventListener('click', speakFrameAndClose);
    }
    if (framesOverlay) {
        framesOverlay.addEventListener('click', function (e) {
            if (e.target === framesOverlay) closeFramesModal();
        });
    }

    settingsButton.addEventListener('click', function () {
        var s = getSettings();
        speechRateInput.value = s.speechRate;
        speechRateValue.textContent = s.speechRate;
        fontLargeCheck.checked = s.fontLarge;
        if (langSelect) langSelect.value = s.lang;
        if (svomptSpeakOrderCheck) svomptSpeakOrderCheck.checked = s.svomptSpeakOrder;
        if (svomptSlotsCheck) svomptSlotsCheck.checked = s.svomptSlots;
        if (svomptGuidedCheck) svomptGuidedCheck.checked = s.svomptGuided;
        if (svomptSortBarCheck) svomptSortBarCheck.checked = s.svomptSortBar;
        if (colourfulSemanticsCheck) colourfulSemanticsCheck.checked = s.colourfulSemantics;
        if (shapeCodingCheck) shapeCodingCheck.checked = s.shapeCoding;
        if (sentenceFramesCheck) sentenceFramesCheck.checked = s.sentenceFrames;
        renderHistory();
        showSettingsPanel('general');
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
            lang: lang,
            svomptSpeakOrder: !!(svomptSpeakOrderCheck && svomptSpeakOrderCheck.checked),
            svomptSlots: !!(svomptSlotsCheck && svomptSlotsCheck.checked),
            svomptGuided: !!(svomptGuidedCheck && svomptGuidedCheck.checked),
            svomptSortBar: !!(svomptSortBarCheck && svomptSortBarCheck.checked),
            colourfulSemantics: !!(colourfulSemanticsCheck && colourfulSemanticsCheck.checked),
            shapeCoding: !!(shapeCodingCheck && shapeCodingCheck.checked)
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

    function showSettingsPanel(panelKey) {
        var panels = ['general', 'svompt', 'legend', 'history', 'frames'];
        panels.forEach(function (key) {
            var nav = document.getElementById('settingsNav' + key.charAt(0).toUpperCase() + key.slice(1));
            var panel = document.getElementById('settingsPanel' + key.charAt(0).toUpperCase() + key.slice(1));
            if (nav) nav.classList.toggle('active', key === panelKey);
            if (panel) {
                panel.classList.toggle('active', key === panelKey);
                panel.hidden = key !== panelKey;
            }
        });
    }
    var navItems = settingsOverlay ? settingsOverlay.querySelectorAll('.settings-nav-item') : [];
    navItems.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var panel = btn.getAttribute('data-panel');
            if (panel) showSettingsPanel(panel);
        });
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
