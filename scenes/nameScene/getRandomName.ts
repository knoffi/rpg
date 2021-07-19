import { getBestIdeas } from '../../classes/idea/fitCalculator/getBestIdeas';
import { getSortedByFitLevel } from '../../classes/idea/fitCalculator/getSortedByFitLevel';
import { StructuredTavernFits } from '../../classes/idea/StructuredTavernFits';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { getPrefixExcluder } from '../questScene/impressions/getPrefixExcluder';
import { nameIdeas } from './names/nameIdeas';

export const getRandomName = (
    fitting: StructuredTavernFits,
    oldNames: string[],
    mainFilter?: number,
    additionFilter?: number
): string => {
    const isExcludedByName = getPrefixExcluder(oldNames, 'names');

    const sortedNameIdeas = getSortedByFitLevel(
        nameIdeas,
        fitting,
        isExcludedByName,
        () => false,
        () => false,
        mainFilter,
        additionFilter
    );
    const bestNames = getBestIdeas(sortedNameIdeas);
    if (!bestNames) {
        console.log('no name reached low fit level');
        return 'Nameless Tavern';
    } else {
        const newIdea = getRandomArrayEntry(bestNames.ideas);
        const newName = newIdea.getConcreteName(
            fitting,
            isExcludedByName,
            bestNames.level,
            additionFilter
        );
        return newName;
    }
};
