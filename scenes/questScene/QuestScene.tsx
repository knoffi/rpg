import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { association, Income } from '../../classes/association';
import {
    UserMade,
    UserMadeImpression,
} from '../../classes/contentCreator/ContentCreator';
import { CreationQuality } from '../../classes/contentCreator/CreationQuality';
import { FantasyKeys } from '../../classes/contentCreator/FantasKeys';
import { Database } from '../../classes/database/Database';
import { Noticable } from '../../classes/idea/Noticable';
import { ListOfSaves } from '../../components/ListOfSaves/ListOfSaves';
import { WeServe } from '../../editNavigator/WeServe';
import { Describable } from '../../mainNavigator/TavernData';
import { BasePrice } from '../menuScene/basePrice';
import { BannerData, MenuBanner } from '../menuScene/menuBanner/MenuBanner';
import { Demand } from '../menuScene/offerList/actionInterfaces';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { CurrencySetDialog } from './CurrencySetDialog';
import { DetailsList } from './DetailsList';
import { ImpressionEditor } from './editor/ImpressionEditor';
import { Impression } from './impressions/Impression';
import { incomeExampleMap } from './incomeExampleMap';
import { PriceExplanationDialog } from './PriceExplanationDialog';
import { PriceSetDialog } from './PriceSetDialog';
import { DEFAULT_PRICE_SETTER } from './PriceSetter';

const getPriceFromIncome = (income: association, basePrice: BasePrice) => {
    switch (income) {
        case association.poor:
            return basePrice[association.poor];

        case association.modest:
            return basePrice[association.modest];

        case association.wealthy:
            return basePrice[association.wealthy];

        default:
            return basePrice[association.rich];
    }
};

const START_EDIT: UserMadeImpression = {
    isAbout: WeServe.impressions,
    category: Noticable.bartender,
    isUserMade: true,
    name: '',
    patterns: [],
};

