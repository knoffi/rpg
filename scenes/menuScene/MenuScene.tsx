import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { association } from '../../classes/Adjectives';
import {
    drinkCategory,
    menuCategory,
    TavernProduct,
} from '../../classes/TavernProduct';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { TavernData } from '../../mainNavigator/TavernData';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { BasePrice } from './basePrice';
import { bannerEndings } from './menuBanner/bannerEndings';
import { BannerData, MenuBanner } from './menuBanner/MenuBanner';
import { NothingLeftOffer, Offer } from './menuEnums';
import {
    getNewRandomDrinkOffer,
    offersWithOneReroll,
    weServe,
} from './menuFunctions';
import { OfferList } from './offerList/OfferList';
import { getAdjustedPriceString } from './priceFunctions';
import { ProductEditor } from './productEditor/ProductEditor';

interface MenuProps {
    fitting: { fits: association[]; misfits: association[] };
    isAbout: weServe;
    offers: Offer[];
    onDataChange: (newData: Partial<TavernData>) => void;
    offersLeft: Map<menuCategory, boolean>;
    offersBought: Offer[];
    basePrice: BasePrice;
    bannerData: BannerData;
    getImpliedChanges: (
        newDrinks?: Offer[],
        newDishes?: Offer[]
    ) => Partial<TavernData>;
    buyOffer: (boughtOffer: Offer) => void;
}

export const MenuScene = (props: MenuProps) => {
    const fits = props.fitting.fits;
    const misfits = props.fitting.misfits;
    const [bannerEnding, setBannerEnding] = useState(
        getRandomArrayEntry(bannerEndings.get(props.isAbout)!)
    );
    const [modalData, setModalData] = useState({
        visible: false,
        category: drinkCategory.lemonade as menuCategory,
    });

    const deleteOffer = (name: string) => {
        let newOffers = [] as Offer[];
        let deletedCategory: menuCategory;
        //asuming that delete button is not clickable if props.offers is empty
        props.offers.forEach((offer) => {
            if (offer.product.name !== name) {
                newOffers.push(offer);
            } else {
                deletedCategory = offer.product.category;
            }
        });
        if (props.isAbout === weServe.drinks) {
            props.onDataChange({
                drinks: newOffers,
                ...props.getImpliedChanges(newOffers, undefined),
            });
        } else {
            props.onDataChange({
                dishes: newOffers,
                ...props.getImpliedChanges(undefined, newOffers),
            });
        }
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
        if (props.isAbout === weServe.drinks) {
            props.onDataChange({ drinks: newOffers });
        } else {
            props.onDataChange({ dishes: newOffers });
        }
    };

    const buyOffer = (name: string) => {
        //TODO: This only works as long as drinks can be distuingished by name
        props.offers.forEach((offer) => {
            if (offer.product.name === name) {
                props.buyOffer(offer);
            }
        });
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
            props.isAbout
        );
        newOffers.push(newOffer);
        const testOffer = getNewRandomDrinkOffer(
            fits,
            misfits,
            category,
            newOffers,
            props.isAbout
        );
        if (testOffer.product.name === NothingLeftOffer.product.name) {
            setBannerEnding(
                getRandomArrayEntry(bannerEndings.get(props.isAbout)!)
            );
        }
        if (props.isAbout === weServe.drinks) {
            props.onDataChange({
                drinks: newOffers,
                ...props.getImpliedChanges(newOffers, undefined),
            });
        } else {
            props.onDataChange({
                dishes: newOffers,
                ...props.getImpliedChanges(undefined, newOffers),
            });
        }
    };

    return (
        <View>
            <ScrollView
                style={{
                    backgroundColor:
                        nameSceneStyles.backgroundView.backgroundColor,
                }}
            >
                <MenuBanner
                    bannerData={props.bannerData}
                    onDataChange={props.onDataChange}
                    getImpliedChanges={props.getImpliedChanges}
                    bannerEnding={bannerEnding}
                    isAbout={props.isAbout}
                />
                <OfferList
                    offers={props.offers}
                    isAbout={props.isAbout}
                    addingActions={{
                        randomAdd: addRandomOffer,
                        import: (category: menuCategory) => {},
                        edit: (category: menuCategory) => {
                            setModalData({
                                visible: true,
                                category: category,
                            });
                        },
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
            <Portal>
                <Modal
                    visible={modalData.visible}
                    onDismiss={() => {
                        setModalData({
                            visible: false,
                            category: modalData.category,
                        });
                    }}
                >
                    <ProductEditor
                        category={modalData.category}
                        addTavernProduct={(
                            name: string,
                            price: number,
                            description: string
                        ) => {
                            const offerPrice = price > 0 ? price : 1;
                            const newUserOffer = {
                                product: new TavernProduct(
                                    name,
                                    offerPrice,
                                    [] as association[],
                                    modalData.category,
                                    description
                                ),
                                price: offerPrice,
                            };
                            const newOffers = [...props.offers, newUserOffer];
                            if (props.isAbout === weServe.drinks) {
                                props.onDataChange({ drinks: newOffers });
                            } else {
                                props.onDataChange({ dishes: newOffers });
                            }
                            setModalData({
                                visible: false,
                                category: modalData.category,
                            });
                        }}
                    />
                </Modal>
            </Portal>
        </View>
    );
};
