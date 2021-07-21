import { association, sophisticatedGroup } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../classes/idea/powerFitConcepts/powerFitConcepts';

const a = association;

const lowerClass = [
    association.poor,
    association.modest,
    association.soldier,
    association.barbarian,
];
const bartenderCharacter: DescriptionAsset[] = [
    { name: 'grumbling', worksForThiefs: true },
    { name: 'warm-hearted' },
    { name: 'unfriendly', misfits: sophisticatedGroup, worksForThiefs: true },
    { name: 'generous', worksForBrothel: true },
    { name: 'honest' },
    { name: 'busy', worksForBrothel: true, worksForAssasines: true },
    { name: 'in love', worksForBrothel: true },
    { name: 'dreaming', worksForBrothel: true },
    { name: 'lazy', misfits: sophisticatedGroup },
    { name: 'nostalgic' },

    {
        name: 'dumb',
        misfits: sophisticatedGroup,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    {
        needsOne: [a.poor, a.barbarian],
        name: 'weak Minded',
        worksForThiefs: true,
        worksForBrothel: true,
    },
    {
        incomeRange: [a.modest, a.poor],
        classRange: [a.dwarf],
        name: 'vulgar',
        misfits: sophisticatedGroup,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    { incomeRange: [a.poor], name: 'depressed', misfits: sophisticatedGroup },
    {
        needsOne: [a.rich, a.thief],
        name: 'gold tooth',
        worksForThiefs: true,
        worksForBrothel: true,
        worksForAssasines: true,
    },
    {
        incomeRange: [a.rich, a.wealthy],
        name: 'sophisticated',
        worksForAssasines: true,
        worksForBrothel: true,
    },
    {
        needsOne: [a.rich, a.prostitute],
        name: 'lofty',
        misfits: lowerClass,
        worksForBrothel: true,
    },
    {
        incomeRange: [a.wealthy, a.rich],
        name: 'organized',
        worksForBrothel: true,
        worksForAssasines: true,
        worksForThiefs: true,
    },
    {
        incomeRange: [a.modest, a.poor],
        name: 'hard-working',
        worksForBrothel: true,
    },
    {
        classRange: [a.knight],
        name: 'nobel',
        misfits: lowerClass,
        worksForBrothel: true,
    },
    {
        classRange: [a.knight, a.bard, a.barbarian, a.soldier, a.adventurer],
        name: 'brave',
    },
    {
        classRange: [a.knight, a.soldier],
        name: 'armored',
        worksForAssasines: true,
    },
    { classRange: [a.cleric], name: 'enlightened' },
    { classRange: [a.cleric, a.bard], name: 'kind', worksForBrothel: true },
    {
        needsOne: [a.thief, a.assasine, a.prostitute],
        name: 'shady',
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        needsOne: [a.thief, a.assasine],
        name: 'dangerous',
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        needsOne: [a.haven, a.barbarian, a.dwarf],
        name: 'die-hard',
        misfits: [a.elf],
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        needsOne: [a.haven, a.barbarian, a.dwarf],
        name: 'grimly',
        misfits: [a.elf],
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        needsOne: [a.haven, a.soldier, a.adventurer, a.assasine],
        name: 'eye-patch',
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        landRange: [a.city],
        name: 'greedy',
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        landRange: [a.village],
        name: 'tipsy',
        misfits: sophisticatedGroup,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    { needs: [a.tropical], name: 'Coconut Bra', worksForBrothel: true },
    {
        needsOne: [a.dwarf, a.barbarian, a.soldier],
        name: 'crude humor',
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    { landRange: [a.mountain], name: 'Clumsy' },
    {
        needsOne: [a.underdark, a.assasine, a.thief],
        name: 'mistrusting',
        worksForAssasines: true,
        worksForThiefs: true,
    },
    {
        needsOne: [a.underdark, a.assasine],
        name: 'closed-mouthed',
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        needsOne: [a.underdark, a.assasine],
        name: 'macabre',
        worksForAssasines: true,
        worksForThiefs: true,
    },
    { classRange: [a.cleric, a.wizard], name: 'wise' },
    { needs: [a.cleric], name: 'forgiving' },
    { classRange: [a.wizard], name: 'daydreaming' },
    { needs: [a.wizard], name: 'deep-minded' },
    { needsOne: [a.barbarian, a.soldier, a.dwarf], name: 'ferocious' },
    { needsOne: [a.barbarian, a.soldier, a.dwarf], name: 'fierce' },
    {
        needsOne: [a.barbarian, a.soldier, a.dwarf],
        name: 'experienced fighter',
        worksForAssasines: true,
    },
    { classRange: [a.adventurer, a.bard], name: 'story-loving' },
];
export const bartenders: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            misfits: [a.elf, a.drow, a.tiefling],
            name: 'Beardy',
            worksForAllCriminals: true,
            powerFits: [a.dwarf, a.gnome, a.haven, a.mountain],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.wizard, a.cleric, a.adventurer, a.druid],
            name: 'Long silver beard',
            worksForAllCriminals: true,
            powerFits: [a.dwarf, a.wizard, a.adventurer],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.wizard, a.druid, a.adventurer],
            name: 'Pointy witch hat',
            worksForAllCriminals: true,
            powerFits: [a.adventurer, a.wizard],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.wizard, a.druid, a.adventurer],
            name: 'Owl on shoulder',
            worksForAllCriminals: true,
            powerFits: [a.adventurer, a.wizard, a.druid],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.elf, a.drow, a.tiefling],
            name: 'Bald-headed',
            worksForAllCriminals: true,
            powerFits: [a.barbarian, a.dwarf, a.human, a.poor, a.modest],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.elf, a.drow, a.tiefling],
            name: 'Thin',
            worksForAllCriminals: true,
            powerFits: [a.poor, a.elf, a.drow, a.tiefling],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.elf, a.drow, a.tiefling],
            name: 'Big belly',
            worksForAllCriminals: true,
            powerFits: [
                a.modest,
                a.wealthy,
                a.dwarf,
                a.adventurer,
                a.mountain,
                a.halfling,
            ],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.bard, a.adventurer, a.tiefling],
            name: 'Charming smile',
            worksForAllCriminals: true,
            powerFits: [a.tiefling, a.elf, a.bard, a.adventurer],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.elf, a.drow],
            name: 'Giant ears',
            worksForAllCriminals: true,
            powerFits: [a.barbarian, a.elf, a.drow, a.adventurer],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.elf, a.drow, a.tiefling, a.gnome, a.halfling],
            name: 'Musceled',
            worksForAllCriminals: true,
            powerFits: [a.barbarian, a.knight, a.soldier, a.modest, a.soldier],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.gnome, a.dwarf, a.halfling],
            name: 'Tall',
            worksForAllCriminals: true,
            powerFits: [a.barbarian, a.knight, a.haven],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.gnome, a.dwarf, a.halfling],
            name: 'Tiny',
            worksForAllCriminals: true,
            powerFits: [a.gnome, a.underdark, a.halfling],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needs: [a.poor],
            name: 'Sickly',
            worksForAllCriminals: true,
            powerFits: [a.poor, a.underdark],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Old',
            worksForAllCriminals: true,
            powerFits: [a.cleric, a.wizard, a.poor, a.elf],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Was replaced by a Doppelganger',
            worksForAllCriminals: true,
            powerFits: [a.poor],
        },
        [{ name: '' }],
        Noticable.bartender,
        true,
        undefined,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'Attractive',
            worksForAllCriminals: true,
            powerFits: [a.bard, a.elf, a.human, a.village],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Charming',
            worksForAllCriminals: true,
            powerFits: [a.elf, a.drow, a.tiefling, a.bard, a.adventurer],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.prostitute, a.bard, a.rich],
            name: 'Alluring',
            worksForAllCriminals: true,
            powerFits: [a.human, a.bard],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.poor, a.modest],
            name: 'Ugly face',
            misfits: [a.elf, a.drow],
            worksForAllCriminals: true,
            powerFits: [a.poor, a.dwarf, a.barbarian, a.human],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            raceRange: [a.dwarf, a.human],
            name: 'Sturdy',
            worksForAllCriminals: true,
            powerFits: [a.human, a.knight, a.barbarian, a.dwarf, a.soldier],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.prostitute, a.bard, a.halfling, a.gnome],
            name: 'Cute',
            worksForBrothel: true,
            powerFits: [a.village, a.gnome, a.halfling],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.prostitute, a.bard],
            name: 'Half-naked',
            worksForBrothel: true,
            powerFits: [a.bard],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Silver hair',
            worksForAllCriminals: true,
            powerFits: [a.bard, a.adventurer, a.elf, a.wizard],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Grey-haired',
            worksForAllCriminals: true,
            powerFits: [a.poor, a.modest, a.wizard, a.mountain],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Scruffy grey beard',
            worksForAllCriminals: true,
            misfits: [a.rich, a.wealthy],
            powerFits: [a.poor, a.dwarf, a.wizard, a.mountain],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.assasine, a.tiefling, a.drow],
            name: 'Malicious smile',
            worksForAssasines: true,
            worksForThiefs: true,
            powerFits: [a.tiefling, a.human, a.drow],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.assasine, a.tiefling, a.drow],
            name: 'Sinister smile',
            worksForAssasines: true,
            worksForThiefs: true,
            powerFits: [a.tiefling, a.human, a.drow],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.thief, a.assasine, a.elf, a.tiefling, a.drow],
            name: 'Good-natured smile',
            powerFits: [a.druid, a.cleric, a.knight],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        { needs: [a.poor], name: 'Scared', powerFits: [a.poor] },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needs: [a.poor],
            name: 'Scarred',
            powerFits: [a.adventurer, a.barbarian, a.soldier, a.haven],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.poor, a.thief, a.barbarian],
            name: 'Covered in bruises',
            worksForThiefs: true,
            powerFits: [a.adventurer, a.barbarian, a.soldier],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.poor, a.thief, a.barbarian],
            name: 'Covered in tattoes',
            worksForAssasines: true,
            worksForThiefs: true,
            powerFits: [a.wizard, a.barbarian, a.soldier, a.haven],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.adventurer, a.barbarian, a.haven],
            name: 'One-eyed',
            worksForAssasines: true,
            worksForThiefs: true,
            powerFits: [a.haven, a.barbarian, a.soldier],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.adventurer, a.barbarian, a.haven],
            name: 'One-eared',
            worksForAssasines: true,
            worksForThiefs: true,
            powerFits: [a.haven, a.barbarian, a.soldier],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.adventurer, a.barbarian, a.haven],
            name: 'One-legged',
            worksForAssasines: true,
            worksForThiefs: true,
            powerFits: [a.haven, a.barbarian, a.soldier],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.adventurer, a.barbarian, a.haven],
            name: 'One-armed',
            worksForAssasines: true,
            worksForThiefs: true,
            powerFits: [a.haven, a.barbarian, a.soldier],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'Parrot on shoulder',
            worksForBrothel: true,
            worksForThiefs: true,
            powerFits: [a.haven, a.tropical],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'Wears an eye-patch',
            needsOne: [
                a.prostitute,
                a.thief,
                a.assasine,
                a.haven,
                a.adventurer,
            ],
            worksForAllCriminals: true,
            powerFits: [a.haven, a.adventurer, a.soldier],
        },
        [{ name: ' over the left eye' }, { name: ' over the right eye' }],
        Noticable.bartender,
        true
    ),
    new ImpressionIdea(
        {
            name: 'Has a hidden gang tattoo',
            worksForAllCriminals: true,
            powerFits: [a.city, a.mountain, a.forest],
        },
        [{ name: ' behind the left ear' }, { name: ' behind the right ear' }],
        Noticable.bartender,
        true
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'Long, greasy hair',
            worksForAllCriminals: true,
            needsOne: [a.poor, a.barbarian],
            misfits: [a.elf, a.drow],
            powerFits: [a.poor, a.druid],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.wizard, a.dwarf, a.drow, a.elf, a.barbarian],
            name: 'Thick mustache',
            worksForAllCriminals: true,
            powerFits: [a.bard, a.knight, a.mountain, a.city],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.cleric, a.knight],
            landRange: [a.village, a.mountain],
            name: 'Golden hair',
            worksForAllCriminals: true,
            powerFits: [a.knight, a.cleric, a.village, a.mountain],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.tropical],
            name: 'Cheerful',
            worksForBrothel: true,
            powerFits: [a.halfling, a.gnome, a.adventurer],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.tropical, a.desert],
            name: 'Monkey on shoulder',
            worksForAllCriminals: true,
            powerFits: [a.adventurer, a.halfling, a.druid, a.tropical, a.haven],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            landRange: [a.desert],
            incomeRange: [a.rich],
            name: 'Purple turban',
            worksForAllCriminals: true,
            powerFits: [a.desert, a.wizard, a.rich],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            landRange: [a.desert],
            incomeRange: [a.poor],
            name: 'Grey turban',
            worksForAllCriminals: true,
            powerFits: [a.desert, a.poor],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            landRange: [a.desert],
            incomeRange: [a.wealthy],
            name: 'Blue turban',
            worksForAllCriminals: true,
            powerFits: [a.desert, a.wealthy],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.desert],
            incomeRange: [a.modest],
            name: 'White turban',
            worksForAllCriminals: true,
            powerFits: [a.desert, a.wealthy],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.desert],
            misfits: [a.poor],
            name: 'Is a genie',
            worksForAllCriminals: true,
            powerFits: [a.desert, a.wealthy, a.adventurer, a.wizard, a.bard],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.desert],
            misfits: [a.poor],
            name: 'Is a golem',
            worksForAllCriminals: true,
            powerFits: [a.city, a.gnome, a.wizard],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.desert],
            misfits: [a.poor],
            name: 'Is a goblin',
            worksForAllCriminals: true,
            powerFits: [a.mountain, a.forest, a.adventurer],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.tropical, a.desert],
            name: 'Black talisman',
            worksForAllCriminals: true,
            powerFits: [a.desert, a.wealthy, a.adventurer, a.wizard, a.cleric],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.tropical, a.desert],
            misfits: [a.wealthy, a.rich],
            name: 'Sweaty',
            worksForThiefs: true,
            worksForBrothel: true,
            powerFits: [a.poor, a.desert],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.knight, a.cleric, a.wizard],
            name: 'Old-fashioned',
            worksForAllCriminals: true,
            powerFits: [a.mountain, a.forest, a.halfling],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'Dapper appearance',
            worksForAssasines: true,
            worksForBrothel: true,
            powerFits: [a.bard, a.wealthy, a.tiefling, a.elf],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'Elegant clothes',
            worksForAllCriminals: true,
            powerFits: [a.bard, a.wealthy, a.tiefling, a.elf],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'Sophisticated look',
            powerFits: [a.bard, a.wealthy, a.tiefling, a.elf],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'Well-dressed style',
            powerFits: [a.bard, a.wealthy, a.tiefling, a.elf],
        },
        bartenderCharacter,
        Noticable.bartender
    ),
];
