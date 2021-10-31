import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import {
    Add,
    ContentCreator,
    CreationRequest,
    UserMade,
} from '../classes/contentCreator/ContentCreator';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../classes/idea/Noticable';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import Icon from '../components/icons';
import { iconKeys } from '../components/icons/iconKeys';
import { Describable, TavernData } from '../mainNavigator/TavernData';
import { BasePrice } from '../scenes/menuScene/basePrice';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { MenuScene } from '../scenes/menuScene/MenuScene';
import { Offer } from '../scenes/menuScene/Offer';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { NameScene } from '../scenes/nameScene/NameScene';
import { getUsedPatterns } from '../scenes/questScene/getUsedPatterns';
import { QuestScene } from '../scenes/questScene/QuestScene';
import {
    BannersAndTypesLeft,
    getAllNewBannerDataAndOffersLeft,
} from './getNewBannerDataAndIdeasLeft';
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
export const EditNavigator = (props: {
    onDataChange: (newData: Partial<TavernData>) => void;
    tavern: TavernData;
}) => {
    const creator = new ContentCreator();
    const keyHandler = new KeyHandler();
    const [patterns, setPatterns] = useState(
        getUsedPatterns(props.tavern[WeServe.impressions])
    );
    const buyOffer = (offer: Offer) => {
        props.onDataChange({
            boughtOffers: [...props.tavern.boughtOffers, offer],
        });
    };
    const getBannersByDelete = (deleted: Demand) => {
        const olderBanner = props.tavern.bannerData[deleted.isAbout];

        const newEmptyCategories = olderBanner.emptyCategories.filter(
            (category) => category !== deleted.category
        );
        const newBannerData: BannerData = {
            ...olderBanner,
            emptyCategories: newEmptyCategories,
        };
        const newBanners = {
            ...props.tavern.bannerData,
            [deleted.isAbout]: newBannerData,
        };
        return newBanners;
    };
    const handleReroll = (
        name: string,
        reroll: Demand,
        mainFilter?: number,
        additionFilter?: number
    ) => {
        const fullKeys = keyHandler.getFullKeys(reroll.isAbout);
        const request: CreationRequest = getCreationRequest(
            reroll,
            props.tavern,
            fullKeys.main,
            fullKeys.addition,
            patterns,
            mainFilter,
            additionFilter
        );
        const rerolled = creator.rerollOneCreation(
            props.tavern.fitting,
            name,
            request
        );
        //TODO: give keyHandler (and patternHandler) to ContentCreator. This way, ContentCreator can delete keys of rerolled asset BEFORE choosing new asset (and then add keys of new asset)
        if (rerolled.isAbout === WeServe.impressions) {
            keyHandler.update({
                ...rerolled,
                type: 'Add',
            });
            keyHandler.update({
                ...rerolled,
                type: 'Delete',
            });
            setPatterns(getUsedPatterns(rerolled.oneRerolled));
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
        const fullKeys = keyHandler.getFullKeys(add.isAbout);
        const request: CreationRequest = getCreationRequest(
            add,
            props.tavern,
            fullKeys.main,
            fullKeys.addition,
            patterns,
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
        if (creation.isAbout === WeServe.impressions) {
            keyHandler.update({
                isAbout: add.isAbout,
                type: 'Add',
                newKeys: creation.newKeys,
            });
            setPatterns(getUsedPatterns(creation.added));
        }
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
            const ideaLeftMapChanges = noNextCreation
                ? getIdeasLeftByAdd(creation, false)
                : {};
            const tavernChanges: Partial<TavernData> = {
                ...assetChanges,
                ...bannerChanges,
                ...ideaLeftMapChanges,
            };

            props.onDataChange(tavernChanges);
        }
    };
    const handleNewFits = (newFitting: StructuredTavernFits) => {
        const bannerChanges = getNewIdeasLeft(newFitting);
        props.onDataChange({ ...bannerChanges, fitting: newFitting });
    };
    const handleNewName = (name: string) => {
        props.onDataChange({ name: name });
    };
    const getNewIdeasLeft = (
        newFitting = props.tavern.fitting
    ): BannersAndTypesLeft => {
        return getAllNewBannerDataAndOffersLeft(
            props.tavern.bannerData,
            (category: Noticable) =>
                !creator.noNextCreationLeft(newFitting, {
                    isAbout: WeServe.impressions,
                    category,
                    added: props.tavern[WeServe.impressions],
                }),
            (category: Eatable) =>
                !creator.noNextCreationLeft(props.tavern.fitting, {
                    isAbout: WeServe.food,
                    category,
                    added: props.tavern[WeServe.food],
                }),
            (category: Drinkable) =>
                !creator.noNextCreationLeft(newFitting, {
                    isAbout: WeServe.drinks,
                    category,
                    added: props.tavern[WeServe.drinks],
                })
        );
    };
    const handleDelete = (name: string, deleted: Demand) => {
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
        const assetChanges = creator.deleteCreation(name, deleteRequest);
        const categoryWasFullBefore = props.tavern.bannerData[
            deleted.isAbout
        ].emptyCategories.includes(deleted.category);
        const bannerChanges = categoryWasFullBefore
            ? getBannersByDelete(deleted)
            : {};
        const ideaLeftMapChanges = categoryWasFullBefore
            ? getIdeasLeftByDelete(deleted)
            : {};
        const tavernChanges = {
            ...bannerChanges,
            ...assetChanges,
            ...ideaLeftMapChanges,
        };
        if (assetChanges.isAbout === WeServe.impressions) {
            keyHandler.update({
                isAbout: assetChanges.isAbout,
                type: 'Delete',
                oldKeys: assetChanges.oldKeys,
            });
            setPatterns(getUsedPatterns(assetChanges.impression));
        }
        props.onDataChange(tavernChanges);
    };

    const handleEdit = (request: UserMade, previousName?: string) => {
        const newAsset = creator.createUserMade(request);
    };
    const getBannersByAdd = (add: Demand, nothingLeft: boolean) => {
        const oldBanners = { ...props.tavern.bannerData };
        const newBanners = {
            [WeServe.drinks]: oldBanners.drink,
            [WeServe.food]: oldBanners.food,
            [WeServe.impressions]: oldBanners.impression,
        };
        const newEmptyCategories = props.tavern.bannerData[
            add.isAbout
        ].emptyCategories.concat(nothingLeft ? add.category : []);
        newBanners[add.isAbout].emptyCategories = newEmptyCategories;
        newBanners[add.isAbout].isVisible = nothingLeft;
        return newBanners;
    };
    const setBannerInvisible = (isAbout: WeServe) => () => {
        const oldBanners = { ...props.tavern.bannerData };
        oldBanners[isAbout].isVisible = false;
        props.onDataChange({ bannerData: oldBanners });
    };
    const getIdeasLeftByDelete = (demand: Demand) => {
        const oldMaps = { ...props.tavern.ideasLeft };
        const newMap = new Map<Describable, boolean>(oldMaps[demand.isAbout]);
        newMap.set(demand.category, true);
        oldMaps[demand.isAbout] = newMap;
        return { ideasLeft: oldMaps };
    };
    const getIdeasLeftByAdd = (demand: Demand, ideaLeft: boolean) => {
        const oldMaps = { ...props.tavern.ideasLeft };
        const newMap = new Map<Describable, boolean>(oldMaps[demand.isAbout]);
        newMap.set(demand.category, ideaLeft);
        oldMaps[demand.isAbout] = newMap;
        return { ideasLeft: oldMaps };
    };
    const oldDrinks = props.tavern[WeServe.drinks];
    const oldDishes = props.tavern[WeServe.food];
    const oldImpressions = props.tavern[WeServe.impressions];

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
                        offers={oldDrinks}
                        onDataChange={props.onDataChange}
                        offersLeft={props.tavern.ideasLeft.drink}
                        basePrice={props.tavern.prices}
                        bannerData={props.tavern.bannerData[WeServe.drinks]}
                        handleDelete={handleDelete}
                        setBannerInvisible={setBannerInvisible(WeServe.drinks)}
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
                        offers={oldDishes}
                        onDataChange={props.onDataChange}
                        offersLeft={props.tavern.ideasLeft.food}
                        basePrice={props.tavern.prices}
                        bannerData={props.tavern.bannerData[WeServe.food]}
                        setBannerInvisible={setBannerInvisible(WeServe.food)}
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
                        banner={props.tavern.bannerData[WeServe.impressions]}
                        handleAdd={handleAdd}
                        handleDelete={handleDelete}
                        handleReroll={handleReroll}
                        handleBasePrice={handleBasePrice}
                        noticablesLeft={props.tavern.ideasLeft.impression}
                    ></QuestScene>
                )}
            />
        </Tab.Navigator>
    );
};
function getCreationRequest(
    add: Demand,
    tavern: TavernData,
    fullFirstKeys: AssetKey[],
    fullSecondKeys: AssetKey[],
    patterns: Pattern[] | undefined,
    mainFilter: number | undefined,
    additionFilter: number | undefined
): CreationRequest {
    return add.isAbout === WeServe.impressions
        ? {
              ...add,
              oldAssets: tavern[add.isAbout],
              fullFirstKeys,
              fullSecondKeys,
              patterns,
              mainFilter,
              additionFilter,
          }
        : { ...add, oldAssets: tavern[add.isAbout] };
}
