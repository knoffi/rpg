import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { defaultPatternConcepts } from '../../../../classes/idea/powerFitConcepts/defaultPatternConcepts';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';

const a = association;
export const specialIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Babbling parrot on bar counter',
            landRange: [a.haven, a.tropical],
            worksForAllCriminals: true,
            powerFits: [a.tropical, a.haven],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A guest seems to recognize YOU!',
            worksForAllCriminals: true,
            key: AssetKey.plotTwist,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'A guest is pointing towards your table!',
            worksForAllCriminals: true,
            key: AssetKey.plotTwist,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'An old man is story-telling',
            needsOne: [a.adventurer, a.bard, a.wizard, a.druid],
            worksForAllCriminals: true,
            powerFits: [a.adventurer, a.bard, a.wizard, a.druid],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Three bounty hunters are searching',
            worksForBrothel: true,
            key: AssetKey.plotTwist,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'Some guests notice you and suddenly look nervous',
            worksForAllCriminals: true,
            key: AssetKey.plotTwist,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'Some city guards monitor the guests',
            key: AssetKey.plotTwist,
            needs: [a.city],
            misfits: [a.rich, a.wealthy],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'A security guard monitors the guests',
            key: AssetKey.plotTwist,
            worksForBrothel: true,
            misfits: [a.rich, a.wealthy],
            needsOne: [a.prostitute, a.thief],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'Guards in front of a VIP-lounge',
            needsOne: [a.assasine, a.thief, a.prostitute, a.rich],
            key: AssetKey.plotTwist,
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'Genie accompanies a guest',
            needsOne: [a.adventurer, a.desert, a.haven, a.city],
            worksForAllCriminals: true,
            powerFits: [a.desert, a.wizard],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A rich-looking person is silently crying at the bar',
            needsOne: [a.poor, a.rich, a.adventurer, a.city, a.haven],
            key: AssetKey.plotTwist,
            worksForBrothel: true,
            powerFits: [a.rich, a.adventurer, a.poor],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'An old man is silently crying at the bar',
            needsOne: [a.modest, a.village],
            worksForAssasines: true,
            powerFits: [a.village, a.modest],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A young women is silently crying at her table',
            misfits: [a.rich, a.wealthy],
            worksForBrothel: true,
            powerFits: [a.village, a.poor],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A young, wealthy lady is silently crying at her table',
            needsOne: [a.rich, a.wealthy],
            worksForBrothel: true,
            powerFits: [a.city, a.rich, a.wealthy],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Two seamen are having an argument',
            needs: [a.haven],
            worksForBrothel: true,
            worksForThiefs: true,
            powerFits: [a.haven, a.modest],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A ship crew gets totally drunk',
            needs: [a.haven],
            worksForBrothel: true,
            worksForThiefs: true,
            powerFits: [a.haven, a.modest],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Some pirates are having an argument',
            landRange: [a.tropical, a.haven],
            needsOne: [a.prostitute, a.thief, a.poor],
            misfits: [a.wealthy, a.rich],
            worksForBrothel: true,
            worksForThiefs: true,
            powerFits: [a.haven, a.modest],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A captain is searching for his crew',
            needs: [a.haven],
            worksForBrothel: true,
            worksForThiefs: true,
            powerFits: [a.haven, a.modest],
            sex: 'male',
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A crew is searching for its captain',
            needs: [a.haven],
            worksForBrothel: true,
            worksForThiefs: true,
            powerFits: [a.haven, a.modest],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A captain is hiring',
            needs: [a.haven],
            worksForAllCriminals: true,
            powerFits: [a.haven, a.modest, a.poor],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A woman at the bar has a tattoo in the form of a map',
            needs: [a.haven],
            worksForAllCriminals: true,
            powerFits: [a.haven, a.modest],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A female pirate scares away other pirates',
            needs: [a.haven],
            worksForAllCriminals: true,
            powerFits: [a.haven, a.modest],
            sex: 'female',
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A rebel group is hiring',
            incomeRange: [a.poor, a.modest],
            worksForAllCriminals: true,
            landRange: [a.forest, a.mountain, a.village],
            powerFits: [a.mountain, a.soldier],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A clan of bandits is hiring',
            incomeRange: [a.poor, a.modest],
            needsOne: [a.thief, a.mountain, a.forest],
            worksForAllCriminals: true,
            powerFits: [a.thief, a.mountain, a.forest],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A a street gang is hiring',
            incomeRange: [a.poor],
            landRange: [a.city],
            needsOne: [a.prostitute, a.assasine, a.thief],
            worksForAllCriminals: true,
            powerFits: [a.city],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of high lords is playing poker',
            incomeRange: [a.rich],
            worksForBrothel: true,
            powerFits: [a.rich],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of merchants is playing poker',
            incomeRange: [a.wealthy],
            worksForBrothel: true,
            powerFits: [a.wealthy, a.city],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of artisans is playing poker',
            incomeRange: [a.modest],
            landRange: [a.city, a.village],
            worksForBrothel: true,
            powerFits: [a.modest, a.village, a.city],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Three drunken sailors are playing poker',
            incomeRange: [a.modest, a.poor],
            needs: [a.haven],
            worksForBrothel: true,
            powerFits: [a.modest, a.haven],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Three filthy hobos are playing poker',
            needs: [a.poor],
            landRange: [a.city],
            worksForBrothel: true,
            powerFits: [a.city, a.poor],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),

    new ImpressionIdea(
        {
            name: ' are playing chess',
            worksForAllCriminals: true,
            key: AssetKey.INDIVIDUALS_playing,
        },
        [
            {
                name: 'Two royal advisors',
                needsOne: [a.rich, a.wealthy],
                landRange: [a.city],
                powerFits: [a.city, a.rich, a.wealthy],
            },
            {
                name: 'Two noble lords',
                needsOne: [a.rich, a.wealthy],
                landRange: [a.city],
                powerFits: [a.city, a.rich, a.wealthy],
            },
            {
                name: 'Two advisors of the Sultan',
                needsOne: [a.rich, a.wealthy],
                needs: [a.desert],
                powerFits: [a.desert, a.rich, a.wealthy],
            },
            {
                name: 'Two long-bearded wizards',
                needsOne: [a.adventurer, a.wizard],
                powerFits: [a.wizard, a.adventurer],
            },
            {
                name: 'Two grey-haired arch bishops',
                needsOne: [a.cleric],
                powerFits: [a.cleric, a.rich, a.wealthy],
            },
            {
                name: 'Two grey-haired knights',
                needsOne: [a.knight],
                powerFits: [a.knight, a.wealthy],
            },
            {
                name: 'Two grey-haired army commanders',
                needsOne: [a.soldier],
                powerFits: [a.soldier, a.wealthy],
            },
            {
                name: 'Two elderly temple priests',
                needsOne: [a.cleric],
                landRange: [a.desert, a.city],
                powerFits: [a.cleric, a.wealthy, a.city],
            },
            {
                name: 'Two beautiful temple priestesses',
                needsOne: [a.cleric],
                landRange: [a.desert, a.city],
                powerFits: [a.cleric, a.wealthy, a.city],
            },
            {
                name: 'Two council members',
                incomeRange: [a.wealthy],
                needs: [a.city],
                powerFits: [a.city, a.wealthy],
            },
            {
                name: 'Two guild masters',
                incomeRange: [a.wealthy],
                needs: [a.city],
                powerFits: [a.city, a.wealthy],
            },
            {
                name: 'Two council senators',
                incomeRange: [a.rich, a.wealthy],
                needs: [a.city],
                powerFits: [a.city, a.rich, a.wealthy],
            },
            {
                name: 'Two grey-haired captains',
                incomeRange: [a.wealthy, a.modest],
                needs: [a.haven],
                powerFits: [a.haven, a.modest, a.wealthy],
            },
        ],
        Noticable.someCustomers,
        undefined,
        true,
        defaultPowerFitConcepts.harmony,
        defaultPatternConcepts.harmony
    ),
];
