import { association, sophisticatedGroup } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/DescriptionAsset';
import { ImpressionIdea, Noticable } from '../../../classes/ImpressionIdea';

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
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.wizard, a.cleric, a.adventurer, a.druid],
            name: 'Long silver beard',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.wizard, a.druid, a.adventurer],
            name: 'Pointy witch hat',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.wizard, a.druid, a.adventurer],
            name: 'Owl on shoulder',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.elf, a.drow, a.tiefling],
            name: 'Bold',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.elf, a.drow, a.tiefling],
            name: 'Thin',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.elf, a.drow, a.tiefling],
            name: 'Big belly',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.bard, a.adventurer, a.tiefling],
            name: 'Charming smile',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.elf, a.drow],
            name: 'Giant ears',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.elf, a.drow, a.tiefling, a.gnome, a.halfling],
            name: 'Musceled',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.gnome, a.dwarf, a.halfling],
            name: 'Tall',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needs: [a.gnome, a.dwarf, a.halfling],
            name: 'Tiny',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needs: [a.poor],
            name: 'Sickly',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Old',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Was replaced by a Doppelganger',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [{ name: '' }],
        Noticable.bartender,
        true
    ),
    new ImpressionIdea(
        {
            name: 'Attractive',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Charming',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.prostitute, a.bard, a.rich],
            name: 'Alluring',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.poor, a.modest],
            name: 'Ugly face',
            misfits: [a.elf, a.drow],
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            raceRange: [a.dwarf, a.human],
            name: 'Sturdy',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.prostitute, a.bard, a.halfling, a.gnome],
            name: 'Cute',
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.prostitute, a.bard],
            name: 'Half-naked',
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Silver hair',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Grey-haired',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
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
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.thief, a.assasine, a.elf, a.tiefling, a.drow],
            name: 'Good-natured smile',
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        { needs: [a.poor], name: 'Scared' },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.poor, a.thief, a.barbarian],
            name: 'Covered in bruises',
            worksForThiefs: true,
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
        },
        [{ name: ' over the left eye' }, { name: ' over the right eye' }],
        Noticable.bartender,
        true
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'Has a gang tattoo hidden',
            needsOne: [
                a.prostitute,
                a.thief,
                a.assasine,
                a.city,
                a.mountain,
                a.forest,
            ],
            worksForAllCriminals: true,
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
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.wizard, a.dwarf, a.drow, a.elf],
            name: 'Thick mustache',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.cleric, a.knight],
            name: 'Golden hair',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        { needsOne: [a.tropical], name: 'Cheerful', worksForBrothel: true },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.tropical, a.desert],
            name: 'Monkey on shoulder',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.desert],
            incomeRange: [a.rich],
            name: 'Purple turban',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.desert],
            incomeRange: [a.poor],
            name: 'Grey turban',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.desert],
            incomeRange: [a.wealthy],
            name: 'Blue turban',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.desert],
            incomeRange: [a.modest],
            name: 'White turban',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.desert],
            misfits: [a.poor],
            name: 'Is a genie',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.desert],
            misfits: [a.poor],
            name: 'Is a golem',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.desert],
            misfits: [a.poor],
            name: 'Is a goblin',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.tropical, a.desert],
            name: 'Black talisman',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
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
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.knight, a.cleric, a.wizard],
            name: 'Old-fashioned',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
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
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'Elegant clothes',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        { incomeRange: [a.rich, a.wealthy], name: 'Sophisticated look' },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        { incomeRange: [a.rich, a.wealthy], name: 'Well-dressed style' },
        bartenderCharacter,
        Noticable.bartender
    ),
];
