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

const getFullOfferCategories = (
    newFitting: { fits: association[]; misfits: association[] },
    newOffers: Offer[],
    isAbout: weServe
) => {
    const categories =
        isAbout === weServe.drinks ? drinkCategory : foodCategory;
    return (Object.values(categories) as menuCategory[]).filter(
        (category) =>
            getNewRandomDrinkOffer(
                newFitting.fits,
                newFitting.misfits,
                category,
                newOffers,
                isAbout
            ).product.name === NothingLeftOffer.product.name
    );
};

export const EditNavigator = (props: {
    onDataChange: (newData: Partial<TavernData>) => void;
    tavern: TavernData;
}) => {
    const { onDataChange, tavern } = props;

    //TODO: can be improved/made efficient
    const buyOffer = (offer: Offer) => {
        onDataChange({
            boughtOffers: [...tavern.boughtOffers, offer],
        });
    };

    // GOAL: something similar to
    // const getNewBannerDataAndOffersLeft = (....) => {
    //     const drinkOffersLeft =getOffersLeft(..., DrinkEnum)
    //     const foodOffersLeft =getOffersLeft(..., FoodEnum)
    //     const drinkBanner = getDrinkBanner(drinkOffersLeft);
    //     const foodBanner = getFoodBanner(drinkOffersLeft);
    //     return {
    //         drinkOffersLeft,
    //         foodOffersLeft,
    //         drinkBanner,
    //         foodBanner
    //     }
    // }

    const getNewBannerDataAndOffersLeft = (
        newFitting: { fits: association[]; misfits: association[] } = props
            .tavern.fitting,
        newDrinks: Offer[] = tavern.drinks,
        newDishes: Offer[] = tavern.dishes
    ) => {
        const fullOffersDrinkCategories = getFullOfferCategories(
            newFitting,
            newDrinks,
            weServe.drinks
        );

        const drinkCategoriesLeft = new Map<drinkCategory, boolean>([]);

        // TODO generalize to allow food
        const getDrinkBannerVisible = () => {
            const newEmptyCategoryExists =
                fullOffersDrinkCategories.filter(
                    (fullOffersCategory) =>
                        !tavern.drinkBannerData.emptyCategories.includes(
                            fullOffersCategory
                        )
                ).length > 0;
            const allCategoriesAddable = fullOffersDrinkCategories.length === 0;

            if (newEmptyCategoryExists) return true;
            if (allCategoriesAddable) return false;
            return tavern.drinkBannerData.isVisible;
        };
        const newDrinkBannerVisible = getDrinkBannerVisible();

        const fullOffersFoodCategories = getFullOfferCategories(
            newFitting,
            newDishes,
            weServe.food
        );
        const foodCategoriesLeft = new Map<foodCategory, boolean>([]);
        Object.values(drinkCategory).forEach((category) => {
            const newOfferExists = !fullOffersDrinkCategories.includes(
                category
            );
            drinkCategoriesLeft.set(category, newOfferExists);
        });
        Object.values(foodCategory).forEach((category) => {
            const newOfferExists = !fullOffersFoodCategories.includes(category);
            foodCategoriesLeft.set(category, newOfferExists);
        });

        // TODO do similar as drink banner
        let newFoodBannerVisible = tavern.foodBannerData.isVisible;
        fullOffersFoodCategories.forEach((fullOffersCategory) => {
            if (
                !tavern.foodBannerData.emptyCategories.includes(
                    fullOffersCategory
                )
            ) {
                // new dishes are sold out!
                newFoodBannerVisible = true;
            }
        });
        if (fullOffersFoodCategories.length === 0) {
            newFoodBannerVisible = false;
        }

        return {
            drinkBannerData: {
                isVisible: newDrinkBannerVisible,
                emptyCategories: fullOffersDrinkCategories,
            } as BannerData,
            foodBannerData: {
                isVisible: newFoodBannerVisible,
                emptyCategories: fullOffersFoodCategories,
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
                        name={tavern.name}
                        onDataChange={onDataChange}
                        fitting={tavern.fitting}
                        getImpliedChanges={getNewBannerDataAndOffersLeft}
                    ></NameScene>
                )}
            />
            <Tab.Screen
                name="Drinks"
                children={() => (
                    <MenuScene
                        buyOffer={buyOffer}
                        offersBought={tavern.boughtOffers}
                        fitting={tavern.fitting}
                        isAbout={weServe.drinks}
                        offers={tavern.drinks}
                        onDataChange={onDataChange}
                        offersLeft={tavern.drinksLeft}
                        basePrice={tavern.prices}
                        bannerData={tavern.drinkBannerData}
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
                        offersBought={tavern.boughtOffers}
                        fitting={tavern.fitting}
                        isAbout={weServe.food}
                        offers={tavern.dishes}
                        onDataChange={onDataChange}
                        offersLeft={tavern.dishesLeft}
                        basePrice={tavern.prices}
                        bannerData={tavern.foodBannerData}
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
                        fitting={tavern.fitting}
                        basePrice={tavern.prices}
                        onDataChange={onDataChange}
                    ></QuestScene>
                )}
            />
        </Tab.Navigator>
    );
};
