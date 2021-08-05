import { association } from '../../../../classes/association';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';
const a = association;
export const bartenderOpinions: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'Dislikes ', worksForAllCriminals: true },
        [
            {
                name: 'male guests',
                powerFits: [a.drow],
            },
            {
                name: 'female guests',
                powerFits: [a.desert],
            },
            {
                name: 'dwarves',
                powerFits: [a.elf],
                misfits: [a.human, a.dwarf, a.gnome],
            },
            {
                name: 'elves',
                powerFits: [a.dwarf],
                misfits: [a.human, a.elf, a.halfling],
            },
            {
                name: 'barbarians',
                powerFits: [a.wizard, a.rich],
                misfits: [a.barbarian, a.adventurer, a.soldier],
            },
            {
                name: 'humans',
                misfits: [a.human],
            },
            {
                name: 'arcane magic',
                misfits: [a.wizard],
                powerFits: [a.cleric, a.knight, a.barbarian],
            },
            {
                name: 'tieflings',
                powerFits: [a.cleric, a.human],
                misfits: [a.tiefling],
            },
            {
                name: 'drows',
                powerFits: [a.elf, a.dwarf, a.gnome, a.human],
                misfits: [a.drow],
            },
            {
                name: 'small guests',
                powerFits: [a.barbarian],
                misfits: [a.halfling, a.gnome],
            },
            {
                name: 'poachers and trophy hunters',
                powerFits: [a.druid, a.forest],
            },
            {
                name: 'unpolite guests',
                powerFits: [a.rich, a.wealthy, a.cleric],
            },
            {
                name: 'guests without honor',
                powerFits: [a.knight, a.wealthy],
            },
            {
                name: 'poor-looking guests',
                powerFits: [a.wealthy, a.rich],
                misfits: [a.poor],
            },
            {
                name: 'fancy-dressed guests',
                powerFits: [
                    a.cleric,
                    a.modest,
                    a.knight,
                    a.soldier,
                    a.barbarian,
                ],
                misfits: [a.rich],
            },
            {
                name: 'uncultivated guests',
                powerFits: [a.wealthy, a.rich, a.knight],
                misfits: [a.poor, a.barbarian, a.soldier],
            },
            {
                name: 'guests without manners',
                powerFits: [a.wealthy, a.rich, a.knight],
                misfits: [a.poor, a.barbarian, a.soldier],
            },
            {
                name: 'weak-looking guests',
                powerFits: [a.barbarian, a.soldier, a.knight, a.assasine],
                misfits: [a.wizard, a.druid],
            },
            {
                name: 'beardy guests',
                powerFits: [a.elf, a.bard],
                misfits: [a.dwarf, a.barbarian],
            },
            {
                name: 'rich-looking guests',
                powerFits: [a.poor, a.modest, a.cleric],
                misfits: [a.wealthy, a.rich],
            },
            {
                name: 'foreigners',
                powerFits: [a.village, a.desert],
                misfits: [a.haven],
            },
            {
                name: 'adventurers',
                classRange: [],
                powerFits: [a.rich, a.wealthy],
            },
            {
                name: 'weapons in his tavern',
                classRange: [],
                powerFits: [a.modest, a.wealthy, a.poor],
            },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony
    ),
    new ImpressionIdea(
        { name: 'Very friendly to ', worksForAllCriminals: true },
        [
            {
                name: 'male guests',
                misfits: [a.drow],
                powerFits: [a.desert],
            },
            {
                name: 'female guests',
                powerFits: [a.bard],
            },
            {
                name: 'beardy guests',
                powerFits: [a.dwarf, a.wizard],
                misfits: [a.elf],
            },
            {
                name: 'well-dressed guests',
                powerFits: [a.elf, a.bard, a.prostitute, a.rich, a.wealthy],
                misfits: [a.barbarian, a.dwarf, a.assasine],
            },
            {
                name: 'muscled guests',
                powerFits: [a.barbarian, a.assasine, a.soldier],
                misfits: [a.wizard, a.cleric],
            },
            {
                name: 'users of magic',
                misfits: [a.barbarian],
                powerFits: [a.wizard, a.adventurer],
            },
            {
                name: 'tieflings',
                misfits: [a.cleric, a.human],
                powerFits: [a.tiefling],
            },
            {
                name: 'small guests',
                misfits: [a.drow],
                powerFits: [a.gnome, a.halfling],
            },
            {
                name: 'animal-loving guests',
                powerFits: [a.druid, a.forest],
            },
            {
                name: 'sophisticated guests',
                powerFits: [a.rich, a.wealthy, a.knight],
            },
            {
                name: 'virtous guests',
                powerFits: [a.knight, a.wealthy],
                misfits: [a.bard],
            },
            {
                name: 'poor-looking guests',
                powerFits: [a.cleric, a.poor, a.modest],
                misfits: [a.rich, a.wealthy],
            },
            {
                name: 'fancy-dressed guests',
                powerFits: [a.rich, a.bard, a.elf],
                misfits: [a.poor, a.modest, a.knight],
            },
            {
                name: 'guests with manners',
                powerFits: [a.wealthy, a.rich, a.knight],
                misfits: [a.poor, a.barbarian, a.soldier],
            },
            {
                name: 'wild-looking guests',
                needsOne: [a.barbarian, a.druid, a.assasine],
            },
            {
                name: 'rich-looking guests',
                powerFits: [a.wealthy, a.rich],
                misfits: [a.cleric, a.modest, a.poor],
            },
            {
                name: 'foreigners',
                powerFits: [a.haven, a.adventurer],
                misfits: [a.village],
            },
            {
                name: 'story-sharing adventurers',
                powerFits: [
                    a.adventurer,
                    a.bard,
                    a.barbarian,
                    a.wizard,
                    a.druid,
                    a.cleric,
                    a.knight,
                ],
            },
            {
                name: 'experienced warriors',
                powerFits: [
                    a.knight,
                    a.soldier,
                    a.barbarian,
                    a.adventurer,
                    a.dwarf,
                ],
                misfits: [a.wizard, a.bard],
            },
            {
                name: 'cheerful guests',
                powerFits: [a.halfling, a.gnome, a.bard],
                misfits: [a.drow],
            },
            {
                name: 'guests who dance to music',
                powerFits: [a.halfling, a.gnome, a.bard],
                misfits: [a.drow],
            },
            {
                name: 'guests who play instruments',
                powerFits: [a.elf, a.human, a.bard],
                misfits: [a.drow],
            },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony
    ),
];
