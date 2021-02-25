import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;

const fishAndChipsSideDishes = [
    { name: ' with Peas', fitRange: [a.haven, a.worker, a.poor] },
    { name: ' with Baked Beans', fitRange: [a.haven, a.worker, a.poor] },
    { name: ' with Onions', fitRange: [a.haven, a.worker, a.poor] },
    { name: ' with Gherkins', fitRange: [a.haven, a.worker, a.poor] },
];
const fishAndChipsFishes = [
    { name: ' (Plaice)', fitRange: [a.haven, a.worker] },
    { name: ' (Pollock', fitRange: [a.haven, a.worker] },
    { name: ' (Haddock)', fitRange: [a.haven, a.worker] },
    { name: ' (Whiting)', fitRange: [a.haven, a.worker] },
    { name: ' (Bluewater Cod)', fitRange: [a.haven, a.worker] },
    { name: ' (Deepwater Cod)', fitRange: [a.haven, a.worker] },
    { name: ' (Blackwater Cod)', fitRange: [a.haven, a.worker] },
    { name: ' (Grey Mackerel)', fitRange: [a.haven, a.poor] },
    { name: ' (Stink Cod)', fitRange: [a.haven, a.poor] },
    { name: ' (Black Cod)', fitRange: [a.haven, a.poor] },
    { name: ' (Sock Fish)', fitRange: [a.haven, a.poor] },
];

export const fishAndChips = new DishIdea(
    {
        mainIng: {
            name: 'Fish & Chips',
            fitRange: [a.village, a.city, a.forest, a.sophisticated],
        },
        firstSideDishes: fishAndChipsFishes,
        secondSideDishes: fishAndChipsSideDishes,
    },
    adjustPriceSetter(foodPrices.mainDish, 1.7),
    foodCategory.mainDish
);
