import { association } from '../classes/Adjectives';
import { ITavernAsset } from './ITavernAsset';

const CHOICE_PARAMS = { minDifference: 1 };
const WEIGTH_OF_FITS = 2;
const WEIGTH_OF_MISFITS = 1;

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
    fits: association[]
) => {
    const notFulfilledNecessarities = asset
        .getNecessarities()
        .filter((necessarity) => !fits.includes(necessarity));
    return notFulfilledNecessarities.length === 0;
};

export const getFittingRandom = (
    choices: ITavernAsset[],
    fits: association[],
    misfits: association[],
    excludedNames: string[]
): ITavernAsset => {
    const filteredChoices = choices.filter((choice) =>
        allNecessaritiesFulfilled(choice, fits)
    );
    const randomCase = Math.random();
    if (randomCase > 0.55) {
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
    if (randomCase > 0.2) {
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
    if (randomCase > 0.05) {
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
