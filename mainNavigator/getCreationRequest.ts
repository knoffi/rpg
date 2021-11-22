import { Add, CreationRequest } from '../classes/contentCreator/ContentCreator';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { WeServe } from '../editNavigator/WeServe';
// TODO: test this, since I always forget about it
export function getCreationRequest(
    add: Add,
    fullFirstKeys: AssetKey[],
    fullSecondKeys: AssetKey[],
    patterns?: Pattern[],
    mainFilter?: number,
    additionFilter?: number
): CreationRequest {
    return add.isAbout === WeServe.impressions
        ? {
              ...add,
              oldAssets: add.added,
              fullFirstKeys,
              fullSecondKeys,
              patterns,
              mainFilter,
              additionFilter,
          }
        : { ...add, oldAssets: add.added, fullFirstKeys, fullSecondKeys };
}
