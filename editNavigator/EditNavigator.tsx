import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { association } from '../classes/Adjectives';
import Icon from '../components/icons';
import { iconKeys } from '../components/icons/iconKeys';
import { ITavernData } from '../mainNavigator/ITavernData';
import { updateFunctions } from '../mainNavigator/IUpdateFunctions';
import { weServe } from '../scenes/menuScene/menuFunctions';
import { MenuScene } from '../scenes/menuScene/MenuScene';
import { NameScene } from '../scenes/nameScene/NameScene';
import { nameSceneStyles } from '../scenes/nameScene/nameSceneStyles';
import { QuestScene } from '../scenes/questScene/QuestScene';
import { removeEmptyStrings } from './editNavigatorFunctions';

const Tab = createBottomTabNavigator();

//TODO: Find alternativ for hiding bottomNavigator, since using isVisible on bottomNavigator can cause glitches!
export const EditNavigator = (props: {
    onUpdate: updateFunctions;
    tavern: ITavernData;
    isVisible: boolean;
}) => {
    const INACTIVE_BOTTOM_BG = '#857256';
    const ACTIVE_BOTTOM_BG = '#63481F';
    const ACTIVE_BOTTOM_ICON_TINT = '#FFFFFF';
    const INACTIVE_BOTTOM_ICON_TINT = '#F4EADB';
    const tabBarOptions = props.isVisible
        ? {
              inactiveBackgroundColor: INACTIVE_BOTTOM_BG,
              activeBackgroundColor: ACTIVE_BOTTOM_BG,
              activeTintColor: ACTIVE_BOTTOM_ICON_TINT,
              inactiveTintColor: INACTIVE_BOTTOM_ICON_TINT,
          }
        : {
              inactiveBackgroundColor:
                  nameSceneStyles.backgroundContainer.backgroundColor,
              activeBackgroundColor:
                  nameSceneStyles.backgroundContainer.backgroundColor,
              activeTintColor:
                  nameSceneStyles.backgroundContainer.backgroundColor,
              inactiveTintColor:
                  nameSceneStyles.backgroundContainer.backgroundColor,
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
                        case 'Drink': {
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
                tabBarVisible: props.isVisible,
            })}
        >
            <Tab.Screen
                name="Name"
                children={() => (
                    <NameScene
                        name={props.tavern.name}
                        updateName={props.onUpdate.forName}
                        fitting={props.tavern.fitting}
                        updateFitting={(
                            newFits: association[],
                            newMisfits: association[]
                        ) => {
                            props.onUpdate.forFitting(
                                removeEmptyStrings(newFits, newMisfits)
                            );
                        }}
                        buildTavernTemplate={props.onUpdate.forTavernTemplate}
                    ></NameScene>
                )}
            />
            <Tab.Screen
                name="Drinks"
                children={() => (
                    <MenuScene
                        fitting={props.tavern.fitting}
                        isAbout={weServe.drinks}
                        offers={props.tavern.drinks}
                        setOffers={props.onUpdate.forDrinks}
                        offersLeft={props.tavern.drinksLeft}
                        basePrice={props.tavern.prices}
                        bannerData={props.tavern.drinkBannerData}
                        onBannerButtonClick={
                            props.onUpdate.forDrinkBannerVisible
                        }
                    ></MenuScene>
                )}
            />
            <Tab.Screen
                name="Food"
                children={() => (
                    <MenuScene
                        fitting={props.tavern.fitting}
                        isAbout={weServe.food}
                        offers={props.tavern.dishes}
                        setOffers={props.onUpdate.forDishes}
                        offersLeft={props.tavern.dishesLeft}
                        basePrice={props.tavern.prices}
                        bannerData={props.tavern.foodBannerData}
                        onBannerButtonClick={
                            props.onUpdate.forFoodBannerVisible
                        }
                    ></MenuScene>
                )}
            />
            <Tab.Screen
                name="Notes"
                children={() => (
                    <QuestScene
                        fitting={props.tavern.fitting}
                        basePrice={props.tavern.prices}
                        setBasePrice={props.onUpdate.forPrice}
                    ></QuestScene>
                )}
            />
        </Tab.Navigator>
    );
};
