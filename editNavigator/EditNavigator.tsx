import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import {
    Add,
    AddCheck,
    ContentCreator,
    CreationRequest,
    Delete,
    UserMade,
} from '../classes/contentCreator/ContentCreator';
import { CreationQuality } from '../classes/contentCreator/CreationQuality';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { ContentFiller } from '../classes/contentFiller/ContentFiller';
import { Dismiss } from '../classes/dismissHandler/Dismiss';
import { DismissHandler } from '../classes/dismissHandler/dismissHandler';
import {
    getFitsFromStructure,
    StructuredTavernFits,
} from '../classes/idea/StructuredTavernFits';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { KeyChange } from '../classes/keyHandler/KeyHandlingTypes';
import {
    PatternChange,
    PatternHandler,
} from '../classes/patternHandler/PatternHandler';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import Icon from '../components/icons';
import { iconKeys } from '../components/icons/iconKeys';
import { Content } from '../mainNavigator/Content';
import { ContentTracker } from '../mainNavigator/ContentTracker';
import { ContentChange, TavernChange } from '../mainNavigator/TavernChange';
import { Describable, MinimalTavernData } from '../mainNavigator/TavernData';
import { UniverseMap } from '../mainNavigator/UniverseMap';
import { BasePrice } from '../scenes/menuScene/basePrice';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { MenuScene } from '../scenes/menuScene/MenuScene';
import { Offer } from '../scenes/menuScene/Offer';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { NameScene } from '../scenes/nameScene/NameScene';
import { Impression } from '../scenes/questScene/impressions/Impression';
import { QuestScene } from '../scenes/questScene/QuestScene';
import { getContentFromDeletion } from './getContent';
import { getCreationRequest } from './getCreationRequest';
import { getMultiRerollRequest } from './getMultiRerollRequest';
import { ContentLeftTest } from './getNewBannerDataAndIdeasLeft';
import { getReduceTarget } from './getReduceTarget';
import { testContentLeft } from './testContentLeft';
import { WeServe } from './WeServe';

const Tab = createBottomTabNavigator();

const INACTIVE_BOTTOM_BG = '#857256';
const ACTIVE_BOTTOM_BG = '#63481F';
const ACTIVE_BOTTOM_ICON_TINT = '#FFFFFF';
const INACTIVE_BOTTOM_ICON_TINT = '#F4EADB';
const tabBarOptions = {
    inactiveBackgroundColor: INACTIVE_BOTTOM_BG,
    activeBackgroundColor: ACTIVE_BOTTOM_BG,
    activeTintColor: ACTIVE_BOTTOM_ICON_TINT,
    inactiveTintColor: INACTIVE_BOTTOM_ICON_TINT,
};
const getIconKey = (routeName: string) => {
    switch (routeName) {
        case 'Name': {
            return iconKeys.sign;
        }
        case 'Drinks': {
            return iconKeys.beer;
        }
        case 'Food': {
            return iconKeys.food;
        }
        default: {
            return iconKeys.quest;
        }
    }
};

export interface IBanners {
    [WeServe.food]: BannerData;
    [WeServe.drinks]: BannerData;
    [WeServe.impressions]: BannerData;
}
const DEFAULT_BANNER: BannerData = { emptyCategories: [], isVisible: false };
const DEFAULT_BANNERS: IBanners = {
    [WeServe.food]: DEFAULT_BANNER,
    [WeServe.drinks]: DEFAULT_BANNER,
    [WeServe.impressions]: DEFAULT_BANNER,
};
const getPowerFitAdjustment = (
    fitting: StructuredTavernFits
): StructuredTavernFits => {
    if (fitting.powerFit) {
        return fitting;
    } else {
        const allFits = getFitsFromStructure(fitting);
        const powerFitIsImplied = allFits.length === 1;
        const powerFitChange: Pick<StructuredTavernFits, 'powerFit'> =
            powerFitIsImplied ? { powerFit: allFits[0] } : {};
        return { ...fitting, ...powerFitChange };
    }
};

