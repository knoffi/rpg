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
                name: 'gnomes',
                powerFits: [a.drow],
                misfits: [a.gnome],
            },
            {
                name: 'drows',
                powerFits: [a.elf, a.dwarf, a.gnome, a.human],
                misfits: [a.drow],
            },
            {
                name: 'halflings',
                powerFits: [a.barbarian],
                misfits: [a.halfling],
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
];
