/**
 * Frame Semantics (Fillmore)
 * Quadros semânticos com vários elementos (frame elements). Cada quadro representa
 * uma situação com participantes e papéis; o utilizador preenche cada elemento
 * com uma palavra do vocabulário (filtrada por papel semântico).
 * Inspirado em Frame Semantics (Charles J. Fillmore) e FrameNet.
 */
(function () {
    'use strict';

    /** roleKey: mapeia para getSemanticKey (who, what, where, describing, when, what-doing) */
    var FILLMORE_FRAMES = [
        {
            id: 'giving',
            namePt: 'Dar',
            nameEn: 'Giving',
            templatePt: '___1___ dá ___2___ a ___3___',
            templateEn: '___1___ gives ___2___ to ___3___',
            elements: [
                { roleKey: 'who', labelPt: 'Quem dá', labelEn: 'Donor' },
                { roleKey: 'what', labelPt: 'O quê (é dado)', labelEn: 'Thing given' },
                { roleKey: 'who', labelPt: 'A quem', labelEn: 'Recipient' }
            ]
        },
        {
            id: 'eating',
            namePt: 'Comer',
            nameEn: 'Eating',
            templatePt: '___1___ come ___2___',
            templateEn: '___1___ eats ___2___',
            elements: [
                { roleKey: 'who', labelPt: 'Quem come', labelEn: 'Eater' },
                { roleKey: 'what', labelPt: 'O quê (comida)', labelEn: 'Food' }
            ]
        },
        {
            id: 'going',
            namePt: 'Ir',
            nameEn: 'Going',
            templatePt: '___1___ vai ___2___',
            templateEn: '___1___ goes ___2___',
            elements: [
                { roleKey: 'who', labelPt: 'Quem vai', labelEn: 'Agent' },
                { roleKey: 'where', labelPt: 'Para onde', labelEn: 'Goal' }
            ]
        },
        {
            id: 'wanting',
            namePt: 'Querer',
            nameEn: 'Wanting',
            templatePt: '___1___ quer ___2___',
            templateEn: '___1___ wants ___2___',
            elements: [
                { roleKey: 'who', labelPt: 'Quem quer', labelEn: 'Experiencer' },
                { roleKey: 'what', labelPt: 'O quê (desejado)', labelEn: 'Desired' }
            ]
        },
        {
            id: 'being',
            namePt: 'Estar (estado)',
            nameEn: 'Being (state)',
            templatePt: '___1___ está ___2___',
            templateEn: '___1___ is ___2___',
            elements: [
                { roleKey: 'who', labelPt: 'Quem', labelEn: 'Entity' },
                { roleKey: 'describing', labelPt: 'Como (estado)', labelEn: 'State' }
            ]
        },
        {
            id: 'seeing',
            namePt: 'Ver',
            nameEn: 'Seeing',
            templatePt: '___1___ vê ___2___',
            templateEn: '___1___ sees ___2___',
            elements: [
                { roleKey: 'who', labelPt: 'Quem vê', labelEn: 'Perceiver' },
                { roleKey: 'what', labelPt: 'O quê (visto)', labelEn: 'Phenomenon' }
            ]
        }
    ];

    window.FILLMORE_FRAMES = FILLMORE_FRAMES;
})();
