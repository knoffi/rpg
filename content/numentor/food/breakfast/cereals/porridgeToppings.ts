import { association } from '../../../../../classes/association';
import { DescriptionAsset } from '../../../../../classes/idea/DescriptionAsset';

const a = association;

export const poorPorridgeToppings: DescriptionAsset[] = [
    {
        name: ' with Half an Apple',
        needs: [a.poor],
        landRange: [a.village, a.forest],
    },
    {
        name: ' with Half a Pear',
        needs: [a.poor],
        landRange: [a.village, a.forest],
    },
    {
        name: ' with Half a Pickled Pear',
        needs: [a.poor],
        landRange: [a.city],
    },
    {
        name: ' with Half an Orange',
        needs: [a.poor],
        landRange: [a.tropical, a.haven],
    },
    {
        name: ' with Fried Rat',
        needs: [a.poor],
        landRange: [a.city, a.underdark],
    },
    {
        name: ' with Pickled Pigeon Pieces',
        needs: [a.poor],
        landRange: [a.city],
    },
    { name: ' with Fried Mouse', needs: [a.poor], landRange: [a.forest] },
    {
        name: ' with a dash of Rum',
        needs: [a.poor],
        misfits: [a.desert],
        landRange: [a.tropical, a.haven],
    },
    {
        name: ' with a dash of Grog',
        needs: [a.haven, a.poor],
        incomeRange: [a.poor, a.modest],
        misfits: [a.desert],
    },
    {
        name: ' with a dash of Red Wine',
        needs: [a.poor],
        landRange: [a.village, a.city],
        misfits: [a.desert],
    },
    {
        name: ' with a dash of White Wine',
        needs: [a.poor],
        landRange: [a.village, a.city],
        misfits: [a.desert],
    },
    {
        name: ' with a dash of Vodka',
        needs: [a.poor],
        landRange: [a.forest, a.underdark],
        misfits: [a.desert],
    },
    {
        name: ' with a dash of Whiskey',
        needs: [a.poor],
        misfits: [a.desert],
        landRange: [a.city, a.mountain],
    },
    {
        name: ' with a dash of Herbal Liqueur',
        needsOne: [a.poor, a.mountain, a.forest, a.dwarf],
        misfits: [a.desert],
        incomeRange: [a.poor, a.modest],
    },
    {
        name: ' with a dash of Brandy',
        needsOne: [a.poor, a.underdark, a.tiefling],
        incomeRange: [a.poor, a.modest],
        misfits: [a.desert],
    },
    { name: ' with a Sardine', needs: [a.poor, a.haven] },
    { name: ' with an Anchovy', needs: [a.poor, a.haven] },
    { name: ' with one Shrimp', needs: [a.poor, a.haven] },
    {
        name: ' with a Slice of Goat Cheese',
        needs: [a.poor],
        landRange: [a.desert, a.mountain],
    },
    { name: ' with Salt & Pepper', needs: [a.poor] },
    { name: ' with Salt', needs: [a.poor] },
    { name: ' with Pepper', needs: [a.poor] },
    { name: ' with two Dates', needs: [a.poor], landRange: [a.desert] },
];

