import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { Pattern } from '../../../../classes/idea/Patterns/Pattern';
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
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
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
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
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
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
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
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is comforting a crying widow',
            needsOne: [a.poor, a.cleric],
            misfits: [a.rich, a.wealthy, a.desert],
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is comforting a crying, old man',
            needsOne: [a.poor, a.cleric],
            misfits: [a.rich, a.wealthy],
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is giving a free meal to an orphan',
            needsOne: [a.poor, a.cleric],
            misfits: [a.rich, a.wealthy],
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
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
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
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
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
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
            needsOne: [a.poor, a.barbarian, a.prostitute],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is coughing a lot',
            key: AssetKey.BARTENDER_actions,
            needs: [a.poor],
            worksForAllCriminals: true,
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
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is eating some leftover food',
            needs: [a.poor],
            key: AssetKey.BARTENDER_actions,
            worksForAllCriminals: true,
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
            worksForThiefs: true,
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
            worksForThiefs: true,
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is getting compliments for the service',
            powerFits: [a.drow, a.wealthy, a.rich],
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
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
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is flirting with a prostitute',
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
            worksForBrothel: true,
            needs: [a.prostitute],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Is comforting a crying prostitute',
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
            worksForBrothel: true,
            needs: [a.prostitute],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Secretely gives a letter to a guest',
            keys: [AssetKey.BARTENDER_actions, AssetKey.plotTwist],
            needsOne: [a.thief, a.wealthy],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Secretely gives a briefcase to a guest',
            keys: [AssetKey.BARTENDER_actions, AssetKey.plotTwist],
            needsOne: [a.thief],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Secretely gives a flask to a guest',
            keys: [AssetKey.BARTENDER_actions, AssetKey.plotTwist],
            needsOne: [a.thief, a.wizard],
            worksForThiefs: true,
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Secretely receives a letter from a guest',
            keys: [AssetKey.BARTENDER_actions, AssetKey.plotTwist],
            needsOne: [a.thief, a.wealthy],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Secretely receives a flask from a guest',
            keys: [AssetKey.BARTENDER_actions, AssetKey.plotTwist],
            needsOne: [a.thief],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Secretely receives a briefcase from a guest',
            keys: [AssetKey.BARTENDER_actions, AssetKey.plotTwist],
            needsOne: [a.thief],
            worksForThiefs: true,
            worksForBrothel: true,
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
                worksForBrothel: true,
            },
            {
                name: 'noble squires',
                needs: [a.knight],
                incomeRange: [a.wealthy],
                worksForBrothel: true,
            },
            {
                name: 'peasant squires',
                needs: [a.knight],
                incomeRange: [a.poor, a.modest],
                worksForBrothel: true,
            },
            {
                name: 'old knights',
                needs: [a.knight],
                incomeRange: [a.modest, a.wealthy],
                worksForBrothel: true,
            },
            {
                name: 'royal guards',
                needs: [a.knight, a.city, a.wealthy],
                worksForBrothel: true,
            },
            {
                name: 'barbarians',
                needs: [a.barbarian],
                worksForAssasines: true,
                worksForBrothel: true,
            },
            {
                name: 'monster hunters',
                needs: [a.barbarian],
                worksForAssasines: true,
                worksForBrothel: true,
            },
            {
                name: 'archers',
                needsOne: [a.soldier, a.drow],
                worksForBrothel: true,
            },
            {
                name: 'soldiers',
                needs: [a.soldier],
                incomeRange: [a.poor, a.modest],
                worksForBrothel: true,
            },
            {
                name: 'gladiators',
                needs: [a.soldier, a.wealthy, a.city],
                worksForBrothel: true,
            },
            {
                name: 'generals and marshals',
                needs: [a.soldier, a.wealthy],
                worksForBrothel: true,
            },
            {
                name: 'cavalry soldiers',
                needs: [a.soldier, a.modest],
                worksForBrothel: true,
            },
            {
                name: 'city guards',
                needs: [a.city, a.modest],
                worksForBrothel: true,
            },
            {
                name: 'pirates',
                needsOne: [a.thief, a.prostitute],
                landRange: [a.haven, a.tropical],
                powerFits: [a.haven, a.tropical],
                worksForBrothel: true,
                worksForThiefs: true,
            },
            {
                name: 'smugglers',
                needsOne: [a.thief, a.prostitute],
                landRange: [a.haven, a.tropical],
                powerFits: [a.haven, a.tropical],
                worksForBrothel: true,
                worksForThiefs: true,
            },
            {
                name: 'slave traders',
                needsOne: [a.thief, a.prostitute],
                landRange: [a.haven, a.tropical, a.desert],
                powerFits: [a.haven, a.tropical, a.desert],
                worksForBrothel: true,
                worksForThiefs: true,
            },
            {
                name: 'ferocious warriors',
                needsOne: [a.adventurer, a.soldier, a.barbarian],
                worksForAssasines: true,
                worksForBrothel: true,
                worksForAllCriminals: true,
            },
            {
                name: 'bandits',
                needsOne: [a.soldier, a.barbarian],
                worksForThiefs: true,
                worksForBrothel: true,
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
                worksForBrothel: true,
            },
            { name: 'rangers', needs: [a.forest], worksForBrothel: true },
            {
                name: 'monks',
                needs: [a.cleric],
                incomeRange: [a.poor, a.modest],
                worksForAllCriminals: true,
            },
            {
                name: 'old clerics',
                needs: [a.cleric],
                incomeRange: [a.poor, a.modest],
            },
            {
                name: 'clerics',
                needs: [a.cleric],
                incomeRange: [a.poor, a.modest],
                worksForAllCriminals: true,
            },
            {
                name: 'corn farmers',
                needs: [a.village],
                powerFits: [a.halfling],
                worksForBrothel: true,
            },
            {
                name: 'beet farmers',
                needs: [a.village],
                powerFits: [a.halfling],
                worksForBrothel: true,
            },
            {
                name: 'potato farmers',
                needs: [a.village],
                powerFits: [a.halfling],
                worksForBrothel: true,
            },
            {
                name: 'apple farmers',
                needs: [a.village],
                powerFits: [a.halfling],
                worksForBrothel: true,
            },
            {
                name: 'druids',
                needs: [a.druid],
                worksForAllCriminals: true,
            },
            {
                name: 'wizards',
                needs: [a.wizard],
                worksForAllCriminals: true,
            },
            {
                name: 'sorcerers',
                needs: [a.wizard],
                worksForAllCriminals: true,
            },
            {
                name: 'bounty hunters',
                needs: [a.assasine],
                worksForAllCriminals: true,
            },
            {
                name: 'sailors',
                needs: [a.haven],
                incomeRange: [a.poor, a.modest],
                worksForBrothel: true,
            },
            {
                name: 'dock workers',
                needs: [a.haven],
                incomeRange: [a.poor, a.modest],
                worksForBrothel: true,
            },
            {
                name: 'construction workers',
                needs: [a.city, a.modest],
                powerFits: [a.human, a.dwarf],
                worksForBrothel: true,
            },
            {
                name: 'half-orcs',
                needs: [a.barbarian],
                worksForAllCriminals: true,
            },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony
    ),
    new ImpressionIdea(
        {
            name: 'Carries an empty ',
            key: AssetKey.BARTENDER_actions,
            powerFits: [a.barbarian, a.dwarf, a.assasine],
            needsOne: [a.poor, a.modest, a.barbarian, a.dwarf, a.assasine],
            misfits: [a.rich],
            worksForBrothel: true,
            worksForAssasines: true,
        },
        [
            {
                name: 'mead barrel to the basement',
                patterns: [Pattern.IMPRESSIONS_mead],
            },
            {
                name: 'wine barrel to the basement',
                patterns: [
                    Pattern.IMPRESSIONS_whiteWine,
                    Pattern.IMPRESSIONS_redWine,
                ],
            },
            {
                name: 'beer barrel to the basement',
                patterns: [
                    Pattern.IMPRESSIONS_lager,
                    Pattern.IMPRESSIONS_porter,
                    Pattern.IMPRESSIONS_ale,
                ],
            },
            {
                name: 'whiskey barrel to the basement',
                patterns: [Pattern.IMPRESSIONS_whiskey],
            },
        ],
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
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
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
            keys: [AssetKey.BARTENDER_actions, AssetKey.BARTENDER_charisma],
            needsOne: [a.rich, a.wealthy, a.halfling, a.tropical, a.desert],
            worksForBrothel: true,
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
