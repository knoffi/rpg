import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
const a = association;
const FISH_AND_CHIPS_PRICE_FACTOR = 1.0;

const fishAndChipsSideDishes = [
    { name: ' with Fries and Peas', incomeRange: [a.modest, a.poor] },
    { name: ' with Fries and Baked Beans', incomeRange: [a.modest, a.poor] },
    { name: ' with Fries and Onions', incomeRange: [a.modest, a.poor] },
    { name: ' with Fries and Gherkins', incomeRange: [a.modest, a.poor] },
];
export const fish = [
    { name: '(Plaice)', incomeRange: [a.modest] },
    { name: '(Pollock)', incomeRange: [a.modest] },
    { name: '(Haddock)', incomeRange: [a.modest] },
    { name: '(Whiting)', incomeRange: [a.modest] },
    { name: '(Bluewater Cod)', incomeRange: [a.modest] },
    { name: '(Deepwater Cod)', incomeRange: [a.modest] },
    { name: '(Blackwater Cod)', incomeRange: [a.modest] },
    { name: '(Grey Mackerel)', needs: [a.poor] },
    { name: '(Stink Cod)', needs: [a.poor] },
    { name: '(Grey Cod)', needs: [a.poor] },
    { name: '(Sock Fish)', needs: [a.poor] },
];

export const fishAndChips = new DishIdea(
    {
        mainIng: {
            name: 'Fish & Chips',
            landRange: [a.village, a.city, a.haven],
            incomeRange: [a.modest, a.poor],
            powerFits: [a.haven],
        },
        firstSideDishes: [{ name: 'Depp-Fried Fish ' }],
        secondSideDishes: fish,
        thirdSideDishes: fishAndChipsSideDishes,
    },
    FISH_AND_CHIPS_PRICE_FACTOR,
    Eatable.mainDish
);
