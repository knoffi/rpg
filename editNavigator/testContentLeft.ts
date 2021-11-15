import { ContentCreator } from '../classes/contentCreator/ContentCreator';
import { Noticable } from '../classes/idea/Noticable';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { MinimalTavernData } from '../mainNavigator/TavernData';
import { IBanners } from './EditNavigator';
import {
    ContentLeftTest,
    getAllNewBannerDataAndOffersLeft,
} from './getNewBannerDataAndIdeasLeft';
import { WeServe } from './WeServe';

export const testContentLeft = (
    oldBanners: IBanners,
    newFitting: StructuredTavernFits,
    creator: ContentCreator,
    oldContent: Pick<
        MinimalTavernData,
        WeServe.drinks | WeServe.food | WeServe.impressions
    >
): ContentLeftTest => {
    const result = getAllNewBannerDataAndOffersLeft(
        oldBanners,
        (category: Noticable) =>
            !creator.noNextCreationLeft(newFitting, {
                isAbout: WeServe.impressions,
                category,
                added: oldContent[WeServe.impressions],
            }),
        (category: Eatable) =>
            !creator.noNextCreationLeft(newFitting, {
                isAbout: WeServe.food,
                category,
                added: oldContent[WeServe.food],
            }),
        (category: Drinkable) =>
            !creator.noNextCreationLeft(newFitting, {
                isAbout: WeServe.drinks,
                category,
                added: oldContent[WeServe.drinks],
            })
    );
    return result;
};
