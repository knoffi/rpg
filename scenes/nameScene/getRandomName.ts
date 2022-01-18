import { filterBestIdeas } from '../../classes/idea/fitCalculator/filterBestIdea';
import { StructuredTavernFits } from '../../classes/idea/StructuredTavernFits';
import { getRandomArrayEntry } from '../../helpingFunctions/getRandomArrayEntry';
import { getPrefixExcluder } from '../questScene/impressions/getPrefixExcluder';
import { nameIdeas } from './names/nameIdeas';

export const getRandomName = (
    fitting: StructuredTavernFits,
    oldNames: string[],
    mainFilter?: number,
    additionFilter?: number
): string => {
    const isExcludedByName = getPrefixExcluder(oldNames, 'names');
    const alwaysFalse = () => false;
    const bestNames = filterBestIdeas({
        ideas: nameIdeas,
        tavernFits: fitting,
        isExcludedByName,
        mainIsExcludedByKey: alwaysFalse,
        additionIsExcludedByKey: alwaysFalse,
        isUnwanted: alwaysFalse,
        isUnpleasant: alwaysFalse,
        patterns: [],
        mainFilter,
        additionFilter,
    });
    if (!bestNames) {
        console.log('no name reached low fit level');
        return 'Nameless Tavern';
    } else {
        const newIdea = getRandomArrayEntry(bestNames.ideas);
        //NOTE: fail fast is prefered here
        const newName = newIdea?.getConcreteName(
            fitting,
            isExcludedByName,
            bestNames.level,
            additionFilter
        )!;
        return newName;
    }
};
