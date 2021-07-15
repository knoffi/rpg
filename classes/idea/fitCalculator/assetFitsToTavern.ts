import { association } from '../../association';
import { DescriptionAsset } from '../DescriptionAsset';
import { StructuredTavernFits } from '../StructuredTavernFits';
import { strongNeedsOneCheck } from './strongNeedsOneCheck';

export const assetFitsToTavern = (
    tavernFits: StructuredTavernFits,
    asset: DescriptionAsset,
    isExcludedByName?: (name: string) => boolean,
    probabilityFilter?: number
) => {
    const filteredByProbability =
        asset.probability &&
        probabilityFilter &&
        probabilityFilter > asset.probability;
    if (filteredByProbability) {
        return false;
    }
    const isDuplicate = isExcludedByName ? isExcludedByName(asset.name) : false;
    if (isDuplicate) {
        return false;
    }

    const tavernFitsArray = Object.values(tavernFits).filter(
        (entry) => entry
    ) as association[];
    if (
        tavernFitsArray.length === 0 &&
        !asset.worksForBrothel &&
        !asset.worksForThiefs &&
        !asset.worksForAssasines
    ) {
        return true;
    }
    const necessarities = asset.needs || [];
    const misfits = asset.misfits || [];
    const ownedPowerFits = asset.powerFits || [];
    //TODO: test if this still works, changed in first issue of #54
    const needsOne = asset.needsOne || [];
    const necessaritiesFulfilled = necessarities.every((necessaryFit) =>
        tavernFitsArray.includes(necessaryFit)
    );
    const noMisfitsInTavern = misfits.every(
        (misfit) => !tavernFitsArray.includes(misfit)
    );
    const needsOneFulfilled =
        needsOne.length === 0
            ? true
            : needsOne.some((replacableNecessarity) =>
                  tavernFitsArray.includes(replacableNecessarity)
              );

    const assetContainsTavernFits = asset.fitsTo
        ? tavernFitsArray.every(
              (fit) =>
                  fit === association.empty ||
                  necessarities.includes(fit) ||
                  asset.fitsTo!.includes(fit)
          )
        : true;
    const strongNeedsOneFulfilled = strongNeedsOneCheck(
        tavernFitsArray,
        tavernFits,
        asset.strongNeedsOne
    );
    const incomeIsFitting =
        !tavernFits.income ||
        !asset.incomeRange ||
        asset.incomeRange.includes(tavernFits.income);
    const landIsFitting =
        !tavernFits.land ||
        !asset.landRange ||
        asset.landRange.includes(tavernFits.land);
    const classIsFitting =
        !tavernFits.class ||
        !asset.classRange ||
        asset.classRange.includes(tavernFits.class);
    const raceIsFitting =
        !tavernFits.race ||
        !asset.raceRange ||
        asset.raceRange.includes(tavernFits.race);
    const specialIsFitting =
        !tavernFits.special ||
        !asset.specialsRange ||
        asset.specialsRange.includes(tavernFits.special);
    const nonSpecialCondition =
        assetContainsTavernFits &&
        necessaritiesFulfilled &&
        needsOneFulfilled &&
        incomeIsFitting &&
        landIsFitting &&
        classIsFitting &&
        raceIsFitting &&
        specialIsFitting &&
        noMisfitsInTavern &&
        strongNeedsOneFulfilled;
    switch (tavernFits.special) {
        case association.prostitute:
            return asset.worksForBrothel || asset.worksForAllCriminals
                ? nonSpecialCondition
                : false;
        case association.thief:
            return asset.worksForThiefs || asset.worksForAllCriminals
                ? nonSpecialCondition
                : false;
        case association.assasine:
            return asset.worksForAssasines || asset.worksForAllCriminals
                ? nonSpecialCondition
                : false;

        default:
            return nonSpecialCondition;
    }
};
