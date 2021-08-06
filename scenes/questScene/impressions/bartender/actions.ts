import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
const a = association;
export const bartenderActions: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Is cleaning cups and mugs',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.modest],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is having a drink himself',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.poor, a.dwarf, a.barbarian, a.soldier],
            misfits: [a.rich, a.wealthy],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is throwing out a guest',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.poor, a.modest, a.soldier, a.barbarian],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is cleaning a table',
            key: AssetKey.BARTENDER_actions,
            powerFits: [a.modest, a.cleric, a.knight],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is giving instructions to a new waiter',
            needsOne: [a.wealthy, a.rich, a.human],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is discussing politics with a guest',
            misfits: [a.poor],
            classRange: [a.bard, a.cleric],
            powerFits: [a.tiefling, a.wealthy, a.rich],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is discussing economics with a guest',
            key: AssetKey.BARTENDER_actions,
            misfits: [a.poor],
            classRange: [a.bard, a.cleric],
            powerFits: [a.human, a.wealthy, a.rich],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is discussing science with a guest',
            key: AssetKey.BARTENDER_actions,
            misfits: [a.poor],
            classRange: [a.wizard],
            powerFits: [a.gnome, a.wealthy, a.rich],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is discussing arts with a guest',
            misfits: [a.poor],
            classRange: [a.bard],
            powerFits: [a.elf, a.wealthy, a.rich],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is looking for a musician to play tonight',
            key: AssetKey.BARTENDER_actions,
            powerFits: [a.halfling, a.modest, a.adventurer, a.soldier],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is greeting an old friend',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.halfling, a.knight, a.soldier, a.adventurer],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is greeting a distant family member',
            key: AssetKey.BARTENDER_actions,
            needs: [a.halfling],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is flirting with a beautiful lady',
            key: AssetKey.BARTENDER_actions,
            needs: [a.bard, a.tiefling],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is comforting a crying man',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.poor, a.cleric],
            misfits: [a.rich, a.wealthy],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is comforting a crying woman',
            needsOne: [a.poor, a.cleric],
            misfits: [a.rich, a.wealthy],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is comforting a crying widow',
            needsOne: [a.poor, a.cleric],
            misfits: [a.rich, a.wealthy],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is comforting a crying, old man',
            needsOne: [a.poor, a.cleric],
            misfits: [a.rich, a.wealthy],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is giving a free meal to an orphan',
            needsOne: [a.poor, a.cleric],
            misfits: [a.rich, a.wealthy],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is opening a new barrel of wine',
            needsOne: [a.wealthy, a.rich, a.elf, a.human],
            misfits: [a.poor],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is opening a new barrel of beer',
            needsOne: [a.wealthy, a.rich, a.dwarf, a.halfling],
            misfits: [a.poor],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is opening a new barrel of spirit',
            needsOne: [a.wealthy, a.rich, a.gnome, a.tiefling],
            misfits: [a.poor],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is spitting on the ground',
            key: AssetKey.BARTENDER_actions,
            needs: [a.poor],
            incomeRange: [a.poor, a.modest],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Seems pretty drunk himself',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.poor, a.barbarian],
            incomeRange: [a.poor, a.modest],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is scratching himself',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.poor, a.barbarian],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is coughing a lot',
            key: AssetKey.BARTENDER_actions,
            needs: [a.poor],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is drinking some leftover booze',
            needs: [a.poor],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is eating some leftover food',
            needs: [a.poor],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is getting compliments for the food',
            misfits: [a.poor],
            powerFits: [a.rich, a.wealthy, a.elf, a.human, a.halfling],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is getting compliments for the drinks',
            powerFits: [a.rich, a.wealthy, a.dwarf, a.gnome, a.tiefling],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is getting compliments for the service',
            powerFits: [a.drow],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
];
