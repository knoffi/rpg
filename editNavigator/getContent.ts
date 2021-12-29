import { Delete, Reroll } from '../classes/contentCreator/ContentCreator';
import { Content } from '../mainNavigator/Content';
import { WeServe } from './WeServe';

export const getContentFromDeletion = (
    oldContent: Content,
    deletion: Delete
): Content => {
    switch (deletion.isAbout) {
        case WeServe.drinks:
            return { ...oldContent, [deletion.isAbout]: deletion.drink };
        case WeServe.food:
            return { ...oldContent, [deletion.isAbout]: deletion.food };
        default:
            return { ...oldContent, [deletion.isAbout]: deletion.impression };
    }
};
export const getContentChange = (
    reroll: Reroll
):
    | Pick<Content, WeServe.drinks>
    | Pick<Content, WeServe.food>
    | Pick<Content, WeServe.impressions> => {
    switch (reroll.isAbout) {
        case WeServe.drinks:
            return { [reroll.isAbout]: reroll.rerolled };
        case WeServe.food:
            return { [reroll.isAbout]: reroll.rerolled };
        default:
            return { [reroll.isAbout]: reroll.rerolled };
    }
};
