import { association } from '../../../classes/association';
import { emptyDescriptionAsset } from '../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../classes/idea/Noticable';
const a = association;
export const averageCustomers: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Loudly laughing & drinking beer',
            raceRange: [a.dwarf],
            powerFits: [a.dwarf, a.barbarian, a.soldier],
            worksForBrothel: true,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Discussing investments & drinking whisky',
            raceRange: [a.human],
            misfits: [a.poor, a.adventurer],
            powerFits: [a.human, a.wealthy, a.rich, a.city, a.haven],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Complaining about politics & drinking whisky',
            raceRange: [a.human],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.city, a.haven, a.wizard, a.modest, a.poor],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Singing and dancing to folk music',
            raceRange: [a.halfling],
            powerFits: [a.modest, a.village, a.bard, a.halfling, a.barbarian],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Giggling and gossiping about others',
            raceRange: [a.gnome],
            powerFits: [a.gnome, a.village],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Talking about the newest inventions',
            raceRange: [a.gnome],
            powerFits: [a.gnome, a.city, a.wizard],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Gossiping about the local lords',
            raceRange: [a.gnome],
            powerFits: [a.gnome, a.bard],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Listening to harp music & drinking nectar',
            raceRange: [a.elf],
            powerFits: [a.elf, a.wealthy],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Listening to harp music & drinking white wine',
            raceRange: [a.elf],
            misfits: [a.desert],
            powerFits: [a.elf, a.wealthy],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Mistrustful & sinister',
            raceRange: [a.drow],
            powerFits: [a.tiefling, a.drow, a.thief],
            worksForThiefs: true,
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Playing card games & drinking brandy',
            raceRange: [a.tiefling],
            powerFits: [a.tiefling, a.wealthy],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Meeting friends & drinking mead',
            raceRange: [a.halfling],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.village, a.halfling],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Dining with business partners',
            raceRange: [a.human],
            landRange: [a.city, a.haven],
            incomeRange: [a.rich, a.wealthy],
            powerFits: [a.rich, a.wealthy, a.human],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Glimpsing at the servants',
            worksForBrothel: true,
            needs: [a.prostitute],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Discussing the new wanted posters',
            worksForAssasines: true,
            needs: [a.assasine],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Polishing their weapons & drinking hard booze',
            worksForAssasines: true,
            needs: [a.assasine],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
];
