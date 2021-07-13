import React from 'react';
import { Banner } from 'react-native-paper';
import { Noticable } from '../../../classes/idea/Noticable';
import { MenuCategory } from '../../../classes/TavernProduct';
import { TavernData } from '../../../mainNavigator/TavernData';
import { WeServe } from '../addRandomDrink';

export interface BannerData {
    emptyCategories: (MenuCategory | Noticable)[];
    isVisible: boolean;
}

const getEmptyCategoriesString = (names: (MenuCategory | Noticable)[]) => {
    const numerationStringPieces = names.map((name, index) => {
        if (index === 0) {
            return name;
        } else {
            if (index < names.length - 1) {
                return ', ' + name;
            } else {
                return ' and ' + name;
            }
        }
    });
    return numerationStringPieces
        .reduce(
            (numerationString, stringPiece) => numerationString + stringPiece,
            ''
        )
        .toLocaleLowerCase();
};

export const MenuBanner = (props: {
    bannerData: BannerData;
    bannerEnding: string;
    onDataChange: (change: Partial<TavernData>) => void;
    getImpliedChanges: () => Partial<TavernData>;
    isAbout: WeServe;
}) => {
    const beginningText =
        props.isAbout === WeServe.impressions
            ? 'You have added every fitting description for '
            : 'Your tavern offers every fitting ';
    return (
        <Banner
            visible={props.bannerData.isVisible}
            actions={[
                {
                    label: 'Got it',
                    onPress: () => {
                        const newBannerData =
                            props.getImpliedChanges().bannerData!;
                        if (props.isAbout === WeServe.drinks) {
                            newBannerData.drink.isVisible = false;
                        }
                        if (props.isAbout === WeServe.food) {
                            newBannerData.food.isVisible = false;
                        }
                        if (props.isAbout === WeServe.impressions) {
                            newBannerData.impression.isVisible = false;
                        }
                        props.onDataChange({
                            bannerData: newBannerData,
                        });
                    },
                },
            ]}
        >
            {beginningText +
                getEmptyCategoriesString(props.bannerData.emptyCategories) +
                '!\n\n' +
                props.bannerEnding}
        </Banner>
    );
};
