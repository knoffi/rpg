import { association } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/DescriptionAsset';
const a = association;
export const artisanJobs: DescriptionAsset[] = [
    {
        name: 'Tunnel Digger',
        incomeRange: [a.modest, a.poor],
        strongNeedsOne: [a.underdark, a.thief],
        worksForThiefs: true,
    },
    {
        name: 'Miner',
        incomeRange: [a.modest, a.poor],
        strongNeedsOne: [a.underdark, a.thief],
        worksForThiefs: true,
    },
    {
        name: 'Undertaker',
        incomeRange: [a.modest, a.poor, a.wealthy],
        needsOne: [a.underdark, a.assasine],
        worksForAssasines: true,
    },
    {
        name: 'Tailor',
        incomeRange: [a.modest, a.poor, a.wealthy],
        needsOne: [a.village, a.city],
    },
    {
        name: 'Cobbler',
        incomeRange: [a.modest, a.poor],
        needsOne: [a.village, a.city],
    },
    {
        name: 'Potter',
        incomeRange: [a.modest, a.poor],
        needsOne: [a.village, a.city],
    },
    {
        name: 'Plummer',
        incomeRange: [a.modest, a.poor],
        needsOne: [a.village, a.haven],
    },
    {
        name: 'Blacksmith',
        incomeRange: [a.modest, a.poor, a.wealthy],
        needsOne: [a.village, a.city],
    },
    {
        name: 'Jeweler',
        incomeRange: [a.rich, a.wealthy],
        needsOne: [a.desert, a.city],
    },
    {
        name: 'Carpet Weaver',
        incomeRange: [a.wealthy, a.rich],
        needsOne: [a.desert, a.city],
    },
    {
        name: 'Silk Tailor',
        incomeRange: [a.wealthy, a.rich],
        needsOne: [a.desert, a.city, a.tropical],
    },

    {
        name: 'Priest',
        incomeRange: [a.wealthy, a.poor, a.modest],
        needsOne: [a.cleric, a.village, a.desert],
        classRange: [a.cleric],
    },
    {
        name: 'Monk',
        incomeRange: [a.wealthy, a.poor, a.modest],
        needsOne: [a.cleric, a.village],
        classRange: [a.cleric],
    },
    { name: 'Judge', incomeRange: [a.wealthy], needsOne: [a.city] },
    { name: 'Doctor', incomeRange: [a.wealthy], needsOne: [a.city] },
    { name: 'Advocate', incomeRange: [a.wealthy], needsOne: [a.city] },
    { name: 'Lawyer', incomeRange: [a.wealthy], needsOne: [a.city] },
    {
        name: 'Merchant',
        strongNeedsOne: [a.wealthy, a.rich, a.city, a.haven],
    },
    {
        name: 'Alchemist',
        incomeRange: [a.wealthy, a.modest],
        needsOne: [a.desert, a.wizard],
    },
    {
        name: 'Astronomer',
        incomeRange: [a.wealthy, a.modest],
        needsOne: [a.desert, a.wizard],
    },
    {
        name: 'Wench',
        needs: [a.prostitute],
        needsOne: [a.haven, a.village],
        worksForBrothel: true,
    },
    {
        name: 'Mistress',
        needs: [a.prostitute],
        needsOne: [a.drow, a.city, a.haven],
        worksForBrothel: true,
    },
    {
        name: 'Lust Slave',
        needs: [a.prostitute],
        needsOne: [a.drow],
        worksForBrothel: true,
    },
    {
        name: 'Concubine',
        needs: [a.prostitute],
        incomeRange: [a.rich, a.wealthy],
        needsOne: [a.drow],
        worksForBrothel: true,
    },
    {
        name: 'Domina',
        needs: [a.prostitute],
        needsOne: [a.drow, a.city, a.haven],
        worksForBrothel: true,
    },
    {
        name: 'Succubus',
        needs: [a.prostitute],
        misfits: [a.drow, a.cleric, a.haven],
        worksForBrothel: true,
    },
    {
        name: 'Cowgirl',
        needs: [a.prostitute],
        landRange: [a.village, a.mountain],
        worksForBrothel: true,
    },
    {
        name: 'Milkmaid',
        needs: [a.prostitute],
        landRange: [a.village, a.mountain],
        worksForBrothel: true,
    },
    {
        name: 'Maiden',
        needs: [a.prostitute],
        misfits: [a.drow],
        worksForBrothel: true,
    },
    { name: 'Harlot', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Strumpet', needs: [a.prostitute], worksForBrothel: true },
    {
        name: 'Masseuse',
        needs: [a.prostitute, a.tropical],
        worksForBrothel: true,
    },
    {
        name: 'Belly Dancer',
        needs: [a.prostitute, a.desert],
        worksForBrothel: true,
    },
    { name: 'Dancer', needs: [a.prostitute], worksForBrothel: true },
    {
        name: 'Gigolo',
        needs: [a.prostitute],
        needsOne: [a.drow, a.rich],
        incomeRange: [a.rich, a.wealthy],
        worksForBrothel: true,
    },
    { name: 'Nurse', needs: [a.prostitute, a.city], worksForBrothel: true },
    {
        name: 'Firefighter',
        needs: [a.prostitute, a.city],
        worksForBrothel: true,
    },
];

export const gastronomyJobs: DescriptionAsset[] = [
    {
        name: 'Barmaid',
        incomeRange: [a.poor, a.modest],
        misfits: [a.desert, a.drow],
        worksForBrothel: true,
    },
    {
        name: 'Bartender',
        incomeRange: [a.wealthy, a.rich],
        misfits: [a.desert],
    },
    { name: 'Cook', incomeRange: [a.modest, a.poor] },
    { name: 'Chef', incomeRange: [a.wealthy, a.rich] },
    {
        name: 'Barkeeper',
        incomeRange: [a.wealthy, a.rich],
        misfits: [a.desert],
    },
    {
        name: 'Baker',
        incomeRange: [a.modest, a.poor],
        needsOne: [a.village, a.city],
    },
    {
        name: 'Brewer',
        incomeRange: [a.modest, a.poor],
        strongNeedsOne: [
            a.village,
            a.city,
            a.mountain,
            a.forest,
            a.dwarf,
            a.gnome,
            a.halfling,
            a.human,
        ],
        misfits: [a.desert],
    },
    {
        name: 'Butcher',
        incomeRange: [a.modest, a.poor],
        strongNeedsOne: [
            a.village,
            a.city,
            a.mountain,
            a.forest,
            a.dwarf,
            a.gnome,
            a.halfling,
            a.human,
        ],
        worksForAssasines: true,
    },
    {
        name: 'Innkeeper',
        incomeRange: [a.modest, a.poor, a.wealthy],
        misfits: [a.desert, a.haven],
    },
    {
        name: 'Host',
        incomeRange: [a.modest, a.poor, a.wealthy],
        misfits: [a.haven],
    },
    {
        name: 'Fishmonger',
        incomeRange: [a.modest, a.poor],
        needs: [a.haven, a.city],
    },
];

export const noblesAndTitles: DescriptionAsset[] = [
    {
        name: 'Sheikh',
        incomeRange: [a.wealthy, a.rich],
        needs: [a.desert],
        misfits: [a.drow],
    },
    {
        name: 'Sultan',
        incomeRange: [a.wealthy, a.rich],
        needs: [a.desert],
        misfits: [a.drow],
    },
    { name: 'Pharao', incomeRange: [a.wealthy, a.rich], needs: [a.desert] },
    { name: 'Mummy', incomeRange: [a.modest, a.poor], needs: [a.desert] },
    {
        name: 'Vizier',
        incomeRange: [a.wealthy, a.rich],
        needs: [a.desert],
        misfits: [a.barbarian],
    },
    {
        name: 'Chancellor',
        strongNeedsOne: [a.wealthy, a.city],
        misfits: [a.barbarian],
    },
    {
        name: 'Lord',
        incomeRange: [a.wealthy, a.rich],
        misfits: [a.drow, a.barbarian],
    },
    {
        name: 'Admiral',
        needs: [a.haven],
        incomeRange: [a.wealthy, a.rich],
        misfits: [a.drow, a.barbarian],
    },
    {
        name: 'Knight',
        incomeRange: [a.wealthy, a.modest],
        misfits: [a.drow, a.barbarian],
    },
    {
        name: 'King',
        incomeRange: [a.wealthy, a.rich, a.modest],
        landRange: [a.forest, a.mountain, a.city, a.village],
        misfits: [a.drow],
    },
    { name: 'Queen', needsOne: [a.rich, a.wealthy, a.knight] },
    {
        name: 'Prince',
        needsOne: [a.rich, a.wealthy, a.knight],
        misfits: [a.drow, a.barbarian],
    },
    { name: 'Princess', needsOne: [a.rich, a.wealthy, a.knight] },
    {
        name: 'Earl',
        incomeRange: [a.wealthy, a.rich],
        landRange: [a.forest, a.mountain, a.city, a.village],
        misfits: [a.barbarian, a.drow],
    },
    {
        name: 'Countess',
        incomeRange: [a.wealthy, a.rich],
        landRange: [a.forest, a.mountain, a.city, a.village],
        misfits: [a.barbarian],
    },
    {
        name: 'Duchess',
        incomeRange: [a.wealthy, a.rich],
        landRange: [a.forest, a.mountain, a.city, a.village],
        misfits: [a.barbarian],
    },
    {
        name: 'Emperor',
        incomeRange: [a.wealthy, a.rich, a.modest],
        needsOne: [a.desert, a.tropical, a.underdark, a.haven],
        misfits: [a.drow, a.barbarian],
    },
];
