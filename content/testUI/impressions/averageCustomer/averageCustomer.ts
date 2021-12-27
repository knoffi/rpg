import { association } from '../../../../classes/association';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { Pattern } from '../../../../classes/idea/Patterns/Pattern';
import { defaultPatternConcepts } from '../../../../classes/idea/powerFitConcepts/defaultPatternConcepts';
const a = association;
export const averageCustomers: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: "Fills a customer's " },
        [
            { name: 'horn with mead', patterns: [Pattern.IMPRESSIONS_mead] },
            {
                name: 'mug with beer',
                patterns: [
                    Pattern.IMPRESSIONS_lager,
                    Pattern.IMPRESSIONS_porter,
                ],
            },
            { name: 'mug with ale', patterns: [Pattern.IMPRESSIONS_ale] },
            {
                name: 'glass with white wine',
                patterns: [Pattern.IMPRESSIONS_whiteWine],
            },
            {
                name: 'glass with red wine',
                patterns: [Pattern.IMPRESSIONS_redWine],
            },
            {
                name: 'glass with whiskey',
                patterns: [Pattern.IMPRESSIONS_whiskey],
            },
        ],
        Noticable.averageCustomer,
        undefined,
        undefined,
        undefined,
        defaultPatternConcepts.harmony
    ),
];
