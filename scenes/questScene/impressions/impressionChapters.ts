import { Noticable } from '../../../classes/idea/ImpressionIdea';
import { StructuredTavernFits } from '../../../classes/idea/StructuredTavernFits';
import { getRandomArrayEntry } from '../../../helpingFunctions/getFittingRandom';
import { WeServe } from '../../menuScene/addRandomDrink';
import { averageCustomers } from './averageCustomer';
import { bartenders } from './bartender';
import { druidIndividuals } from './druidIndividuals';
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
        impressions: [
            ...individuals,
            ...specialIndividuals,
            ...druidIndividuals,
        ],
        category: Noticable.someCustomers,
    },
    { impressions: bartenders, category: Noticable.bartender },
];

export const emptyImpression: IImpression = {
    name: 'No description of that category left! May the DM have mercy on us all!',
    category: Noticable.bartender,
};
export const getRandomImpression = (
    fitting: StructuredTavernFits,
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
    const fittingImpressions = impressionChapter!.impressions.filter(
        (impression) => impression.fitsToTavern(fitting, isExcludedByPrefix)
    );
    if (fittingImpressions.length === 0) {
        return emptyImpression;
    }
    const newDescriptionText = getRandomArrayEntry(
        fittingImpressions
    ).createImpression(fitting, () => false);
    return {
        name: newDescriptionText,
        category: category,
    } as IImpression;
};

export const getImpressionsWithOneReroll = (
    oldName: string,
    impressions: IImpression[],
    fitting: StructuredTavernFits,
    category: Noticable
) => {
    const oldNames = impressions.map((impression) => impression.name);
    const newImpression = getRandomImpression(fitting, category, oldNames);
    if (!newImpression || newImpression.name === emptyImpression.name) {
        return undefined;
    }
    return impressions.map((impression) =>
        impression.name !== oldName ? impression : newImpression
    );
};
