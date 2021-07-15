import { association } from '../../association';
import { DescriptionAsset } from '../DescriptionAsset';

export const powerFitTest = (
    powerFit: association,
    asset: DescriptionAsset
) => {
    const needs = asset.needs || [];
    const needsOne = asset.needsOne || [];
    const ownedPowerFits = asset.powerFits || [];

    if (
        powerFit === association.thief &&
        (asset.worksForAllCriminals || asset.worksForThiefs)
    ) {
        return true;
    }
    if (
        powerFit === association.assasine &&
        (asset.worksForAllCriminals || asset.worksForAssasines)
    ) {
        return true;
    }
    if (
        powerFit === association.prostitute &&
        (asset.worksForAllCriminals || asset.worksForBrothel)
    ) {
        return true;
    }
    return (
        ownedPowerFits.includes(powerFit) ||
        needs.includes(powerFit) ||
        needsOne.includes(powerFit)
    );
};
