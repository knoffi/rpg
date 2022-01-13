import { association, isClassAssociation } from '../../association';
import { AssetKey } from '../AssetKey/AssetKey';
import { DescriptionAsset } from '../DescriptionAsset';
import { Pattern } from '../Patterns/Pattern';
import { StructuredTavernFits } from '../StructuredTavernFits';
import { assetFitsToTavern } from './assetFitsToTavern';
import { powerFitTest } from './powerFitCheck';

const KEY_BONUS = 1000;
const PATTERN_BONUS = 0.5;
const POWER_FIT_BONUS = 100;
const SPECIALS_TRULY_FULFILLED_BONUS = 3;
const SPECIALS_OVERRIDE_FULFILLED_BONUS = 2;
const SPECIALS_WEAKLY_FULFILLED_BONUS = 1;
const NO_SPECIALS_FULFILLED_BONUS = 0;
export const BEST_FIT_LEVEL = (tavernPatterns = 10) =>
    KEY_BONUS +
    POWER_FIT_BONUS +
    SPECIALS_TRULY_FULFILLED_BONUS +
    tavernPatterns * PATTERN_BONUS;
export const BEST_SPECIALS_WEAKLY_LEVEL = (tavernPatterns = 10) =>
    KEY_BONUS +
    POWER_FIT_BONUS +
    SPECIALS_WEAKLY_FULFILLED_BONUS +
    tavernPatterns * PATTERN_BONUS;
export const BEST_POWERLESS_FIT_LEVEL = (tavernPatterns = 10) =>
    KEY_BONUS + SPECIALS_TRULY_FULFILLED_BONUS + tavernPatterns * PATTERN_BONUS;
export const KEY_REDUNDANCE_WITH_POWERFIT =
    SPECIALS_WEAKLY_FULFILLED_BONUS + POWER_FIT_BONUS;
export const MINIMAL_PASS_FIT_LEVEL = 3;
export const WORST_FIT_LEVEL = 0;
export const getFitLevel = (
    tavernFits: StructuredTavernFits,
    asset: DescriptionAsset,
    isExcludedByName?: (name: string) => boolean,
    applyPowerFit?: boolean,
    probabilityFilter?: number,
    isExcludedByKey?: (key: AssetKey) => boolean,
    tavernPatterns?: Pattern[],
    patternBonusForFree?: boolean
) => {
    //  NOTE: specialOverride and specialWeakly imply powerFitCheck!
    //
    // A*       pattern , keyCheck, powerFitCheck, regularCheck, specialsTruly ,      1103,+ x * 5
    // A                  keyCheck, powerFitCheck, regularCheck, specialsTruly ,      1103
    // B*       pattern , keyCheck, (powerFitCheck), regularCheck, specialsOverride , 1102 + x * 5
    // B                  keyCheck, (powerFitCheck), regularCheck, specialsOverride , 1102
    // C*       pattern , keyCheck, regularCheck, (powerFitCheck), specialsWeakly ,   1101 + x * 5
    // C                  keyCheck, regularCheck, (powerFitCheck), specialsWeakly ,   1101
    // D*       pattern , keyCheck, regularCheck, specialsTruly ,                     1003 + x * 5
    // D                  keyCheck, regularCheck, specialsTruly ,                     1003
    // E*       pattern , regularCheck, powerFitCheck, specialsTruly ,                 103 + x * 5
    // E                  regularCheck, powerFitCheck, specialsTruly ,                 103
    // F*       pattern , regularCheck, (powerFitCheck), specialsOverride ,            102 + x * 5
    // F                  regularCheck, (powerFitCheck), specialsOverride ,            102
    // G*       pattern , regularCheck, (powerFitCheck), specialsWeakly                101 + x * 5
    // G                  regularCheck, (powerFitCheck), specialsWeakly                101
    // H*       pattern , regularCheck, specialsTruly                                    3 + x * 5
    // H                  regularCheck, specialsTruly                                    3
    // I                  !regularCheck || specialsNotFulfilled                          0
    const regularCheck = assetFitsToTavern(
        tavernFits,
        asset,
        isExcludedByName,
        probabilityFilter
    );
    if (!regularCheck) {
        return WORST_FIT_LEVEL;
    } else {
        const powerFitCheck =
            !tavernFits.powerFit ||
            !applyPowerFit ||
            powerFitTest(tavernFits.powerFit, asset);
        const specialsBonus = getBonusFromSpecials(
            asset,
            tavernFits.powerFit,
            tavernFits.special,
            powerFitCheck
        );
        if (specialsBonus === NO_SPECIALS_FULFILLED_BONUS) {
            return WORST_FIT_LEVEL;
        } else {
            const keyCheck = checkKey(asset.key, asset.keys, isExcludedByKey);
            const patternBonus = getPatternBonus(
                asset.patterns,
                tavernPatterns,
                patternBonusForFree
            );
            const keyBonus = keyCheck ? KEY_BONUS : 0;
            const powerFitBonus = powerFitCheck ? POWER_FIT_BONUS : 0;
            return keyBonus + powerFitBonus + specialsBonus + patternBonus;
        }
    }
};

