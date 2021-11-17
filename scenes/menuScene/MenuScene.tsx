import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import {
    UserMade,
    UserMadeDrink,
    UserMadeFood,
} from '../../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../../classes/contentCreator/FantasKeys';
import { Database } from '../../classes/database/Database';
import { StructuredTavernFits } from '../../classes/idea/StructuredTavernFits';
import { ListOfSaves } from '../../components/ListOfSaves/ListOfSaves';
import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { Describable, TavernData } from '../../mainNavigator/TavernData';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { BasePrice } from './basePrice';
import { bannerEndings } from './menuBanner/bannerEndings';
import { BannerData, MenuBanner } from './menuBanner/MenuBanner';
import { Offer } from './Offer';
import { Demand } from './offerList/actionInterfaces';
import { OfferList } from './offerList/OfferList';
import { getAdjustedPriceString } from './priceFunctions';
import { ProductEditor } from './productEditor/ProductEditor';

interface MenuProps {
    fitting: StructuredTavernFits;
    isAbout: WeServe.food | WeServe.drinks;
    offers: Offer[];
    onDataChange: (newData: Partial<TavernData>) => void;
    offersLeft: Map<Describable, boolean>;
    offersBought: Offer[];
    basePrice: BasePrice;
    bannerData: BannerData;
    handleAdd: (add: Demand) => void;
    handleDelete: (
        name: string,
        deleted: Demand,
        key: FantasyKeys | 'isUserMade'
    ) => void;
    handleReroll: (name: string, rerolled: Demand) => void;
    handleEdit: (offer: UserMade, previousName?: string) => void;
    closeBanner: () => void;
    buyOffer: (boughtOffer: Offer) => void;
    // startEdit determines whether is menu for drinks or menu for food
    startEdit: UserMadeFood | UserMadeDrink;
}

export const MenuScene = (props: MenuProps) => {
    const startDemand: Demand =
        props.startEdit.isAbout === WeServe.drinks
            ? props.startEdit
            : props.startEdit;
    const fits = props.fitting;
    //TODO: does this really need to be a state?
    const [bannerEnding, setBannerEnding] = useState(
        getRandomArrayEntry(bannerEndings.get(props.isAbout)!)
    );
    const [editor, setEditor] = useState({
        visible: false,
        startData: props.startEdit,
    });
    const [savedListData, setSavedListData] = useState({
        visible: false,
        demand: startDemand,
    });
    const deleteOffer = (
        name: string,
        demand: Demand,
        key: FantasyKeys | 'isUserMade'
    ) => {
        props.handleDelete(name, demand, key);
    };
    const addUserOffer = (offer: UserMade) => {
        props.handleEdit(offer);
        dismissEditorModal();
    };
    const editUserOffer = (offer: UserMade, previousName: string) => {
        props.handleEdit(offer, previousName);
        dismissEditorModal();
    };

    const buyOffer = (name: string) => {
        props.offers.forEach((offer) => {
            if (offer.name === name) {
                props.buyOffer(offer);
            }
        });
    };
    const openOfferEditor = (startData: UserMadeFood | UserMadeDrink) => {
        setEditor({
            visible: true,
            startData: startData,
        });
    };

    const dismissEditorModal = () => {
        setEditor({
            visible: false,
            startData: editor.startData,
        });
    };

    const nameIsDuplicated = (name: string) => {
        return props.offers.some((offer) => {
            return offer.name === name;
        });
    };

    const onEdit = (edit: Demand) => {
        if (edit.isAbout === props.startEdit.isAbout) {
            setEditor({
                visible: true,
                startData: {
                    ...props.startEdit,
                    ...edit,
                },
            });
        }
    };

    const onImport = (demand: Demand) => {
        if (demand.isAbout === props.startEdit.isAbout) {
            setSavedListData({
                visible: true,
                demand: demand,
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
                    onDismiss={props.closeBanner}
                    bannerEnding={bannerEnding}
                    isAbout={props.isAbout}
                />
                <OfferList
                    offers={props.offers}
                    isAbout={props.isAbout}
                    addingActions={{
                        randomAdd: props.handleAdd,
                        import: onImport,
                        edit: onEdit,
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
                <Modal visible={editor.visible} onDismiss={dismissEditorModal}>
                    <ProductEditor
                        prevData={editor.startData}
                        overwriteEdit={editUserOffer}
                        addEdit={addUserOffer}
                        names={props.offers.map((offer) => offer.name)}
                    />
                </Modal>
                <ListOfSaves
                    title={savedListData.demand.category.toUpperCase()}
                    dataHandler={new Database()}
                    building={{
                        ...savedListData.demand,
                        build: (
                            name: string,
                            priceText: string,
                            description: string
                        ) => {
                            addUserOffer({
                                ...savedListData.demand,
                                name: name,
                                priceText: priceText,
                                description: description,
                                isUserMade: true,
                            });
                        },
                        nameIsDuplicated,
                    }}
                    visible={savedListData.visible}
                    onDismiss={() => {
                        setSavedListData({
                            visible: false,
                            demand: startDemand,
                        });
                    }}
                />
            </Portal>
        </View>
    );
};
