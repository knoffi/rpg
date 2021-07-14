import { AssetKey } from '../../../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../../../classes/idea/Noticable';
import { StructuredTavernFits } from '../../../classes/idea/StructuredTavernFits';
import { getRandomArrayEntry } from '../../../helpingFunctions/getFittingRandom';
import { WeServe } from '../../menuScene/addRandomDrink';
import { averageCustomers } from './averageCustomer';
import { bartenders } from './bartender';
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
        impressions: bartenders,
        category: Noticable.bartender,
    },
];

export const getRandomImpression = (
    fitting: StructuredTavernFits,
    category: Noticable,
    oldNames: string[],
    fullFirstKeys: AssetKey[],
    fullSecondKeys: AssetKey[]
): IImpression => {
    const isExcludedByName = getPrefixExcluder(oldNames, WeServe.impressions);
    const mainIsExcludedByKey = getKeyExcluder(fullFirstKeys);
    const additionIsExcludedByKey = getKeyExcluder(fullSecondKeys);
    const impressionChapter = impressionChapters.find(
        (chapter) => chapter.category === category
    );
    if (!impressionChapter) {
        console.log('Impression category not found!');
        return emptyImpression;
    } else {
        const fittingImpressions = impressionChapter.impressions.filter(
            (impression) =>
                impression.fitsToTavern(
                    fitting,
                    isExcludedByName,
                    undefined,
                    undefined,
                    mainIsExcludedByKey,
                    additionIsExcludedByKey
                )
        );
        if (fittingImpressions.length === 0) {
            return emptyImpression;
        }
        // these impressions are already filtered, thus no prefixFilter needed
        const newImpression =
            getRandomArrayEntry(fittingImpressions).createImpression(
                fitting,
                () => false
            ) || emptyImpression;
        return newImpression;
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
