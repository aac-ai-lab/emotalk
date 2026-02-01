/**
 * MINSPEAK / Semantic Compaction (inspirado)
 * Ícones centrais com múltiplos significados: primeiro ecrã mostra poucos ícones;
 * ao tocar um ícone, mostram-se as palavras associadas (sequência de 2 toques).
 * Agrupa categorias do vocabulário em "core icons" para reduzir o ecrã inicial.
 */
(function () {
    'use strict';

    var CORE_ICONS = [
        { id: 'people', icon: '👥', labelPt: 'Pessoas', labelEn: 'People', categoryIds: ['pessoas'] },
        { id: 'actions', icon: '▶️', labelPt: 'Ações', labelEn: 'Actions', categoryIds: ['atividades', 'ações'] },
        { id: 'food', icon: '🍽️', labelPt: 'Comida e bebida', labelEn: 'Food & drink', categoryIds: ['bebidas', 'petiscos', 'alimentos'] },
        { id: 'things', icon: '📦', labelPt: 'Coisas', labelEn: 'Things', categoryIds: ['corpo', 'roupas', 'cozinha', 'escola', 'animais', 'tecnologia', 'plantas', 'esportes', 'transportes', 'higiene', 'saúde'] },
        { id: 'places', icon: '📍', labelPt: 'Lugares', labelEn: 'Places', categoryIds: ['lugares', 'casa'] },
        { id: 'describe', icon: '🌈', labelPt: 'Descrever / Sentir', labelEn: 'Describe / Feel', categoryIds: ['emoções', 'descrever', 'cores', 'tempo'] }
    ];

    /**
     * Dado o array global de categorias (window.categories), devolve para um core icon
     * a lista de palavras { name, icon, category } de todas as categorias em categoryIds.
     */
    function getWordsForCoreIcon(coreIcon, categories) {
        if (!categories || !coreIcon || !coreIcon.categoryIds) return [];
        var list = [];
        coreIcon.categoryIds.forEach(function (catId) {
            var cat = categories.find(function (c) { return c.name === catId; });
            if (cat && cat.words) {
                cat.words.forEach(function (w) {
                    list.push({ name: w.name, icon: w.icon || '•', category: cat.name });
                });
            }
        });
        return list;
    }

    window.MINSPEAK = {
        CORE_ICONS: CORE_ICONS,
        getWordsForCoreIcon: getWordsForCoreIcon
    };
})();
