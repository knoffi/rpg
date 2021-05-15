import { association } from '../../../classes/association';
import { ImpressionIdea, Noticable } from '../../../classes/ImpressionIdea';
const a = association;
export const averageCustomers: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'Loudly Laughing & Drinking Beer', raceRange: [a.dwarf] },
        [{ name: '' }],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Discussing Investments & Drinking Whisky',
            raceRange: [a.gnome],
        },
        [{ name: '' }],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        { name: 'Singing and Dancing to Folk Music', raceRange: [a.halfling] },
        [{ name: '' }],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Listening to Harp Music & Drinking Nectar',
            raceRange: [a.elf],
        },
        [{ name: '' }],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Listening to Harp Music & Drinking White Wine',
            raceRange: [a.elf],
            misfits: [a.desert],
        },
        [{ name: '' }],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        { name: 'Mistrustful & Quiet', raceRange: [a.drow] },
        [{ name: '' }],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Discussing Politics & Drinking Brandy',
            raceRange: [a.tiefling],
        },
        [{ name: '' }],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        { name: 'Meeting Friends & Drinking Mead', raceRange: [a.human] },
        [{ name: '' }],
        Noticable.averageCustomer
    ),
];
