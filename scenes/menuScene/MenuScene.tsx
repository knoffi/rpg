import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { association } from '../../classes/association';
import {
    ContentCreator,
    CreationRequest,
} from '../../classes/contentCreator/ContentCreator';
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
import { Describable, TavernData } from '../../mainNavigator/TavernData';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { BasePrice } from './basePrice';
import { bannerEndings } from './menuBanner/bannerEndings';
import { BannerData, MenuBanner } from './menuBanner/MenuBanner';
import { createMinimalOffer, MinimalOfferData } from './MinimalOfferData';
import { Offer } from './Offer';
import { Demand } from './offerList/actionInterfaces';
import { OfferList } from './offerList/OfferList';
import { getAdjustedPriceString } from './priceFunctions';
import { ProductEditor } from './productEditor/ProductEditor';

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
    offersLeft: Map<Describable, boolean>;
    offersBought: Offer[];
    basePrice: BasePrice;
    bannerData: BannerData;
    handleAdd: (newOffer: Offer, add: Demand, noNextOffer: boolean) => void;
    handleDelete: (removedOffer: string, deleted: Demand) => void;
    setBannerInvisible: () => void;
    buyOffer: (boughtOffer: Offer) => void;
}

export const MenuScene = (props: MenuProps) => {
    const creator = new ContentCreator();
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
    const deleteOffer = (name: string, demand: Demand) => {
        props.handleDelete(name, demand);
    };
    const changeOffer = (nameOfChangedOffer: string, newOffer?: Offer) => {
        const newOffers =
            props.isAbout === WeServe.food
                ? creator.rerollOneDish(
                      fits,
                      nameOfChangedOffer,
                      props.offers,
                      newOffer
                  )
                : creator.rerollOneDrink(
                      fits,
                      nameOfChangedOffer,
                      props.offers,
                      newOffer
                  );
        if (newOffers) {
            if (props.isAbout === WeServe.drinks) {
                props.onDataChange({ drinks: newOffers });
            } else {
                props.onDataChange({ dishes: newOffers });
            }
        }
    };
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
        props.offers.forEach((offer) => {
            if (offer.product.name === name) {
                props.buyOffer(offer);
            }
        });
    };
    const addRandomOffer = (demand: Demand) => {
        const request: CreationRequest =
            demand.isAbout === WeServe.food
                ? {
                      oldAssets: props.offers,
                      category: demand.category,
                      isAbout: demand.isAbout,
                  }
                : {
                      oldAssets: props.offers,
                      category: demand.category,
                      isAbout: demand.isAbout,
                  };
        const creation = creator.getRandomCreation(fits, request);
        if (!creation.new) {
            console.log('CREATED OFFER DOES NOT EXIST!');
        } else if (creation.isAbout === WeServe.impressions) {
            console.log('GOT IMPRESSION BUT NEED OFFER');
        } else {
            const testRequest = {
                ...request,
                oldAssets: request.oldAssets.concat(creation.new),
            };
            const testResult = creator.getRandomCreation(fits, testRequest);
            const categoryIsNowFull = !testResult.new;
            props.handleAdd(creation.new, demand, categoryIsNowFull);
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
                    setBannerInvsible={props.setBannerInvisible}
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
