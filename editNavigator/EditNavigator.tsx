import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { association } from '../classes/Adjectives';
import {
    drinkCategory,
    foodCategory,
    menuCategory,
} from '../classes/TavernProduct';
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

const getBannerVisibility = (
    newFullOfferCategories: menuCategory[],
    oldBannerData: BannerData
) => {
    const newFullOfferCategoryExists =
        newFullOfferCategories.filter(
            (category) => !oldBannerData.emptyCategories.includes(category)
        ).length > 0;
    if (newFullOfferCategoryExists) {
        return true;
    }
    const noCategoryHasFullOffer = newFullOfferCategories.length === 0;
    if (noCategoryHasFullOffer) {
        return false;
    }
    return oldBannerData.isVisible;
};
const getFullOfferCategories = (
    fitting: { fits: association[]; misfits: association[] },
    newOffers: Offer[],
    isAbout: weServe
) => {
    const categories =
        isAbout === weServe.drinks ? drinkCategory : foodCategory;
    const result = (Object.values(categories) as menuCategory[]).filter(
        (category) => {
            return (
                getNewRandomDrinkOffer(
                    fitting.fits,
                    fitting.misfits,
                    category,
                    newOffers,
                    isAbout
                ).product.name === NothingLeftOffer.product.name
            );
        }
    );
    return result;
};

const getCategoryNotFullMap = (
    fullOfferCategories: menuCategory[],
    isAbout: weServe
) => {
    const categories =
        isAbout === weServe.drinks ? drinkCategory : foodCategory;
    return new Map(
        Object.values(categories).map((category) => [
            category,
            !fullOfferCategories.includes(category),
        ])
    );
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
        const fullOfferDrinkCategories = getFullOfferCategories(
            newFitting,
            newDrinks,
            weServe.drinks
        );
        const fullOfferFoodCategories = getFullOfferCategories(
            newFitting,
            newDishes,
            weServe.food
        );
        console.log(fullOfferFoodCategories);
        const drinkCategoriesLeft = getCategoryNotFullMap(
            fullOfferDrinkCategories,
            weServe.drinks
        );
        const foodCategoriesLeft = getCategoryNotFullMap(
            fullOfferFoodCategories,
            weServe.food
        );

        const newDrinkBannerVisible = getBannerVisibility(
            fullOfferDrinkCategories,
            props.tavern.drinkBannerData
        );
        const newFoodBannerVisible = getBannerVisibility(
            fullOfferFoodCategories,
            props.tavern.foodBannerData
        );

        return {
            drinkBannerData: {
                isVisible: newDrinkBannerVisible,
                emptyCategories: fullOfferDrinkCategories,
            } as BannerData,
            foodBannerData: {
                isVisible: newFoodBannerVisible,
                emptyCategories: fullOfferFoodCategories,
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
