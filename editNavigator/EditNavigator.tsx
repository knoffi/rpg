import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import {
    Add,
    ContentCreator,
    CreationRequest,
    Delete,
    Reroll,
    UserMade,
} from '../classes/contentCreator/ContentCreator';
import { emptyKeys } from '../classes/contentCreator/emptyKeys';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { KeyChange, Keys } from '../classes/keyHandler/EMPTY_KEY_COUNT_ROW';
import { getFullKeys } from '../classes/keyHandler/getKeysFromContent';
import {
    PatternChange,
    PatternHandler,
} from '../classes/patternHandler/PatternHandler';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import Icon from '../components/icons';
import { iconKeys } from '../components/icons/iconKeys';
import {
    Describable,
    MinimalTavernData,
    TavernData,
} from '../mainNavigator/TavernData';
import { UniverseMap } from '../mainNavigator/UniverseMap';
import { BasePrice } from '../scenes/menuScene/basePrice';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { MenuScene } from '../scenes/menuScene/MenuScene';
import { Offer } from '../scenes/menuScene/Offer';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { NameScene } from '../scenes/nameScene/NameScene';
import { QuestScene } from '../scenes/questScene/QuestScene';
import { getCreationRequest } from './getCreationRequest';
import { ContentLeftTest } from './getNewBannerDataAndIdeasLeft';
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

