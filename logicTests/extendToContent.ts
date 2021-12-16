import { WeServe } from '../editNavigator/WeServe';
import { Content } from '../mainNavigator/Content';

export const extendToContent = (someContent: Partial<Content>): Content => {
    return {
        [WeServe.drinks]: someContent.drink || [],
        [WeServe.food]: someContent.food || [],
        [WeServe.impressions]: someContent.impression || [],
    };
};
