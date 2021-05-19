import { association } from '../../../classes/association';
import { emptyDescriptionAsset } from '../../../classes/DescriptionAsset';
import { ImpressionIdea, Noticable } from '../../../classes/ImpressionIdea';

const a = association;
export const specialIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Babbling parrot on bar counter',
            landRange: [a.haven, a.tropical],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A guest seems to recognize YOU!', worksForAllCriminals: true },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A guest is pointing towards your table!',
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'An old man is story-telling',
            classRange: [a.adventurer, a.bard, a.wizard, a.druid],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'Three bounty hunters are searching', worksForBrothel: true },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Some guests notice you and suddenly look nervous',
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'Police monitors guests' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'Guards monitor guests', worksForBrothel: true },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Guards in front of VIP-lounge',
            needsOne: [a.assasine, a.thief, a.prostitute, a.rich],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Genie accompanies a guest',
            needsOne: [a.adventurer, a.desert, a.haven, a.city],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A rich-looking person is crying at the bar',
            needsOne: [a.poor, a.rich, a.adventurer, a.knight, a.city, a.haven],
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A old man is crying at the bar',
            needsOne: [a.poor, a.village],
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A young lady is crying at a table',
            misfits: [a.rich, a.wealthy],
            worksForBrothel: true,
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
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A captain is hiring',
            needs: [a.haven],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A woman with a tattoo in the form of a map',
            needs: [a.haven],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A female pirate scares away other pirates',
            needs: [a.haven],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A rebel group is hiring',
            incomeRange: [a.poor, a.modest],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of bandits is hiring',
            incomeRange: [a.poor, a.modest],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A a street gang is hiring',
            incomeRange: [a.poor],
            needsOne: [a.prostitute, a.assasine, a.thief],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of high lords is playing poker',
            incomeRange: [a.rich],
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of merchants is playing poker',
            incomeRange: [a.wealthy],
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of artisans is playing poker',
            incomeRange: [a.modest],
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
];
