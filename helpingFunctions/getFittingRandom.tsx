import { Adjective, association } from "../classes/Adjectives";
import { Substantive } from "../classes/Substantive";
import { TavernProduct } from "../classes/TavernProduct";

const choiceParams = { minDifference: 1 };

export type category = Adjective | Substantive | TavernProduct;

const getDistributionValue = (fitHits: number, misfitHits: number) => {
  return 1 + 5 * fitHits - misfitHits;
};

export const getFittingRandomOlder = (
  choices: category[],
  fits: association[],
  misfits: association[],
  excludedNames: string[]
): category => {
  let distribution = [] as { product: category; value: number }[];
  choices.forEach((choiceProduct) => {
    const fitHits = countIntersections(choiceProduct, fits);
    const misfitHits = countIntersections(choiceProduct, misfits);
    if (!excludedNames.includes(choiceProduct.name)) {
      if (
        fitHits - misfitHits > choiceParams.minDifference ||
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
  distribution: { product: category; value: number }[]
) => {
  let count = 0;
  let arrayForRandomChoice = [] as category[];
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
  product: category,
  intersectingAssociations: association[]
) => {
  let count = 0;
  intersectingAssociations.forEach((association) => {
    if (!product.associations) {
      console.log(product);
    }
    if (product.associations.includes(association)) {
      count += 1;
    }
  });
  return count;
};

const calculateFitting = (
  product: category,
  fits: association[],
  misfits: association[]
) => {
  const value =
    countIntersections(product, fits) - countIntersections(product, misfits);
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
  choices: category[],
  value: number,
  fits: association[],
  misfits: association[],
  excludedNames: string[]
) => {
  return choices.filter((choice) => {
    return (
      !excludedNames.includes(choice.name) &&
      calculateFitting(choice, fits, misfits) === value
    );
  });
};

export const getFittingRandom = (
  choices: category[],
  fits: association[],
  misfits: association[],
  excludedNames: string[]
): category => {
  let fittingChoices: category[];
  let randomCase = Math.random();
  if (randomCase > 0.55) {
    fittingChoices = filterByFitValue(choices, 3, fits, misfits, excludedNames);
    if (fittingChoices.length > 0) {
      return getRandomArrayEntry(fittingChoices);
    }
  }
  if (randomCase > 0.2) {
    fittingChoices = filterByFitValue(choices, 2, fits, misfits, excludedNames);
    if (fittingChoices.length > 0) {
      return getRandomArrayEntry(fittingChoices);
    }
  }
  if (randomCase > 0.05) {
    fittingChoices = filterByFitValue(choices, 1, fits, misfits, excludedNames);
    if (fittingChoices.length > 0) {
      return getRandomArrayEntry(fittingChoices);
    }
  }
  return getRandomArrayEntry(
    filterByFitValue(choices, 0, fits, misfits, excludedNames)
  );
};
