import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
export const rum: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Don Salvador Rum',
                needsOne: [a.haven, a.tropical],
                incomeRange: [a.poor, a.modest],
                key: AssetKey.SPIRIT_rum,
            },
            firstSideDishes: [
                {
                    name: 'Named after a legendary pirate who died during a revolution!',
                },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Holy Rum',
                powerFits: [a.cleric],
                key: AssetKey.SPIRIT_rum,
            },
        },
        'default',
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Raging Whiskey',
                powerFits: [a.barbarian],
                key: AssetKey.SPIRIT_whiskey,
            },
        },
        'default',
        Drinkable.beer
    ),
];
