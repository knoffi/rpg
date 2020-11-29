import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Banner } from 'react-native-paper';
import { association } from '../../classes/Adjectives';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import {
    drinkBannerEndings,
    foodBannerEndings,
    serviceBannerEndings,
} from './bannerEndings';
import { BasePrice } from './basePrice';
import { OfferList } from './DrinkList';
import { NothingLeftOffer, Offer } from './menuEnums';
import {
    getNewRandomDrinkOffer,
    offersWithOneReroll,
    weServe,
} from './menuFunctions';
import { menuCategory } from './menuProduct';
import { getAdjustedPriceString } from './priceFunctions';

const mapOfBannerEndings = new Map([
    [weServe.drinks, drinkBannerEndings],
    [weServe.food, foodBannerEndings],
    [weServe.service, serviceBannerEndings],
]);

const menuStyle = StyleSheet.create({
    menuRow: { justifyContent: 'flex-start', flexDirection: 'row' },
    sceneButton: { justifyContent: 'center' },
});

export interface BannerData {
    emptyCategories: menuCategory[];
    isVisible: boolean;
}

interface MenuProps {
    fitting: { fits: association[]; misfits: association[] };
    isAbout: weServe;
    offers: Offer[];
    setOffers: (
        offers: Offer[],
        is: {
            add: menuCategory | undefined;
            delete: menuCategory | undefined;
        }
    ) => void;
    offersLeft: Map<menuCategory, boolean>;
    basePrice: BasePrice;
    bannerData: BannerData;
    onBannerButtonClick: (isVisible: boolean) => void;
}

export const MenuScene = (props: MenuProps) => {
    const fits = props.fitting.fits;
    const misfits = props.fitting.misfits;
    const [boughtOffers, setBoughtOffers] = useState([] as Offer[]);
    const [bannerEnding, setBannerEnding] = useState(
        getRandomArrayEntry(mapOfBannerEndings.get(props.isAbout)!)
    );

    const deleteOffer = (name: string) => {
        let newOffers = [] as Offer[];
        //asuming that delete button is not clickable if props.offers is empty
        let change = {
            add: undefined,
            delete: props.offers[0].product.category,
        };
        props.offers.forEach((offer) => {
            if (offer.product.name !== name) {
                newOffers.push(offer);
            } else {
                change.delete = offer.product.category;
            }
        });
        props.setOffers(newOffers, change);
    };
    const rerollOffer = (name: string) => {
        const newOffers = offersWithOneReroll(
            name,
            props.offers,
            fits,
            misfits,
            props.isAbout,
            props.basePrice
        );
        props.setOffers(newOffers, { add: undefined, delete: undefined });
    };

    const buyOffer = (name: string) => {
        let newBoughtOffers = boughtOffers.map((boughtOffer) => {
            return boughtOffer;
        });
        props.offers.forEach((offer) => {
            if (offer.product.name === name) {
                newBoughtOffers.push(offer);
            }
        });
        setBoughtOffers(newBoughtOffers);
    };
    const addRandomOffer = (category: menuCategory) => {
        let newOffers = [] as Offer[];
        props.offers.forEach((offer) => {
            newOffers.push(offer);
        });
        const newOffer = getNewRandomDrinkOffer(
            fits,
            misfits,
            category,
            props.offers,
            props.isAbout,
            props.basePrice
        );
        newOffers.push(newOffer);
        const testOffer = getNewRandomDrinkOffer(
            fits,
            misfits,
            category,
            newOffers,
            props.isAbout,
            props.basePrice
        );
        if (testOffer.product === NothingLeftOffer.product) {
            setBannerEnding(
                getRandomArrayEntry(mapOfBannerEndings.get(props.isAbout)!)
            );
        }
        props.setOffers(newOffers, {
            add: newOffer.product.category,
            delete: undefined,
        });
    };

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

    return (
        <View>
            <ScrollView
                style={{
                    backgroundColor:
                        nameSceneStyles.backgroundView.backgroundColor,
                }}
            >
                <Banner
                    visible={props.bannerData.isVisible}
                    actions={[
                        {
                            label: 'Got it',
                            onPress: () => props.onBannerButtonClick(false),
                        },
                    ]}
                >
                    {'Your tavern offers every fitting ' +
                        getEmptyCategoriesString(
                            props.bannerData.emptyCategories
                        ) +
                        '!\n\n' +
                        bannerEnding}
                </Banner>
                <OfferList
                    offers={props.offers}
                    isAbout={props.isAbout}
                    addingActions={{
                        randomAdd: addRandomOffer,
                        import: (category: menuCategory) => {},
                    }}
                    offerActions={{
                        deleteOffer: deleteOffer,
                        rerollOffer: rerollOffer,
                        shopOffer: buyOffer,
                    }}
                    offersLeftMap={props.offersLeft}
                    getPriceString={(offer: Offer) => {
                        return getAdjustedPriceString(
                            offer,
                            props.fitting.fits,
                            props.fitting.misfits,
                            props.basePrice
                        );
                    }}
                />
            </ScrollView>
        </View>
    );
};
//TODO: test whether offer and drinkMenuCategories have corresponding entries
