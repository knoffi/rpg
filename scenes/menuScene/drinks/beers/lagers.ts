import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
export const ales: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: "Flint's Dark Lager",
                landRange: [a.haven],
                incomeRange: [a.poor],
                needsOne: [a.thief, a.assasine, a.prostitute],
            },
            firstSideDishes: [{ name: 'Lager - fierce and malty' }],
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
            firstSideDishes: [{ name: 'Lager - green, malty and fruity' }],
        },
        38,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: { name: "Aiven's Golden Malt", incomeRange: [a.rich] },
            firstSideDishes: [
                {
                    name: 'Lager - very malty with a sweet note and golden foam',
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
                misfits: [a.elf, a.drow],
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                { name: 'Lager - the best lager beer a human can brew' },
            ],
        },
        150,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Platinum Label',
                misfits: [a.elf, a.drow],
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Lager - elegant maltyness meets full-bodied fruityness',
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
                misfits: [a.elf, a.drow],
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                { name: 'Lager - mellow maltyness meets delicate smoothness ' },
            ],
        },
        85,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Molderoy, Silver Label',
                misfits: [a.elf, a.drow],
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Lager - Joyful fruityness with a refreshing crispness',
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
                misfits: [a.elf, a.drow],
                incomeRange: [a.wealthy],
            },
            firstSideDishes: [
                { name: 'Lager - melodic maltyness with a swinging sweetness' },
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
                { name: 'Lager - soft maltyness and mild notes of grapes' },
            ],
        },
        4,
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
                { name: 'Lager - delicate maltyness and a note of elderberry' },
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
                { name: 'Lager - embracing maltnyess with a fruity aroma' },
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
                { name: 'Lager - exquisite maltyness with a crisp finish' },
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
                    name: 'Lager - superb maltyness with a divine note of sweetness',
                },
            ],
        },
        125,
        Drinkable.beer
    ),
];
