import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Pattern } from '../../../../classes/idea/Patterns/Pattern';
import { Eatable } from '../../../../classes/TavernProduct';
const a = association;
export const forMultiReroll: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Soup',
                key: AssetKey.SMALL_DISH_soup,
                patterns: [Pattern.BARTENDER_UncleBen],
            },
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Salad', key: AssetKey.SMALL_DISH_salad } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Bread', key: AssetKey.SMALL_DISH_carbon } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Hummus',
                key: AssetKey.SMALL_DISH_fingerfood,
                patterns: [Pattern.BARTENDER_Kleinfinger],
            },
        },
        'default',
        Eatable.sideDish
    ),
];
