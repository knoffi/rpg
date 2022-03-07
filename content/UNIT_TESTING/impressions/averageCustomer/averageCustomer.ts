import { association } from '../../../../classes/association';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { Pattern } from '../../../../classes/idea/Patterns/Pattern';
const a = association;
export const averageCustomers: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Seem friendly and warm-hearted',
            patterns: [Pattern.BARTENDER_UncleBen],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Drinking Mead and talking with friends',
            patterns: [Pattern.BARTENDER_UncleBen],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Seem wealthy, but also cold-hearted',
            patterns: [Pattern.BARTENDER_Kleinfinger],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Arrogantly staring at you',
            patterns: [Pattern.BARTENDER_Kleinfinger],
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
];
