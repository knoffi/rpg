import { association } from '../../../classes/association';
import { NameIdea } from '../../../classes/NameIdea';
import { NounIdea } from '../../../classes/NounIdea';
import { majesticBeasts, preyNormalAnimals } from './majesticBeasts';
import {
    criminalPredatorBeasts,
    honorfulPredatorBeasts,
} from './predatorBeasts';
import { weapons } from './weapons';

const a = association;

const SUBSTANTIVES_FOR_GOLD: NounIdea[] = [
    ...honorfulPredatorBeasts,
    ...criminalPredatorBeasts,
    ...weapons,
    ...majesticBeasts,
    ...preyNormalAnimals,
    { name: 'Temple', needsOne: [a.cleric] },
    { name: 'Mine', needsOne: [a.dwarf, a.underdark] },
    /*{ name: 'Temple', needsOne: [a.cleric] },
    { name: 'Mine', needsOne: [a.dwarf, a.underdark] },
    { name: 'Sun', needsOne: [a.knight, a.wealthy, a.cleric, a.elf] },
    { name: 'Cloud', needsOne: [a.wealthy, a.cleric, a.elf] },
    { name: 'Shield', needsOne: [a.knight, a.cleric, a.dwarf] },
    { name: 'Pyramid', needsOne: [a.desert, a.rich] },
    { name: 'Coconut', needs: [a.tropical] },
    { name: 'Monkey', needs: [a.tropical] },
    { name: 'Vulcano', needsOne: [a.tropical, a.tiefling] },
    { name: 'Banana', needs: [a.tropical, a.modest] },
    { name: 'Parrot', needsOne: [a.haven, a.rich, a.tropical, a.wizard] },
    {
        name: 'Web',
        needsOne: [a.drow, a.assasine, a.prostitute],
        worksForBrothel: true,
    },
    { name: 'Corn', needs: [a.village] },
    {
        name: 'Giant',
        needsOne: [a.adventurer, a.barbarian, a.bard, a.mountain],
    },
    { name: 'Flute', needs: [a.bard], worksForBrothel: true },
    { name: 'Drum', needs: [a.bard] },
    { name: 'Fire', needs: [a.tiefling] },
    {
        name: 'Horn',
        needsOne: [a.tiefling, a.forest, a.bard],
        worksForBrothel: true,
    },*/
    { name: 'Tooth', needs: [a.thief] },
    { name: 'Thighs', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Beaver', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Bust', needs: [a.prostitute], worksForBrothel: true },
    {
        name: 'Wench',
        needs: [a.prostitute],
        misfits: [a.rich],
        worksForBrothel: true,
    },
    { name: 'Concubine', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Succubus', needs: [a.prostitute], worksForBrothel: true },
    {
        name: 'Mistress',
        needsOne: [a.prostitute, a.drow],
        worksForBrothel: true,
    },
    { name: 'Shaft', needsOne: [a.prostitute], worksForBrothel: true },
    { name: 'Slit', needsOne: [a.prostitute], worksForBrothel: true },
    {
        name: 'Cowgirl',
        needs: [a.prostitute, a.village],
        worksForBrothel: true,
    },
    {
        name: 'Coin',
        needsOne: [a.city, a.village, a.haven],
        worksForBrothel: true,
    },
];
const moneyOrHonor = [a.rich, a.wealthy, a.knight, a.cleric];
export const materials: NameIdea[] = [
    new NameIdea(
        {
            name: 'Golden',
            misfits: [a.poor],
            worksForThiefs: true,
            worksForBrothel: true,
            worksForAssasines: true,
            needs: [a.dwarf, a.mountain, a.gnome],
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Iridium',
            misfits: [a.prostitute, a.poor],
            worksForAssasines: true,
            worksForThiefs: true,
            landRange: [a.mountain],
            incomeRange: [],
            fitsTo: [a.modest, a.wizard],
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Silver',
            misfits: [a.poor],
            worksForThiefs: true,
            worksForBrothel: true,
            worksForAssasines: true,
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Ivory',
            needsOne: [a.rich, a.wealthy, a.cleric, a.wizard, a.elf],
            worksForThiefs: true,
            worksForBrothel: true,
            worksForAssasines: true,
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Marble',
            needsOne: [a.rich, a.wealthy, a.cleric, a.wizard, a.dwarf],
            worksForThiefs: true,
            worksForBrothel: true,
            worksForAssasines: true,
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Copper',
            misfits: [a.rich, a.wealthy],
            worksForThiefs: true,
            worksForBrothel: true,
            worksForAssasines: true,
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea({ name: 'Brass', misfits: [a.rich] }, SUBSTANTIVES_FOR_GOLD),
    new NameIdea(
        { name: 'Iron', misfits: [a.rich, a.wealthy] },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Oaken',
            misfits: moneyOrHonor,
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Red',
            misfits: moneyOrHonor,
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Black',
            misfits: moneyOrHonor,
            worksForThiefs: true,
            worksForAssasines: true,
        },
        [{ name: 'Sheep', worksForBrothel: true, worksForThiefs: true }]
    ),
    new NameIdea(
        {
            name: 'Rusty',
            misfits: moneyOrHonor,
            worksForThiefs: true,
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Tin',
            misfits: moneyOrHonor,
            worksForThiefs: true,
            worksForAssasines: true,
        },
        SUBSTANTIVES_FOR_GOLD
    ),
];
