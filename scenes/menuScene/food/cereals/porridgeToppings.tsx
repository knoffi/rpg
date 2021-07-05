import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';

const a = association;

export const poorPorridgeToppings: DescriptionAsset[] = [
    {
        name: ' with Half an Apple',
        incomeRange: [a.poor],
        landRange: [a.village, a.forest],
    },
    {
        name: ' with Half a Pear',
        incomeRange: [a.poor],
        landRange: [a.village, a.forest],
    },
    {
        name: ' with Half a Pickled Pear',
        incomeRange: [a.poor],
        landRange: [a.city],
    },
    {
        name: ' with Half an Orange',
        incomeRange: [a.poor],
        landRange: [a.tropical, a.haven],
    },
    {
        name: ' with Fried Rat',
        incomeRange: [a.poor],
        landRange: [a.city, a.underdark],
    },
    {
        name: ' with Pickled Pigeon Pieces',
        incomeRange: [a.poor],
        landRange: [a.city],
    },
    { name: ' with Fried Mouse', incomeRange: [a.poor], landRange: [a.forest] },
    {
        name: ' with Rum',
        incomeRange: [a.poor],
        needsOne: [a.tropical, a.human],
    },
    { name: ' with Grog', incomeRange: [a.poor], needsOne: [a.haven] },
    {
        name: ' with Red Wine',
        incomeRange: [a.poor],
        needsOne: [a.village, a.drow],
    },
    {
        name: ' with White Wine',
        incomeRange: [a.poor],
        needsOne: [a.village, a.elf],
    },
    {
        name: ' with Vodka',
        incomeRange: [a.poor],
        needsOne: [a.forest, a.halfling],
    },
    {
        name: ' with Whiskey',
        incomeRange: [a.poor],
        needsOne: [a.city, a.gnome],
    },
    {
        name: ' with Brandy',
        incomeRange: [a.poor],
        needsOne: [a.underdark, a.tiefling],
    },
    {
        name: ' with Herbal Liqueur',
        incomeRange: [a.poor],
        needsOne: [a.mountain, a.dwarf],
    },
    { name: ' with an Sardine', incomeRange: [a.poor], landRange: [a.haven] },
    { name: ' with an Anchovy', incomeRange: [a.poor], landRange: [a.haven] },
    { name: ' with one Shrimp', incomeRange: [a.poor], landRange: [a.haven] },
    {
        name: ' with a Slice of Goat Cheese',
        incomeRange: [a.poor],
        landRange: [a.desert, a.mountain],
    },
    { name: ' with Salt & Pepper', incomeRange: [a.poor] },
    { name: ' with Salt', incomeRange: [a.poor] },
    { name: ' with Pepper', incomeRange: [a.poor] },
    { name: ' with two Dates', incomeRange: [a.poor], landRange: [a.desert] },
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
