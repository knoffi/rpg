import { association } from '../../../../classes/association';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';

const a = association;
export const specialIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'A' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'B' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'C' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
];
