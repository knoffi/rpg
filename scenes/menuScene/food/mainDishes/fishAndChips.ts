import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
const FISH_AND_CHIPS_PRICE_FACTOR = 1.0;

const fishAndChipsSideDishes = [
    { name: ' with Peas', fitRange: [a.haven, a.modest, a.poor] },
    { name: ' with Baked Beans', fitRange: [a.haven, a.modest, a.poor] },
    { name: ' with Onions', fitRange: [a.haven, a.modest, a.poor] },
    { name: ' with Gherkins', fitRange: [a.haven, a.modest, a.poor] },
];
const fishAndChipsFishes = [
    { name: ' (Plaice)', fitRange: [a.haven, a.modest] },
    { name: ' (Pollock', fitRange: [a.haven, a.modest] },
    { name: ' (Haddock)', fitRange: [a.haven, a.modest] },
    { name: ' (Whiting)', fitRange: [a.haven, a.modest] },
    { name: ' (Bluewater Cod)', fitRange: [a.haven, a.modest] },
    { name: ' (Deepwater Cod)', fitRange: [a.haven, a.modest] },
    { name: ' (Blackwater Cod)', fitRange: [a.haven, a.modest] },
    { name: ' (Grey Mackerel)', fitRange: [a.haven, a.poor] },
    { name: ' (Stink Cod)', fitRange: [a.haven, a.poor] },
    { name: ' (Black Cod)', fitRange: [a.haven, a.poor] },
    { name: ' (Sock Fish)', fitRange: [a.haven, a.poor] },
];

export const fishAndChips = new DishIdea(
    {
        mainIng: {
            name: 'Fish & Chips',
            fitRange: [a.village, a.city, a.haven, a.modest, a.poor],
        },
        firstSideDishes: fishAndChipsFishes,
        secondSideDishes: fishAndChipsSideDishes,
    },
    adjustPriceSetter(foodPrices.mainDish, FISH_AND_CHIPS_PRICE_FACTOR),
    foodCategory.mainDish
);
