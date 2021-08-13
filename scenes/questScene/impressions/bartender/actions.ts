import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';
const a = association;
export const bartenderActions: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Is cleaning cups and mugs',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.modest],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is having a drink himself',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.poor, a.dwarf, a.barbarian, a.soldier],
            misfits: [a.rich, a.wealthy, a.desert],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is throwing out a guest',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.poor, a.modest, a.soldier, a.barbarian, a.assasine],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is cleaning a table',
            key: AssetKey.BARTENDER_actions,
            powerFits: [a.modest, a.cleric, a.knight],
            worksForAllCriminals: true,
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
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is greeting an old friend',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.halfling, a.knight, a.soldier, a.adventurer],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is greeting a distant family member',
            key: AssetKey.BARTENDER_actions,
            needs: [a.halfling],
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is flirting with a beautiful lady',
            key: AssetKey.BARTENDER_actions,
            misfits: [a.desert],
            needs: [a.bard, a.tiefling],
            worksForThiefs: true,
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

            misfits: [a.rich, a.wealthy, a.desert],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is comforting a crying widow',
            needsOne: [a.poor, a.cleric],
            misfits: [a.rich, a.wealthy, a.desert],
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
            misfits: [a.poor, a.desert],
            key: AssetKey.BARTENDER_actions,
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is opening a new barrel of beer',
            needsOne: [a.wealthy, a.rich, a.dwarf, a.halfling],
            misfits: [a.poor, a.desert],
            key: AssetKey.BARTENDER_actions,
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is opening a new barrel of spirit',
            needsOne: [a.wealthy, a.rich, a.gnome, a.tiefling],
            misfits: [a.poor, a.desert],
            key: AssetKey.BARTENDER_actions,
            worksForAllCriminals: true,
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
            worksForAllCriminals: true,
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
            misfits: [a.desert],
            worksForBrothel: true,
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is scratching himself',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.poor, a.barbarian],
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is coughing a lot',
            key: AssetKey.BARTENDER_actions,
            needs: [a.poor],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is drinking some leftover booze',
            needs: [a.poor],
            key: AssetKey.BARTENDER_actions,
            misfits: [a.desert],
            worksForThiefs: true,
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
            misfits: [a.desert],
            key: AssetKey.BARTENDER_actions,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is getting compliments for the service',
            powerFits: [a.drow, a.wealthy, a.rich],
            key: AssetKey.BARTENDER_actions,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is polishing some plates',
            powerFits: [a.elf, a.wealthy],
            key: AssetKey.BARTENDER_actions,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is polishing some expensive cutlery',
            powerFits: [a.wealthy, a.rich],
            misfits: [a.poor],
            key: AssetKey.BARTENDER_actions,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is flirting with a prostitute',
            key: AssetKey.BARTENDER_actions,
            worksForBrothel: true,
            needs: [a.prostitute],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is comforting a crying prostitute',
            key: AssetKey.BARTENDER_actions,
            worksForBrothel: true,
            needs: [a.prostitute],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is secretly giving a letter to a guest',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.thief, a.wealthy],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is secretly giving a briefcase to a guest',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.thief],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is secretly giving a flask to a guest',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.thief, a.wizard],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is secretly receiving a letter from a guest',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.thief, a.wealthy],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is secretly receiving a flask from a guest',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.thief],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is secretly receiving a briefcase from a guest',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.thief],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Rolls a full barrel to a group of ',
            misfits: [a.desert],
            key: AssetKey.BARTENDER_actions,
            worksForAllCriminals: true,
        },
        [
            {
                name: 'noble knights',
                needs: [a.knight],
                incomeRange: [a.wealthy, a.rich],
            },
            {
                name: 'noble squires',
                needs: [a.knight],
                incomeRange: [a.wealthy],
            },
            {
                name: 'peasant squires',
                needs: [a.knight],
                incomeRange: [a.poor, a.modest],
            },
            {
                name: 'old knights',
                needs: [a.knight],
                incomeRange: [a.modest, a.wealthy],
            },
            { name: 'royal guards', needs: [a.knight, a.city, a.wealthy] },
            { name: 'barbarians', needs: [a.barbarian] },
            { name: 'archers', needsOne: [a.soldier, a.drow] },
            {
                name: 'soldiers',
                needs: [a.soldier],
                incomeRange: [a.poor, a.modest],
            },
            { name: 'gladiators', needs: [a.soldier, a.wealthy] },
            { name: 'generals and marshals', needs: [a.soldier, a.wealthy] },
            { name: 'cavalry soldiers', needs: [a.soldier, a.modest] },
            { name: 'city guards', needs: [a.city, a.modest] },
            {
                name: 'pirates',
                needs: [a.thief],
                needsOne: [a.haven, a.tropical],
            },
            {
                name: 'smugglers',
                needsOne: [a.haven, a.city, a.tropical],
                needs: [a.thief],
            },
            {
                name: 'slave traders',
                needsOne: [a.haven, a.tropical],
                needs: [a.thief],
            },
            {
                name: 'ferocious warriors',
                needsOne: [a.adventurer, a.soldier, a.barbarian],
            },
            {
                name: 'coal miners',
                needsOne: [a.underdark, a.dwarf, a.mountain],
                landRange: [a.mountain, a.underdark],
                raceRange: [a.human, a.gnome, a.dwarf],
                incomeRange: [a.modest],
                worksForBrothel: true,
            },
            {
                name: 'silver miners',
                needsOne: [a.underdark, a.dwarf, a.mountain],
                landRange: [a.mountain, a.underdark],
                raceRange: [a.human, a.gnome, a.dwarf],
                incomeRange: [a.wealthy],
                worksForBrothel: true,
            },
            {
                name: 'gold miners',
                needsOne: [a.underdark, a.dwarf, a.mountain],
                landRange: [a.mountain, a.underdark],
                raceRange: [a.human, a.gnome, a.dwarf],
                incomeRange: [a.wealthy],
                worksForBrothel: true,
            },
            {
                name: 'blacksmiths',
                needs: [a.city, a.modest],
                powerFits: [a.dwarf],
            },
            { name: 'rangers', needs: [a.forest] },
            {
                name: 'corn farmers',
                needs: [a.village],
                powerFits: [a.halfling],
            },
            {
                name: 'beet farmers',
                needs: [a.village],
                powerFits: [a.halfling],
            },
            {
                name: 'potato farmers',
                needs: [a.village],
                powerFits: [a.halfling],
            },
            {
                name: 'apple farmers',
                needs: [a.village],
                powerFits: [a.halfling],
            },
            { name: 'druids', needs: [a.druid] },
            { name: 'wizards', needs: [a.wizard] },
            { name: 'sorcerers', needs: [a.wizard] },
            { name: 'bounty hunters', needs: [a.assasine] },
            {
                name: 'sailors',
                needs: [a.haven],
                incomeRange: [a.poor, a.modest],
            },
            {
                name: 'construction workers',
                needs: [a.city, a.modest],
                powerFits: [a.human, a.dwarf],
            },
            { name: 'half-orcs', needs: [a.barbarian] },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony
    ),
    new ImpressionIdea(
        {
            name: 'Carries an empty barrel to the basement',
            key: AssetKey.BARTENDER_actions,
            powerFits: [a.barbarian, a.dwarf],
            misfits: [a.rich],
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Hangs up new wanted posters',
            key: AssetKey.BARTENDER_actions,
            needs: [a.assasine],
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Celebrates his birthday by handing out a free drink per costumer',
            key: AssetKey.BARTENDER_actions,
            worksForAllCriminals: true,
            powerFits: [a.tropical, a.haven, a.village, a.dwarf, a.halfling],
            misfits: [a.desert],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Welcomes every new guest personally at their table',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.rich, a.wealthy, a.halfling, a.tropical, a.desert],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is cleaning a hookah',
            key: AssetKey.BARTENDER_actions,
            needs: [a.desert],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is roasting some coffee beans',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.desert, a.tropical],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is brewing some fresh coffee',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.desert, a.tropical],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is brewing some tea',
            key: AssetKey.BARTENDER_actions,
            needsOne: [a.desert, a.tropical],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
];