export const EditNavigator = (props: {
    onDataChange: (newData: Partial<MinimalTavernData>) => void;
    tavern: MinimalTavernData;
}) => {
    const creator = new ContentCreator(props.tavern.universe);
    const fullKeys: Record<WeServe, Keys> = {
        [WeServe.drinks]: emptyKeys,
        [WeServe.food]: emptyKeys,
        [WeServe.impressions]: getFullKeys(props.tavern, WeServe.impressions),
    };

    const [contentLeft, setContentLeft] = useState(
        testContentLeft(
            DEFAULT_BANNERS,
            props.tavern.fitting,
            creator,
            props.tavern
        )
    );
    const [tracker, setTracker] = useState({
        patterns: new PatternHandler(props.tavern),
    });

    const updateTracker = (add?: Add | Reroll, deletion?: Delete | Reroll) => {
        const changes = [] as (KeyChange & PatternChange)[];
        if (add) {
            const changeByAdd: KeyChange & PatternChange = {
                ...add,
                type: 'Add',
            };
            changes.push(changeByAdd);
        }
        if (deletion) {
            const changeByDelete: KeyChange & PatternChange = {
                ...deletion,
                type: 'Delete',
            };
            changes.push(changeByDelete);
        }
        const patterns = tracker.patterns.multiUpdateClone(changes);
        setTracker({ patterns });
    };

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
    const handleReroll = (
        name: string,
        reroll: Demand,
        mainFilter?: number,
        additionFilter?: number
    ) => {
        const usedPatterns = tracker.patterns.getPatterns(reroll.isAbout);
        const request: CreationRequest = getCreationRequest(
            reroll,
            props.tavern,
            fullKeys[reroll.isAbout].main,
            fullKeys[reroll.isAbout].addition,
            usedPatterns,
            mainFilter,
            additionFilter
        );
        const rerolled = creator.rerollOneCreation(
            props.tavern.fitting,
            name,
            request
        );
        //TODO: give keyHandler (and patternHandler) to ContentCreator. This way, ContentCreator can delete keys (and patterns) of rerolled asset BEFORE choosing new asset (and then add keys of new asset)
        if (rerolled.isAbout === WeServe.impressions) {
            updateTracker(rerolled, rerolled);
        }
        props.onDataChange({ [rerolled.isAbout]: rerolled.oneRerolled });
    };
    const handleBasePrice = (newPrices: BasePrice) => {
        props.onDataChange({ prices: newPrices });
    };

    const handleAdd = (
        add: Demand,
        mainFilter?: number,
        additionFilter?: number
    ) => {
        const usedPatterns = tracker.patterns.getPatterns(add.isAbout);
        const request: CreationRequest = getCreationRequest(
            add,
            props.tavern,
            fullKeys[add.isAbout].main,
            fullKeys[add.isAbout].addition,
            usedPatterns,
            mainFilter,
            additionFilter
        );
        const creation = creator.addRandomCreation(
            props.tavern.fitting,
            request
        );
        const noNextCreation = creator.noNextCreationLeft(
            props.tavern.fitting,
            creation
        );
        invokeAdd(creation, noNextCreation);
    };

    const invokeAdd = (creation: Add, noNextCreation: boolean) => {
        if (!creation.newCreationAdded) {
            console.log('__ADDING WAS INVOKED WITH EMPTY CREATION___');
        } else {
            const assetChanges = { [creation.isAbout]: creation.added };
            const bannerChanges = noNextCreation
                ? getBannersByAdd(creation, true)
                : {};
            const ideaLeftChanges = noNextCreation
                ? getIdeasLeftByAdd(creation, false)
                : {};
            const tavernChanges: Partial<MinimalTavernData> = assetChanges;
            setContentLeft({
                ...contentLeft,
                ...bannerChanges,
                ...ideaLeftChanges,
            });

            props.onDataChange(tavernChanges);
        }
    };
    const handleNewFits = (newFitting: StructuredTavernFits) => {
        const newContentLeft = testContentLeft(
            contentLeft.bannerData,
            newFitting,
            creator,
            props.tavern
        );
        setContentLeft(newContentLeft);
        props.onDataChange({ fitting: newFitting });
    };
    const handleNewName = (name: string) => {
        props.onDataChange({ name: name });
    };
    const handleDelete = (
        name: string,
        deleted: Demand,
        key: FantasyKeys | 'isUserMade'
    ) => {
        //TODO: different behavior for deletes of user made ideas
        const deleteRequest =
            deleted.isAbout === WeServe.impressions
                ? {
                      isAbout: deleted.isAbout,
                      creations: props.tavern[deleted.isAbout],
                  }
                : {
                      isAbout: deleted.isAbout,
                      creations: props.tavern[deleted.isAbout],
                  };
        const deletion = creator.deleteCreation(name, deleteRequest);
        const categoryWasFullBefore = contentLeft.bannerData[
            deleted.isAbout
        ].emptyCategories.includes(deleted.category);

        //TODO: refactor into getContentLeft({"delete",deleted,fullBefore}|{"add",added})
        const contentNeedsUpdate =
            categoryWasFullBefore &&
            key === props.tavern.universe[deleted.category];
        const bannerChanges = contentNeedsUpdate
            ? getBannersByDelete(deleted)
            : {};
        const ideaLeftChanges = contentNeedsUpdate
            ? getIdeasLeftByDelete(deleted)
            : {};
        const tavernChanges = deletion;
        //TODO: add .newKeys and .newPatterns to DrinkAdd and FoodAdd
        if (deletion.isAbout === WeServe.impressions) {
            updateTracker(undefined, deletion);
        }
        props.onDataChange(tavernChanges);
        setContentLeft({
            ...contentLeft,
            ...bannerChanges,
            ...ideaLeftChanges,
        });
    };

    const handleEdit = (request: UserMade, previousName?: string) => {
        const newAsset = creator.createUserMade(request);
        if (previousName) {
            const newContent: Partial<TavernData> = {
                [newAsset.isAbout]: props.tavern[newAsset.isAbout].map(
                    (asset: { name: string }) =>
                        asset.name === previousName ? newAsset.edited : asset
                ),
            };
            props.onDataChange(newContent);
        } else {
            const newContent: Partial<TavernData> = {
                [newAsset.isAbout]: [
                    ...props.tavern[newAsset.isAbout],
                    newAsset.edited,
                ],
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
    const getIdeasLeftByDelete = (
        demand: Demand
    ): Pick<ContentLeftTest, 'ideasLeft'> => {
        const oldMaps = { ...contentLeft.ideasLeft };
        const newMap = new Map<Describable, boolean>(oldMaps[demand.isAbout]);
        newMap.set(demand.category, true);
        oldMaps[demand.isAbout] = newMap;
        return { ideasLeft: oldMaps };
    };
    const getIdeasLeftByAdd = (
        demand: Demand,
        ideaLeft: boolean
    ): Pick<ContentLeftTest, 'ideasLeft'> => {
        const oldMaps = { ...contentLeft.ideasLeft };
        const newMap = new Map<Describable, boolean>(oldMaps[demand.isAbout]);
        newMap.set(demand.category, ideaLeft);
        oldMaps[demand.isAbout] = newMap;
        return { ideasLeft: oldMaps };
    };

    const setUniverse = (universe: UniverseMap) => {
        const newCreator = new ContentCreator(universe);
        setContentLeft(
            testContentLeft(
                contentLeft.bannerData,
                props.tavern.fitting,
                newCreator,
                props.tavern
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
                        fitting={props.tavern.fitting}
                        handleNewName={handleNewName}
                        handleNewFits={handleNewFits}
                        setUniverse={setUniverse}
                        universe={props.tavern.universe}
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
                        handleReroll={handleReroll}
                        offersBought={props.tavern.boughtOffers}
                        fitting={props.tavern.fitting}
                        isAbout={WeServe.drinks}
                        handleEdit={handleEdit}
                        offers={props.tavern[WeServe.drinks]}
                        onDataChange={props.onDataChange}
                        offersLeft={contentLeft.ideasLeft.drink}
                        basePrice={props.tavern.prices}
                        bannerData={contentLeft.bannerData[WeServe.drinks]}
                        handleDelete={handleDelete}
                        closeBanner={getBannerClosing(WeServe.drinks)}
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
                        handleReroll={handleReroll}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        offersBought={props.tavern.boughtOffers}
                        fitting={props.tavern.fitting}
                        isAbout={WeServe.food}
                        offers={props.tavern[WeServe.food]}
                        onDataChange={props.onDataChange}
                        offersLeft={contentLeft.ideasLeft.food}
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
                        fitting={props.tavern.fitting}
                        basePrice={props.tavern.prices}
                        impressions={props.tavern[WeServe.impressions]}
                        banner={contentLeft.bannerData[WeServe.impressions]}
                        handleAdd={handleAdd}
                        handleDelete={handleDelete}
                        handleReroll={handleReroll}
                        handleEdit={handleEdit}
                        handleBasePrice={handleBasePrice}
                        noticablesLeft={contentLeft.ideasLeft.impression}
                        closeBanner={getBannerClosing(WeServe.food)}
                    ></QuestScene>
                )}
            />
        </Tab.Navigator>
    );
};
