(function () {
    'use strict';

    var SENTENCE_FRAMES = [
        { id: 'want', templatePt: 'Eu quero ___', templateEn: 'I want ___', slotRole: 'what' },
        { id: 'need', templatePt: 'Eu preciso de ___', templateEn: 'I need ___', slotRole: 'what' },
        { id: 'go', templatePt: 'Eu vou ___', templateEn: 'I go ___', slotRole: 'where' },
        { id: 'am', templatePt: 'Eu estou ___', templateEn: 'I am ___', slotRole: 'describing' },
        { id: 'wantToPlay', templatePt: 'Quero jogar ___', templateEn: 'I want to play ___', slotRole: 'what' },
        { id: 'whereIs', templatePt: 'Onde está ___?', templateEn: 'Where is ___?', slotRole: 'what' },
        { id: 'needToGo', templatePt: 'Preciso ir ___', templateEn: 'I need to go ___', slotRole: 'where' },
        { id: 'wantToDrink', templatePt: 'Quero beber ___', templateEn: 'I want to drink ___', slotRole: 'what' },
        { id: 'like', templatePt: 'Gosto de ___', templateEn: 'I like ___', slotRole: 'what' },
        { id: 'see', templatePt: 'Vejo ___', templateEn: 'I see ___', slotRole: 'what' }
    ];

    window.SENTENCE_FRAMES = SENTENCE_FRAMES;
})();
