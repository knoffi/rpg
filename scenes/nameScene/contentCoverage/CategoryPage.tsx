import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Noticable } from '../../../classes/idea/Noticable';
import { Drinkable, Eatable } from '../../../classes/TavernProduct';
import { WeServe } from '../../../editNavigator/WeServe';
import { CoverageTest } from './CoverageTest';
type PageState = { showResult: CoverageTest | false };

export const CategoryPage = (props: { handling: CategoryHandling }) => {
    const [page, setPage] = useState({ showResult: false } as PageState);
    const showResult = (data: CoverageTest) => {
        setPage({ showResult: data });
    };
    const buttons = getCategoryButtons({ ...props.handling, showResult });
    return (
        <View
            style={{
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'space-between',
            }}
        >
            {page.showResult ? getResultDisplay(page.showResult) : buttons}
        </View>
    );
};
const getResultDisplay = (props: CoverageTest) => {
    return <Text>{JSON.stringify(props)}</Text>;
};
const getCategoryButtons = (props: CategoryButtonsProps) => {
    switch (props.isAbout) {
        case WeServe.impressions:
            const impressionButtons = Object.values(Noticable).map(
                (category) => (
                    <Button
                        key={category}
                        onPress={() =>
                            props.showResult(props.onCategory(category))
                        }
                    >
                        {category}
                    </Button>
                )
            );
            return impressionButtons;
        case WeServe.drinks:
            const drinkButtons = Object.values(Drinkable).map((category) => (
                <Button
                    key={category}
                    onPress={() => props.showResult(props.onCategory(category))}
                >
                    {category}
                </Button>
            ));
            return drinkButtons;

        default:
            const foodButtons = Object.values(Eatable).map((category) => (
                <Button
                    key={category}
                    onPress={() => props.showResult(props.onCategory(category))}
                >
                    {category}
                </Button>
            ));
            return foodButtons;
    }
};
export type CategoryHandling =
    | {
          isAbout: WeServe.impressions;
          onCategory: (category: Noticable) => CoverageTest;
      }
    | {
          isAbout: WeServe.drinks;
          onCategory: (category: Drinkable) => CoverageTest;
      }
    | {
          isAbout: WeServe.food;
          onCategory: (category: Eatable) => CoverageTest;
      };
type CategoryButtonsProps = {
    showResult: (data: CoverageTest) => void;
} & CategoryHandling;
