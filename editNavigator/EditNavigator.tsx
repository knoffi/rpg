import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import Icon from '../components/icons';
import { iconKeys } from '../components/icons/iconKeys';
import { TavernData } from '../mainNavigator/TavernData';
import { WeServe } from '../scenes/menuScene/addRandomDrink';
import { Offer } from '../scenes/menuScene/menuEnums';
import { MenuScene } from '../scenes/menuScene/MenuScene';
import { NameScene } from '../scenes/nameScene/NameScene';
import { IImpression } from '../scenes/questScene/impressions/IImpression';
import { QuestScene } from '../scenes/questScene/QuestScene';
import { getAllNewBannerDataAndOffersLeft } from './getNewBannerDataAndIdeasLeft';

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
    //TODO: can be improved/made efficient
    const buyOffer = (offer: Offer) => {
        props.onDataChange({
            boughtOffers: [...props.tavern.boughtOffers, offer],
        });
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
                        offersBought={props.tavern.boughtOffers}
                        fitting={props.tavern.fitting}
                        isAbout={WeServe.drinks}
                        offers={oldDrinks}
                        onDataChange={props.onDataChange}
                        offersLeft={props.tavern.ideasLeft.drink}
                        basePrice={props.tavern.prices}
                        bannerData={oldBanner.drink}
                        getImpliedChanges={(
                            newDrinks?: Offer[],
                            newDishes?: Offer[]
                        ) => {
                            return getAllNewBannerDataAndOffersLeft(
                                props.tavern.fitting,
                                {
                                    drinks: newDrinks || oldDrinks,
                                    dishes: newDishes || oldDishes,
                                    impressions: oldImpressions,
                                },
                                {
                                    drink: oldBanner.drink,
                                    food: oldBanner.food,
                                    impression: oldBanner.impression,
                                }
                            );
                        }}
                    ></MenuScene>
                )}
            />
            <Tab.Screen
                name="Food"
                children={() => (
                    <MenuScene
                        buyOffer={buyOffer}
                        offersBought={props.tavern.boughtOffers}
                        fitting={props.tavern.fitting}
                        isAbout={WeServe.food}
                        offers={oldDishes}
                        onDataChange={props.onDataChange}
                        offersLeft={props.tavern.ideasLeft.food}
                        basePrice={props.tavern.prices}
                        bannerData={oldBanner.food}
                        getImpliedChanges={(
                            newDrinks?: Offer[],
                            newDishes?: Offer[]
                        ) => {
                            return getAllNewBannerDataAndOffersLeft(
                                props.tavern.fitting,
                                {
                                    drinks: newDrinks || oldDrinks,
                                    dishes: newDishes || oldDishes,
                                    impressions: oldImpressions,
                                },
                                {
                                    drink: oldBanner.drink,
                                    food: oldBanner.food,
                                    impression: oldBanner.impression,
                                }
                            );
                        }}
                    ></MenuScene>
                )}
            />
            <Tab.Screen
                name="Notes"
                //needs a getImpliedChanges
                children={() => (
                    <QuestScene
                        fitting={props.tavern.fitting}
                        basePrice={props.tavern.prices}
                        onDataChange={props.onDataChange}
                        impressions={props.tavern.impressions}
                        banner={oldBanner.impression}
                        noticablesLeft={props.tavern.ideasLeft.impression}
                        getImpliedChanges={(newImpressions?: IImpression[]) => {
                            const test = getAllNewBannerDataAndOffersLeft(
                                props.tavern.fitting,
                                {
                                    drinks: oldDrinks,
                                    dishes: oldDishes,
                                    impressions:
                                        newImpressions || oldImpressions,
                                },
                                oldBanner
                            );
                            return test;
                        }}
                    ></QuestScene>
                )}
            />
        </Tab.Navigator>
    );
};
