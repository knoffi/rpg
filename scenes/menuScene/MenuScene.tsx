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
import { EditorStartTexts, ProductEditor } from './productEditor/ProductEditor';

const DEFAULT_MODAL_START_DATA = {
    name: '',
    priceText: '10',
    description: '',
};
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
    const [editorData, setEditorData] = useState({
        visible: false,
        startData: {
            ...DEFAULT_MODAL_START_DATA,
            category: drinkCategory.lemonade as menuCategory,
        } as EditorStartTexts,
    });

    const deleteOffer = (name: string) => {
        const newOffers = props.offers.filter(
            (offer) => offer.product.name !== name
        );
        const deletedCategory = props.offers.find(
            (offer) => offer.product.name === name
        )!.product.category;
        //assuming that delete button is not clickable if props.offers is empty
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
    const changeOffer = (nameOfChangedOffer: string, newOffer?: Offer) => {
        const newOffers = newOffer
            ? props.offers.map((offer) => {
                  if (offer.product.name !== nameOfChangedOffer) {
                      return offer;
                  } else {
                      return newOffer;
                  }
              })
            : offersWithOneReroll(
                  nameOfChangedOffer,
                  props.offers,
                  fits,
                  misfits,
                  props.isAbout
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
        const newOffer = getNewRandomDrinkOffer(
            fits,
            misfits,
            category,
            props.offers,
            props.isAbout
        );
        const newOffers = [...props.offers.map((offer) => offer), newOffer];
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
    const openOfferEditor = (startData: EditorStartTexts) => {
        setEditorData({
            visible: true,
            startData: startData,
        });
    };

    const dismissEditorModal = () => {
        setEditorData({
            visible: false,
            startData: editorData.startData,
        });
    };

    const nameIsDuplicated = (name: string) => {
        return props.offers.some((offer) => {
            return offer.product.name === name;
        });
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
                            setEditorData({
                                visible: true,
                                startData: {
                                    ...DEFAULT_MODAL_START_DATA,
                                    category: category,
                                },
                            });
                        },
                    }}
                    offerActions={{
                        deleteOffer: deleteOffer,
                        rerollOffer: changeOffer,
                        shopOffer: buyOffer,
                        editUserOffer: openOfferEditor,
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
                    visible={editorData.visible}
                    onDismiss={dismissEditorModal}
                >
                    <ProductEditor
                        startTexts={editorData.startData}
                        nameIsDuplicated={nameIsDuplicated}
                        overwriteTavernProduct={(
                            textData: EditorStartTexts
                        ) => {
                            changeOffer(editorData.startData.name, {
                                product: new TavernProduct(
                                    textData.name,
                                    parseInt(textData.priceText),
                                    [] as association[],
                                    textData.category,
                                    textData.description,
                                    true
                                ),
                                price: parseInt(textData.priceText),
                            });
                            dismissEditorModal();
                        }}
                        addTavernProduct={(textData: EditorStartTexts) => {
                            const newUserOffer = {
                                product: new TavernProduct(
                                    textData.name,
                                    parseInt(textData.priceText),
                                    [] as association[],
                                    textData.category,
                                    textData.description,
                                    true
                                ),
                                price: parseInt(textData.priceText),
                            };
                            const newOffers = [...props.offers, newUserOffer];
                            if (props.isAbout === weServe.drinks) {
                                props.onDataChange({ drinks: newOffers });
                            } else {
                                props.onDataChange({ dishes: newOffers });
                            }
                            dismissEditorModal();
                        }}
                    />
                </Modal>
            </Portal>
        </View>
    );
};
