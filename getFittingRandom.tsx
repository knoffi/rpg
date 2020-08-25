import { Adjective } from "./Adjectives";
import { Substantive } from "./Substantive";
import { TavernProduct } from "./TavernProduct";

export const getFittingRandom = (
  choices: any[],
  fits: any[],
  misfits: any[],
  currentChoice: any,
  previousChoice: any
): Adjective | Substantive | TavernProduct => {
  let test = choices[Math.floor(Math.random() * choices.length)];
  while (
    !test.isFit(fits, misfits, 0, 0) ||
    test.name === currentChoice ||
    test.name === previousChoice
  ) {
    test = choices[Math.floor(Math.random() * choices.length)];
  }
  return test;
};
