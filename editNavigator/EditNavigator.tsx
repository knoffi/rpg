import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { association } from '../classes/Adjectives';
import Icon from '../components/icons';
import { iconKeys } from '../components/icons/iconKeys';
import { TavernData } from '../mainNavigator/TavernData';
import { Offer } from '../scenes/menuScene/menuEnums';
import { weServe } from '../scenes/menuScene/menuFunctions';
import { MenuScene } from '../scenes/menuScene/MenuScene';
import { NameScene } from '../scenes/nameScene/NameScene';
import { QuestScene } from '../scenes/questScene/QuestScene';
import { getNewBannerDataAndOffersLeft } from './getNewBannerDataAndOffersLeft';

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

    const oldDrinkBannerData = props.tavern.drinkBannerData;
    const oldFoodBannerData = props.tavern.foodBannerData;
    const oldDrinks = props.tavern.drinks;
    const oldDishes = props.tavern.dishes;

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
                        getImpliedChanges={(newFitting: {
                            fits: association[];
                            misfits: association[];
                        }) =>
                            getNewBannerDataAndOffersLeft(
                                newFitting,
                                oldDrinks,
                                oldDishes,
                                oldDrinkBannerData,
                                oldFoodBannerData
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
                        isAbout={weServe.drinks}
                        offers={props.tavern.drinks}
                        onDataChange={props.onDataChange}
                        offersLeft={props.tavern.drinksLeft}
                        basePrice={props.tavern.prices}
                        bannerData={props.tavern.drinkBannerData}
                        getImpliedChanges={(
                            newDrinks?: Offer[],
                            newDishes?: Offer[]
                        ) => {
                            return getNewBannerDataAndOffersLeft(
                                props.tavern.fitting,
                                newDrinks ? newDrinks : oldDrinks,
                                newDishes ? newDishes : oldDishes,
                                oldDrinkBannerData,
                                oldFoodBannerData
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
                        isAbout={weServe.food}
                        offers={props.tavern.dishes}
                        onDataChange={props.onDataChange}
                        offersLeft={props.tavern.dishesLeft}
                        basePrice={props.tavern.prices}
                        bannerData={props.tavern.foodBannerData}
                        getImpliedChanges={(
                            newDrinks?: Offer[],
                            newDishes?: Offer[]
                        ) => {
                            //change back
                            return getNewBannerDataAndOffersLeft(
                                props.tavern.fitting,
                                newDrinks ? newDrinks : oldDrinks,
                                newDishes ? newDishes : oldDishes,
                                oldDrinkBannerData,
                                oldFoodBannerData
                            );
                        }}
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
                    ></QuestScene>
                )}
            />
        </Tab.Navigator>
    );
};
