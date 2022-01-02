import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
const a = association;
export const artisanJobs: DescriptionAsset[] = [
    {
        name: 'Tunnel Digger',
        incomeRange: [a.modest, a.poor],
        strongNeedsOne: [a.underdark, a.thief],
        worksForThiefs: true,
        powerFits: [a.modest, a.dwarf, a.gnome],
        classRange: [],
    },
    {
        name: 'Miner',
        incomeRange: [a.modest, a.poor],
        strongNeedsOne: [a.underdark, a.thief],
        powerFits: [a.modest, a.dwarf, a.gnome],
        classRange: [],
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
        powerFits: [a.modest, a.city],
    },
    {
        name: 'Cobbler',
        incomeRange: [a.modest, a.poor],
        needsOne: [a.village, a.city],
        powerFits: [a.modest, a.city],
        classRange: [],
    },
    {
        name: 'Potter',
        incomeRange: [a.modest, a.poor],
        needsOne: [a.village, a.city],
        powerFits: [a.modest, a.village],
        classRange: [],
    },
    {
        name: 'Plummer',
        incomeRange: [a.modest, a.poor],
        needsOne: [a.village, a.city],
        powerFits: [a.modest, a.city],
        classRange: [],
    },
    {
        name: 'Blacksmith',
        incomeRange: [a.modest, a.poor, a.wealthy],
        needsOne: [a.village, a.city],
        powerFits: [a.modest, a.city, a.dwarf],
    },
    {
        name: 'Jeweler',
        incomeRange: [a.rich, a.wealthy],
        needsOne: [a.desert, a.city],
        powerFits: [a.wealthy, a.gnome],
        classRange: [],
    },
    {
        name: 'Carpet Weaver',
        incomeRange: [a.wealthy, a.rich],
        needsOne: [a.desert, a.city],
        powerFits: [a.desert],
    },
    {
        name: 'Silk Tailor',
        incomeRange: [a.wealthy, a.rich],
        needsOne: [a.desert, a.tropical],
        powerFits: [a.tropical, a.wealthy, a.desert],
    },

    {
        name: 'Priest',
        incomeRange: [a.wealthy, a.poor, a.modest],
        needsOne: [a.cleric, a.village, a.desert],
        classRange: [a.cleric],
        powerFits: [a.cleric],
    },
    {
        name: 'Monk',
        incomeRange: [a.wealthy, a.poor, a.modest],
        needsOne: [a.cleric, a.village],
        classRange: [a.cleric],
        powerFits: [a.cleric],
    },
    {
        name: 'Judge',
        incomeRange: [a.wealthy],
        landRange: [a.city],
        powerFits: [a.wealthy, a.city, a.human],
        classRange: [],
    },
    {
        name: 'Doctor',
        incomeRange: [a.wealthy],
        landRange: [a.city],
        powerFits: [a.wealthy],
        classRange: [],
    },
    {
        name: 'Advocate',
        incomeRange: [a.wealthy],
        landRange: [a.city],
        powerFits: [a.wealthy, a.city],
        classRange: [],
    },
    {
        name: 'Lawyer',
        incomeRange: [a.wealthy],
        landRange: [a.city],
        powerFits: [a.wealthy, a.city, a.gnome],
        classRange: [],
    },
    {
        name: 'Merchant',
        landRange: [a.city, a.haven],
        incomeRange: [a.wealthy],
        powerFits: [a.wealthy, a.city],
        classRange: [],
    },
    {
        name: 'Alchemist',
        incomeRange: [a.wealthy, a.modest],
        needsOne: [a.desert, a.wizard],
        powerFits: [a.wizard, a.desert],
    },
    {
        name: 'Astronomer',
        incomeRange: [a.wealthy, a.modest],
        needsOne: [a.desert, a.wizard],
        powerFits: [a.wizard, a.desert],
    },
    {
        name: 'Fishmonger',
        incomeRange: [a.modest, a.poor],
        needsOne: [a.haven, a.city],
        powerFits: [a.haven, a.modest],
        classRange: [],
    },
    {
        name: 'Brewer',
        incomeRange: [a.modest, a.poor],
        landRange: [a.village, a.city, a.mountain, a.forest],
        raceRange: [a.dwarf, a.gnome, a.halfling, a.human],

        misfits: [a.desert],
        powerFits: [a.dwarf, a.modest],
    },
    {
        name: 'Butcher',
        incomeRange: [a.modest, a.poor],
        landRange: [a.village, a.city, a.mountain, a.forest],
        raceRange: [a.dwarf, a.human],
        classRange: [a.barbarian],
        worksForAssasines: true,
        powerFits: [a.barbarian, a.modest],
    },
];

