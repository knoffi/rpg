import {
    CreationRequest,
    Profile,
} from '../classes/contentCreator/ContentCreator';
import { MinimalTavernData } from '../mainNavigator/TavernData';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { WeServe } from './WeServe';

export function getCreationRequest(
    add: Demand,
    tavern: Pick<
        MinimalTavernData,
        WeServe.drinks | WeServe.food | WeServe.impressions
    >,
    profile: Profile,
    mainFilter?: number,
    additionFilter?: number
): CreationRequest {
    return add.isAbout === WeServe.impressions
        ? {
              ...add,
              keys: profile.keys,
              pattern: profile.pattern,
              oldAssets: tavern[add.isAbout],
              mainFilter,
              additionFilter,
          }
        : {
              ...add,
              keys: profile.keys,
              pattern: profile.pattern,
              oldAssets: tavern[add.isAbout],
          };
}
