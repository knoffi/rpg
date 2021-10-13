import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { SavedDataHandler, WeSave } from '../../classes/database/Database';
import { StructuredTavernFits } from '../../classes/idea/StructuredTavernFits';
import { Drinkable, MenuCategory } from '../../classes/TavernProduct';
import { ListOfSaves } from '../../components/ListOfSaves/ListOfSaves';
import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { Describable, TavernData } from '../../mainNavigator/TavernData';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { BasePrice } from './basePrice';
import { bannerEndings } from './menuBanner/bannerEndings';
import { BannerData, MenuBanner } from './menuBanner/MenuBanner';
import { MinimalOfferData } from './MinimalOfferData';
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
    handleAdd: (add: Demand) => void;
    handleDelete: (name: string, deleted: Demand) => void;
    handleReroll: (name: string, rerolled: Demand) => void;
    handleEdit: (offer: MinimalOfferData, isNew: boolean) => void;
    setBannerInvisible: () => void;
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
    const deleteOffer = (name: string, demand: Demand) => {
        props.handleDelete(name, demand);
    };
    //TODO: further refactor into two methods with strong encapsulation
    const addUserOffer = (offer: MinimalOfferData) => {
        props.handleEdit(offer, true);
        dismissEditorModal();
    };
    const editUserOffer = (offer: MinimalOfferData) => {
        props.handleEdit(offer, false);
        dismissEditorModal();
    };

    const buyOffer = (name: string) => {
        props.offers.forEach((offer) => {
            if (offer.product.name === name) {
                props.buyOffer(offer);
            }
        });
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
                        randomAdd: props.handleAdd,
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
                        rerollOffer: props.handleReroll,
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
                        overwriteTavernProduct={editUserOffer}
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
