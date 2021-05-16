import { association } from '../../../classes/association';
import { Noticable } from '../../../classes/ImpressionIdea';
import { getStructuredFits } from '../../../classes/StructuredTavernFits';
import { getRandomArrayEntry } from '../../../helpingFunctions/getFittingRandom';
import { averageCustomers } from './averageCustomer';
import { bartenders } from './bartender';
import { furnitures } from './furniture';
import { individuals } from './genericIndividuals';
import { specialIndividuals } from './specialIndividuals';
import { TavernDescription } from './tavernDescription';

const impressionChapters = [
    { impressions: furnitures, category: Noticable.furniture },
    { impressions: averageCustomers, category: Noticable.averageCustomer },
    {
        impressions: [...individuals, ...specialIndividuals],
        category: Noticable.someCustomers,
    },
    { impressions: bartenders, category: Noticable.bartender },
];

export const getRandomTavernDescription = (
    tavernFits: association[],
    category: Noticable
): TavernDescription => {
    const impressionChapter = impressionChapters.find(
        (chapter) => chapter.category === category
    );
    const emptyDescription: TavernDescription = {
        name: 'Empty',
        category: category,
    };
    if (!impressionChapter) {
        console.log('Impression category not found!');
        return emptyDescription;
    }
    const structuredFits = getStructuredFits(tavernFits);
    const fittingImpressions = impressionChapter!.impressions.filter(
        (impression) => impression.fitsToTavern(structuredFits)
    );
    if (fittingImpressions.length === 0) {
        return emptyDescription;
    }
    const newDescriptionText = getRandomArrayEntry(
        fittingImpressions
    ).createImpression(structuredFits, () => false);
    return {
        name: newDescriptionText,
        category: category,
    } as TavernDescription;
};
