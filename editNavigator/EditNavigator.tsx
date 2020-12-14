import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { association } from '../classes/Adjectives';
import { drinkCategory, foodCategory } from '../classes/TavernProduct';
import Icon from '../components/icons';
import { iconKeys } from '../components/icons/iconKeys';
import { TavernData } from '../mainNavigator/TavernData';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { NothingLeftOffer, Offer } from '../scenes/menuScene/menuEnums';
import {
    getNewRandomDrinkOffer,
    weServe,
} from '../scenes/menuScene/menuFunctions';
import { MenuScene } from '../scenes/menuScene/MenuScene';
import { NameScene } from '../scenes/nameScene/NameScene';
import { QuestScene } from '../scenes/questScene/QuestScene';

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

    const getNewBannerDataAndOffersLeft = (
        newFitting: { fits: association[]; misfits: association[] } = props
            .tavern.fitting,
        newDrinks: Offer[] = props.tavern.drinks,
        newDishes: Offer[] = props.tavern.dishes
    ) => {
        const soldOutDrinkCategories = [] as drinkCategory[];
        const soldOutFoodCategories = [] as foodCategory[];
        const drinkCategoriesLeft = new Map<drinkCategory, boolean>([]);
        const foodCategoriesLeft = new Map<foodCategory, boolean>([]);
        Object.values(drinkCategory).forEach((category) => {
            if (
                getNewRandomDrinkOffer(
                    newFitting.fits,
                    newFitting.misfits,
                    category,
                    newDrinks,
                    weServe.drinks
                ).product.name === NothingLeftOffer.product.name
            ) {
                soldOutDrinkCategories.push(category);
                drinkCategoriesLeft.set(category, false);
            } else {
                drinkCategoriesLeft.set(category, true);
            }
        });
        Object.values(foodCategory).forEach((category) => {
            if (
                getNewRandomDrinkOffer(
                    newFitting.fits,
                    newFitting.misfits,
                    category,
                    newDishes,
                    weServe.food
                ).product.name === NothingLeftOffer.product.name
            ) {
                soldOutFoodCategories.push(category);
                foodCategoriesLeft.set(category, false);
            } else {
                foodCategoriesLeft.set(category, true);
            }
        });
        let newDrinkBannerVisible = props.tavern.drinkBannerData.isVisible;
        let newFoodBannerVisible = props.tavern.foodBannerData.isVisible;
        soldOutDrinkCategories.forEach((soldOutCategory) => {
            if (
                !props.tavern.drinkBannerData.emptyCategories.includes(
                    soldOutCategory
                )
            ) {
                // new drinks are sold out!
                newDrinkBannerVisible = true;
            }
        });
        soldOutFoodCategories.forEach((soldOutCategory) => {
            if (
                !props.tavern.foodBannerData.emptyCategories.includes(
                    soldOutCategory
                )
            ) {
                // new dishes are sold out!
                newFoodBannerVisible = true;
            }
        });
        if (soldOutDrinkCategories.length === 0) {
            newDrinkBannerVisible = false;
        }
        if (soldOutFoodCategories.length === 0) {
            newFoodBannerVisible = false;
        }
        return {
            drinkBannerData: {
                isVisible: newDrinkBannerVisible,
                emptyCategories: soldOutDrinkCategories,
            } as BannerData,
            foodBannerData: {
                isVisible: newFoodBannerVisible,
                emptyCategories: soldOutFoodCategories,
            } as BannerData,
            drinksLeft: drinkCategoriesLeft,
            dishesLeft: foodCategoriesLeft,
        } as Partial<TavernData>;
    };
    return (
        <Tab.Navigator
            tabBarOptions={tabBarOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Name': {
                            iconName = iconKeys.sign;
                            break;
                        }
                        case 'Drinks': {
                            iconName = iconKeys.beer;
                            break;
                        }
                        case 'Food': {
                            iconName = iconKeys.food;
                            break;
                        }
                        default: {
                            iconName = iconKeys.quest;
                            break;
                        }
                    }
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
                        getImpliedChanges={getNewBannerDataAndOffersLeft}
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
                                undefined,
                                newDrinks,
                                newDishes
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
                            return getNewBannerDataAndOffersLeft(
                                undefined,
                                newDrinks,
                                newDishes
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
