import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
const a = association;
export const vegetables: DescriptionAsset[] = [
    {
        name: 'Pumpkin',
        landRange: [a.village, a.city],
        needsOne: [a.village, a.modest, a.halfling],
        powerFits: [a.village, a.modest, a.halfling],
    },
    {
        name: 'Potatoe',
        landRange: [a.village, a.city],
        misfits: [a.rich, a.wealthy],
        needsOne: [a.village, a.modest, a.halfling],
        powerFits: [a.village, a.modest, a.halfling],
    },
    {
        name: 'Onion',
        landRange: [a.village, a.city],
        misfits: [a.rich, a.wealthy],
        needsOne: [a.village, a.modest, a.halfling],
        powerFits: [a.village, a.modest, a.halfling],
    },
    {
        name: 'Tomato',
        misfits: [a.rich, a.wealthy],
        landRange: [a.village, a.city],
        needsOne: [a.village, a.modest, a.halfling],
        powerFits: [a.village, a.modest, a.halfling],
    },
    {
        name: 'Bean',
        landRange: [a.village, a.desert, a.mountain],
        needsOne: [a.village, a.poor, a.halfling, a.gnome],
        misfits: [a.rich, a.wealthy],
        powerFits: [a.village, a.poor, a.halfling, a.gnome],
    },
    {
        name: 'Cucumber',
        landRange: [a.village, a.city],
        needsOne: [a.village, a.modest, a.halfling, a.prostitute],
        powerFits: [a.village, a.modest, a.halfling, a.prostitute],
        worksForBrothel: true,
        misfits: [a.rich, a.wealthy],
    },
    {
        name: 'Carrot',
        landRange: [a.village, a.city],
        needsOne: [a.village, a.modest, a.halfling, a.prostitute],
        powerFits: [a.village, a.modest, a.halfling, a.prostitute],
        worksForBrothel: true,
        misfits: [a.rich, a.wealthy],
    },
    {
        name: 'Chickpea',
        landRange: [a.desert, a.village],
        needsOne: [a.desert, a.halfling, a.gnome],
        powerFits: [a.desert, a.gnome, a.halfling],
        misfits: [a.rich, a.wealthy],
    },
    {
        name: 'Eggplant',
        landRange: [a.desert],
        needsOne: [a.desert, a.halfling, a.prostitute],
        powerFits: [a.village, a.desert, a.halfling],
        worksForBrothel: true,
    },
    {
        name: 'Olive',
        landRange: [a.desert],
        powerFits: [a.desert, a.halfling],
    },
    {
        name: 'Chili Pepper',
        landRange: [a.haven, a.tropical, a.desert],
        needsOne: [a.tropical, a.gnome],
        powerFits: [a.tropical, a.gnome],
    },
    {
        name: 'Okra',
        landRange: [a.village, a.city],
        needsOne: [a.village, a.modest, a.halfling],
        powerFits: [a.village, a.modest, a.halfling],
    },
];

export const fruits: DescriptionAsset[] = [
    {
        name: 'Pineapple',
        landRange: [a.tropical],
        powerFits: [a.tropical],
        needsOne: [a.tropical, a.prostitute],
        worksForBrothel: true,
    },
    {
        name: 'Mango',
        landRange: [a.tropical],
        powerFits: [a.tropical],
        needsOne: [a.tropical],
    },
    {
        name: 'Banana',
        landRange: [a.tropical],
        powerFits: [a.tropical],
        needsOne: [a.tropical, a.prostitute],
        worksForBrothel: true,
    },
    {
        name: 'Lemon',
        needsOne: [a.tropical, a.village],
        powerFits: [a.tropical, a.village],
    },
    {
        name: 'Orange',
        landRange: [a.tropical],
        powerFits: [a.tropical],
        needsOne: [a.tropical],
    },
    {
        name: 'Papaya',
        landRange: [a.tropical],
        powerFits: [a.tropical],
        needsOne: [a.tropical],
    },
    {
        name: 'Watermelons',
        landRange: [a.tropical],
        powerFits: [a.tropical],
        needsOne: [a.tropical, a.prostitute],
        worksForBrothel: true,
    },
    {
        name: 'Apple',
        landRange: [a.forest, a.city, a.village],
        needsOne: [a.halfling, a.village, a.forest],
        powerFits: [a.halfling, a.village, a.forest],
        misfits: [a.rich],
    },
    {
        name: 'Plum',
        landRange: [a.forest, a.city, a.village],
        needsOne: [a.halfling, a.village, a.forest],
        powerFits: [a.halfling, a.village, a.forest],
        misfits: [a.rich],
    },
    {
        name: 'Pear',
        landRange: [a.forest, a.city, a.village],
        needsOne: [a.halfling, a.village, a.forest],
        powerFits: [a.halfling, a.village, a.forest],
        misfits: [a.rich],
    },
];
