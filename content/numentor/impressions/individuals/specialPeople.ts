import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
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
            name: 'A young lady is silently crying at her table',
            misfits: [a.rich, a.wealthy],
            worksForBrothel: true,
            powerFits: [a.village, a.poor],
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
            name: 'Some pirates have an argument',
            needs: [a.haven],
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
            name: 'A captain searching for his crew',
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
            name: 'A crew searching for its captain',
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
            name: 'A woman with a tattoo in the form of a map',
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
            name: 'Two royal advisors are playing chess',
            incomeRange: [a.rich, a.wealthy],
            landRange: [a.city, a.desert],
            worksForBrothel: true,
            powerFits: [a.city, a.desert, a.rich, a.wealthy],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
];