export const EditNavigator = (props: {
    onDataChange: (newData: TavernChange) => void;
    tavern: MinimalTavernData;
    tracker: ContentTracker;
}) => {
    const convertToAddCheck = (deletion: Delete): AddCheck => {
        switch (deletion.isAbout) {
            case WeServe.impressions:
                return { ...deletion, added: deletion[deletion.isAbout] };
            case WeServe.drinks:
                return { ...deletion, added: deletion[deletion.isAbout] };
            default:
                return { ...deletion, added: deletion[deletion.isAbout] };
        }
    };
    const impliedFitting = getPowerFitAdjustment(props.tavern.fitting);
    const creator = new ContentCreator(props.tavern.universe);
    const filler = new ContentFiller(props.tavern.universe);
    const [contentLeft, setContentLeft] = useState(
        testContentLeft(
            DEFAULT_BANNERS,
            props.tavern.fitting,
            creator,
            props.tavern,
            {
                keys: new KeyHandler(props.tavern),
                pattern: new PatternHandler(props.tavern),
            }
        )
    );

    const buyOffer = (offer: Offer) => {
        props.onDataChange({
            boughtOffers: [...props.tavern.boughtOffers, offer],
        });
    };
    const getBannersByDelete = (
        deleted: Demand
        ): Pick<ContentLeftTest, 'bannerData'> => {
        const olderBanner = contentLeft.bannerData[deleted.isAbout];
        const newEmptyCategories = olderBanner.emptyCategories.filter(
            (category) => category !== deleted.category
            );
            const newBannerData: BannerData = {
                ...olderBanner,
                emptyCategories: newEmptyCategories,
            };
            const newBanners = {
                ...contentLeft.bannerData,
                [deleted.isAbout]: newBannerData,
            };
            return { bannerData: newBanners };
        };
        const handleReduce = (
            deletions: string[],
            rerolls: string[],
            demand: Demand,
            removedUniverses: (FantasyKeys | 'isUserMade')[]
            ) => {
                const deletionTarget = getReduceTarget(props.tavern, demand);
                const deletion = creator.multiDelete(
                    deletions,
                    deletionTarget,
                    props.tracker.keys,
                    props.tracker.pattern
                    );
                    const oldQuality = contentLeft.ideasLeft[demand.isAbout].get(
                        demand.category
                        );
                        if (!oldQuality) {
                            throw Error('CategoryQualityNotFound');
                        }
                        const qualityMightImprove = oldQuality !== CreationQuality.HIGH;
                        
                        const contentNeedsUpdate =
                        qualityMightImprove &&
                        removedUniverses.includes(props.tavern.universe[demand.category]);
                        const bannerChanges = contentNeedsUpdate
                        ? getBannersByDelete(demand)
                        : {};
                        const ideaLeftChanges = contentNeedsUpdate
                        ? qualityChangesByDelete(deletion)
                        : {};
                        const remainingContent = getContentFromDeletion(props.tavern, deletion);
                        const rerollRequest = getMultiRerollRequest(remainingContent, demand, {
                            ...deletion,
                            dismiss: props.tracker.dismiss,
                        });
                        // newDismiss can be updated+cloned BEFORE we see the new additions by reroll!
                        // This is completely different with newKeys and newPatterns, they depend on the reroll result and have to be updated step by step
                        // Feel free to create updated newDismiss in .multiReroll (similar to newPatterns, newKeys), but remember that this is not necessary
                        const newDismiss = props.tracker.dismiss.updatedClone(demand.isAbout,{ unpleasant: rerolls, unwanted: deletions })
                        const reroll = creator.multiReroll(
                            impliedFitting,
                            rerolls,
                            rerollRequest,
                            newDismiss.getUnwanted(rerollRequest.isAbout),
                            newDismiss.getUnpleasant(rerollRequest.isAbout)
                            );
                            const contentChange: ContentChange = {
                                [reroll.isAbout]: reroll.rerolled,
                                newKeys: reroll.keys,
                                newPattern: reroll.pattern,
                                newDismiss
                                };
                                props.onDataChange(contentChange);
                                setContentLeft({
                                    ...contentLeft,
                                    ...bannerChanges,
                                    ...ideaLeftChanges,
                                });
    };
    const handleBasePrice = (newPrices: BasePrice) => {
        props.onDataChange({ prices: newPrices });
    };
    
    const handleAdd = (
        add: Demand,
        mainFilter?: number,
        additionFilter?: number
        ) => {
            const request: CreationRequest = getCreationRequest(
                add,
                props.tavern,
                props.tracker,
                mainFilter,
                additionFilter
                );
        const creation = creator.addRandomCreation(impliedFitting, request);
        const qualityLeft = creator.contentQualityLeft(
            impliedFitting,
            creation
        );
        invokeAdd(creation, qualityLeft);
    };

    const invokeAdd = (creation: Add, qualityLeft: CreationQuality) => {
        if (!creation.newCreationAdded) {
            console.log('__ADDING WAS INVOKED WITH EMPTY CREATION___');
        } else {
            const tavernChanges: ContentChange = {
                [creation.isAbout]: creation.added,
                newKeys: creation.keys,
                newPattern: creation.pattern,
                newDismiss: props.tracker.dismiss,
            };
            const bannerMightAppear = qualityLeft === CreationQuality.NONE;
            const bannerChanges = bannerMightAppear
                ? getBannersByAdd(creation, true)
                : {};
            const qualityLeftIsOptimal = qualityLeft === CreationQuality.HIGH;
            const qualityMap = qualityLeftIsOptimal
                ? {}
                : qualityChangesByAdd(creation, qualityLeft);
            setContentLeft({
                ...contentLeft,
                ...bannerChanges,
                ...qualityMap,
            });

            props.onDataChange(tavernChanges);
        }
    };
    const handleNewFits = (newFitting: StructuredTavernFits) => {
        const newContentLeft = testContentLeft(
            contentLeft.bannerData,
            newFitting,
            creator,
            props.tavern,
            props.tracker
        );
        setContentLeft(newContentLeft);
        props.onDataChange({ fitting: newFitting });
    };
    const handleNewName = (name: string) => {
        props.onDataChange({ name: name });
    };

    const handleEdit = (request: UserMade, previousName?: string) => {
        const newAsset = creator.createUserMade(request);
        if (previousName) {
            const newContent: ContentChange = {
                [newAsset.isAbout]: props.tavern[newAsset.isAbout].map(
                    (asset: { name: string }) =>
                        asset.name === previousName ? newAsset.edited : asset
                ),
                newKeys: props.tracker.keys,
                newPattern: props.tracker.pattern,
                newDismiss: props.tracker.dismiss,
            };
            props.onDataChange(newContent);
        } else {
            const newContent: ContentChange = {
                [newAsset.isAbout]: [
                    ...props.tavern[newAsset.isAbout],
                    newAsset.edited,
                ],
                newKeys: props.tracker.keys,
                newPattern: props.tracker.pattern,
                newDismiss: props.tracker.dismiss,
            };
            props.onDataChange(newContent);
        }
    };
    const getBannersByAdd = (
        add: Demand,
        nothingLeft: boolean
    ): Pick<ContentLeftTest, 'bannerData'> => {
        const oldBanners = { ...contentLeft.bannerData };
        const newBanners = {
            [WeServe.drinks]: oldBanners.drink,
            [WeServe.food]: oldBanners.food,
            [WeServe.impressions]: oldBanners.impression,
        };
        const newEmptyCategories = contentLeft.bannerData[
            add.isAbout
        ].emptyCategories.concat(nothingLeft ? add.category : []);
        newBanners[add.isAbout].emptyCategories = newEmptyCategories;
        newBanners[add.isAbout].isVisible = nothingLeft;
        return { bannerData: newBanners };
    };
    const getBannerClosing = (isAbout: WeServe) => () => {
        const oldBanners = { ...contentLeft.bannerData };
        oldBanners[isAbout].isVisible = false;
        const newContentLeft = { ...contentLeft, bannerData: oldBanners };
        setContentLeft(newContentLeft);
    };
    const qualityChangesByDelete = (
        deletion: Delete
    ): Pick<ContentLeftTest, 'ideasLeft'> => {
        const oldMaps = { ...contentLeft.ideasLeft };
        const newMap = new Map<Describable, CreationQuality>(
            oldMaps[deletion.isAbout]
        );
        const newQuality = creator.contentQualityLeft(
            props.tavern.fitting,
            convertToAddCheck(deletion)
        );
        newMap.set(deletion.category, newQuality);
        oldMaps[deletion.isAbout] = newMap;
        return { ideasLeft: oldMaps };
    };
    const qualityChangesByAdd = (
        demand: Demand,
        qualityLeft: CreationQuality
    ): Pick<ContentLeftTest, 'ideasLeft'> => {
        const oldMaps = { ...contentLeft.ideasLeft };
        const newMap = new Map<Describable, CreationQuality>(
            oldMaps[demand.isAbout]
        );
        newMap.set(demand.category, qualityLeft);
        oldMaps[demand.isAbout] = newMap;
        return { ideasLeft: oldMaps };
    };
    const getRevertedTracker = (isAbout: WeServe) => {
        const overwrittenContent = props.tavern[isAbout];
        const keys = getRevertedKeys(isAbout, overwrittenContent);
        const pattern = getRevertedPatterns(isAbout, overwrittenContent);
        const dismiss = props.tracker.dismiss.clone();
        return { keys, pattern, dismiss };
    };
    const getRevertedKeys = (
        isAbout: WeServe,
        overwrittenContent: Offer[] | Impression[]
    ) => {
        const keyUndoing: KeyChange[] & { type: 'Delete' }[] =
            overwrittenContent.map((item) => {
                return { oldKeys: item.keys, type: 'Delete', isAbout };
            });
        const revertedKeys = props.tracker.keys.multiUpdateClone(keyUndoing);
        return revertedKeys;
    };
    const getRevertedPatterns = (
        isAbout: WeServe,
        overwrittenContent: Offer[] | Impression[]
    ) => {
        const directPatterns: PatternChange[] & { type: 'Add' }[] =
            overwrittenContent.map((item) => {
                return { newPatterns: item.patterns, type: 'Add', isAbout };
            });
        const impliedPatterns = overwrittenContent.flatMap(
            (item) => item.impliedPatterns
        );
        const clonedPatterns = props.tracker.pattern.multiUpdateClone([]);
        clonedPatterns.multiRevert([...directPatterns, ...impliedPatterns]);
        const revertedPatterns = clonedPatterns;
        return revertedPatterns;
    };

    const onContentFilling = (isAbout: WeServe | 'ALL') => {
        let contentChange: Partial<Content>;
        if (isAbout === 'ALL') {
            contentChange = filler.randomContent(impliedFitting);
        } else {
            const revertedTrackers = getRevertedTracker(isAbout);

            contentChange = filler.randomChapter(
                impliedFitting,
                isAbout,
                revertedTrackers.keys,
                props.tracker.pattern
            ).chapter;
        }

        const newContent = {
            ...props.tavern,
            ...contentChange,
        };
        const newKeys = new KeyHandler(newContent);
        const newPattern = new PatternHandler(newContent);
        const newDismiss = new DismissHandler();
        const change: TavernChange = {
            ...newContent,
            newKeys,
            newPattern,
            newDismiss,
        };
        const newContentLeft = testContentLeft(
            contentLeft.bannerData,
            props.tavern.fitting,
            creator,
            newContent,
            { keys: newKeys, pattern: newPattern }
        );
        setContentLeft(newContentLeft);
        props.onDataChange(change);
    };

    const setUniverse = (universe: UniverseMap) => {
        const newCreator = new ContentCreator(universe);
        setContentLeft(
            testContentLeft(
                contentLeft.bannerData,
                impliedFitting,
                newCreator,
                props.tavern,
                props.tracker
            )
        );
        props.onDataChange({ universe });
    };

    return (
        <Tab.Navigator
            tabBarOptions={tabBarOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const iconName = getIconKey(route.name);
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="Name"
                children={() => (
                    <NameScene
                        name={props.tavern.name}
                        fitsForDisplay={props.tavern.fitting}
                        fitsForReroll={impliedFitting}
                        handleNewName={handleNewName}
                        handleNewFits={handleNewFits}
                        setUniverse={setUniverse}
                        universe={props.tavern.universe}
                        onCoverageTest={(category: Describable) =>
                            creator.testCoverage(category)
                        }
                        onContentFilling={onContentFilling}
                    ></NameScene>
                )}
            />
            <Tab.Screen
                name="Drinks"
                children={() => (
                    <MenuScene
                        startEdit={{
                            category: Drinkable.lemonade,
                            isAbout: WeServe.drinks,
                            name: '',
                            priceText: '10',
                            description: '',
                            isUserMade: true,
                        }}
                        buyOffer={buyOffer}
                        handleAdd={handleAdd}
                        offersBought={props.tavern.boughtOffers}
                        fitting={props.tavern.fitting}
                        isAbout={WeServe.drinks}
                        handleEdit={handleEdit}
                        offers={props.tavern[WeServe.drinks]}
                        onDataChange={props.onDataChange}
                        qualityLeft={contentLeft.ideasLeft.drink}
                        basePrice={props.tavern.prices}
                        bannerData={contentLeft.bannerData[WeServe.drinks]}
                        closeBanner={getBannerClosing(WeServe.drinks)}
                        handleReduce={handleReduce}
                    ></MenuScene>
                )}
            />
            <Tab.Screen
                name="Food"
                children={() => (
                    <MenuScene
                        startEdit={{
                            category: Eatable.mainDish,
                            isAbout: WeServe.food,
                            name: '',
                            priceText: '10',
                            description: '',
                            isUserMade: true,
                        }}
                        buyOffer={buyOffer}
                        handleAdd={handleAdd}
                        handleReduce={handleReduce}
                        handleEdit={handleEdit}
                        offersBought={props.tavern.boughtOffers}
                        fitting={props.tavern.fitting}
                        isAbout={WeServe.food}
                        offers={props.tavern[WeServe.food]}
                        onDataChange={props.onDataChange}
                        qualityLeft={contentLeft.ideasLeft.food}
                        basePrice={props.tavern.prices}
                        bannerData={contentLeft.bannerData[WeServe.food]}
                        closeBanner={getBannerClosing(WeServe.food)}
                    ></MenuScene>
                )}
            />
            <Tab.Screen
                name="Notes"
                children={() => (
                    <QuestScene
                        basePrice={props.tavern.prices}
                        impressions={props.tavern[WeServe.impressions]}
                        banner={contentLeft.bannerData[WeServe.impressions]}
                        handleAdd={handleAdd}
                        handleReduce={handleReduce}
                        handleEdit={handleEdit}
                        handleBasePrice={handleBasePrice}
                        qualityLeft={contentLeft.ideasLeft.impression}
                        closeBanner={getBannerClosing(WeServe.impressions)}
                    ></QuestScene>
                )}
            />
        </Tab.Navigator>
    );
};
