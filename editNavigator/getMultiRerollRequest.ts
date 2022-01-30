import {
    CreationRequest,
    MultiRerollRequest,
} from '../classes/contentCreator/ContentCreator';
import { Content } from '../mainNavigator/Content';
import { ContentTracker } from '../mainNavigator/ContentTracker';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { getCreationRequest } from './getCreationRequest';

export const getMultiRerollRequest = (
    content: Content,
    reroll: Demand,
    tracker: ContentTracker,
    mainFilter?: number,
    additionFilter?: number
) => {
    const dullRequest: CreationRequest = getCreationRequest(
        reroll,
        content,
        tracker,
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
