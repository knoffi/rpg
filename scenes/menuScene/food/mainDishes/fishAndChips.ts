import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
import { foodPrices } from '../../priceSetting/foodPriceSetters';
import { adjustPriceSetter } from '../../priceSetting/priceSetters';
const a = association;
const FISH_AND_CHIPS_PRICE_FACTOR = 1.0;

const fishAndChipsSideDishes = [
    { name: ' with Fries and Peas', incomeRange: [a.modest, a.poor] },
    { name: ' with Fries and Baked Beans', incomeRange: [a.modest, a.poor] },
    { name: ' with Fries and Onions', incomeRange: [a.modest, a.poor] },
    { name: ' with Fries and Gherkins', incomeRange: [a.modest, a.poor] },
];
const fishAndChipsFishes = [
    { name: 'Deep-Fried Fish (Plaice)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Pollock)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Haddock)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Whiting)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Bluewater Cod)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Deepwater Cod)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Blackwater Cod)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Grey Mackerel)', incomeRange: [a.poor] },
    { name: 'Deep-Fried Fish (Stink Cod)', incomeRange: [a.poor] },
    { name: 'Deep-Fried Fish (Black Cod)', incomeRange: [a.poor] },
    { name: 'Deep-Fried Fish (Sock Fish)', incomeRange: [a.poor] },
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
