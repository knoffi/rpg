import { AssetKey } from '../AssetKey/AssetKey';
import { DescriptionAsset } from '../DescriptionAsset';
import { StructuredTavernFits } from '../StructuredTavernFits';
import { FitLevel } from './FitLevel';
import { getMinFitLevel } from './fitLevelComparing';
import { getFitLevel } from './getFitLevel';

export const sufficesFitLevel = (
    fitLevel: FitLevel,
    tavernFits: StructuredTavernFits,
    asset: DescriptionAsset,
    isExcludedByName?: (name: string) => boolean,
    applyPowerFit?: boolean,
    probabilityFilter?: number,
    isExcludedByKey?: (key: AssetKey) => boolean
) => {
    return (
        getMinFitLevel(
            getFitLevel(
                tavernFits,
                asset,
                isExcludedByName,
                applyPowerFit,
                probabilityFilter,
                isExcludedByKey
            ),
            fitLevel
        ) === fitLevel
    );
};
