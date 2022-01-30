import { CreationRequest } from '../classes/contentCreator/ContentCreator';
import { ContentTracker } from '../mainNavigator/ContentTracker';
import { MinimalTavernData } from '../mainNavigator/TavernData';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { WeServe } from './WeServe';

export function getCreationRequest(
    add: Demand,
    tavern: Pick<
        MinimalTavernData,
        WeServe.drinks | WeServe.food | WeServe.impressions
    >,
    tracker: ContentTracker,
    mainFilter?: number,
    additionFilter?: number
): CreationRequest {
    const unwanted = tracker.dismiss.getUnwanted(add.isAbout);
    const unpleasant = tracker.dismiss.getUnpleasant(add.isAbout);
    return add.isAbout === WeServe.impressions
        ? {
              ...add,
              keys: tracker.keys,
              pattern: tracker.pattern,
              oldAssets: tavern[add.isAbout],
              mainFilter,
              additionFilter,
              unwanted,
              unpleasant,
          }
        : {
              ...add,
              keys: tracker.keys,
              pattern: tracker.pattern,
              oldAssets: tavern[add.isAbout],
              unwanted,
              unpleasant,
          };
}