function getPatternBonus(
    assetPatterns = [] as Pattern[],
    tavernPatterns = [] as Pattern[],
    patternBonusForFree = false
) {
    if (patternBonusForFree) {
        return PATTERN_BONUS * tavernPatterns.length;
    }
    if (tavernPatterns.length === 0 || assetPatterns.length === 0) {
        return 0;
    }
    const assetPatternFits = assetPatterns.reduce(
        (bigSum, assetPattern) =>
            bigSum +
            tavernPatterns.reduce(
                (sum, tavernPattern) =>
                    tavernPattern === assetPattern ? sum + PATTERN_BONUS : sum,
                0
            ),
        0
    );
    return assetPatternFits;
}
function getBonusFromSpecials(
    asset: DescriptionAsset,
    powerFit?: association,
    special?: association,
    powerFitFulfilled?: boolean
) {
    if (!special) {
        return SPECIALS_TRULY_FULFILLED_BONUS;
    } else {
        const specialTruelyFulfilled = checkTruelyFulfilled(asset, special);
        if (specialTruelyFulfilled) {
            return SPECIALS_TRULY_FULFILLED_BONUS;
        } else {
            const powerFitIsClass = powerFit && isClassAssociation(powerFit);
            const specialIsPlayerClass =
                special === association.thief ||
                special === association.assasine;
            if (powerFitIsClass && powerFitFulfilled && specialIsPlayerClass) {
                return SPECIALS_OVERRIDE_FULFILLED_BONUS;
            } else {
                if (powerFitFulfilled) {
                    return SPECIALS_WEAKLY_FULFILLED_BONUS;
                }
                return NO_SPECIALS_FULFILLED_BONUS;
            }
        }
    }
}

const checkTruelyFulfilled = (
    asset: DescriptionAsset,
    special: association
) => {
    const specialFulfilledByRange =
        asset.specialsRange && asset.specialsRange.includes(special);
    if (specialFulfilledByRange) {
        return true;
    }
    switch (special) {
        case association.prostitute:
            return asset.worksForBrothel || asset.worksForAllCriminals
                ? true
                : false;
        case association.thief:
            return asset.worksForThiefs || asset.worksForAllCriminals
                ? true
                : false;
        case association.assasine:
            return asset.worksForAssasines || asset.worksForAllCriminals
                ? true
                : false;

        default:
            console.log(special + ' is not a special association!');
            return true;
    }
};

const checkKey = (
    key?: AssetKey,
    keyList?: AssetKey[],
    isExcludedByKey?: (key: AssetKey) => boolean
) => {
    if (!isExcludedByKey) {
        return true;
    } else {
        const singleKeyCheck = !key || !isExcludedByKey(key);
        const keyListCheck =
            !keyList || !keyList.some((item) => isExcludedByKey(item));
        return singleKeyCheck && keyListCheck;
    }
};
