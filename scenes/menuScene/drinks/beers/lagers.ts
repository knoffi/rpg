import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
export const lagers: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: "Flint's Dark Lager",
                landRange: [a.haven],
                incomeRange: [a.poor],
                needsOne: [a.thief, a.assasine, a.prostitute],
            },
            firstSideDishes: [{ name: 'Lager  -  fierce and malty' }],
        },
        4,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Leprechaun's Delighted Lager",
                landRange: [a.haven],
                incomeRange: [a.wealthy],
                classRange: [a.wizard, a.adventurer, a.bard],
            },
            firstSideDishes: [{ name: 'Lager  -  green, malty and fruity' }],
        },
        38,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: { name: "Aiven's Golden Malt", incomeRange: [a.rich] },
            firstSideDishes: [
                {
                    name: 'Lager  -  very malty with a sweet note and golden foam',
                },
            ],
        },
        58,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Diamond Label',
                misfits: [a.elf, a.drow, a.dwarf],
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                { name: 'Lager  -  the best lager beer brewed by humans' },
            ],
        },
        140,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Platinum Label',
                misfits: [a.elf, a.drow, a.dwarf],
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  elegant maltyness meets full-bodied fruityness',
                },
            ],
        },
        100,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Gold Label',
                misfits: [a.elf, a.drow, a.dwarf],
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  mellow maltyness meets delicate smoothness ',
                },
            ],
        },
        85,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Silver Label',
                misfits: [a.elf, a.drow, a.dwarf],
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  Joyful fruityness with a refreshing crispness',
                },
            ],
        },
        70,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Copper Label',
                misfits: [a.elf, a.drow, a.dwarf],
                incomeRange: [a.wealthy],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  melodic maltyness with a swinging sweetness',
                },
            ],
        },
        40,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Emerald Label',
                incomeRange: [a.rich],
                raceRange: [a.elf],
            },
            firstSideDishes: [
                { name: 'Lager  -  soft maltyness and mild notes of grapes' },
            ],
        },
        70,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Sir Weatherstone's Loveliest",
                incomeRange: [a.rich],
                raceRange: [a.elf],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  delicate maltyness and a note of elderberry',
                },
            ],
        },
        70,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Sir Weatherstone's Mildest",
                incomeRange: [a.rich],
                raceRange: [a.gnome, a.human, a.halfling],
            },
            firstSideDishes: [
                { name: 'Lager  -  embracing maltnyess with a fruity aroma' },
            ],
        },
        80,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Sir Weatherstone's Finest",
                incomeRange: [a.rich],
                raceRange: [a.gnome, a.human, a.halfling],
            },
            firstSideDishes: [
                { name: 'Lager  -  exquisite maltyness with a crisp finish' },
            ],
        },
        100,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Sir Weatherstone's Highest",
                incomeRange: [a.rich],
                raceRange: [a.gnome, a.human, a.halfling],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  superb maltyness with a divine note of sweetness',
                },
            ],
        },
        125,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molthorium Pilsner',
                incomeRange: [a.rich],
                misfits: [a.drow, a.elf],
                needsOne: [a.city, a.dwarf, a.mountain, a.underdark, a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  the perfect balance of hops and malt make it refreshing like spring',
                },
            ],
        },
        100,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molthorium Bock Beer',
                misfits: [a.elf, a.drow],
                incomeRange: [a.rich],
                needsOne: [a.city, a.dwarf, a.mountain, a.underdark, a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  a full-bodied malt flavor makes it cosy as winter',
                },
            ],
        },
        100,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molthorium Pale Lager',
                incomeRange: [a.rich],
                misfits: [a.elf, a.drow],
                needsOne: [a.city, a.dwarf, a.mountain, a.underdark, a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  a featherlike sweetness and a crisp finish make it joyful as summer',
                },
            ],
        },
        100,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molthorium Zwickel Beer',
                incomeRange: [a.rich],
                misfits: [a.elf, a.drow],
                needsOne: [a.city, a.dwarf, a.mountain, a.underdark, a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  a delightfully spicy finish with a autumn-like maltyness',
                },
            ],
        },
        100,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Spidermother's Royal Lager",
                incomeRange: [a.rich, a.wealthy],
                needsOne: [a.drow, a.assasine, a.underdark, a.prostitute],
                raceRange: [a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  a mild hop profile with a spicy note and a crisp finish',
                },
            ],
        },
        80,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Baselbruck's Lager",
                incomeRange: [a.modest],
                misfits: [a.elf, a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  malty with a note of biscuits',
                },
            ],
        },
        22,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Baselbruck's Pale Lager",
                incomeRange: [a.modest],
                misfits: [a.elf, a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  light color and a strong and sturdy hop-profile ',
                },
            ],
        },
        21,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Baselbruck's Dark Lager",
                incomeRange: [a.modest],
                misfits: [a.elf, a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  dark in color and a bready malt flavor',
                },
            ],
        },
        23,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Baselbruck's Export",
                incomeRange: [a.modest],
                needsOne: [a.tropical, a.desert, a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  light color, light maltyness and a fruity note',
                },
            ],
        },
        23,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Aiven's Divine Malt",
                needsOne: [a.cleric, a.knight, a.city, a.haven],
                classRange: [a.cleric, a.knight],
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.tiefling, a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  golden color, malty and a crisp finish',
                },
            ],
        },
        29,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Aiven's Virtuous Malt",
                needsOne: [a.cleric, a.knight, a.village, a.mountain],
                classRange: [a.cleric, a.knight],
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.tiefling, a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  slightly silver, malty and a crisp finish',
                },
            ],
        },
        29,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Aiven's Righteous Malt",
                needsOne: [a.cleric, a.knight, a.city, a.mountain],
                classRange: [a.cleric, a.knight],
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.tiefling, a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  strong maltyness and a note of hazelnut',
                },
            ],
        },
        29,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Aiven's Peaceful Malt",
                needsOne: [a.cleric, a.knight, a.mountain, a.forest],
                classRange: [a.cleric, a.knight],
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.tiefling, a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  slightly beige, mellow maltyness and a note of caramel',
                },
            ],
        },
        29,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Aiven's Rejoicing Malt",
                needsOne: [a.cleric, a.knight, a.haven, a.forest],
                classRange: [a.cleric, a.knight],
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.tiefling, a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  pale brown, crisp and a note of cherry',
                },
            ],
        },
        29,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Aiven's Merciful Malt",
                needsOne: [a.cleric, a.knight, a.forest, a.village],
                classRange: [a.cleric, a.knight],
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.tiefling, a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  pale brown, malty and a fruity note of berries',
                },
            ],
        },
        29,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Aiven's Honest Malt",
                needsOne: [a.cleric, a.knight, a.village, a.haven],
                classRange: [a.cleric, a.knight],
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.tiefling, a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  light golden color, strong maltyness and a crisp finish',
                },
            ],
        },
        29,
        Drinkable.beer
    ),
];
