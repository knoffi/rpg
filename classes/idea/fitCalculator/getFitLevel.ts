import { association, isClassAssociation } from '../../association';
import { AssetKey } from '../AssetKey/AssetKey';
import { DescriptionAsset } from '../DescriptionAsset';
import { StructuredTavernFits } from '../StructuredTavernFits';
import { assetFitsToTavern } from './assetFitsToTavern';
import { FitLevel } from './FitLevel';
import { powerFitTest } from './powerFitCheck';
enum SpecialsFulfilled {
    truly = 'truly fulfilled',
    byOverride = 'only fulfilled by class powerfit override',
    byWeakOverride = 'only fulfilled by non-class powerfit override',
    not = 'special and powerfit not fulfilled',
}

export const getFitLevel = (
    tavernFits: StructuredTavernFits,
    asset: DescriptionAsset,
    isExcludedByName?: (name: string) => boolean,
    applyPowerFit?: boolean,
    probabilityFilter?: number,
    isExcludedByKey?: (key: AssetKey) => boolean
) => {
    const keyCheck =
        !asset.key || !isExcludedByKey || !isExcludedByKey(asset.key);
    const powerFitCheck =
        !tavernFits.powerFit ||
        !applyPowerFit ||
        powerFitTest(tavernFits.powerFit, asset);
    const specialsFulfilled = checkSpecials(
        asset,
        tavernFits.powerFit,
        tavernFits.special,
        powerFitCheck
    );
    const regularCheck = assetFitsToTavern(
        tavernFits,
        asset,
        isExcludedByName,
        probabilityFilter
    );
    if (specialsFulfilled === SpecialsFulfilled.truly) {
        if (keyCheck && powerFitCheck && regularCheck) {
            return FitLevel.high;
        } else {
            if (keyCheck && regularCheck) {
                return FitLevel.medium;
            }
            if (regularCheck) {
                return FitLevel.veryLow;
            } else {
                return FitLevel.bad;
            }
        }
    } else {
        if (
            specialsFulfilled === SpecialsFulfilled.byOverride &&
            regularCheck
        ) {
            if (keyCheck) {
                return FitLevel.mediumHigh;
            } else {
                return FitLevel.low;
            }
        } else {
            if (
                specialsFulfilled === SpecialsFulfilled.byWeakOverride &&
                regularCheck
            ) {
                if (keyCheck) {
                    return FitLevel.mediumLow;
                } else {
                    return FitLevel.extremelyLow;
                }
            } else {
                return FitLevel.bad;
            }
        }
    }
};
function checkSpecials(
    asset: DescriptionAsset,
    powerFit?: association,
    special?: association,
    powerFitFulfilled?: boolean
) {
    if (!special) {
        return SpecialsFulfilled.truly;
    } else {
        const specialTruelyFulfilled = checkTruelyFulfilled(asset, special);
        if (specialTruelyFulfilled) {
            return SpecialsFulfilled.truly;
        } else {
            // should this be extended to every power fit (income, land, race)?
            const powerFitIsClass = powerFit && isClassAssociation(powerFit);
            const specialIsPlayerClass =
                special === association.thief ||
                special === association.assasine;
            if (powerFitIsClass && powerFitFulfilled && specialIsPlayerClass) {
                return SpecialsFulfilled.byOverride;
            } else {
                if (powerFitFulfilled) {
                    return SpecialsFulfilled.byWeakOverride;
                }
                return SpecialsFulfilled.not;
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
            console.log('I wanted a special association!');
            return true;
    }
};
