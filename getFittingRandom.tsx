import { Adjective, association } from "./Adjectives";
import { Substantive } from "./Substantive";
import { TavernProduct } from "./TavernProduct";

const choiceParams = { fit: 1, misfit: 0 };

type category = Adjective | Substantive | TavernProduct;

export const getFittingRandom = (
  choices: category[],
  fits: association[],
  misfits: association[],
  excludedNames: string[]
): Adjective | Substantive | TavernProduct => {
  let infiniteLoopSave = 0;
  let infiniteLoopBound = getWorstCaseStatisticalBound(choices.length);
  let test = choices[Math.floor(Math.random() * choices.length)];
  while (
    !test.isFit(fits, misfits, choiceParams.fit, choiceParams.misfit) ||
    excludedNames.includes(test.name)
  ) {
    test = choices[Math.floor(Math.random() * choices.length)];
    infiniteLoopSave++;
    if (infiniteLoopSave > 10 * choices.length) {
      // console.log here for possible endless loop
      console.log("Schwierig, etwas passend zu finden...");
      console.log(10 * choices.length);
      return test;
    }
  }
  return test;
};

const getWorstCaseStatisticalBound = (length: number) => {
  if ((length = 1)) {
    return 1;
  }
  const worstMissChance = 1 - 1 / length;
  return Math.floor(Math.log(0.01) / Math.log(worstMissChance)) + 1;
};
