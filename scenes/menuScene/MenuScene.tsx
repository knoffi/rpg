import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { association } from '../../classes/association';
import { SavedDataHandler, WeSave } from '../../classes/database/Database';
import { StructuredTavernFits } from '../../classes/idea/StructuredTavernFits';
import {
    Drinkable,
    MenuCategory,
    TavernProduct,
} from '../../classes/TavernProduct';
import { ListOfSaves } from '../../components/ListOfSaves/ListOfSaves';
import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { TavernData } from '../../mainNavigator/TavernData';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { getNewRandomDrinkOffer, offersWithOneReroll } from './addRandomDrink';
import { BasePrice } from './basePrice';
import { bannerEndings } from './menuBanner/bannerEndings';
import { BannerData, MenuBanner } from './menuBanner/MenuBanner';
import { NothingLeftOffer, Offer } from './menuEnums';
import { OfferList } from './offerList/OfferList';
import { getAdjustedPriceString } from './priceFunctions';
import { ProductEditor } from './productEditor/ProductEditor';
import { createMinimalOffer, MinimalOfferData } from './userOffer';

const DEFAULT_MODAL_START_DATA = {
    name: '',
    priceText: '10',
    description: '',
    isUserMade: true,
};
interface MenuProps {
    fitting: StructuredTavernFits;
    isAbout: WeServe;
    offers: Offer[];
    onDataChange: (newData: Partial<TavernData>) => void;
    offersLeft: Map<MenuCategory, boolean>;
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
    const fits = props.fitting;
    const [bannerEnding, setBannerEnding] = useState(
        getRandomArrayEntry(bannerEndings.get(props.isAbout)!)
    );
    const [editorData, setEditorData] = useState({
        visible: false,
        startData: {
            ...DEFAULT_MODAL_START_DATA,
            category: Drinkable.lemonade as MenuCategory,
        } as MinimalOfferData,
    });
    const [savedListData, setSavedListData] = useState({
        visible: false,
        category: Drinkable.spirit as MenuCategory,
    });
    const deleteOffer = (name: string) => {
        const newOffers = props.offers.filter(
            (offer) => offer.product.name !== name
        );
        //assuming that delete button is not clickable if props.offers is empty
        if (props.isAbout === WeServe.drinks) {
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
                  props.isAbout
              );
        if (newOffers) {
            if (props.isAbout === WeServe.drinks) {
                props.onDataChange({ drinks: newOffers });
            } else {
                props.onDataChange({ dishes: newOffers });
            }
        }
    };
    // TODO: change this to getUserOfferAdding (category:MenuCategory)=> function
    const addUserOffer = (textData: MinimalOfferData) => {
        const newUserOffer = createMinimalOffer(textData);
        const newOffers = [...props.offers, newUserOffer];
        if (props.isAbout === WeServe.drinks) {
            props.onDataChange({ drinks: newOffers });
        } else {
            props.onDataChange({ dishes: newOffers });
        }
        dismissEditorModal();
    };

    const buyOffer = (name: string) => {
        //TODO: This only works as long as drinks can be distuingished by name
        props.offers.forEach((offer) => {
            if (offer.product.name === name) {
                props.buyOffer(offer);
            }
        });
    };
    const addRandomOffer = (category: MenuCategory) => {
        const newOffer = getNewRandomDrinkOffer(
            fits,
            category,
            props.offers,
            props.isAbout
        );
        const newOffers = [...props.offers.map((offer) => offer), newOffer];
        const testOffer = getNewRandomDrinkOffer(
            fits,
            category,
            newOffers,
            props.isAbout
        );
        if (testOffer.product.name === NothingLeftOffer.product.name) {
            setBannerEnding(
                getRandomArrayEntry(bannerEndings.get(props.isAbout)!)
            );
        }
        if (props.isAbout === WeServe.drinks) {
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
    const openOfferEditor = (startData: MinimalOfferData) => {
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
                        import: (category: MenuCategory) => {
                            setSavedListData({
                                visible: true,
                                category: category,
                            });
                        },
                        edit: (category: MenuCategory) => {
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
                            fits,
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
                            textData: MinimalOfferData
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
                        addTavernProduct={addUserOffer}
                    />
                </Modal>
                <ListOfSaves
                    title={savedListData.category.toUpperCase()}
                    dataHandler={
                        new SavedDataHandler(
                            WeSave.menu,
                            savedListData.category
                        )
                    }
                    offerHandling={{
                        addUserOffer: (
                            name: string,
                            priceText: string,
                            description: string
                        ) => {
                            addUserOffer({
                                name: name,
                                priceText: priceText,
                                description: description,
                                category: savedListData.category,
                                isUserMade: true,
                            });
                        },
                        nameIsDuplicated: nameIsDuplicated,
                    }}
                    visible={savedListData.visible}
                    onDismiss={() => {
                        setSavedListData({
                            visible: false,
                            category: Drinkable.spirit,
                        });
                    }}
                />
            </Portal>
        </View>
    );
};
