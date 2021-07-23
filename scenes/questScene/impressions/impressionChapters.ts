import { AssetKey } from '../../../classes/idea/AssetKey/AssetKey';
import { filterBestIdeas } from '../../../classes/idea/fitCalculator/filterBestIdea';
import { Noticable } from '../../../classes/idea/Noticable';
import { StructuredTavernFits } from '../../../classes/idea/StructuredTavernFits';
import { WeServe } from '../../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../../helpingFunctions/getFittingRandom';
import { averageCustomers } from './averageCustomer';
import { bartenderKnowledge } from './bartenderKnowledge';
import { emptyImpression } from './emptyImpression';
import { furnitures } from './furniture';
import { individuals } from './genericIndividuals';
import { getPrefixExcluder } from './getPrefixExcluder';
import { IImpression } from './IImpression';
import { getKeyExcluder } from './impressionExcluder/getImpressionExcluder';
import { druidIndividuals } from './individuals/druidIndividuals';
import { wizardIndividuals } from './individuals/wizardIndividuals';
import { specialIndividuals } from './specialIndividuals';
import { stuffedAnimals } from './stuffedAnimals';
import { trapsIntriguingShockingFurniture } from './trapsSecretIntriguingFurnite';

const impressionChapters = [
    {
        impressions: [
            ...furnitures,
            ...stuffedAnimals,
            ...trapsIntriguingShockingFurniture,
        ],
        category: Noticable.furniture,
    },
    {
        impressions: averageCustomers,
        category: Noticable.averageCustomer,
    },
    {
        impressions: [
            ...individuals,
            ...specialIndividuals,
            ...druidIndividuals,
            ...wizardIndividuals,
        ],
        category: Noticable.someCustomers,
    },
    {
        impressions: [...bartenderKnowledge],
        category: Noticable.bartender,
    },
];

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
        return undefined;
    }
    return impressions.map((impression) =>
        impression.name !== oldName ? impression : newImpression
    );
};
