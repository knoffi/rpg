import {
    ContentCreator,
    Profile,
} from '../classes/contentCreator/ContentCreator';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { Content } from '../mainNavigator/Content';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
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
    const contentTester = getContentTester(
        creator,
        newFitting,
        profile,
        oldContent
    );
    const contentLeft = getAllNewBannerDataAndOffersLeft(
        oldBanners,
        contentTester
    );
    return contentLeft;
};

const getContentTester =
    (
        creator: ContentCreator,
        newFitting: StructuredTavernFits,
        profile: Profile,
        oldContent: Content
    ) =>
    (demand: Demand) => {
        switch (demand.isAbout) {
            case WeServe.impressions:
                return creator.contentQualityLeft(newFitting, {
                    ...demand,
                    added: oldContent[demand.isAbout],
                    ...profile,
                });
            case WeServe.drinks:
                return creator.contentQualityLeft(newFitting, {
                    ...demand,
                    added: oldContent[demand.isAbout],
                    ...profile,
                });

            default:
                return creator.contentQualityLeft(newFitting, {
                    ...demand,
                    added: oldContent[demand.isAbout],
                    ...profile,
                });
        }
    };
