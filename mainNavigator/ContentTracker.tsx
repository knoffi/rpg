import { DismissHandler } from '../classes/dismissHandler/dismissHandler';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { PatternHandler } from '../classes/patternHandler/PatternHandler';

export type ContentTracker = {
    dismiss: DismissHandler;
    keys: KeyHandler;
    pattern: PatternHandler;
};
