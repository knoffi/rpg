import { Add, CreationRequest } from '../classes/contentCreator/ContentCreator';
import { WeServe } from '../editNavigator/WeServe';
// TODO: test this, since I always forget about it
export function convertAdd(
    add: Add,
    mainFilter?: number,
    additionFilter?: number
): CreationRequest {
    return add.isAbout === WeServe.impressions
        ? {
              ...add,
              oldAssets: add.added,
              mainFilter,
              additionFilter,
          }
        : { ...add, oldAssets: add.added };
}
