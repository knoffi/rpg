import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
const MEAD_WINE_FACTOR = 0.1;
export const meads: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Mountain Mead',
                landRange: [a.mountain],
                keys: [AssetKey.WINE_mead],
            },
            firstSideDishes: [
                {
                    name: 'Mead  - brewed not far away from the mountains!',
                },
            ],
        },
        MEAD_WINE_FACTOR,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Non-Mountain Mead',
                misfits: [a.mountain],
                keys: [AssetKey.WINE_mead],
            },
            firstSideDishes: [
                {
                    name: 'Mead  -  never brewed in the mountains!',
                },
            ],
        },
        MEAD_WINE_FACTOR,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Strict Mountain Mead',
                needs: [a.mountain],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead  -  only brewed in the mountains!',
                },
            ],
        },
        MEAD_WINE_FACTOR,
        Drinkable.wine
    ),
];
