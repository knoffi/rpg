import { association } from '../../../classes/association';
import { Noticable } from '../../../classes/ImpressionIdea';
import { getStructuredFits } from '../../../classes/StructuredTavernFits';
import { getRandomArrayEntry } from '../../../helpingFunctions/getFittingRandom';
import { WeServe } from '../../menuScene/addRandomDrink';
import { averageCustomers } from './averageCustomer';
import { bartenders } from './bartender';
import { furnitures } from './furniture';
import { individuals } from './genericIndividuals';
import { getPrefixExcluder } from './getPrefixExcluder';
import { IImpression } from './IImpression';
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
    { impressions: averageCustomers, category: Noticable.averageCustomer },
    {
        impressions: [...individuals, ...specialIndividuals],
        category: Noticable.someCustomers,
    },
    { impressions: bartenders, category: Noticable.bartender },
];

export const emptyImpression: IImpression = {
    name: 'No description of that category left! May the DM have mercy on us all!',
    category: Noticable.bartender,
};
export const getRandomImpression = (
    tavernFits: association[],
    category: Noticable,
    oldNames: string[]
): IImpression => {
    const isExcludedByPrefix = getPrefixExcluder(oldNames, WeServe.impressions);
    const impressionChapter = impressionChapters.find(
        (chapter) => chapter.category === category
    );
    if (!impressionChapter) {
        console.log('Impression category not found!');
        return emptyImpression;
    }
    const structuredFits = getStructuredFits(tavernFits);
    const fittingImpressions = impressionChapter!.impressions.filter(
        (impression) =>
            impression.fitsToTavern(structuredFits, isExcludedByPrefix)
    );
    if (fittingImpressions.length === 0) {
        return emptyImpression;
    }
    const newDescriptionText = getRandomArrayEntry(
        fittingImpressions
    ).createImpression(structuredFits, () => false);
    return {
        name: newDescriptionText,
        category: category,
    } as IImpression;
};

export const getImpressionsWithOneReroll = (
    oldName: string,
    impressions: IImpression[],
    fits: association[],
    category: Noticable
) => {
    const oldNames = impressions.map((impression) => impression.name);
    const newImpression = getRandomImpression(fits, category, oldNames);
    if (!newImpression || newImpression.name === emptyImpression.name) {
        return undefined;
    }
    return impressions.map((impression) =>
        impression.name !== oldName ? impression : newImpression
    );
};
