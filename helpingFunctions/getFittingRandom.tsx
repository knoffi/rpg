import { Adjective, association } from "../classes/Adjectives";
import { Substantive } from "../classes/Substantive";
import { TavernProduct } from "../classes/TavernProduct";

const choiceParams = { minDifference: 1 };

export type category = Adjective | Substantive | TavernProduct;

const getDistributionValue = (fitHits: number, misfitHits: number) => {
  return 1 + 5 * fitHits - misfitHits;
};

export const getFittingRandom = (
  choices: category[],
  fits: association[],
  misfits: association[],
  excludedNames: string[]
): category => {
  let distribution = [] as { product: category; value: number }[];
  choices.forEach((choiceProduct) => {
    const fitHits = choiceProduct.intersectingAssociation(fits);
    const misfitHits = choiceProduct.intersectingAssociation(misfits);
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
