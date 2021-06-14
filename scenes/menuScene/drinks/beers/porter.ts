import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
export const porters: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Black-Bearded Brew',
                incomeRange: [a.poor],
                landRange: [a.haven, a.city],
            },
            firstSideDishes: [{ name: 'Stout - black, roasty, bitter' }],
        },
        5,
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Stanley's Last",
                incomeRange: [a.poor],
                landRange: [a.haven, a.city],
            },
            firstSideDishes: [{ name: 'Stout - black, sturdy, bitter' }],
        },
        2,
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
                { name: 'Stout - dark, slightly bitter, roasty note' },
            ],
        },
        18,
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
                { name: 'Porter - dark, fruity, slightly bitter' },
            ],
        },
        12,
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
                { name: 'Porter - dark, delightfully malty and notes of plum' },
            ],
        },
        80,
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
                    name: 'Stout - black, slightly bitter and notes of chocolate',
                },
            ],
        },
        89,
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
            firstSideDishes: [{ name: 'Porter - dark brown, malty, nutty' }],
        },
        29,
        Drinkable.beer
    ),
];
