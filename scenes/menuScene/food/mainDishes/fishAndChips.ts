import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
const FISH_AND_CHIPS_PRICE_FACTOR = 1.0;

const fishAndChipsSideDishes = [
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
];

export const fishAndChips = new DishIdea(
    {
        mainIng: {
            name: 'Fish & Chips',
            landRange: [a.village, a.city, a.haven],
            incomeRange: [a.modest, a.poor],
        },
        firstSideDishes: fishAndChipsFishes,
        secondSideDishes: fishAndChipsSideDishes,
    },
    adjustPriceSetter(foodPrices.mainDish, FISH_AND_CHIPS_PRICE_FACTOR),
    Eatable.mainDish
);
