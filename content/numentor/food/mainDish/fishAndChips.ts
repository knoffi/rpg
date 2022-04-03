import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
const a = association;
const FISH_AND_CHIPS_PRICE_FACTOR = 1.0;

const fishAndChipsSideDishes = [
    {
        name: ' with Chips (Salted Fries) and Peas',
        incomeRange: [a.modest, a.poor],
    },
    {
        name: ' with Chips (Salted Fries) and Baked Beans',
        incomeRange: [a.modest, a.poor],
    },
    {
        name: ' with Chips (Salted Fries) and Onions',
        incomeRange: [a.modest, a.poor],
    },
    {
        name: ' with Chips (Salted Fries) and Gherkins',
        incomeRange: [a.modest, a.poor],
    },
    {
        name: ' with Chips (Salted Fries) and Vinegar',
        incomeRange: [a.modest, a.poor],
    },
];
export const fish = [
    { name: 'Deep-Fried Fish (Plaice)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Pollock)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Haddock)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Whiting)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Bluewater Cod)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Deepwater Cod)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Blackwater Cod)', incomeRange: [a.modest] },
    { name: 'Deep-Fried Fish (Grey Mackerel)', needs: [a.poor] },
    { name: 'Deep-Fried Fish (Stink Cod)', needs: [a.poor] },
    { name: 'Deep-Fried Fish (Grey Cod)', needs: [a.poor] },
    { name: 'Deep-Fried Fish (Sock Fish)', needs: [a.poor] },
];

export const fishAndChips = new DishIdea(
    {
        mainIng: {
            name: 'Fish & Chips',
            landRange: [a.city, a.haven],
            incomeRange: [a.modest, a.poor],
            powerFits: [a.haven],
        },
        firstSideDishes: fish,
        secondSideDishes: fishAndChipsSideDishes,
    },
    FISH_AND_CHIPS_PRICE_FACTOR,
    Eatable.mainDish
);
