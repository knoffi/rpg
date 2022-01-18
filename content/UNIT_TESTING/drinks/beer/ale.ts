import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
export const lagers: DishIdea[] = [
    // unit tests for ContentCrea use this (quality left for CreationQuality.AVERAGE), thus removing keys .BEER_ale would break test
    new DishIdea(
        {
            mainIng: {
                name: 'Adventure Ale',
                powerFits: [a.adventurer],
                misfits: [a.desert],
                key: AssetKey.BEER_ale,
            },
        },
        'default',
        Drinkable.beer
    ),
];
