import { CreationRequest } from '../classes/contentCreator/ContentCreator';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { MinimalTavernData } from '../mainNavigator/TavernData';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { WeServe } from './WeServe';

export function getCreationRequest(
    add: Demand,
    tavern: Pick<
        MinimalTavernData,
        WeServe.drinks | WeServe.food | WeServe.impressions
    >,
    fullFirstKeys: AssetKey[],
    fullSecondKeys: AssetKey[],
    patterns?: Pattern[],
    mainFilter?: number,
    additionFilter?: number
): CreationRequest {
    return add.isAbout === WeServe.impressions
        ? {
              ...add,
              oldAssets: tavern[add.isAbout],
              fullFirstKeys,
              fullSecondKeys,
              patterns,
              mainFilter,
              additionFilter,
          }
        : {
              ...add,
              oldAssets: tavern[add.isAbout],
              fullFirstKeys,
              fullSecondKeys,
          };
}
