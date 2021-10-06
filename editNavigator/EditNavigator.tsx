import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import Icon from '../components/icons';
import { iconKeys } from '../components/icons/iconKeys';
import { Describable, TavernData } from '../mainNavigator/TavernData';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { MenuScene } from '../scenes/menuScene/MenuScene';
import { Offer } from '../scenes/menuScene/Offer';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { NameScene } from '../scenes/nameScene/NameScene';
import { IImpression } from '../scenes/questScene/impressions/IImpression';
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

    const handleOfferAdd = (
        newOffer: Offer,
        add: Demand,
        noNextOffer: boolean
    ) => {
        const oldOffers =
            add.isAbout === WeServe.food
                ? props.tavern.dishes
                : props.tavern.drinks;
        const newOffers = [...oldOffers, newOffer];
        const offerChanges =
            add.isAbout === WeServe.food
                ? { dishes: newOffers }
                : { drinks: newOffers };
        const bannerChanges = noNextOffer ? getBannersByAdd(add, true) : {};
        const ideaLeftMapChanges = noNextOffer
            ? getIdeaLeftMapByAdd(add, false)
            : {};
        const tavernChanges: Partial<TavernData> = {
            ...offerChanges,
            ...bannerChanges,
            ...ideaLeftMapChanges,
        };

        props.onDataChange(tavernChanges);
    };
    const handleOfferDelete = (removedOffer: String, deleted: Demand) => {
        //TODO: different behavior for deletes of user made ideas
        const newOffers = (
            deleted.isAbout === WeServe.food
                ? props.tavern.dishes
                : props.tavern.drinks
        ).filter((offer) => offer.product.name !== removedOffer);
        const offerChanges =
            deleted.isAbout === WeServe.food
                ? { dishes: newOffers }
                : { drinks: newOffers };
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
    const oldDrinks = props.tavern.drinks;
    const oldDishes = props.tavern.dishes;
    const oldImpressions = props.tavern.impressions;

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
                        handleAdd={handleOfferAdd}
                        offersBought={props.tavern.boughtOffers}
                        fitting={props.tavern.fitting}
                        isAbout={WeServe.drinks}
                        offers={oldDrinks}
                        onDataChange={props.onDataChange}
                        offersLeft={props.tavern.ideasLeft.drink}
                        basePrice={props.tavern.prices}
                        bannerData={oldBanner.drink}
                        handleDelete={handleOfferDelete}
                        setBannerInvisible={setBannerInvisible(WeServe.drinks)}
                    ></MenuScene>
                )}
            />
            <Tab.Screen
                name="Food"
                children={() => (
                    <MenuScene
                        buyOffer={buyOffer}
                        handleAdd={handleOfferAdd}
                        offersBought={props.tavern.boughtOffers}
                        fitting={props.tavern.fitting}
                        isAbout={WeServe.food}
                        offers={oldDishes}
                        onDataChange={props.onDataChange}
                        offersLeft={props.tavern.ideasLeft.food}
                        basePrice={props.tavern.prices}
                        bannerData={oldBanner.food}
                        handleDelete={handleOfferDelete}
                        setBannerInvisible={setBannerInvisible(WeServe.drinks)}
                    ></MenuScene>
                )}
            />
            <Tab.Screen
                name="Notes"
                children={() => (
                    <QuestScene
                        fitting={props.tavern.fitting}
                        basePrice={props.tavern.prices}
                        onDataChange={props.onDataChange}
                        impressions={props.tavern.impressions}
                        banner={oldBanner.impression}
                        noticablesLeft={props.tavern.ideasLeft.impression}
                        getImpliedChanges={(newImpressions?: IImpression[]) =>
                            getAllNewBannerDataAndOffersLeft(
                                props.tavern.fitting,
                                {
                                    drinks: oldDrinks,
                                    dishes: oldDishes,
                                    impressions:
                                        newImpressions || oldImpressions,
                                },
                                oldBanner
                            )
                        }
                    ></QuestScene>
                )}
            />
        </Tab.Navigator>
    );
};
