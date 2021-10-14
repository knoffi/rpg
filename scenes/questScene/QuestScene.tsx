import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { association, Income } from '../../classes/association';
import { ContentCreator } from '../../classes/contentCreator/ContentCreator';
import { StructuredTavernFits } from '../../classes/idea/StructuredTavernFits';
import { WeServe } from '../../editNavigator/WeServe';
import { Describable } from '../../mainNavigator/TavernData';
import { BasePrice } from '../menuScene/basePrice';
import { BannerData, MenuBanner } from '../menuScene/menuBanner/MenuBanner';
import { Demand } from '../menuScene/offerList/actionInterfaces';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { CurrencySetDialog } from './CurrencySetDialog';
import { DetailsList } from './DetailsList';
import { getFullKeys } from './getFullKeys';
import { getUsedPatterns } from './getUsedPatterns';
import { IImpression } from './impressions/IImpression';
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

export const QuestScene = (props: {
    fitting: StructuredTavernFits;
    basePrice: BasePrice;
    impressions: IImpression[];
    handleAdd: (add: Demand) => void;
    handleDelete: (name: string, deleted: Demand) => void;
    handleReroll: (name: string, rerolled: Demand) => void;
    handleBasePrice: (change: BasePrice) => void;
    banner: BannerData;
    noticablesLeft: Map<Describable, boolean>;
}) => {
    const creator = new ContentCreator();
    const [explanationDialog, setDialog] = useState({
        open: false,
        income: association.poor,
        jobExamples: '',
        currencyName: props.basePrice.currency,
        price: props.basePrice[association.poor],
    });
    const [fullKeys, setFullKeys] = useState(getFullKeys(props.impressions));
    const [patterns, setPatterns] = useState(
        getUsedPatterns(props.impressions)
    );

    const [priceSetter, setPriceSetter] = useState(DEFAULT_PRICE_SETTER);
    const [currencySetter, setCurrencySetter] = useState({
        open: false,
        currency: props.basePrice.currency,
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
                setBannerInvsible={() => {
                    console.log('METHOD NOT IMPLEMENTED!');
                }}
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
                onDelete={onDelete}
                onReroll={onReroll}
                onAdd={onAdd}
                basePrice={props.basePrice}
                onInfoPress={onInfoPress}
                onPriceSetPress={onPriceSetPress}
                onCurrencySetPress={onCurrencySetPress}
                impressions={props.impressions}
                noticablesLeft={props.noticablesLeft}
            ></DetailsList>
            <Text>
                {JSON.stringify(fullKeys.first.map((key) => key.slice(0, 8)))}
            </Text>
            <Text>
                {JSON.stringify(patterns.map((pattern) => pattern.slice(0, 8)))}
            </Text>
        </ScrollView>
    );
};
