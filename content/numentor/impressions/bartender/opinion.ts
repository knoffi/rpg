import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { Pattern } from '../../../../classes/idea/Patterns/Pattern';
import { defaultPatternConcepts } from '../../../../classes/idea/powerFitConcepts/defaultPatternConcepts';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';
const a = association;
export const bartenderOpinions: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Dislikes ',
            worksForAllCriminals: true,
            key: AssetKey.BARTENDER_opinion,
        },
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
                worksForAllCriminals: true,
            },
            {
                name: 'elves',
                powerFits: [a.dwarf],
                misfits: [a.human, a.elf, a.halfling],
                worksForAllCriminals: true,
            },
            {
                name: 'barbarians',
                powerFits: [a.wizard, a.rich],
                misfits: [a.barbarian, a.adventurer, a.soldier],
                worksForThiefs: true,
            },
            {
                name: 'humans',
                misfits: [a.human],
                worksForAllCriminals: true,
            },
            {
                name: 'arcane magic',
                misfits: [a.wizard],
                powerFits: [a.cleric, a.knight, a.barbarian],
                worksForAllCriminals: true,
            },
            {
                name: 'tieflings',
                powerFits: [a.cleric, a.human],
                misfits: [a.tiefling],
                worksForAssasines: true,
            },
            {
                name: 'drows',
                powerFits: [a.elf, a.dwarf, a.gnome, a.human],
                misfits: [a.drow],
                worksForAssasines: true,
            },
            {
                name: 'small guests',
                powerFits: [a.barbarian],
                misfits: [a.halfling, a.gnome],
                worksForAssasines: true,
            },
            {
                name: 'poachers and trophy hunters',
                powerFits: [a.druid, a.forest],
            },
            {
                name: 'unpolite guests',
                powerFits: [a.rich, a.wealthy, a.cleric],
                worksForBrothel: true,
            },
            {
                name: 'guests without honor',
                powerFits: [a.knight, a.wealthy],
            },
            {
                name: 'poor-looking guests',
                powerFits: [a.wealthy, a.rich],
                misfits: [a.poor],
                worksForBrothel: true,
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
                worksForAssasines: true,
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
                worksForAssasines: true,
            },
            {
                name: 'beardy guests',
                powerFits: [a.elf, a.bard],
                misfits: [a.dwarf, a.barbarian],
                worksForBrothel: true,
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
                worksForAllCriminals: true,
            },
            {
                name: 'weapons in his tavern',
                classRange: [],
                powerFits: [a.modest, a.wealthy, a.poor],
                worksForBrothel: true,
            },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony
    ),
    new ImpressionIdea(
        {
            name: 'Very friendly to ',
            worksForAllCriminals: true,
            key: AssetKey.BARTENDER_opinion,
        },
        [
            {
                name: 'guests who order ale',
                patterns: [Pattern.IMPRESSIONS_ale],
                powerFits: [a.haven],
                misfits: [a.desert],
            },
            {
                name: 'guests who order rum',
                patterns: [Pattern.IMPRESSIONS_rum],
                powerFits: [a.haven],
                misfits: [a.desert],
            },
            {
                name: 'guests who order whiskey',
                patterns: [Pattern.IMPRESSIONS_whiskey],
                powerFits: [a.assasine],
                misfits: [a.desert],
            },
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
                worksForAllCriminals: true,
            },
            {
                name: 'well-dressed guests',
                powerFits: [a.elf, a.bard, a.prostitute, a.rich, a.wealthy],
                misfits: [a.barbarian, a.dwarf, a.assasine],
                worksForBrothel: true,
            },
            {
                name: 'muscled guests',
                powerFits: [a.barbarian, a.assasine, a.soldier],
                misfits: [a.wizard, a.cleric],
                worksForAssasines: true,
            },
            {
                name: 'users of magic',
                misfits: [a.barbarian],
                powerFits: [a.wizard, a.adventurer],
                worksForThiefs: true,
            },
            {
                name: 'tieflings',
                misfits: [a.cleric, a.human],
                powerFits: [a.tiefling],
                worksForThiefs: true,
            },
            {
                name: 'small guests',
                misfits: [a.drow],
                powerFits: [a.gnome, a.halfling],
                worksForThiefs: true,
                worksForBrothel: true,
            },
            {
                name: 'animal-loving guests',
                powerFits: [a.druid, a.forest],
            },
            {
                name: 'sophisticated guests',
                powerFits: [a.rich, a.wealthy, a.knight],
                worksForThiefs: true,
                worksForBrothel: true,
            },
            {
                name: 'virtuous guests',
                powerFits: [a.knight, a.cleric, a.wealthy],
                misfits: [
                    a.bard,
                    a.thief,
                    a.prostitute,
                    a.assasine,
                    a.barbarian,
                    a.soldier,
                ],
            },
            {
                name: 'poor-looking guests',
                powerFits: [a.cleric, a.poor, a.modest],
                misfits: [a.rich, a.wealthy],
                worksForThiefs: true,
            },
            {
                name: 'fancy-dressed guests',
                powerFits: [a.rich, a.bard, a.elf],
                misfits: [a.poor, a.modest, a.knight],
                worksForBrothel: true,
            },
            {
                name: 'guests with manners',
                powerFits: [a.wealthy, a.rich, a.knight],
                misfits: [a.poor, a.barbarian, a.soldier],
                worksForThiefs: true,
                worksForBrothel: true,
            },
            {
                name: 'wild-looking guests',
                needsOne: [a.barbarian, a.druid, a.assasine],
                worksForAssasines: true,
            },
            {
                name: 'rich-looking guests',
                powerFits: [a.wealthy, a.rich],
                misfits: [a.cleric, a.modest, a.poor],
                worksForBrothel: true,
                worksForThiefs: true,
            },
            {
                name: 'foreigners',
                powerFits: [a.haven, a.adventurer],
                misfits: [a.village],
                worksForBrothel: true,
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
                worksForBrothel: true,
            },
            {
                name: 'experienced warriors',
                needsOne: [
                    a.knight,
                    a.soldier,
                    a.barbarian,
                    a.adventurer,
                    a.dwarf,
                ],
                misfits: [a.wizard, a.bard],
                worksForBrothel: true,
                worksForAssasines: true,
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
            {
                name: 'guests who grew up in a city',
                needs: [a.city],
            },
            {
                name: 'guests who grew up in a village',
                needsOne: [a.halfling, a.village],
            },
            {
                name: 'guests who grew up in a harbor city',
                needs: [a.haven],
            },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony,
        defaultPatternConcepts.harmony
    ),
];
