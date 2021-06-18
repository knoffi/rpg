import { association } from '../../../classes/association';
import { emptyDescriptionAsset } from '../../../classes/DescriptionAsset';
import { ImpressionIdea, Noticable } from '../../../classes/ImpressionIdea';
const a = association;
export const averageCustomers: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'Loudly laughing & drinking beer', raceRange: [a.dwarf] },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Discussing investments & drinking whisky',
            raceRange: [a.gnome],
            misfits: [a.poor, a.adventurer],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Complaining about politics & drinking whisky',
            raceRange: [a.gnome],
            needs: [a.poor],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        { name: 'Singing and dancing to folk music', raceRange: [a.halfling] },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Giggling and gossiping about others',
            raceRange: [a.halfling],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Listening to harp music & drinking nectar',
            raceRange: [a.elf],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Listening to harp music & drinking white wine',
            raceRange: [a.elf],
            misfits: [a.desert],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        { name: 'Mistrustful & quiet', raceRange: [a.drow] },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Discussing politics & drinking brandy',
            raceRange: [a.tiefling],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Meeting friends & drinking mead',
            raceRange: [a.human],
            incomeRange: [a.poor, a.modest],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Dining with business partners',
            raceRange: [a.human],
            incomeRange: [a.rich, a.wealthy],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
];
