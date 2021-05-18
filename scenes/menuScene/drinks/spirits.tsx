import { association } from '../../../classes/association';
import { Drinkable, TavernProduct } from '../../../classes/TavernProduct';

const spiritEnum = Drinkable.spirit;
const a = association;

//TODO is the reduction of price justified? For example: Are Single Grains always more expensive than Blended Malt?
const reducedPrice = (bestProductPrice: number, lowerOption: number) => {
    return Math.floor(bestProductPrice * (1 - lowerOption * 0.05));
};
const scotchTemplate = (
    producerName: string,
    singleMaltPrice: number,
    fits: association[]
) => {
    return [
        new TavernProduct(
            producerName + "'s Single Malt Scotch Whiskey",
            singleMaltPrice,
            fits,
            spiritEnum
        ),
        new TavernProduct(
            producerName + "'s Single Grain Scotch Whiskey",
            reducedPrice(singleMaltPrice, 1),
            fits,
            spiritEnum
        ),
        new TavernProduct(
            producerName + "'s Blended Malt Scotch Whiskey",
            reducedPrice(singleMaltPrice, 2),
            fits,
            spiritEnum
        ),
        new TavernProduct(
            producerName + "'s Blended Grain Scotch Whiskey",
            reducedPrice(singleMaltPrice, 3),
            fits,
            spiritEnum
        ),
        new TavernProduct(
            producerName + "'s Blended Scotch Whiskey",
            reducedPrice(singleMaltPrice, 4),
            fits,
            spiritEnum
        ),
    ];
};
const bourbonTemplate = (
    producerName: string,
    singleMaltPrice: number,
    fits: association[]
) => {
    return [
        new TavernProduct(
            producerName + "'s Bonded Bourbon Whiskey",
            singleMaltPrice,
            fits,
            spiritEnum
        ),
        new TavernProduct(
            producerName + "'s Straight Bourbon Whiskey",
            reducedPrice(singleMaltPrice, 1),
            fits,
            spiritEnum
        ),
        new TavernProduct(
            producerName + "'s Bourbon Whiskey",
            reducedPrice(singleMaltPrice, 2),
            fits,
            spiritEnum
        ),
        new TavernProduct(
            producerName + "'s White Whiskey",
            reducedPrice(singleMaltPrice, 6),
            fits,
            spiritEnum
        ),
    ];
};
const brandyTemplate = (
    producerName: string,
    singleMaltPrice: number,
    fits: association[],
    ingredient: string
) => {
    return [
        new TavernProduct(
            producerName + "'s " + ingredient + ' XO ',
            singleMaltPrice,
            fits,
            spiritEnum
        ),
        new TavernProduct(
            producerName + "'s " + ingredient + ' V.S.O.P. ',
            reducedPrice(singleMaltPrice, 1),
            fits,
            spiritEnum
        ),
        new TavernProduct(
            producerName + "'s " + ingredient + ' V.S. ',
            reducedPrice(singleMaltPrice, 2),
            fits,
            spiritEnum
        ),
    ];
};

export const spirits = [
    new TavernProduct(
        "Kane's Gin Of Fury",
        25,
        [a.mountain, a.haven, a.barbarian, a.modest],
        spiritEnum
    ),
    new TavernProduct(
        "Oscar's Absinth of Total Drunkeness",
        25,
        [a.mountain, a.haven, a.barbarian, a.modest],
        spiritEnum
    ),
    new TavernProduct(
        "Ar'kenji's Shoshu of Wisdom",
        35,
        [a.desert, a.elf, a.cleric, a.wealthy],
        spiritEnum
    ),
    new TavernProduct(
        "Salvatoria's Rum of Adventure",
        10,
        [a.haven, a.tropical, a.poor],
        spiritEnum
    ),
    new TavernProduct(
        "Dura Ex's Tequila of Charm",
        20,
        [a.underdark, a.prostitute, a.modest],
        spiritEnum
    ),
    new TavernProduct(
        "Lichtenfels's Vodka of Conspiracy",
        32,
        [a.village, a.mountain, a.wealthy],
        spiritEnum
    ),
    new TavernProduct(
        "Numentor's Cachaca of Dancing",
        34,
        [a.tropical, a.wizard, a.wealthy],
        spiritEnum
    ),
    new TavernProduct(
        "Salvator's Rum of the Waves",
        10,
        [a.poor, a.haven, a.adventurer],
        spiritEnum
    ),
].concat(
    scotchTemplate('Barclay', 22, [a.modest, a.city, a.soldier]),
    scotchTemplate('MacMaster', 105, [a.rich, a.dwarf, a.gnome]),
    scotchTemplate('MacMulligan', 10, [a.poor, a.thief, a.soldier]),
    scotchTemplate('Rosetto', 29, [a.prostitute]),
    scotchTemplate('Belezebu', 35, [a.tiefling, a.wealthy]),
    bourbonTemplate('Gregory', 11, [a.village, a.poor, a.barbarian]),
    bourbonTemplate('Old Kennedy', 37, [a.halfling, a.wealthy, a.village]),
    bourbonTemplate('Mild Miller', 108, [a.knight, a.rich, a.elf, a.human]),
    bourbonTemplate('Zesstra', 30, [a.drow, a.underdark, a.wealthy]),
    brandyTemplate('Ezezel', 23, [a.tiefling, a.modest], 'Fire Apple'),
    brandyTemplate('Azzeril', 7, [a.tiefling, a.poor], 'Ash Plum'),
    brandyTemplate('Melzara', 40, [a.tiefling, a.wealthy], 'Hell Berry'),
    brandyTemplate('Abaddon', 90, [a.tiefling, a.rich], 'Infernal Grape')
);
