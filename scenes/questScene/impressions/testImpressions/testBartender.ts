import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { Pattern } from '../../../../classes/idea/Patterns/Pattern';

export const patternTest: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'Kind person', patterns: [Pattern.BARTENDER_UncleBen] },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Simple, clean clothes ',
            patterns: [Pattern.BARTENDER_UncleBen],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Gives free food to an oprhan ',
            patterns: [Pattern.BARTENDER_UncleBen],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Sinister, charming smile',
            patterns: [Pattern.BARTENDER_Kleinfinger],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Elegant, expensive clothes ',
            patterns: [Pattern.BARTENDER_Kleinfinger],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Knows a secret way into the royal castle',
            patterns: [Pattern.BARTENDER_Kleinfinger],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Pays anyone for new secrets',
            patterns: [Pattern.BARTENDER_Kleinfinger],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
];
