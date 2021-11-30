import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
import { getBeerPrice } from './getBeerPrice';
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
        getBeerPrice(),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Root Beer',
                landRange: [a.village, a.forest],
                needsOne: [a.poor, a.druid],
                incomeRange: [a.poor, a.modest],
                powerFits: [a.poor, a.druid, a.forest],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  brown color, nutritious, slightly earthy taste',
                },
            ],
        },
        getBeerPrice(),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Red Beet Beer',
                landRange: [a.village, a.city],
                incomeRange: [a.poor, a.modest],
                powerFits: [a.poor, a.village],
            },
            firstSideDishes: [
                { name: 'Lager  -  light red, nutrituous, slightly sweet' },
            ],
        },
        getBeerPrice(),
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
        getBeerPrice(),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: { name: "Aiven's Golden Malt", needs: [a.rich] },
            firstSideDishes: [
                {
                    name: 'Lager  -  very malty with a sweet note and golden foam',
                },
            ],
        },
        getBeerPrice(0.9),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Diamond Label',
                misfits: [a.elf, a.drow, a.dwarf],
                needs: [a.rich],
                powerFits: [a.rich],
            },
            firstSideDishes: [
                { name: 'Lager  -  the best lager beer brewed by humans' },
            ],
        },
        getBeerPrice(2.4),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Platinum Label',
                misfits: [a.elf, a.drow, a.dwarf],
                needs: [a.rich],
                powerFits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  elegant maltyness meets full-bodied fruityness',
                },
            ],
        },
        getBeerPrice(1.8),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Gold Label',
                misfits: [a.drow, a.dwarf],
                needs: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  mellow maltyness meets delicate smoothness ',
                },
            ],
        },
        getBeerPrice(1.4),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Silver Label',
                misfits: [a.drow, a.dwarf],
                needs: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  Joyful fruityness with a refreshing crispness',
                },
            ],
        },
        getBeerPrice(),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Copper Label',
                misfits: [a.drow, a.dwarf],
                incomeRange: [a.wealthy],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  melodic maltyness with a swinging sweetness',
                },
            ],
        },
        getBeerPrice(1.3),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Emerald Label',
                needs: [a.rich],
                raceRange: [a.elf],
                powerFits: [a.elf],
            },
            firstSideDishes: [
                { name: 'Lager  -  soft maltyness and mild notes of grapes' },
            ],
        },
        getBeerPrice(1.2),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Sir Weatherstone's Loveliest",
                needs: [a.rich],
                raceRange: [a.elf],
                powerFits: [a.elf],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  delicate maltyness and a note of elderberry',
                },
            ],
        },
        getBeerPrice(),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Sir Weatherstone's Mildest",
                needs: [a.rich],
                raceRange: [a.gnome, a.human, a.halfling],
                powerFits: [a.gnome, a.human, a.halfling],
            },
            firstSideDishes: [
                { name: 'Lager  -  embracing maltnyess with a fruity aroma' },
            ],
        },
        getBeerPrice(),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Sir Weatherstone's Finest",
                needs: [a.rich],
                raceRange: [a.gnome, a.human, a.halfling],
                powerFits: [a.gnome, a.human, a.halfling],
            },
            firstSideDishes: [
                { name: 'Lager  -  exquisite maltyness with a crisp finish' },
            ],
        },
        getBeerPrice(),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Sir Weatherstone's Highest",
                needs: [a.rich],
                raceRange: [a.gnome, a.human, a.halfling],
                powerFits: [a.gnome, a.human, a.halfling],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  superb maltyness with a divine note of sweetness',
                },
            ],
        },
        getBeerPrice(),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molthorium Pilsner',
                needs: [a.rich],
                misfits: [a.drow, a.elf],
                needsOne: [a.city, a.dwarf, a.mountain, a.underdark, a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  the perfect balance of hops and malt make it refreshing like spring',
                },
            ],
        },
        getBeerPrice(1.3),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molthorium Bock Beer',
                misfits: [a.elf, a.drow],
                needs: [a.rich],
                needsOne: [a.city, a.dwarf, a.mountain, a.underdark, a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  a full-bodied malt flavor makes it cosy as winter',
                },
            ],
        },
        getBeerPrice(1.4),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molthorium Pale Lager',
                needs: [a.rich],
                misfits: [a.elf, a.drow],
                needsOne: [a.city, a.dwarf, a.mountain, a.underdark, a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  a featherlike sweetness and a crisp finish make it joyful as summer',
                },
            ],
        },
        getBeerPrice(1.2),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molthorium Zwickel Beer',
                needs: [a.rich],
                misfits: [a.elf, a.drow],
                needsOne: [a.city, a.dwarf, a.mountain, a.underdark, a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Lager  -  a delightfully spicy finish with a autumn-like maltyness',
                },
            ],
        },
        getBeerPrice(),
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
        getBeerPrice(),
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
        getBeerPrice(),
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
        getBeerPrice(),
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
        getBeerPrice(),
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
        getBeerPrice(1.5),
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
        getBeerPrice(),
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
        getBeerPrice(),
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
        getBeerPrice(),
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
        getBeerPrice(),
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
        getBeerPrice(),
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
        getBeerPrice(),
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
        getBeerPrice(),
        Drinkable.beer
    ),
];
