import {
    ContentCreator,
    Profile,
} from '../classes/contentCreator/ContentCreator';
import { CreationQuality } from '../classes/contentCreator/creationQuality';
import { Noticable } from '../classes/idea/Noticable';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { Content } from '../mainNavigator/Content';
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
    oldContent: Content,
    profile: Profile
): ContentLeftTest => {
    const isLeft = (check: CreationQuality) => CreationQuality.NONE !== check;
    const contentLeft = getAllNewBannerDataAndOffersLeft(
        oldBanners,
        (category: Noticable) =>
            isLeft(
                creator.contentQualityLeft(newFitting, {
                    isAbout: WeServe.impressions,
                    category,
                    added: oldContent[WeServe.impressions],
                    ...profile,
                })
            ),
        (category: Eatable) =>
            isLeft(
                creator.contentQualityLeft(newFitting, {
                    isAbout: WeServe.food,
                    category,
                    added: oldContent[WeServe.food],
                    ...profile,
                })
            ),
        (category: Drinkable) =>
            isLeft(
                creator.contentQualityLeft(newFitting, {
                    isAbout: WeServe.drinks,
                    category,
                    added: oldContent[WeServe.drinks],
                    ...profile,
                })
            )
    );
    return contentLeft;
};
