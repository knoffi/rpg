// const brandyTemplate = (
//     producerName: string,
//     singleMaltPrice: number,
//     fits: association[],
//     ingredient: string
// ) => {
//     return [
//         new TavernProduct(
//             producerName + "'s " + ingredient + ' XO ',
//             singleMaltPrice,
//             fits,
//             spiritEnum
//         ),
//         new TavernProduct(
//             producerName + "'s " + ingredient + ' V.S.O.P. ',
//             reducedPrice(singleMaltPrice, 1),
//             fits,
//             spiritEnum
//         ),
//         new TavernProduct(
//             producerName + "'s " + ingredient + ' V.S. ',
//             reducedPrice(singleMaltPrice, 2),
//             fits,
//             spiritEnum
//         ),
//     ];
// };

// export const spirits = [
//     new TavernProduct(
//         "Kane's Gin Of Fury",
//         25,
//         [a.mountain, a.haven, a.barbarian, a.modest],
//         spiritEnum
//     ),
//     new TavernProduct(
//         "Oscar's Absinth of Total Drunkeness",
//         25,
//         [a.mountain, a.haven, a.barbarian, a.modest],
//         spiritEnum
//     ),
//     new TavernProduct(
//         "Ar'kenji's Shoshu of Wisdom",
//         35,
//         [a.desert, a.elf, a.cleric, a.wealthy],
//         spiritEnum
//     ),
//     new TavernProduct(
//         "Salvatoria's Rum of Adventure",
//         10,
//         [a.haven, a.tropical, a.poor],
//         spiritEnum
//     ),
//     new TavernProduct(
//         "Dura Ex's Tequila of Charm",
//         20,
//         [a.underdark, a.prostitute, a.modest],
//         spiritEnum
//     ),
//     new TavernProduct(
//         "Lichtenfels's Vodka of Conspiracy",
//         32,
//         [a.village, a.mountain, a.wealthy],
//         spiritEnum
//     ),
//     new TavernProduct(
//         "Numentor's Cachaca of Dancing",
//         34,
//         [a.tropical, a.wizard, a.wealthy],
//         spiritEnum
//     ),
//     new TavernProduct(
//         "Salvator's Rum of the Waves",
//         10,
//         [a.poor, a.haven, a.adventurer],
//         spiritEnum
//     ),
// ].concat(
//     brandyTemplate('Ezezel', 23, [a.tiefling, a.modest], 'Fire Apple'),
//     brandyTemplate('Azzeril', 7, [a.tiefling, a.poor], 'Ash Plum'),
//     brandyTemplate('Melzara', 40, [a.tiefling, a.wealthy], 'Hell Berry'),
//     brandyTemplate('Abaddon', 90, [a.tiefling, a.rich], 'Infernal Grape')
// );
