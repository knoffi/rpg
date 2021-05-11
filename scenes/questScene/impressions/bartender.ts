import { association, sophisticatedGroup } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/DescriptionIdea';
import { ImpressionIdea, Noticable } from '../../../classes/ImpressionIdea';

const a = association;

const lowerClass = [
    association.poor,
    association.modest,
    association.soldier,
    association.barbarian,
];
const bartenderCharacter: DescriptionAsset[] = [
    { name: 'Grumbling', worksForThiefs: true },
    { name: 'Warm-Hearted' },
    { name: 'Unfriendly', misfits: sophisticatedGroup, worksForThiefs: true },
    { name: 'Generous', worksForBrothel: true },
    { name: 'Honest' },
    { name: 'Busy', worksForBrothel: true, worksForAssasines: true },
    { name: 'In Love', worksForBrothel: true },
    { name: 'Dreaming', worksForBrothel: true },
    { name: 'Lazy', misfits: sophisticatedGroup },
    { name: 'Nostalgic' },

    {
        name: 'Dumb',
        misfits: sophisticatedGroup,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    {
        needsOne: [a.poor, a.barbarian],
        name: 'Weak Minded',
        worksForThiefs: true,
        worksForBrothel: true,
    },
    {
        incomeRange: [a.modest, a.poor],
        classRange: [a.dwarf],
        name: 'Vulgar',
        misfits: sophisticatedGroup,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    { incomeRange: [a.poor], name: 'Depressed', misfits: sophisticatedGroup },
    {
        needsOne: [a.rich, a.thief],
        name: 'Gold Tooth',
        worksForThiefs: true,
        worksForBrothel: true,
        worksForAssasines: true,
    },
    {
        incomeRange: [a.rich, a.wealthy],
        name: 'Sophisticated',
        worksForAssasines: true,
        worksForBrothel: true,
    },
    {
        needsOne: [a.rich, a.prostitute],
        name: 'Lofty',
        misfits: lowerClass,
        worksForBrothel: true,
    },
    {
        incomeRange: [a.wealthy, a.rich],
        name: 'Organized',
        worksForBrothel: true,
        worksForAssasines: true,
        worksForThiefs: true,
    },
    {
        incomeRange: [a.modest, a.poor],
        name: 'Hard-Working',
        worksForBrothel: true,
    },
    {
        classRange: [a.knight],
        name: 'Nobel',
        misfits: lowerClass,
        worksForBrothel: true,
    },
    {
        classRange: [a.knight, a.bard, a.barbarian, a.soldier, a.adventurer],
        name: 'Brave',
    },
    { classRange: [a.knight, a.soldier], name: 'Armored' },
    { classRange: [a.cleric], name: 'Enlightened' },
    { classRange: [a.cleric, a.bard], name: 'Kind', worksForBrothel: true },
    {
        needsOne: [a.thief, a.assasine, a.prostitute],
        name: 'Shady',
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        needsOne: [a.thief, a.assasine],
        name: 'Dangerous',
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        needsOne: [a.haven, a.barbarian, a.dwarf],
        name: 'Die-Hard',
        misfits: [a.elf],
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        needsOne: [a.haven, a.barbarian, a.dwarf],
        name: 'Grimly',
        misfits: [a.elf],
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        needsOne: [a.haven, a.soldier, a.adventurer, a.assasine],
        name: 'Eye-Patch',
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        landRange: [a.city],
        name: 'Greedy',
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        landRange: [a.village],
        name: 'Tipsy',
        misfits: sophisticatedGroup,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    { needs: [a.tropical], name: 'Coconut Bra', worksForBrothel: true },
    {
        needsOne: [a.dwarf, a.barbarian, a.soldier],
        name: 'Crude Humor',
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    { landRange: [a.mountain], name: 'Clumsy' },
    {
        needsOne: [a.underdark, a.assasine, a.thief],
        name: 'Mistrusting',
        worksForAssasines: true,
        worksForThiefs: true,
    },
    {
        needsOne: [a.underdark, a.assasine],
        name: 'Closed-Mouthed',
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    },
    {
        needsOne: [a.underdark, a.assasine],
        name: 'Macabre',
        worksForAssasines: true,
        worksForThiefs: true,
    },
    { classRange: [a.cleric, a.wizard], name: 'Wise' },
    { needs: [a.cleric], name: 'Forgiving' },
    { classRange: [a.wizard], name: 'Daydreaming' },
    { needs: [a.wizard], name: 'Deep-Minded' },
    { needsOne: [a.barbarian, a.soldier, a.dwarf], name: 'Ferocious' },
    { needsOne: [a.barbarian, a.soldier, a.dwarf], name: 'Fierce' },
    {
        needsOne: [a.barbarian, a.soldier, a.dwarf],
        name: 'Experienced Fighter',
        worksForAssasines: true,
    },
    { classRange: [a.adventurer, a.bard], name: 'Story-Loving' },
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
            name: 'Big Belly',
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
            name: 'Charming Smile',
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
            name: 'Giant Ears',
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
            needs: [a.poor],
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
            name: 'Ugly Face',
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
            name: 'Half-Naked',
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Silver Hair',
            worksForAssasines: true,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Grey-Haired',
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
            name: 'Malicious Smile',
            worksForAssasines: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.assasine, a.tiefling, a.drow],
            name: 'Sinister Smile',
            worksForAssasines: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.thief, a.assasine, a.elf, a.tiefling, a.drow],
            name: 'Good-natured Smile',
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
            name: 'Covered in Bruises',
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.poor, a.thief, a.barbarian],
            name: 'Covered in Tattoes',
            worksForAssasines: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.adventurer, a.barbarian, a.haven],
            name: 'One-Eyed',
            worksForAssasines: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.adventurer, a.barbarian, a.haven],
            name: 'One-Eared',
            worksForAssasines: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.adventurer, a.barbarian, a.haven],
            name: 'One-Legged',
            worksForAssasines: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.adventurer, a.barbarian, a.haven],
            name: 'One-Armed',
            worksForAssasines: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'Parrot on Shoulder',
            worksForBrothel: true,
            worksForThiefs: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            misfits: [a.wizard, a.dwarf, a.drow, a.elf],
            name: 'Thick Mustache',
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
            name: 'Golden Hair',
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
            name: 'Monkey on Shoulder',
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
            name: 'Purple Turban',
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
            name: 'Grey Turban',
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
            name: 'Blue Turban',
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
            name: 'White Turban',
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
            name: 'Is a Genie',
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
            name: 'Black Talisman',
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
            name: 'Old-Fashioned',
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
            name: 'Dapper Appearance',
            worksForAssasines: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'Elegant Clothes',
            worksForAssasines: true,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        { incomeRange: [a.rich, a.wealthy], name: 'Sophisticated Look' },
        bartenderCharacter,
        Noticable.bartender
    ),
    new ImpressionIdea(
        { incomeRange: [a.rich, a.wealthy], name: 'Well-Dressed Style' },
        bartenderCharacter,
        Noticable.bartender
    ),
];
