import { association } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/idea/DescriptionAsset';
import { evilHumanoids } from './substantives/evilHumanoids';
import { fruits, vegetables } from './substantives/fruitsVegetables';
import { instruments } from './substantives/instruments';
import { noblesAndTitles } from './substantives/jobs';
import { majesticBeasts } from './substantives/majesticBeasts';
import {
    criminalPredatorBeasts,
    honorfulPredatorBeasts,
} from './substantives/predatorBeasts';
import { preyNormalAnimals } from './substantives/preyNormalAnimals';
import { preyTinyAnimals } from './substantives/preyTinyAnimals';
import { substantives } from './substantives/substantives';
import { tools } from './substantives/tools';
import { weapons } from './substantives/weapons';

const a = association;
export const NON_HUMAN_SUBSTANTIVES_FOR_GOLD: DescriptionAsset[] = [
    ...honorfulPredatorBeasts,
    ...criminalPredatorBeasts,
    ...majesticBeasts,
    ...preyNormalAnimals,
    ...preyTinyAnimals,
    ...weapons,
    ...tools,
    ...instruments,
    ...fruits,
    ...vegetables,
    ...evilHumanoids,
    { name: 'Temple', needsOne: [a.cleric] },
    {
        name: 'Mine',
        needsOne: [a.dwarf, a.underdark],
        raceRange: [a.dwarf, a.gnome],
    },
    {
        name: 'Harem',
        needs: [a.prostitute],
        needsOne: [a.desert, a.rich],
        worksForBrothel: true,
    },
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
    ...substantives.allJobs,
    ...substantives.legsAssBreasts,
    ...substantives.femaleGenitals,
    ...substantives.maleGenitals,
    ...substantives.church,
    ...substantives.adventurers,
    ...substantives.warriors,
    ...substantives.races,
];
