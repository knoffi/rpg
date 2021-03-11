import { association } from '../../../classes/association';
import { NounIdea } from '../../../classes/NounIdea';
const a = association;
// beasts that lords would choose on their banner
// NOTE: if you wanna combine them for humor effects (f.e. "The Whiny Dragon"), then "poor" should not be a misfit
export const majesticBeasts: NounIdea[] = [
    { name: 'Lion', needsOne: [a.nobel, a.rich, a.sophisticated] },
    {
        name: 'Gryphon',
        needsOne: [a.nobel, a.rich, a.sophisticated, a.adventurer, a.wizard],
    },
    {
        name: 'Swan',
        needsOne: [a.nobel, a.rich, a.sophisticated, a.adventurer, a.wizard],
        misfits: [a.barbarian, a.dragonborn],
    },
    {
        name: 'Sphinx',
        needsOne: [a.desert, a.adventurer, a.wizard],
        misfits: [a.barbarian, a.dragonborn],
    },
    {
        name: 'Beholder',
        needsOne: [a.underdark, a.adventurer, a.wizard],
    },
    {
        name: 'Eagle',
        needsOne: [a.elf, a.mountain],
    },
    {
        name: 'Kraken',
        needs: [a.haven],
        needsOne: [a.nobel, a.rich, a.sophisticated, a.adventurer],
    },
    {
        name: 'Whale',
        needs: [a.haven],
        needsOne: [a.nobel, a.rich, a.sophisticated],
    },
    {
        name: 'Leviathan',
        needs: [a.haven],
        needsOne: [a.nobel, a.sophisticated],
    },
    {
        name: 'Octopus',
        needs: [a.haven],
        needsOne: [a.sophisticated, a.worker, a.bard],
    },
    { name: 'Tiger', needsOne: [a.tropical, a.city] },
    {
        name: 'Pheasant',
        needsOne: [a.forest, a.sophisticated, a.druid, a.bard],
        misfits: [a.underdark, a.tropical, a.desert, a.haven],
    },
    {
        name: 'Manticore',
        misfits: [a.underdark, a.village, a.forest],
    },
    {
        name: 'Hydra',
        misfits: [a.underdark, a.village, a.worker],
    },
    {
        name: 'Dragon',
    },
    {
        name: 'Falcon',
        misfits: [a.underdark, a.haven, a.worker, a.forest],
    },
    {
        name: 'Stallion',
        misfits: [a.underdark, a.haven],
    },
    {
        name: 'Bull',
        misfits: [a.underdark, a.haven],
    },
    {
        name: 'Unicorn',
        needsOne: [a.wizard, a.elf, a.adventurer],
    },
    {
        name: 'Centaur',
        needsOne: [a.wizard, a.adventurer, a.barbarian, a.bard],
        misfits: [a.underdark, a.haven],
    },
];

export const preyTinyAnimals: NounIdea[] = [
    { name: 'Mouse', worksForThiefs: true, incomeRange: [a.poor, a.worker] },
    { name: 'Rat', worksForThiefs: true, incomeRange: [a.poor, a.worker] },
    {
        name: 'Squirrel',
        incomeRange: [a.poor, a.worker],
        landRange: [a.forest, a.village],
    },
    {
        name: 'Butterfly',
        incomeRange: [a.poor, a.worker],
        landRange: [a.forest, a.village],
    },
    {
        name: 'Rabbit',
        incomeRange: [a.poor, a.worker],
        landRange: [a.forest, a.village],
    },
    {
        name: 'Earth Worm',
        needs: [a.underdark, a.poor],
    },
];

export const preyNormalAnimals: NounIdea[] = [
    {
        name: 'Moose',
        incomeRange: [a.poor, a.worker],
        landRange: [a.mountain, a.forest, a.village],
    },
    {
        name: 'Beaver',
        worksForBrothel: true,
        incomeRange: [a.poor, a.worker],
        landRange: [a.forest],
    },
    {
        name: 'Salmon',
        incomeRange: [a.sophisticated, a.worker],
        landRange: [a.haven, a.village, a.city],
    },
    {
        name: 'Pony',
        incomeRange: [a.poor, a.worker],
        landRange: [a.village, a.city],
    },
    {
        name: 'Lamb',
        incomeRange: [a.poor, a.worker],
        landRange: [a.village, a.desert, a.mountain],
    },
    {
        name: 'Crow',
        incomeRange: [a.poor, a.worker],
        landRange: [a.forest, a.village, a.city],
        worksForThiefs: true,
    },
    {
        name: 'Raven',
        worksForAssasines: true,
        worksForThiefs: true,
        incomeRange: [a.poor, a.worker],
        landRange: [a.forest, a.village, a.city],
    },
    {
        name: 'Sheep',
        incomeRange: [a.poor, a.worker],
        landRange: [a.village, a.mountain],
    },
    {
        name: 'Monkey',
        incomeRange: [a.poor, a.worker],
        needsOne: [a.tropical, a.desert],
    },
    {
        name: 'Parrot',
        incomeRange: [a.poor, a.worker],
        needsOne: [a.tropical, a.haven],
    },
    {
        name: 'Anchovy',
        needs: [a.haven, a.poor],
    },
    {
        name: 'Shrimp',
        needs: [a.haven, a.worker],
    },
    {
        name: 'Lobster',
        needs: [a.haven],
        needsOne: [a.sophisticated, a.rich],
    },
    {
        name: 'Oyster',
        needs: [a.haven],
        needsOne: [a.sophisticated, a.rich],
    },
    {
        name: 'Mole',
        needs: [a.underdark, a.worker],
    },
];
