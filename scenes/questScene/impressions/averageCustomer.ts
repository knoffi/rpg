import { association } from '../../../classes/association';
import { emptyDescriptionAsset } from '../../../classes/DescriptionIdea';
import { ImpressionIdea, Noticable } from '../../../classes/ImpressionIdea';
const a = association;
export const averageCustomers: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'Loudly Laughing & Drinking Beer', raceRange: [a.dwarf] },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Discussing Investments & Drinking Whisky',
            raceRange: [a.gnome],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        { name: 'Singing and Dancing to Folk Music', raceRange: [a.halfling] },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Listening to Harp Music & Drinking Nectar',
            raceRange: [a.elf],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Listening to Harp Music & Drinking White Wine',
            raceRange: [a.elf],
            misfits: [a.desert],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        { name: 'Mistrustful & Quiet', raceRange: [a.drow] },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Discussing Politics & Drinking Brandy',
            raceRange: [a.tiefling],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        { name: 'Meeting Friends & Drinking Mead', raceRange: [a.human] },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
];