export const wealthyPorridgeToppings: DescriptionAsset[] = [
    {
        name: ' garnished with Cinnamon & Apples',
        incomeRange: [a.wealthy],
        landRange: [a.village, a.haven, a.city, a.forest],
    },
    {
        name: ' garnished with Raspberry & Peanuts',
        incomeRange: [a.wealthy],
        landRange: [a.village, a.haven, a.city, a.forest],
    },
    {
        name: ' garnished with Chocolate & Hazelnuts',
        incomeRange: [a.wealthy],
        misfits: [a.tropical, a.underdark],
    },
    {
        name: ' garnished with Dark Chocolate & Hazelnuts',
        incomeRange: [a.wealthy],
        landRange: [a.underdark],
    },
    {
        name: ' garnished with Bacon & Mushrooms',
        incomeRange: [a.wealthy],
        landRange: [a.village, a.haven, a.city, a.forest],
    },
    {
        name: ' garnished with White Chocolate & Walnuts',
        incomeRange: [a.wealthy],
        landRange: [a.village, a.haven, a.city, a.forest],
    },
    {
        name: ' garnished with Strawberries & Cream',
        incomeRange: [a.wealthy],
        landRange: [a.village, a.haven, a.city, a.forest],
    },
    {
        name: ' garnished with Caramelized Lizard Bacon',
        incomeRange: [a.wealthy],
        needsOne: [a.underdark, a.drow],
    },
    {
        name: ' garnished with Caramelized Mole Filet',
        incomeRange: [a.wealthy],
        needsOne: [a.underdark, a.drow],
    },
    {
        name: ' garnished with Goat Cheese & Honey',
        incomeRange: [a.wealthy],
        landRange: [a.mountain, a.desert],
    },
    {
        name: ' garnished with Lamb Chomps & Goat Cheese',
        incomeRange: [a.wealthy],
        landRange: [a.mountain, a.desert],
    },
    {
        name: ' garnished with Peaches & Maracuja',
        incomeRange: [a.wealthy],
        needs: [a.tropical],
    },
    {
        name: ' garnished with Dragon Fruit & Oranges',
        incomeRange: [a.wealthy],
        needs: [a.tropical],
    },
    {
        name: ' garnished with Durian Fruit & Coconut',
        incomeRange: [a.wealthy],
        needs: [a.tropical],
    },
    {
        name: ' garnished with Caramelized Shrimps',
        incomeRange: [a.wealthy],
        needsOne: [a.tropical, a.haven],
    },
    {
        name: ' garnished with Cinnamon & Dates',
        incomeRange: [a.wealthy],
        landRange: [a.mountain, a.desert],
    },
];
export const modestPorridgeToppings: DescriptionAsset[] = [
    {
        name: ' with Apple',
        incomeRange: [a.modest],
        landRange: [a.village, a.forest],
    },
    {
        name: ' with Plum',
        incomeRange: [a.modest],
        landRange: [a.village, a.city],
    },
    {
        name: ' with Walnuts',
        incomeRange: [a.modest],
        landRange: [a.village, a.city],
    },
    {
        name: ' with Raisins',
        incomeRange: [a.modest],
        landRange: [a.village, a.city],
    },
    { name: ' with Pears', incomeRange: [a.modest], landRange: [a.village] },
    {
        name: ' with Cherries',
        incomeRange: [a.modest],
        landRange: [a.village, a.forest],
    },
    {
        name: ' with Strawberries',
        incomeRange: [a.modest],
        landRange: [a.village, a.forest],
    },
    { name: ' with Applesauce', incomeRange: [a.modest], landRange: [a.city] },
    {
        name: ' with Pear Marmelade',
        incomeRange: [a.modest],
        landRange: [a.city],
    },
    {
        name: ' with Pickled Cherries',
        incomeRange: [a.modest],
        landRange: [a.city, a.haven],
    },
    {
        name: ' with Honey',
        incomeRange: [a.modest],
        landRange: [a.forest, a.mountain, a.desert],
    },
    {
        name: ' with Raspberries',
        incomeRange: [a.modest],
        landRange: [a.forest, a.village],
    },
    {
        name: ' with Blackberries',
        incomeRange: [a.modest],
        landRange: [a.forest, a.village],
    },
    {
        name: ' with Black Currant',
        incomeRange: [a.modest],
        landRange: [a.forest, a.village],
    },
    {
        name: ' with Red Currant',
        incomeRange: [a.modest],
        landRange: [a.forest, a.village],
    },
    {
        name: ' with Elderberries',
        incomeRange: [a.modest],
        landRange: [a.mountain, a.forest],
    },
    {
        name: ' with Goat Cheese',
        incomeRange: [a.modest],
        landRange: [a.desert, a.mountain],
    },
    {
        name: ' with Mushrooms',
        incomeRange: [a.modest],
        landRange: [a.forest, a.city, a.village],
    },
    {
        name: ' with Bananas',
        incomeRange: [a.modest],
        landRange: [a.haven, a.tropical],
    },
    {
        name: ' with Rum Raisins',
        incomeRange: [a.modest],
        landRange: [a.haven],
    },
    {
        name: ' with Pickled Fish',
        incomeRange: [a.modest],
        landRange: [a.haven],
    },
    {
        name: ' with Dates',
        incomeRange: [a.modest],
        landRange: [a.mountain, a.desert],
    },
    {
        name: ' with Cinnamon & Sugar',
        incomeRange: [a.modest],
        landRange: [a.haven, a.desert],
    },
    { name: ' with Peach', incomeRange: [a.modest], landRange: [a.tropical] },
    { name: ' with Papaya', incomeRange: [a.modest], landRange: [a.tropical] },
    {
        name: ' with Pineapple',
        incomeRange: [a.modest],
        landRange: [a.tropical],
    },
    { name: ' with Mango', incomeRange: [a.modest], landRange: [a.tropical] },
    {
        name: ' with Midnightberries',
        incomeRange: [a.modest],
        landRange: [a.underdark],
    },
    {
        name: ' with Mole Bacon',
        incomeRange: [a.modest],
        landRange: [a.underdark],
    },
    {
        name: ' with Lizard Bacon',
        incomeRange: [a.modest, a.wealthy],
        landRange: [a.underdark],
    },
    {
        name: ' with Underdark Apples',
        incomeRange: [a.modest],
        landRange: [a.underdark],
    },
];
