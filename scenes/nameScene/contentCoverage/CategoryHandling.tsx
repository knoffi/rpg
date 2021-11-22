import { WeServe } from '../../../editNavigator/WeServe';
import { Describable } from '../../../mainNavigator/TavernData';
import { CoverageTest } from './CoverageTest';

export type CategoryHandling =
    | {
          isAbout: WeServe.impressions;
          onCategory: (category: Describable) => CoverageTest;
      }
    | {
          isAbout: WeServe.drinks;
          onCategory: (category: Describable) => CoverageTest;
      }
    | {
          isAbout: WeServe.food;
          onCategory: (category: Describable) => CoverageTest;
      };
export type CategoryButtonsProps = {
    showResult: (data: CoverageTest) => void;
} & CategoryHandling;
