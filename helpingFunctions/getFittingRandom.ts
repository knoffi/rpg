import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { ITavernAsset } from './ITavernAsset';

const CHOICE_PARAMS = { minDifference: 1 };
const WEIGTH_OF_FITS = 2;
const WEIGTH_OF_MISFITS = 1;
const HIGH_FIT_CHANCE = 0.4;
const MEDIUM_FIT_CHANCE = 0.3;
const LOW_FIT_CHANCE = 0.2;
const MINIMUM_FIT_CHANCE = 0.1;

export function getRandomArrayEntry<Type>(array: Type[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    if (randomIndex === array.length) {
        return array[0];
    }
    return array[randomIndex];
}

export const getFittingRandom = (
    choices: ITavernAsset[],
    fitting: StructuredTavernFits,
    excludedNames: string[]
): ITavernAsset => {
    console.log('___getFittingRandom is deprecated!___');
    return getRandomArrayEntry(choices);
};
