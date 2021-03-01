import { association, landAssociations } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';

const a = association;
export const steaks = [
    new DishIdea(
        {
            mainIng: {
                name: 'Chateaubriand Steak',
                fitRange: [...landAssociations, a.rich],
            },
            firstSideDishes: [
                {
                    name: ' with Gold Plated Duchesse Potatoes',
                    // maybe fitRange should be an optional parameter. If it is undefined, then this will be seen as [...landAssociations, ...incomeAssociations] when it comes to fitting and filtering
                    fitRange: [...landAssociations, a.rich],
                },
            ],
        },
        adjustPriceSetter(foodPrices.mainDish, 1.2),
        foodCategory.mainDish
    ),
];
