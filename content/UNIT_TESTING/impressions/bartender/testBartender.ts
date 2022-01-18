import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { Pattern } from '../../../../classes/idea/Patterns/Pattern';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';

export const patternTestBartender: ImpressionIdea[] = [
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
            name: 'People call him ',
        },
        [
            {
                name: 'Littlefinger',
                patterns: [Pattern.BARTENDER_Kleinfinger],
            },
            {
                name: 'Uncle Ben',
                patterns: [Pattern.BARTENDER_UncleBen],
            },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony
    ),
    new ImpressionIdea(
        {
            name: 'Is very friendly to female guests',
            patterns: [
                Pattern.BARTENDER_Kleinfinger,
                Pattern.BARTENDER_UncleBen,
            ],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'The guests respect him',
            patterns: [
                Pattern.BARTENDER_Kleinfinger,
                Pattern.BARTENDER_UncleBen,
            ],
        },
        [emptyDescriptionAsset],
        Noticable.bartender
    ),
];
