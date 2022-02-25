import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
const a = association;
export const proteins: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Baked Beans',
                key: AssetKey.SMALL_DISH_protein,
                misfits: [a.desert, a.tropical],
                powerFits: [a.gnome, a.modest, a.barbarian],
                incomeRange: [a.poor, a.modest],
            },
            firstSideDishes: [
                {
                    name: 'White Beans cooked with Onion and Bacon, mixed with Mustard and Tomato Paste',
                    incomeRange: [a.modest],
                },
                {
                    name: 'White Beans cooked with Onion, mixed with Mustard and Tomato Paste',
                    needs: [a.poor],
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
];
