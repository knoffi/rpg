import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
import { buildPriceSetterFactory } from '../../../../scenes/menuScene/priceSetting/priceSetterFactory';
const a = association;
export const ales: DishIdea[] = [
    new DishIdea(
        {
            mainIng: { name: 'Ale for Sale', needs: [a.poor, a.haven] },
            firstSideDishes: [{ name: 'Ale  -  harsh and bitter' }],
        },
        buildPriceSetterFactory(0.3),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Stoertebecker's Last Wish",
                needs: [a.haven],
                needsOne: [a.prostitute, a.thief, a.assasine],
                incomeRange: [a.modest],
            },
            firstSideDishes: [{ name: 'Ale  -  dark and roasty taste' }],
        },
        buildPriceSetterFactory(0.6),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "The Kraken's Ale",
                needs: [a.haven],
                incomeRange: [a.modest],
            },
            firstSideDishes: [{ name: 'Ale  -  hoppy and bitter' }],
        },
        buildPriceSetterFactory(),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Baselbruck's Storm Ale",
                needsOne: [a.haven, a.city, a.village],
                incomeRange: [a.wealthy],
            },
            firstSideDishes: [
                { name: 'Ale  -  full bodied, malty and refreshing' },
            ],
        },
        buildPriceSetterFactory(),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molthorium Umber Ale',
                needsOne: [a.dwarf, a.underdark],
                incomeRange: [a.rich],
                misfits: [a.drow, a.elf],
            },
            firstSideDishes: [
                {
                    name: 'Ale  -   dark brown, delicate maltyness and notes of walnut',
                },
            ],
        },
        buildPriceSetterFactory(1.3),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Spidermothers Midnight Ale',
                needsOne: [a.underdark, a.drow, a.thief],
                incomeRange: [a.wealthy, a.rich],
                raceRange: [a.drow],
            },
            firstSideDishes: [
                { name: 'Ale  -   black in color and delicately bitter' },
            ],
        },
        buildPriceSetterFactory(1.1),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Ambush Ale',
                needsOne: [a.assasine, a.drow, a.thief],
                incomeRange: [a.modest],
            },
            firstSideDishes: [
                { name: 'Ale  -   dark red and notes of cherry' },
            ],
        },
        buildPriceSetterFactory(),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Ivory Ale',
                needs: [a.elf],
                landRange: [a.haven],
                incomeRange: [a.modest, a.poor],
                powerFits: [a.haven, a.elf],
            },
            firstSideDishes: [{ name: 'Ale  -   slightly yellow and fruity' }],
        },
        buildPriceSetterFactory(),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Aredhel's Almond Ale",
                needs: [a.elf],
                incomeRange: [a.wealthy],
            },
            firstSideDishes: [{ name: 'Ale  -   light brown and nutty' }],
        },
        buildPriceSetterFactory(1.2),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Aredhel's Maple Ale",
                needs: [a.elf],
                incomeRange: [a.wealthy, a.rich],
            },
            firstSideDishes: [{ name: 'Ale  -   malty, light and sweet' }],
        },
        buildPriceSetterFactory(1.2),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Ulrik's Sip of Joy",
                incomeRange: [a.modest],
                misfits: [a.drow, a.tiefling, a.elf],
                landRange: [a.haven, a.city],
            },
            firstSideDishes: [
                { name: 'Ale  -   sturdy malt with a sweet accent' },
            ],
        },
        buildPriceSetterFactory(1.3),
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Ulrik's Sip of Glory",
                incomeRange: [a.modest],
                misfits: [a.drow, a.tiefling, a.elf],
                landRange: [a.haven, a.city],
            },
            firstSideDishes: [
                { name: 'Ale  -   sturdy malt with a nutty accent' },
            ],
        },
        buildPriceSetterFactory(1.3),
        Drinkable.beer
    ),
];
