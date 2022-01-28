import { association } from '../../../../classes/association';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';

const a = association;
export const specialIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'A bard' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A wizard' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A fighter' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A cleric' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A barbarian' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A rouge' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
];
