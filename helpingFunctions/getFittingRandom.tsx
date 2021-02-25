import {
    association,
    incomeChosen,
    isIncomeAssociation,
    isLandAssociation,
    isSpecialAssociation,
    landChosen,
    specialsChosen,
} from '../classes/association';
import { menuCategory } from '../classes/TavernProduct';
import { ITavernAsset } from './ITavernAsset';

const CHOICE_PARAMS = { minDifference: 1 };
const WEIGTH_OF_FITS = 2;
const WEIGTH_OF_MISFITS = 1;
const HIGH_FIT_CHANCE = 0.4;
const MEDIUM_FIT_CHANCE = 0.3;
const LOW_FIT_CHANCE = 0.2;
const MINIMUM_FIT_CHANCE = 0.1;

export const getRandomArrayEntry = (array: any[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    if (randomIndex === array.length) {
        return array[0];
    }
    return array[randomIndex];
};

const countIntersections = (
    product: ITavernAsset,
    intersectingAssociations: association[]
) => {
    return intersectingAssociations.filter((association) => {
        return product.associations.includes(association);
    }).length;
};

const calculateFitting = (
    product: ITavernAsset,
    fits: association[],
    misfits: association[]
) => {
    const value =
        countIntersections(product, fits) -
        countIntersections(product, misfits);
    if (value > 2) {
        return 3;
    }
    if (value > 1) {
        return 2;
    }
    if (value > 0) {
        return 1;
    }
    if (value === 0) {
        return 0;
    }
    return -1;
};

const filterByFitValue = (
    choices: ITavernAsset[],
    lowBound: number,
    fits: association[],
    misfits: association[],
    excludedNames: string[]
) => {
    return choices.filter((choice) => {
        return (
            !excludedNames.includes(choice.name) &&
            calculateFitting(choice, fits, misfits) >= lowBound
        );
    });
};

const allNecessaritiesFulfilled = (
    asset: ITavernAsset,
    tavernFits: association[]
) => {
    const notFulfilledNecessarities = asset
        .getNecessarities()
        .filter((necessarity) => {
            const necessarityFails = !tavernFits.includes(necessarity);
            if (isIncomeAssociation(necessarity)) {
                return incomeChosen(tavernFits) && necessarityFails;
            }
            if (isLandAssociation(necessarity)) {
                return landChosen(tavernFits) && necessarityFails;
            }
            if (isSpecialAssociation(necessarity)) {
                return specialsChosen(tavernFits) && necessarityFails;
            }
            !tavernFits.includes(necessarity);
        });
    return notFulfilledNecessarities.length === 0;
};

export const getFittingRandom = (
    choices: ITavernAsset[],
    fits: association[],
    misfits: association[],
    excludedNames: string[],
    category?: menuCategory
): ITavernAsset => {
    const filteredChoices = getFilterChoices(choices, fits);
    const randomCase = Math.random();
    if (randomCase < HIGH_FIT_CHANCE) {
        const fittingChoices = filterByFitValue(
            filteredChoices,
            3,
            fits,
            misfits,
            excludedNames
        );
        if (fittingChoices.length > 0) {
            return getRandomArrayEntry(fittingChoices);
        }
    }
    if (randomCase < MEDIUM_FIT_CHANCE + HIGH_FIT_CHANCE) {
        const fittingChoices = filterByFitValue(
            filteredChoices,
            2,
            fits,
            misfits,
            excludedNames
        );
        if (fittingChoices.length > 0) {
            return getRandomArrayEntry(fittingChoices);
        }
    }
    if (randomCase < LOW_FIT_CHANCE + MEDIUM_FIT_CHANCE + HIGH_FIT_CHANCE) {
        const fittingChoices = filterByFitValue(
            filteredChoices,
            1,
            fits,
            misfits,
            excludedNames
        );
        if (fittingChoices.length > 0) {
            return getRandomArrayEntry(fittingChoices);
        }
    }
    return getRandomArrayEntry(
        filterByFitValue(filteredChoices, 0, fits, misfits, excludedNames)
    );
};

const getFilterChoices = (
    choices: ITavernAsset[],
    tavernFits: association[]
) => {
    const strictlyFilteredChoices = choices.filter((choice) =>
        allNecessaritiesFulfilled(choice, tavernFits)
    );
    const tavernInHaven = tavernFits.includes(association.haven);
    const tavernFitsWithCity = tavernFits.map((fit) => {
        return fit === association.haven ? association.city : fit;
    });
    // tavern may also include city main dishes like roast beef, since havens are often trade posts
    const filteredChoices =
        strictlyFilteredChoices.length > 0
            ? strictlyFilteredChoices
            : choices.filter((choice) => {
                  return (
                      tavernInHaven &&
                      allNecessaritiesFulfilled(choice, tavernFitsWithCity)
                  );
              });
    return filteredChoices;
};
