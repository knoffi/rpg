import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
export const whiskey: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Van Smooth Whisky',
                keys: [AssetKey.SPIRIT_whiskey],
            },
            firstSideDishes: [
                {
                    name: 'So smooth, it makes you relax and forget your troubles!',
                },
            ],
        },
        1,
        Drinkable.spirit
    ),
];
