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

export const getFittingRandom = (
    choices: ITavernAsset[],
    fits: association[],
    misfits: association[],
    excludedNames: string[]
): ITavernAsset => {
    const randomCase = Math.random();
    if (randomCase > 0.55) {
        const fittingChoices = filterByFitValue(
            choices,
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
            choices,
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
            choices,
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
        filterByFitValue(choices, 0, fits, misfits, excludedNames)
    );
};
