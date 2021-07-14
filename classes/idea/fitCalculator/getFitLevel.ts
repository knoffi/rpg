import { AssetKey } from '../AssetKey/AssetKey';
import { DescriptionAsset } from '../DescriptionAsset';
import { StructuredTavernFits } from '../StructuredTavernFits';
import { assetFitsToTavern } from './assetFitsToTavern';
import { FitLevel } from './FitLevel';
import { powerFitTest } from './powerFitCheck';

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
    const regularCheck = assetFitsToTavern(
        tavernFits,
        asset,
        isExcludedByName,
        probabilityFilter
    );
    if (keyCheck && powerFitCheck && regularCheck) {
        return FitLevel.high;
    } else {
        if (keyCheck && regularCheck) {
            return FitLevel.medium;
        } else {
            if (regularCheck) {
                return FitLevel.low;
            } else {
                return FitLevel.bad;
            }
        }
    }
};
