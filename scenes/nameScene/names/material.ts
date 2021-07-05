import { association } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/idea/DescriptionAsset';
import { NameIdea } from '../../../classes/idea/NameIdea';
import { femaleGenitals, maleGenitals, sexyParts } from './genitals';
import { instruments } from './instruments';
import { artisanJobs } from './jobs';
import { majesticBeasts } from './majesticBeasts';
import {
    criminalPredatorBeasts,
    honorfulPredatorBeasts,
} from './predatorBeasts';
import { preyNormalAnimals } from './preyNormalAnimals';
import { preyTinyAnimals } from './preyTinyAnimals';
import { tools } from './tools';
import { weapons } from './weapons';

const a = association;

const SUBSTANTIVES_FOR_GOLD: DescriptionAsset[] = [
    ...honorfulPredatorBeasts,
    ...criminalPredatorBeasts,
    ...weapons,
    ...majesticBeasts,
    ...preyNormalAnimals,
    ...sexyParts,
    ...preyTinyAnimals,
    ...maleGenitals,
    ...femaleGenitals,
    ...tools,
    ...instruments,
    { name: 'Temple', needsOne: [a.cleric] },
    { name: 'Mine', needsOne: [a.dwarf, a.underdark] },
    { name: 'Harem', needs: [a.prostitute], worksForBrothel: true },
    /*{ name: 'Temple', needsOne: [a.cleric] },
    { name: 'Mine', needsOne: [a.dwarf, a.underdark] },
    { name: 'Sun', needsOne: [a.knight, a.wealthy, a.cleric, a.elf] },
    { name: 'Cloud', needsOne: [a.wealthy, a.cleric, a.elf] },
    { name: 'Pyramid', needsOne: [a.desert, a.rich] },
    { name: 'Coconut', needs: [a.tropical] },
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
    { name: 'Fire', needs: [a.tiefling] },
    */
    { name: 'Tooth', needs: [a.thief] },
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
            worksForAllCriminals: true,
        },
        [...SUBSTANTIVES_FOR_GOLD, ...artisanJobs]
    ),
    new NameIdea(
        {
            name: 'Iridium',
            misfits: [a.prostitute, a.poor],
            worksForAllCriminals: true,
            landRange: [a.mountain, a.underdark],
            needs: [a.dwarf],
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Silver',
            misfits: [a.poor],
            worksForAllCriminals: true,
        },
        [...SUBSTANTIVES_FOR_GOLD, ...artisanJobs]
    ),
    new NameIdea(
        {
            name: 'Ivory',
            needsOne: [a.rich, a.wealthy, a.cleric, a.wizard, a.elf],
            worksForAllCriminals: true,
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Marble',
            needsOne: [a.rich, a.wealthy, a.cleric, a.wizard, a.dwarf],
            worksForAllCriminals: true,
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Copper',
            misfits: [a.rich, a.wealthy],
            worksForAllCriminals: true,
        },
        [...SUBSTANTIVES_FOR_GOLD, ...artisanJobs]
    ),
    new NameIdea({ name: 'Brass', misfits: [a.rich] }, SUBSTANTIVES_FOR_GOLD),
    new NameIdea(
        {
            name: 'Iron',
            misfits: [a.rich, a.wealthy, a.druid, a.desert, a.tropical],
        },
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
        [
            { name: 'Sheep', worksForBrothel: true, worksForThiefs: true },
            ...SUBSTANTIVES_FOR_GOLD,
        ]
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