export const QuestScene = (props: {
    basePrice: BasePrice;
    impressions: Impression[];
    handleAdd: (add: Demand) => void;
    handleReduce: (
        deletes: string[],
        rerolls: string[],
        demand: Demand,
        removedKeys: (FantasyKeys | 'isUserMade')[]
    ) => void;
    handleEdit: (edit: UserMade, previousName?: string) => void;
    handleBasePrice: (change: BasePrice) => void;
    banner: BannerData;
    closeBanner: () => void;
    qualityLeft: Map<Describable, CreationQuality>;
}) => {
    const [explanationDialog, setDialog] = useState({
        open: false,
        income: association.poor,
        jobExamples: '',
        currencyName: props.basePrice.currency,
        price: props.basePrice[association.poor],
    });

    const [priceSetter, setPriceSetter] = useState(DEFAULT_PRICE_SETTER);
    const [currencySetter, setCurrencySetter] = useState({
        open: false,
        currency: props.basePrice.currency,
    });
    const [editor, setEditor] = useState({
        visible: false,
        startData: START_EDIT,
    });
    const [savedListData, setSavedListData] = useState({
        visible: false,
        demand: { isAbout: START_EDIT.isAbout, category: START_EDIT.category },
    });

    const onInfoPress = (income: Income) => {
        const price = getPriceFromIncome(income, props.basePrice);
        setDialog({
            open: true,
            income: income,
            jobExamples: incomeExampleMap.get(income)!,
            currencyName: props.basePrice.currency,
            price: price,
        });
    };
    const onPriceSetPress = (income: Income) => {
        const price = getPriceFromIncome(income, props.basePrice);
        setPriceSetter({
            open: false,
            income: income,
            price: price,
            priceText: price.toString(),
        });

        setPriceSetter({
            open: true,
            income: income,
            price: price,
            priceText: price.toString(),
        });
    };

    const onCurrencySetPress = () => {
        setCurrencySetter({
            open: true,
            currency: props.basePrice.currency,
        });
    };

    const onPriceSet = (
        newPrice?: number,
        income?: Income,
        newCurrency?: string
    ) => {
        const basePriceChange = newCurrency
            ? { currency: newCurrency }
            : newPrice && income
            ? { [income]: newPrice }
            : {};
        const newBasePrice: BasePrice = {
            ...props.basePrice,
            ...basePriceChange,
        };
        props.handleBasePrice(newBasePrice);
    };

    const setPriceText = (text: string) => {
        setPriceSetter({
            open: priceSetter.open,
            income: priceSetter.income,
            priceText: text,
            price: priceSetter.price,
        });
    };

    const onDialogDismiss = () => {
        setDialog({
            open: false,
            income: explanationDialog.income,
            price: explanationDialog.price,
            currencyName: explanationDialog.currencyName,
            jobExamples: explanationDialog.jobExamples,
        });
        setPriceSetter({
            open: false,
            income: priceSetter.income,
            price: priceSetter.price,
            priceText: priceSetter.priceText,
        });
        setCurrencySetter({
            open: false,
            currency: props.basePrice.currency,
        });
    };
    const dismissEditorModal = () => {
        setEditor({ ...editor, visible: false });
    };
    const addUserImpression = (offer: UserMadeImpression) => {
        props.handleEdit(offer);
        dismissEditorModal();
    };
    const editUserImpression = (
        offer: UserMadeImpression,
        previousName: string
    ) => {
        props.handleEdit(offer, previousName);
        dismissEditorModal();
    };
    const onEdit = (startData: UserMadeImpression) => {
        setEditor({ startData, visible: true });
    };
    const onCreate = (edit: Demand) => {
        if (edit.isAbout === WeServe.impressions) {
            setEditor({
                visible: true,
                startData: {
                    ...START_EDIT,
                    ...edit,
                },
            });
        }
    };

    const onImport = (demand: Demand) => {
        if (demand.isAbout === WeServe.impressions) {
            setSavedListData({
                visible: true,
                demand: demand,
            });
        }
    };

    const nameIsDuplicated = (name: string) => {
        return props.impressions.some((impression) => impression.name === name);
    };
    return (
        <ScrollView
            style={{
                backgroundColor: nameSceneStyles.backgroundView.backgroundColor,
            }}
        >
            <MenuBanner
                bannerData={props.banner}
                bannerEnding={'Let the story begin!'}
                isAbout={WeServe.impressions}
                onDismiss={props.closeBanner}
            />
            <PriceExplanationDialog
                explanationDialog={explanationDialog}
                onDismiss={onDialogDismiss}
            />
            <PriceSetDialog
                open={priceSetter.open}
                onDismiss={onDialogDismiss}
                income={priceSetter.income}
                priceText={priceSetter.priceText}
                lastPrice={priceSetter.price}
                setPrice={onPriceSet}
                setPriceText={setPriceText}
            ></PriceSetDialog>
            <CurrencySetDialog
                open={currencySetter.open}
                currency={currencySetter.currency}
                setCurrency={(newCurrency: string) => {
                    onPriceSet(undefined, undefined, newCurrency);
                }}
                onDismiss={onDialogDismiss}
            ></CurrencySetDialog>
            <DetailsList
                onReduce={props.handleReduce}
                onEdit={onEdit}
                addingAcions={{
                    randomAdd: props.handleAdd,
                    import: onImport,
                    edit: onCreate,
                }}
                basePrice={props.basePrice}
                onInfoPress={onInfoPress}
                onPriceSetPress={onPriceSetPress}
                onCurrencySetPress={onCurrencySetPress}
                impressions={props.impressions}
                qualityLeft={props.qualityLeft}
            ></DetailsList>
            <Portal>
                <Modal visible={editor.visible} onDismiss={dismissEditorModal}>
                    <ImpressionEditor
                        prevData={editor.startData}
                        overwriteEdit={editUserImpression}
                        addEdit={addUserImpression}
                        names={props.impressions.map(
                            (impression) => impression.name
                        )}
                    />
                </Modal>
                <ListOfSaves
                    title={savedListData.demand.category.toUpperCase()}
                    dataHandler={new Database()}
                    building={{
                        ...savedListData.demand,
                        build: (name: string) => {
                            addUserImpression({
                                ...savedListData.demand,
                                name: name,
                                isUserMade: true,
                                patterns: [],
                            });
                        },
                        nameIsDuplicated,
                    }}
                    visible={savedListData.visible}
                    onDismiss={() => {
                        setSavedListData({
                            visible: false,
                            demand: START_EDIT,
                        });
                    }}
                />
            </Portal>
        </ScrollView>
    );
};
