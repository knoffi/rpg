import { association } from '../classes/Adjectives';
import { ITavernAsset } from './ITavernAsset';

const CHOICE_PARAMS = { minDifference: 1 };
const WEIGTH_OF_FITS = 2;
const WEIGTH_OF_MISFITS = 1;

const getDistributionValue = (fitHits: number, misfitHits: number) => {
    return 1 + WEIGTH_OF_FITS * fitHits - WEIGTH_OF_MISFITS * misfitHits;
};

export const getFittingRandomOlder = (
    choices: ITavernAsset[],
    fits: association[],
    misfits: association[],
    excludedNames: string[]
): ITavernAsset => {
    let distribution = [] as { product: ITavernAsset; value: number }[];
    choices.forEach((choiceProduct) => {
        const fitHits = countIntersections(choiceProduct, fits);
        const misfitHits = countIntersections(choiceProduct, misfits);
        if (!excludedNames.includes(choiceProduct.name)) {
            if (
                fitHits - misfitHits > CHOICE_PARAMS.minDifference ||
                misfitHits === 0
            ) {
                distribution.push({
                    product: choiceProduct,
                    value: getDistributionValue(fitHits, misfitHits),
                });
            }
        }
    });
    return randomFromDistribution(distribution);
};

const randomFromDistribution = (
    distribution: { product: ITavernAsset; value: number }[]
) => {
    let count = 0;
    let arrayForRandomChoice = [] as ITavernAsset[];
    distribution.forEach((element) => {
        while (count < element.value) {
            arrayForRandomChoice.push(element.product);
            count += 1;
        }
        count = 0;
    });
    return getRandomArrayEntry(arrayForRandomChoice);
};

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
    let count = 0;
    intersectingAssociations.forEach((association) => {
        if (!product.associations) {
            console.log("test this")
            console.log(product);
        }
        if (product.associations.includes(association)) {
            count += 1;
        }
    });
    return count;
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
    excludedNames: string[],
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
    console.log("choices " + choices.length.toString()+choices[0].name)
    let fittingChoices: ITavernAsset[];
    let randomCase = Math.random();
    if (randomCase > 0.55) {
        fittingChoices = filterByFitValue(
            choices,
            3,
            fits,
            misfits,
            excludedNames
        );
        if (fittingChoices.length > 0) {
            console.log("1")
            return getRandomArrayEntry(fittingChoices);
        }
    }
    if (randomCase > 0.2) {
        fittingChoices = filterByFitValue(
            choices,
            2,
            fits,
            misfits,
            excludedNames
        );
        if (fittingChoices.length > 0) {
            console.log("2")
            return getRandomArrayEntry(fittingChoices);
        }
    }
    if (randomCase > 0.05) {
        fittingChoices = filterByFitValue(
            choices,
            1,
            fits,
            misfits,
            excludedNames
        );
        if (fittingChoices.length > 0) {
            console.log("3")
            return getRandomArrayEntry(fittingChoices);
        }
    }
    return getRandomArrayEntry(
        filterByFitValue(choices, 0, fits, misfits, excludedNames)
    );
};
