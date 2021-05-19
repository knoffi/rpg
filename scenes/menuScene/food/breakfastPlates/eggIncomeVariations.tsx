import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/DescriptionAsset';

const a = association;
export const eggIncomeVariations: DescriptionAsset[] = [
    { name: ' One Boiled Egg with ', incomeRange: [a.poor] },
    { name: ' One Scrambled Egg with ', incomeRange: [a.poor] },
    { name: ' One Fried Egg with ', incomeRange: [a.poor] },
    { name: ' Three Boiled Eggs with ', incomeRange: [a.modest] },
    { name: ' Three Scrambled Eggs with ', incomeRange: [a.modest] },
    { name: ' Three Fried Eggs with ', incomeRange: [a.modest] },
    { name: ' Boiled Egg (Owl Bear) served with ', incomeRange: [a.wealthy] },
    {
        name: ' Scrambled Egg (Owl Bear) served with ',
        incomeRange: [a.wealthy],
    },
    { name: ' Fried Egg (Owl Bear) served with ', incomeRange: [a.wealthy] },
    { name: ' Boiled Egg (Gryphon) served with ', incomeRange: [a.wealthy] },
    { name: ' Scrambled Egg (Gryphon) served with ', incomeRange: [a.wealthy] },
    { name: ' Fried Egg (Gryphon) served with ', incomeRange: [a.wealthy] },
    { name: ' Eggs Benedict served with ', incomeRange: [a.wealthy] },
    { name: ' One Century Egg served with ', incomeRange: [a.wealthy] },
    { name: ' Boiled Egg (Dragon) served with ', incomeRange: [a.rich] },
    { name: ' Scrambled Egg (Dragon) served with ', incomeRange: [a.rich] },
    { name: ' Fried Egg (Dragon) served with ', incomeRange: [a.rich] },
    { name: ' Boiled Egg (Cockatrice) served with ', incomeRange: [a.rich] },
    { name: ' Scrambled Egg (Cockatrice) served with ', incomeRange: [a.rich] },
    { name: ' Fried Egg (Cockatrice) served with ', incomeRange: [a.rich] },
    { name: ' Boiled Egg (Basilisk) served with ', incomeRange: [a.rich] },
    { name: ' Scrambled Egg (Basilisk) served with ', incomeRange: [a.rich] },
    { name: ' Fried Egg (Basilisk) served with ', incomeRange: [a.rich] },
    { name: ' Two Millennium Eggs served with ', incomeRange: [a.rich] },
];
