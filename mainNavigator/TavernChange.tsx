import { DismissHandler } from '../classes/dismissHandler/dismissHandler';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { PatternHandler } from '../classes/patternHandler/PatternHandler';
import { WeServe } from '../editNavigator/WeServe';
import { Content } from './Content';
import { MinimalTavernData } from './TavernData';

export type TavernChange =
    | ContentChange
    | Partial<
          Omit<
              MinimalTavernData,
              WeServe.drinks | WeServe.food | WeServe.impressions
          >
      >;

export type ContentChange = Partial<Content> & {
    newKeys: KeyHandler;
    newPattern: PatternHandler;
    newDismiss: DismissHandler;
};