export const brothelJobs: DescriptionAsset[] = [
    {
        name: 'Wench',
        needs: [a.prostitute],
        needsOne: [a.haven, a.village],
        misfits: [a.rich, a.drow],
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
        needsOne: [a.drow, a.city, a.haven],
        worksForBrothel: true,
    },
    {
        name: 'Concubine',
        needs: [a.prostitute],
        incomeRange: [a.rich, a.wealthy],
        misfits: [a.drow],
        worksForBrothel: true,
    },
    {
        name: 'Domina',
        needs: [a.prostitute],
        needsOne: [a.drow, a.city],
        worksForBrothel: true,
    },
    {
        name: 'Succubus',
        needs: [a.prostitute],
        misfits: [a.drow, a.cleric],
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
];

export const gastronomyJobs: DescriptionAsset[] = [
    {
        name: 'Barmaid',
        incomeRange: [a.poor, a.modest],
        misfits: [a.desert, a.drow],
        worksForBrothel: true,
        powerFits: [a.bard, a.adventurer],
    },
    {
        name: 'Bartender',
        incomeRange: [a.wealthy, a.rich],
        misfits: [a.desert],
        powerFits: [a.modest, a.adventurer],
    },
    { name: 'Cook', incomeRange: [a.modest, a.poor], powerFits: [a.modest] },
    { name: 'Chef', incomeRange: [a.wealthy, a.rich], powerFits: [a.wealthy] },
    {
        name: 'Barkeeper',
        incomeRange: [a.wealthy, a.rich],
        misfits: [a.desert],
        powerFits: [a.human, a.modest],
    },
    {
        name: 'Baker',
        incomeRange: [a.modest, a.poor],
        needsOne: [a.village, a.city],
        powerFits: [a.halfling, a.modest],
    },
    {
        name: 'Innkeeper',
        incomeRange: [a.modest, a.poor, a.wealthy],
        misfits: [a.desert, a.haven],
        powerFits: [a.human, a.modest],
    },
    {
        name: 'Host',
        incomeRange: [a.modest, a.poor, a.wealthy],
        misfits: [a.haven],
        powerFits: [a.human, a.modest],
    },
];

export const noblesAndTitles: DescriptionAsset[] = [
    {
        name: 'Sheikh',
        incomeRange: [a.wealthy, a.rich],
        needs: [a.desert],
        misfits: [a.drow],
        powerFits: [a.desert, a.rich],
    },
    {
        name: 'Sultan',
        incomeRange: [a.wealthy, a.rich],
        needs: [a.desert],
        misfits: [a.drow],
        powerFits: [a.desert, a.rich],
    },
    {
        name: 'Pharao',
        incomeRange: [a.wealthy, a.rich],
        needs: [a.desert],
        powerFits: [a.desert, a.rich],
    },
    {
        name: 'Mummy',
        incomeRange: [a.modest, a.poor],
        needs: [a.desert],
        powerFits: [a.desert, a.adventurer],
    },
    {
        name: 'Vizier',
        incomeRange: [a.wealthy, a.rich],
        needs: [a.desert],
        misfits: [a.barbarian],
        powerFits: [a.desert, a.wealthy],
    },
    {
        name: 'Chancellor',
        incomeRange: [a.wealthy],
        landRange: [a.city],
        misfits: [a.barbarian],
        powerFits: [a.wealthy, a.city],
    },
    {
        name: 'Lord',
        incomeRange: [a.wealthy, a.rich],
        misfits: [a.drow, a.barbarian],
        powerFits: [a.knight, a.wealthy],
    },
    {
        name: 'Bishop',
        incomeRange: [a.wealthy, a.rich],
        misfits: [a.drow, a.barbarian],
        classRange: [a.cleric],
        powerFits: [a.knight, a.wealthy],
    },
    {
        name: 'High Priest',
        incomeRange: [a.wealthy, a.rich],
        classRange: [a.cleric],
        powerFits: [a.knight, a.wealthy],
    },
    {
        name: 'Admiral',
        needs: [a.haven],
        incomeRange: [a.wealthy, a.rich],
        misfits: [a.drow, a.barbarian],
        powerFits: [a.haven, a.wealthy],
    },
    {
        name: 'Knight',
        incomeRange: [a.wealthy, a.modest],
        misfits: [a.drow],
        classRange: [a.knight, a.adventurer],
        powerFits: [a.knight],
    },
    {
        name: 'King',
        incomeRange: [a.wealthy, a.rich, a.modest],
        landRange: [a.forest, a.mountain, a.city, a.village],
        misfits: [a.drow],
        powerFits: [a.rich],
    },
    {
        name: 'Queen',
        needsOne: [a.rich, a.wealthy, a.knight],
        powerFits: [a.rich],
    },
    {
        name: 'Prince',
        needsOne: [a.rich, a.wealthy, a.knight],
        misfits: [a.drow, a.barbarian],
        powerFits: [a.rich, a.wealthy],
    },
    {
        name: 'Princess',
        needsOne: [a.rich, a.wealthy, a.knight],
        powerFits: [a.rich, a.wealthy],
    },
    {
        name: 'Earl',
        incomeRange: [a.wealthy, a.rich],
        landRange: [a.forest, a.mountain, a.city, a.village],
        misfits: [a.barbarian, a.drow],
        powerFits: [a.rich, a.wealthy],
    },
    {
        name: 'Countess',
        incomeRange: [a.wealthy, a.rich],
        landRange: [a.forest, a.mountain, a.city, a.village],
        misfits: [a.barbarian],
        powerFits: [a.rich, a.wealthy],
    },
    {
        name: 'Duchess',
        incomeRange: [a.wealthy, a.rich],
        landRange: [a.forest, a.mountain, a.city, a.village],
        misfits: [a.barbarian],
        powerFits: [a.rich, a.wealthy],
    },
    {
        name: 'Emperor',
        incomeRange: [a.wealthy, a.rich, a.modest],
        needsOne: [a.desert, a.tropical, a.underdark, a.haven],
        misfits: [a.drow, a.barbarian],
        powerFits: [a.rich],
    },
];

export const allJobs = [
    ...artisanJobs,
    ...brothelJobs,
    ...gastronomyJobs,
    ...noblesAndTitles,
];
