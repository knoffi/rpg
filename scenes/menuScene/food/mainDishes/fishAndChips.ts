import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
const FISH_AND_CHIPS_PRICE_FACTOR = 1.0;

const fishAndChipsSideDishes = [
<<<<<<< HEAD
    { name: ' with Peas', incomeRange: [a.modest, a.poor] },
    { name: ' with Baked Beans', incomeRange: [a.modest, a.poor] },
    { name: ' with Onions', incomeRange: [a.modest, a.poor] },
    { name: ' with Gherkins', incomeRange: [a.modest, a.poor] },
];
const fishAndChipsFishes = [
    { name: ' (Plaice)', incomeRange: [a.modest] },
    { name: ' (Pollock', incomeRange: [a.modest] },
    { name: ' (Haddock)', incomeRange: [a.modest] },
    { name: ' (Whiting)', incomeRange: [a.modest] },
    { name: ' (Bluewater Cod)', incomeRange: [a.modest] },
    { name: ' (Deepwater Cod)', incomeRange: [a.modest] },
    { name: ' (Blackwater Cod)', incomeRange: [a.modest] },
    { name: ' (Grey Mackerel)', incomeRange: [a.poor] },
    { name: ' (Stink Cod)', incomeRange: [a.poor] },
    { name: ' (Black Cod)', incomeRange: [a.poor] },
    { name: ' (Sock Fish)', incomeRange: [a.poor] },
=======
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
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
];

export const fishAndChips = new DishIdea(
    {
        mainIng: {
            name: 'Fish & Chips',
<<<<<<< HEAD
            landRange: [a.village, a.city, a.haven],
            incomeRange: [a.modest, a.poor],
=======
            fitsTo: [a.village, a.city, a.haven, a.worker, a.poor],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
        },
        firstSideDishes: fishAndChipsFishes,
        secondSideDishes: fishAndChipsSideDishes,
    },
    adjustPriceSetter(foodPrices.mainDish, FISH_AND_CHIPS_PRICE_FACTOR),
    foodCategory.mainDish
);
