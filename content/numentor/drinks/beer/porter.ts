import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
export const porters: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Black-Bearded Brew',
                needs: [a.poor],
                landRange: [a.haven, a.city],
            },
            firstSideDishes: [{ name: 'Stout  -  black, roasty, bitter' }],
        },
        0.9,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Stanley's Last",
                needs: [a.poor],
                landRange: [a.haven, a.city],
            },
            firstSideDishes: [{ name: 'Stout  -  black, sturdy, bitter' }],
        },
        0.5,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Blacksmith's Black Beer",
                incomeRange: [a.modest],
                landRange: [a.haven, a.city],
            },
            firstSideDishes: [
                { name: 'Stout  -  dark, slightly bitter, roasty note' },
            ],
        },
        1,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'The Wacky Moist',
                needs: [a.halfling],
                incomeRange: [a.poor, a.modest],
                landRange: [a.village, a.city],
            },
            firstSideDishes: [
                { name: 'Porter  -  dark, fruity, slightly bitter' },
            ],
        },
        0.9,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Spidermother's Rich Porter",
                incomeRange: [a.rich, a.wealthy],
                needsOne: [a.drow, a.assasine, a.underdark, a.prostitute],
                raceRange: [a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Porter  -  dark, delightfully malty and notes of plum',
                },
            ],
        },
        1,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Spidermother's Imperial Stout",
                incomeRange: [a.rich, a.wealthy],
                needsOne: [a.drow, a.assasine, a.underdark, a.prostitute],
                raceRange: [a.drow],
            },
            firstSideDishes: [
                {
                    name: 'Stout  -  black, slightly bitter and notes of chocolate',
                },
            ],
        },
        1.2,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Baselbruck's Brown Beer",
                landRange: [a.underdark, a.haven, a.city],
                misfits: [a.drow],
                incomeRange: [a.modest, a.wealthy],
            },
            firstSideDishes: [{ name: 'Porter  -  dark brown, malty, nutty' }],
        },
        1,
        Drinkable.beer
    ),
];
