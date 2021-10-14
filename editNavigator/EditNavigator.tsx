import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import {
    Add,
    ContentCreator,
    CreationRequest,
} from '../classes/contentCreator/ContentCreator';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import Icon from '../components/icons';
import { iconKeys } from '../components/icons/iconKeys';
import { Describable, TavernData } from '../mainNavigator/TavernData';
import { BasePrice } from '../scenes/menuScene/basePrice';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { MenuScene } from '../scenes/menuScene/MenuScene';
import { Offer } from '../scenes/menuScene/Offer';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { NameScene } from '../scenes/nameScene/NameScene';
import { getFullKeys } from '../scenes/questScene/getFullKeys';
import { getUsedPatterns } from '../scenes/questScene/getUsedPatterns';
import { QuestScene } from '../scenes/questScene/QuestScene';
import { getAllNewBannerDataAndOffersLeft } from './getNewBannerDataAndIdeasLeft';
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
    const [fullKeys, setFullKeys] = useState(
        getFullKeys(props.tavern[WeServe.impressions])
    );
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
        const request: CreationRequest = getCreationRequest(
            reroll,
            props.tavern,
            fullKeys.first,
            fullKeys.second,
            patterns,
            mainFilter,
            additionFilter
        );
        const rerolled = creator.rerollOneCreation(
            props.tavern.fitting,
            name,
            request
        );
        props.onDataChange({ [rerolled.isAbout]: rerolled.oneRerolled });
    };
    const handleBasePrice = (newPrices: BasePrice) => {
        props.onDataChange({ prices: newPrices });
    };

    //TODO: extract keys into EditNavigator, build
    // keys = useState( {[WeServe.impressions]:{first:AssetKeys,second:AssetKeys}}, ... } )
    // patterns = useState( {[WeServe.drinks]:{first:AssetKeys,second:AssetKeys}}, ... )

    const handleAdd = (
        add: Demand,
        mainFilter?: number,
        additionFilter?: number
    ) => {
        const request: CreationRequest = getCreationRequest(
            add,
            props.tavern,
            fullKeys.first,
            fullKeys.second,
            patterns,
            mainFilter,
            additionFilter
        );
        const creation = creator.addRandomCreation(
            props.tavern.fitting,
            request
        );
        //TODO: get updated keys and patterns from creation
        const noNextCreation = creator.noNextCreationLeft(
            props.tavern.fitting,
            creation
        );
        invokeAdd(creation, noNextCreation);
    };

    const invokeAdd = (creation: Add, noNextCreation: boolean) => {
        if (!creation.new) {
            console.log('__ADDING WAS INVOKED WITH EMPTY CREATION___');
        }
        const oldAssets = props.tavern[WeServe.drinks];
        const newOffers = [...oldAssets, creation.new];
        const assetChanges = { [creation.isAbout]: newOffers };
        const bannerChanges = noNextCreation
            ? getBannersByAdd(creation, true)
            : {};
        const ideaLeftMapChanges = noNextCreation
            ? getIdeaLeftMapByAdd(creation, false)
            : {};
        const tavernChanges: Partial<TavernData> = {
            ...assetChanges,
            ...bannerChanges,
            ...ideaLeftMapChanges,
        };

        props.onDataChange(tavernChanges);
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
        const offerChanges = creator.deleteCreation(name, deleteRequest);
        const categoryWasFullBefore = props.tavern.bannerData[
            deleted.isAbout
        ].emptyCategories.includes(deleted.category);
        const bannerChanges = categoryWasFullBefore
            ? getBannersByDelete(deleted)
            : {};
        const ideaLeftMapChanges = categoryWasFullBefore
            ? getIdeaLeftMapByDelete(deleted)
            : {};
        const tavernChanges = {
            ...bannerChanges,
            ...offerChanges,
            ...ideaLeftMapChanges,
        };
        props.onDataChange(tavernChanges);
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
    const getIdeaLeftMapByDelete = (demand: Demand) => {
        const oldMaps = { ...props.tavern.ideasLeft };
        const newMap = new Map<Describable, boolean>(oldMaps[demand.isAbout]);
        newMap.set(demand.category, true);
        oldMaps[demand.isAbout] = newMap;
        return { ideasLeft: oldMaps };
    };
    const getIdeaLeftMapByAdd = (demand: Demand, ideaLeft: boolean) => {
        const oldMaps = { ...props.tavern.ideasLeft };
        const newMap = new Map<Describable, boolean>(oldMaps[demand.isAbout]);
        newMap.set(demand.category, ideaLeft);
        oldMaps[demand.isAbout] = newMap;
        return { ideasLeft: oldMaps };
    };
    const oldBanner = props.tavern.bannerData;
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
                        onDataChange={props.onDataChange}
                        fitting={props.tavern.fitting}
                        getImpliedChanges={(newFitting: StructuredTavernFits) =>
                            getAllNewBannerDataAndOffersLeft(
                                newFitting,
                                {
                                    drinks: oldDrinks,
                                    dishes: oldDishes,
                                    impressions: oldImpressions,
                                },
                                {
                                    drink: oldBanner.drink,
                                    food: oldBanner.food,
                                    impression: oldBanner.impression,
                                }
                            )
                        }
                    ></NameScene>
                )}
            />
            <Tab.Screen
                name="Drinks"
                children={() => (
                    <MenuScene
                        buyOffer={buyOffer}
                        handleAdd={handleAdd}
                        handleReroll={handleReroll}
                        offersBought={props.tavern.boughtOffers}
                        fitting={props.tavern.fitting}
                        isAbout={WeServe.drinks}
                        offers={oldDrinks}
                        onDataChange={props.onDataChange}
                        offersLeft={props.tavern.ideasLeft.drink}
                        basePrice={props.tavern.prices}
                        bannerData={oldBanner.drink}
                        handleDelete={handleDelete}
                        setBannerInvisible={setBannerInvisible(WeServe.drinks)}
                    ></MenuScene>
                )}
            />
            <Tab.Screen
                name="Food"
                children={() => (
                    <MenuScene
                        buyOffer={buyOffer}
                        handleAdd={handleAdd}
                        handleReroll={handleReroll}
                        handleDelete={handleDelete}
                        offersBought={props.tavern.boughtOffers}
                        fitting={props.tavern.fitting}
                        isAbout={WeServe.food}
                        offers={oldDishes}
                        onDataChange={props.onDataChange}
                        offersLeft={props.tavern.ideasLeft.food}
                        basePrice={props.tavern.prices}
                        bannerData={oldBanner.food}
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
                        banner={oldBanner.impression}
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
