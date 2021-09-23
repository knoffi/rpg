import { Pattern } from '../../classes/idea/Patterns/Pattern';
import { IImpression } from './impressions/IImpression';

export const getUsedPatterns = (impressions: IImpression[]) => {
    return impressions.reduce(
        (patterns, impression) => patterns.concat(impression.patterns),
        [] as Pattern[]
    );
};
