import { association } from '../../../classes/association';
import { NameIdea } from '../../../classes/idea/NameIdea';
import {
    NON_HUMAN_SUBSTANTIVES_FOR_GOLD,
    SUBSTANTIVES_FOR_GOLD,
} from './NON_HUMAN_SUBSTANTIVES_FOR_GOLD';

export const a = association;
const moneyOrHonor = [a.rich, a.wealthy, a.knight, a.cleric];
export const materials: NameIdea[] = [
    new NameIdea(
        {
            name: 'Golden',
            misfits: [a.poor],
            worksForAllCriminals: true,
        },
        SUBSTANTIVES_FOR_GOLD
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
        SUBSTANTIVES_FOR_GOLD
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
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea({ name: 'Brass', misfits: [a.rich] }, SUBSTANTIVES_FOR_GOLD),
    new NameIdea(
        {
            name: 'Iron',
            misfits: [a.rich, a.wealthy, a.druid, a.desert, a.tropical],
            worksForAssasines: true,
            worksForThiefs: true,
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
            worksForAllCriminals: true,
        },
        SUBSTANTIVES_FOR_GOLD
    ),
    new NameIdea(
        {
            name: 'Purple',
            worksForAllCriminals: true,
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
            ...NON_HUMAN_SUBSTANTIVES_FOR_GOLD,
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
