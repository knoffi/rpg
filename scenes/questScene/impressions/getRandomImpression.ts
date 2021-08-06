import { AssetKey } from '../../../classes/idea/AssetKey/AssetKey';
import { filterBestIdeas } from '../../../classes/idea/fitCalculator/filterBestIdea';
import { Noticable } from '../../../classes/idea/Noticable';
import { StructuredTavernFits } from '../../../classes/idea/StructuredTavernFits';
import { WeServe } from '../../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../../helpingFunctions/getFittingRandom';
import { emptyImpression } from './emptyImpression';
import { getPrefixExcluder } from './getPrefixExcluder';
import { IImpression } from './IImpression';
import { impressionChapters } from './impressionChapters';
import { getKeyExcluder } from './impressionExcluder/getImpressionExcluder';

export const getRandomImpression = (
    fitting: StructuredTavernFits,
    category: Noticable,
    oldNames: string[],
    fullFirstKeys: AssetKey[],
    fullSecondKeys: AssetKey[],
    mainFilter?: number,
    additionFilter?: number
): IImpression => {
    const isExcludedByName = getPrefixExcluder(oldNames, WeServe.impressions);
    const mainIsExcludedByKey = getKeyExcluder(fullFirstKeys);
    const additionIsExcludedByKey = getKeyExcluder(fullSecondKeys);
    const chapter = impressionChapters.find(
        (chapter) => chapter.category === category
    );
    if (!chapter) {
        console.log('Impression category not found!');
        return emptyImpression;
    } else {
        const bestImpressions = filterBestIdeas(
            chapter.impressions,
            fitting,
            isExcludedByName,
            mainIsExcludedByKey,
            additionIsExcludedByKey,
            mainFilter,
            additionFilter
        );
        if (!bestImpressions) {
            return emptyImpression;
        } else {
            const newIdea = getRandomArrayEntry(bestImpressions.ideas);
            const newImpression =
                newIdea.createImpression(
                    fitting,
                    //additions for impression do not get filtered by name because it seems more realistic
                    () => false,
                    additionIsExcludedByKey,
                    bestImpressions.level,
                    additionFilter
                ) || emptyImpression;
            return newImpression;
        }
    }
};

export const getImpressionsWithOneReroll = (
    oldName: string,
    impressions: IImpression[],
    fitting: StructuredTavernFits,
    category: Noticable,
    fullFirstKeys: AssetKey[],
    fullSecondKeys: AssetKey[]
) => {
    const oldNames = impressions.map((impression) => impression.name);
    const newImpression = getRandomImpression(
        fitting,
        category,
        oldNames,
        fullFirstKeys,
        fullSecondKeys
    );
    if (!newImpression || newImpression.name === emptyImpression.name) {
        console.log('rerolled and got an empty impression');
        return undefined;
    }
    return impressions.map((impression) =>
        impression.name !== oldName ? impression : newImpression
    );
};
