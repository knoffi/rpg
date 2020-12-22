import React from 'react';
import { Banner } from 'react-native-paper';
import { menuCategory } from '../../../classes/TavernProduct';
import { TavernData } from '../../../mainNavigator/TavernData';
import { Offer } from '../menuEnums';
import { weServe } from '../menuFunctions';

export interface BannerData {
    emptyCategories: menuCategory[];
    isVisible: boolean;
}

const getEmptyCategoriesString = (names: menuCategory[]) => {
    let numerationString = '';
    names.forEach((name: menuCategory, index: number) => {
        if (index === 0) {
            numerationString = numerationString + name;
        } else {
            if (index < names.length - 1) {
                numerationString = numerationString + ', ' + name;
            } else {
                numerationString = numerationString + ' and ' + name;
            }
        }
    });
    return numerationString.toLocaleLowerCase();
};

export const MenuBanner = (props: {
    bannerData: BannerData;
    bannerEnding: string;
    onDataChange: (change: Partial<TavernData>) => void;
    getImpliedChanges: (
        newDrinks?: Offer[],
        newDishes?: Offer[]
    ) => Partial<TavernData>;
    isAbout: weServe;
}) => {
    return (
        <Banner
            visible={props.bannerData.isVisible}
            actions={[
                {
                    label: 'Got it',
                    onPress: () => {
                        if (props.isAbout === weServe.drinks) {
                            const newBannerData = props.getImpliedChanges()
                                .drinkBannerData!;

                            newBannerData.isVisible = false;
                            props.onDataChange({
                                drinkBannerData: newBannerData,
                            });
                        } else {
                            const newBannerData = props.getImpliedChanges()
                                .foodBannerData!;
                            newBannerData.isVisible = false;
                            props.onDataChange({
                                foodBannerData: newBannerData,
                            });
                        }
                    },
                },
            ]}
        >
            {'Your tavern offers every fitting ' +
                getEmptyCategoriesString(props.bannerData.emptyCategories) +
                '!\n\n' +
                props.bannerEnding}
        </Banner>
    );
};
