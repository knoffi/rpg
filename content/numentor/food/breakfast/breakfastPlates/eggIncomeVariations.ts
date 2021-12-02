import { association } from '../../../../../classes/association';
import { DescriptionAsset } from '../../../../../classes/idea/DescriptionAsset';

const a = association;
const DRAGON_EGG_PRICE_FACTOR = 3;
export const eggIncomeVariations: DescriptionAsset[] = [
    { name: ' One Boiled Egg with ', needs: [a.poor] },
    { name: ' One Scrambled Egg with ', needs: [a.poor] },
    { name: ' One Fried Egg with ', needs: [a.poor] },
    {
        name: ' 3 Boiled Eggs with ',
        incomeRange: [a.modest],
        misfits: [a.barbarian, a.knight, a.dwarf],
    },
    {
        name: ' 3 Scrambled Eggs with ',
        incomeRange: [a.modest],
        misfits: [a.barbarian, a.knight, a.dwarf],
    },
    {
        name: ' 3 Fried Eggs with ',
        incomeRange: [a.modest],
        misfits: [a.barbarian, a.knight, a.dwarf],
    },
    {
        name: ' 4 Boiled Eggs with ',
        incomeRange: [a.modest],
        needsOne: [a.barbarian, a.knight, a.dwarf],
    },
    {
        name: ' 4 Scrambled Eggs with ',
        incomeRange: [a.modest],
        needsOne: [a.barbarian, a.knight, a.dwarf],
    },
    {
        name: ' 4 Fried Eggs with ',
        incomeRange: [a.modest],
        needsOne: [a.barbarian, a.knight, a.dwarf],
    },
    {
        name: ' 5 Boiled Eggs with ',
        needs: [a.wealthy],
    },
    {
        name: ' 5 Scrambled Eggs with ',
        needs: [a.wealthy],
    },
    {
        name: ' 5 Fried Eggs with ',
        needs: [a.wealthy],
    },
    { name: ' 5 Poached Eggs served with ', needs: [a.wealthy] },
    {
        name: ' Boiled Egg (Owl Bear) served with ',
        landRange: [a.forest, a.village, a.city],
        needs: [a.wealthy],
    },
    {
        name: ' Scrambled Egg (Owl Bear) served with ',
        landRange: [a.forest, a.village, a.city],
        needs: [a.wealthy],
    },
    {
        name: ' Fried Egg (Owl Bear) served with ',
        landRange: [a.forest, a.village, a.city],
        needs: [a.wealthy],
    },
    {
        name: ' Boiled Egg (Gryphon) served with ',
        landRange: [a.mountain, a.desert, a.city],
        needs: [a.wealthy],
    },
    {
        name: ' Scrambled Egg (Gryphon) served with ',
        landRange: [a.mountain, a.desert, a.city],
        needs: [a.wealthy],
    },
    {
        name: ' Fried Egg (Gryphon) served with ',
        landRange: [a.mountain, a.desert, a.city],
        needs: [a.wealthy],
    },
    {
        name: ' Boiled Egg (Giant Eagle) served with ',
        landRange: [a.mountain, a.desert, a.tropical],
        needs: [a.wealthy],
    },
    {
        name: ' Scrambled Egg (Giant Eagle) served with ',
        landRange: [a.mountain, a.desert, a.tropical],
        needs: [a.wealthy],
    },
    {
        name: ' Fried Egg (Giant Eagle) served with ',
        landRange: [a.mountain, a.desert, a.tropical],
        needs: [a.wealthy],
    },
    {
        name: ' 4 Boiled Eggs (Seagull) served with ',
        needs: [a.wealthy, a.haven],
    },
    {
        name: ' 4 Scrambled Eggs (Seagull) served with ',
        needs: [a.wealthy, a.haven],
    },
    {
        name: ' 4 Fried Eggs (Seagull) served with ',
        needs: [a.wealthy, a.haven],
    },
    { name: ' One Century Egg served with ', needs: [a.wealthy] },
    {
        name: ' Boiled Egg (Dragon) served with ',
        needs: [a.rich],
        priceFactor: DRAGON_EGG_PRICE_FACTOR,
    },
    {
        name: ' Scrambled Egg (Dragon) served with ',
        needs: [a.rich],
        priceFactor: DRAGON_EGG_PRICE_FACTOR,
    },
    {
        name: ' Fried Egg (Dragon) served with ',
        needs: [a.rich],
        priceFactor: DRAGON_EGG_PRICE_FACTOR,
    },
    {
        name: ' Poached Egg (Dragon) served with ',
        needs: [a.rich],
        priceFactor: DRAGON_EGG_PRICE_FACTOR,
    },
    { name: ' Boiled Egg (Cockatrice) served with ', needs: [a.rich] },
    { name: ' Scrambled Egg (Cockatrice) served with ', needs: [a.rich] },
    { name: ' Fried Egg (Cockatrice) served with ', needs: [a.rich] },
    { name: ' Poached Egg (Cockatrice) served with ', needs: [a.rich] },
    { name: ' Boiled Egg (Basilisk) served with ', needs: [a.rich] },
    { name: ' Scrambled Egg (Basilisk) served with ', needs: [a.rich] },
    { name: ' Fried Egg (Basilisk) served with ', needs: [a.rich] },
    { name: ' Poached Egg (Basilisk) served with ', needs: [a.rich] },
    { name: ' 3 Century Eggs served with ', needs: [a.rich] },
];
