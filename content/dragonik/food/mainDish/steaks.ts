import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
const STEAK_FACTOR = 1.2;
const a = association;
export const steaks = [
    new DishIdea(
        {
            mainIng: {
                name: 'Chateaubriand Steak',
                needs: [a.rich],
            },
            firstSideDishes: [
                {
                    name: ' with Gold Plated Duchesse Potatoes',
                },
            ],
        },
        STEAK_FACTOR,
        Eatable.mainDish
    ),
];
