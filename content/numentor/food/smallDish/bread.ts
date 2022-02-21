import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
const a = association;
export const carbonStarter: DishIdea[] = [
    new DishIdea(
        {
            mainIng: { name: 'Bruschetta', key: AssetKey.SMALL_DISH_carbon },
            firstSideDishes: [
                {
                    name: 'Grilled Bread Slices, topped with Finely-Diced Onions, Garlic, Tomato and Basil',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
];
