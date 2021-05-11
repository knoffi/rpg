import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
const FISH_AND_CHIPS_PRICE_FACTOR = 1.0;

const fishAndChipsSideDishes = [
    { name: ' with Peas', fitsTo: [a.haven, a.worker, a.poor] },
    { name: ' with Baked Beans', fitsTo: [a.haven, a.worker, a.poor] },
    { name: ' with Onions', fitsTo: [a.haven, a.worker, a.poor] },
    { name: ' with Gherkins', fitsTo: [a.haven, a.worker, a.poor] },
];
const fishAndChipsFishes = [
    { name: ' (Plaice)', fitsTo: [a.haven, a.worker] },
    { name: ' (Pollock', fitsTo: [a.haven, a.worker] },
    { name: ' (Haddock)', fitsTo: [a.haven, a.worker] },
    { name: ' (Whiting)', fitsTo: [a.haven, a.worker] },
    { name: ' (Bluewater Cod)', fitsTo: [a.haven, a.worker] },
    { name: ' (Deepwater Cod)', fitsTo: [a.haven, a.worker] },
    { name: ' (Blackwater Cod)', fitsTo: [a.haven, a.worker] },
    { name: ' (Grey Mackerel)', fitsTo: [a.haven, a.poor] },
    { name: ' (Stink Cod)', fitsTo: [a.haven, a.poor] },
    { name: ' (Black Cod)', fitsTo: [a.haven, a.poor] },
    { name: ' (Sock Fish)', fitsTo: [a.haven, a.poor] },
];

export const fishAndChips = new DishIdea(
    {
        mainIng: {
            name: 'Fish & Chips',
            fitsTo: [a.village, a.city, a.haven, a.worker, a.poor],
        },
        firstSideDishes: fishAndChipsFishes,
        secondSideDishes: fishAndChipsSideDishes,
    },
    adjustPriceSetter(foodPrices.mainDish, FISH_AND_CHIPS_PRICE_FACTOR),
    foodCategory.mainDish
);
