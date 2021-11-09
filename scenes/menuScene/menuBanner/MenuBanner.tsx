import React from 'react';
import { Banner } from 'react-native-paper';
import { Noticable } from '../../../classes/idea/Noticable';
import { MenuCategory } from '../../../classes/TavernProduct';
import { WeServe } from '../../../editNavigator/WeServe';

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
    onDismiss: () => void;
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
                    onPress: props.onDismiss,
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
