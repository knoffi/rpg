import { Pattern } from '../../classes/idea/Patterns/Pattern';
import { Impression } from './impressions/Impression';

export const getUsedPatterns = (impressions: Impression[]) => {
    return impressions.reduce(
        (patterns, impression) => patterns.concat(impression.patterns),
        [] as Pattern[]
    );
};
