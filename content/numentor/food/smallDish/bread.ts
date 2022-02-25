import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
const a = association;
export const carbonStarter: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Bruschetta',
                key: AssetKey.SMALL_DISH_carbon,
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Grilled Bread Slices, topped with Finely-Diced Onions, Garlic, Tomato and Basil',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Bread with Ham & Ćwikla',
                key: AssetKey.SMALL_DISH_carbon,
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Fresh Bread, topped with Ham and a Puree of Beetroot and Horseradish',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
];
