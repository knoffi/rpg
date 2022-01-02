import { WeServe } from '../../editNavigator/WeServe';
import { AssetKey } from '../idea/AssetKey/AssetKey';
import { Pattern } from '../idea/Patterns/Pattern';
import { PatternChange } from '../patternHandler/PatternHandler';

export class PatternConverter {
    private impliedPatterns: PatternChange[];
    private static impliedPatternsByAssetKey(
        key: AssetKey
    ): Omit<PatternChange & { type: 'Add' }, 'type'>[] {
        switch (key) {
            case AssetKey.WINE_mead:
                return [
                    {
                        isAbout: WeServe.impressions,
                        newPatterns: [Pattern.IMPRESSIONS_mead],
                    },
                ];
            case AssetKey.WINE_red:
                return [
                    {
                        isAbout: WeServe.impressions,
                        newPatterns: [Pattern.IMPRESSIONS_redWine],
                    },
                ];
            case AssetKey.WINE_white:
                return [
                    {
                        isAbout: WeServe.impressions,
                        newPatterns: [Pattern.IMPRESSIONS_whiteWine],
                    },
                ];
            case AssetKey.SPIRIT_whiskey:
                return [
                    {
                        isAbout: WeServe.impressions,
                        newPatterns: [Pattern.IMPRESSIONS_whiskey],
                    },
                ];
            case AssetKey.BEER_ale:
                return [
                    {
                        isAbout: WeServe.impressions,
                        newPatterns: [Pattern.IMPRESSIONS_ale],
                    },
                ];
            case AssetKey.BEER_porter:
                return [
                    {
                        isAbout: WeServe.impressions,
                        newPatterns: [Pattern.IMPRESSIONS_porter],
                    },
                ];
            case AssetKey.BEER_lager:
                return [
                    {
                        isAbout: WeServe.impressions,
                        newPatterns: [Pattern.IMPRESSIONS_lager],
                    },
                ];
            case AssetKey.SPIRIT_rum:
                return [
                    {
                        isAbout: WeServe.impressions,
                        newPatterns: [Pattern.IMPRESSIONS_rum],
                    },
                ];
            default:
                return [];
        }
    }
    private static impliedPatternsByAssetKeys(
        keys: AssetKey[]
    ): PatternChange[] {
        return keys.flatMap((key) =>
            PatternConverter.impliedPatternsByAssetKey(key).map((change) => {
                return { ...change, type: 'Add' };
            })
        );
    }
    constructor(material: AssetKey[]) {
        this.impliedPatterns =
            PatternConverter.impliedPatternsByAssetKeys(material);
    }
    getPatterns() {
        return this.impliedPatterns;
    }
}
