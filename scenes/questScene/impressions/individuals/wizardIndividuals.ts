import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { historyQuests, magicalQuests } from '../actions/hiringActions';
import {
    alchemistClass,
    wizardClass,
    wizardGuest,
    wizardSalesman,
} from '../actions/wizardActions';

const a = association;

export const wizardIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'A golem in a suit works as a waiter',
            needsOne: [a.wizard, a.rich],
            worksForAllCriminals: true,
            powerFits: [a.wizard, a.rich],
            key: AssetKey.servant,
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A wealthy alchemist is ',
            powerFits: [a.wizard, a.adventurer],
            misfits: [a.poor],
            worksForBrothel: true,
            needsOne: [a.adventurer, a.wizard],
        },
        alchemistClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A blue man covered in tattoes is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A dark person with glowing eyes is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A talking tiger is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A charistmatic salesman is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardSalesman,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'An attractive woman is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardSalesman,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A person in a dark blue robe is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'An old, wrinkled woman is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A blond woman with a witch hat is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A red-haired lady is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A man with a long silver beard is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A young apprentice is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A sorceress is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A sorcerer is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A wizard is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A warlock is ',
            powerFits: [a.wizard, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
            needsOne: [a.adventurer, a.wizard],
        },
        wizardClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky elf is ',
            classRange: [a.wizard, a.cleric],
            worksForBrothel: true,
            raceRange: [a.elf],
            powerFits: [a.wizard, a.cleric, a.wealthy],
        },
        wizardGuest,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky gnome is ',
            classRange: [a.wizard, a.cleric],
            worksForBrothel: true,
            raceRange: [a.gnome],
            powerFits: [a.wizard, a.cleric, a.wealthy],
        },
        wizardGuest,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky tiefling is ',
            classRange: [a.wizard, a.cleric],
            worksForBrothel: true,
            raceRange: [a.tiefling],
            powerFits: [a.wizard, a.cleric, a.wealthy],
        },
        wizardGuest,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky halfling is ',
            classRange: [a.wizard, a.cleric],
            worksForBrothel: true,
            raceRange: [a.halfling],
            powerFits: [a.wizard, a.cleric, a.wealthy],
        },
        wizardGuest,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky dwarf is ',
            classRange: [a.wizard, a.cleric],
            worksForBrothel: true,
            raceRange: [a.dwarf],
            powerFits: [a.wizard, a.cleric, a.wealthy],
        },
        wizardGuest,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky scholar is ',
            classRange: [a.wizard, a.cleric],
            worksForBrothel: true,
            raceRange: [a.human],
            powerFits: [a.wizard, a.cleric],
        },
        wizardGuest,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A wealthy collector is ',
            classRange: [a.wizard, a.bard, a.adventurer],
            worksForBrothel: true,
            powerFits: [a.wizard, a.bard, a.adventurer],
        },
        magicalQuests,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'An archeologist is ',
            classRange: [a.wizard, a.bard, a.adventurer],
            worksForBrothel: true,
            powerFits: [a.wizard, a.bard, a.adventurer],
        },
        [...wizardGuest, ...historyQuests],
        Noticable.someCustomers
    ),
];
