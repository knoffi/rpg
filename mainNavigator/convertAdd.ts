import { Add, CreationRequest } from '../classes/contentCreator/ContentCreator';
import { WeServe } from '../editNavigator/WeServe';
// TODO: test this, since I always forget about it
export function convertAdd(
    add: Add,
    mainFilter?: number,
    additionFilter?: number
): CreationRequest {
    const unwanted: string[] = [];
    const unpleasant: string[] = [];
    return add.isAbout === WeServe.impressions
        ? {
              ...add,
              oldAssets: add.added,
              mainFilter,
              additionFilter,
              unwanted,
              unpleasant,
          }
        : { ...add, oldAssets: add.added, unwanted, unpleasant };
}
