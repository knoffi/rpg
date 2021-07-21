import { association } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/idea/DescriptionAsset';
import { evilHumanoids } from './evilHumanoids';
import { fruits, vegetables } from './fruitsVegetables';
import { femaleGenitals, maleGenitals, sexyParts } from './genitals';
import { instruments } from './instruments';
import { brothelJobs, noblesAndTitles } from './jobs';
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
export const NON_HUMAN_SUBSTANTIVES_FOR_GOLD: DescriptionAsset[] = [
    ...honorfulPredatorBeasts,
    ...criminalPredatorBeasts,
    ...weapons,
    ...majesticBeasts,
    ...preyNormalAnimals,
    ...preyTinyAnimals,
    ...tools,
    ...instruments,
    ...fruits,
    ...vegetables,
    ...evilHumanoids,
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
export const SUBSTANTIVES_FOR_GOLD: DescriptionAsset[] = [
    ...NON_HUMAN_SUBSTANTIVES_FOR_GOLD,
    ...noblesAndTitles,
    ...sexyParts,
    ...maleGenitals,
    ...femaleGenitals,
    ...brothelJobs,
];
