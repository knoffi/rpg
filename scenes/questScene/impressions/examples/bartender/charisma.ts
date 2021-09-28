import { association } from '../../../../../classes/association';
import { AssetKey } from '../../../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../../classes/idea/Noticable';
const a = association;

const mistrusters = [a.drow, a.thief, a.assasine, a.poor, a.village];
const grimly = [a.barbarian, a.dwarf, a.soldier, a.assasine];

export const bartenderCharisma: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            powerFits: [a.poor],
            worksForAllCriminals: true,
            name: 'Grumbling & unhappy',
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Warm-hearted & generous',
            powerFits: [a.dwarf, a.halfling, a.modest, a.village, a.knight],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Welcoming aura',
            powerFits: [a.halfling, a.adventurer, a.village, a.druid],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Friendly smiling',
            key: AssetKey.BARTENDER_charisma,
            powerFits: [a.halfling, a.adventurer, a.village],
            misfits: [a.drow],
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Uncomfortably smiling',
            key: AssetKey.BARTENDER_charisma,
            needs: [a.prostitute],
            misfits: [a.drow],
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Unfriendly & mistrusting',
            key: AssetKey.BARTENDER_charisma,
            powerFits: [a.drow, a.thief, a.assasine, a.poor, a.village],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Nostalgic & honest',
            powerFits: [a.dwarf, a.wealthy, a.knight],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Vulgar attitude',
            powerFits: [
                a.barbarian,
                a.assasine,
                a.dwarf,
                a.soldier,
                a.poor,
                a.modest,
            ],
            key: AssetKey.BARTENDER_charisma,
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Impolite, but generous',
            needsOne: [a.barbarian, a.assasine, a.dwarf],
            worksForAllCriminals: true,
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Depressed & quiet',
            needs: [a.poor],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Depressed & crying',
            needs: [a.poor],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'In love & dreaming',
            powerFits: [a.modest, a.wizard, a.druid, a.bard],
            worksForBrothel: true,
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Organized & hard-working',
            powerFits: [a.human, a.modest, a.city],
            worksForBrothel: true,
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Enlightened & peaceful',
            needsOne: [a.cleric, a.druid],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Grimly & fierce',
            needsOne: grimly,
            worksForAssasines: true,
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Tipsy & lazy',
            powerFits: [a.poor, a.thief],
            misfits: [a.desert],
            worksForBrothel: true,
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Brave & nobel',
            needs: [a.knight],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Die-hard attitude',
            needsOne: [a.barbarian, a.assasine, a.dwarf, a.soldier],
            key: AssetKey.BARTENDER_charisma,
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Mistrusting & careful',
            needsOne: mistrusters,
            key: AssetKey.BARTENDER_charisma,
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Macabre & witty',
            powerFits: [a.tiefling],
            key: AssetKey.BARTENDER_charisma,
            worksForThiefs: true,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Wise & patient',
            powerFits: [a.druid, a.wizard, a.cleric],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Lazy & daydreaming',
            powerFits: [a.poor, a.village],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Ferocious & wild',
            powerFits: [a.barbarian, a.druid, a.forest],
            key: AssetKey.BARTENDER_charisma,
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Mysterious & shady',
            needsOne: [a.wizard, a.drow, a.thief, a.tiefling],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Charming, but shady',
            needsOne: [a.wizard, a.drow, a.thief, a.tiefling],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Curious & story-loving',
            powerFits: [a.gnome, a.adventurer],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Excentric & chaotic',
            needsOne: [a.druid, a.wealthy],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Excentric, but organized',
            needsOne: [a.elf, a.wealthy, a.rich],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Clever, but chaotic',
            needsOne: [a.wizard, a.druid],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Intelligent, but unfriendly',
            key: AssetKey.BARTENDER_charisma,
            needsOne: [a.wizard, a.druid],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Peaceful & chaotic',
            needs: [a.druid],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Joyful & singing',
            powerFits: [a.bard, a.halfling, a.elf],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Curious & witty',
            powerFits: [a.gnome, a.tiefling, a.human],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Genious & excentric',
            needs: [a.wizard],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Humorous & hectic',
            powerFits: [a.gnome],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Helpful & hectic',
            powerFits: [a.gnome],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Organized & ambitious',
            powerFits: [a.human],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Friendly & organized',
            powerFits: [a.human],
            misfits: [a.drow, a.thief],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Fast-working & generous',
            powerFits: [a.human, a.dwarf, a.gnome],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Elegant & calm',
            needsOne: [a.elf, a.wealthy],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Sophisticated & charming',
            needsOne: [a.elf, a.wealthy],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Generous & elegant',
            needsOne: [a.elf, a.wealthy],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Art-loving & excentric',
            needsOne: [a.elf, a.rich],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Fashion-loving & witty',
            needsOne: [a.elf, a.rich, a.tiefling],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Fashion-loving & excentric',
            key: AssetKey.BARTENDER_charisma,
            needsOne: [a.elf, a.rich, a.tiefling],
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Music-loving & joyful',
            key: AssetKey.BARTENDER_charisma,
            needsOne: [a.bard, a.halfling, a.wealthy, a.rich],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Music-loving & flirty',
            key: AssetKey.BARTENDER_charisma,
            needsOne: [a.bard, a.elf, a.tiefling],
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Witty & flirty',
            needsOne: [a.bard, a.elf, a.tiefling],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Gossip-loving & flirty',
            key: AssetKey.BARTENDER_charisma,
            needsOne: [
                a.bard,
                a.tiefling,
                a.elf,
                a.wealthy,
                a.thief,
                a.prostitute,
            ],
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Gossip-loving & charismatic',
            needsOne: [
                a.bard,
                a.tiefling,
                a.elf,
                a.wealthy,
                a.thief,
                a.prostitute,
            ],
            worksForBrothel: true,
            worksForThiefs: true,
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Quiet & careful',
            needsOne: [a.drow, a.thief],
            key: AssetKey.BARTENDER_charisma,
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Tipsy & aggressiv',
            needsOne: grimly,
            misfits: [a.desert],
            key: AssetKey.BARTENDER_charisma,
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Alluring & flirty',
            needsOne: [a.bard, a.prostitute],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Cute & virtuous',
            needsOne: [a.cleric, a.gnome],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Sturdy & honest',
            powerFits: [a.knight, a.barbarian, a.modest, a.dwarf],
            key: AssetKey.BARTENDER_charisma,
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Sturdy & story-telling',
            powerFits: [a.knight, a.barbarian, a.modest, a.dwarf],
            key: AssetKey.BARTENDER_charisma,
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Vicious, but charming',
            needsOne: [a.drow, a.tiefling, a.thief],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Sinister, but flirty',
            needsOne: [a.drow, a.tiefling, a.thief],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Smiling, but vicious',
            needsOne: [a.drow, a.tiefling, a.thief],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Charming, but malicious',
            needsOne: [a.drow, a.tiefling, a.thief],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Good-natured & trustful',
            powerFits: [a.knight, a.dwarf, a.village, a.cleric, a.adventurer],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Trustful & generous',
            powerFits: [a.knight, a.dwarf, a.village, a.cleric, a.adventurer],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Tipsy & generous',
            powerFits: [
                a.knight,
                a.dwarf,
                a.village,
                a.cleric,
                a.adventurer,
                a.halfling,
                a.druid,
            ],
            misfits: [a.desert],
            worksForBrothel: true,
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Tipsy & carefree',
            powerFits: [
                a.village,
                a.poor,
                a.bard,
                a.halfling,
                a.gnome,
                a.prostitute,
            ],
            worksForBrothel: true,
            misfits: [a.desert],
            key: AssetKey.BARTENDER_charisma,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Frisky & tipsy',
            powerFits: [a.bard, a.prostitute],
            misfits: [a.desert],
            key: AssetKey.BARTENDER_charisma,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
];
