import {
    CreationRequest,
    MultiRerollRequest,
} from '../classes/contentCreator/ContentCreator';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { PatternHandler } from '../classes/patternHandler/PatternHandler';
import { Content } from '../mainNavigator/Content';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { getCreationRequest } from './getCreationRequest';

export const getMultiRerollRequest = (
    content: Content,
    reroll: Demand,
    tracker: { keys: KeyHandler; pattern: PatternHandler },
    mainFilter?: number,
    additionFilter?: number
) => {
    const dullRequest: CreationRequest = getCreationRequest(
        reroll,
        content,
        [],
        [],
        [],
        mainFilter,
        additionFilter
    );
    //NOTE: spreaded tracker may override dullRequest, if tracker from outside is tavern
    const request: MultiRerollRequest = {
        ...dullRequest,
        keys: tracker.keys,
        pattern: tracker.pattern,
    };
    return request;
};
