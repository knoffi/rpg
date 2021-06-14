import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
export const ales: DishIdea[] = [
    new DishIdea(
        {
            mainIng: { name: 'Ale for Sale', needs: [a.poor, a.haven] },
            firstSideDishes: [{ name: 'Ale - harsh and bitter' }],
        },
        1,
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
            firstSideDishes: [{ name: 'Ale - dark and roasty taste' }],
        },
        16,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "The Kraken's Ale",
                needs: [a.haven],
                incomeRange: [a.modest],
            },
            firstSideDishes: [{ name: 'Ale - hoppy and bitter' }],
        },
        14,
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
                { name: 'Ale - full bodied, malty and refreshing' },
            ],
        },
        35,
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
                    name: 'Ale -  dark brown, delicate maltyness and notes of walnut',
                },
            ],
        },
        100,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Spidermothers Midnight Ale',
                needsOne: [a.underdark, a.drow, a.assasine],
                incomeRange: [a.wealthy, a.rich],
                misfits: [a.elf, a.dwarf, a.gnome],
            },
            firstSideDishes: [
                { name: 'Ale -  black in color and delicately bitter' },
            ],
        },
        85,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Ambush Ale',
                needsOne: [a.assasine, a.drow, a.thief],
                incomeRange: [a.modest],
            },
            firstSideDishes: [{ name: 'Ale -  dark red and notes of cherry' }],
        },
        18,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Ivory Ale',
                needsOne: [a.elf, a.haven],
                incomeRange: [a.modest, a.poor],
                misfits: [a.dwarf, a.drow],
            },
            firstSideDishes: [{ name: 'Ale -  slightly yellow and fruity' }],
        },
        14,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Aredhel's Almond Ale",
                needs: [a.elf, a.city],
                incomeRange: [a.wealthy],
                misfits: [a.dwarf, a.drow],
            },
            firstSideDishes: [{ name: 'Ale -  light brown and nutty' }],
        },
        38,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Aredhel's Maple Ale",
                needs: [a.elf, a.city],
                incomeRange: [a.wealthy, a.rich],
                misfits: [a.dwarf, a.drow],
            },
            firstSideDishes: [{ name: 'Ale -  malty, light and sweet' }],
        },
        58,
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
                { name: 'Ale -  sturdy malt with a sweet accent' },
            ],
        },
        23,
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
                { name: 'Ale -  sturdy malt with a nutty accent' },
            ],
        },
        24,
        Drinkable.beer
    ),
];
