import { AssetKey } from '../AssetKey/AssetKey';
import { DescriptionAsset } from '../DescriptionAsset';
import { Pattern } from '../Patterns/Pattern';
import { StructuredTavernFits } from '../StructuredTavernFits';
import { getFitLevel } from './getFitLevel';

export const sufficesFitLevel = (
    fitLevel: number,
    tavernFits: StructuredTavernFits,
    asset: DescriptionAsset,
    isExcludedByName?: (name: string) => boolean,
    applyPowerFit?: boolean,
    probabilityFilter?: number,
    isExcludedByKey?: (key: AssetKey) => boolean,
    patterns = [] as Pattern[],
    patternBonusForFree = false
) => {
    return (
        getFitLevel(
            tavernFits,
            asset,
            isExcludedByName,
            applyPowerFit,
            probabilityFilter,
            isExcludedByKey,
            patterns,
            patternBonusForFree
        ) >= fitLevel
    );
};
