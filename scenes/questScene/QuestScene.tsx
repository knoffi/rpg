import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { association } from '../../classes/association';
import { Noticable } from '../../classes/idea/Noticable';
import { StructuredTavernFits } from '../../classes/idea/StructuredTavernFits';
import { WeServe } from '../../editNavigator/WeServe';
import { TavernData } from '../../mainNavigator/TavernData';
import { BasePrice } from '../menuScene/basePrice';
import { BannerData, MenuBanner } from '../menuScene/menuBanner/MenuBanner';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { CurrencySetDialog } from './CurrencySetDialog';
import { DetailsList } from './DetailsList';
import { getFullKeys } from './getNamesAndFullKeys';
import {
    getImpressionsWithOneReroll,
    getRandomImpression,
} from './impressions/getRandomImpression';
import { IImpression } from './impressions/IImpression';
import { incomeExampleMap } from './incomeExampleMap';
import { PriceExplanationDialog } from './PriceExplanationDialog';
import { PriceSetDialog } from './PriceSetDialog';

const getPriceFromIncome = (income: association, basePrice: BasePrice) => {
    switch (income) {
        case association.poor:
            return basePrice.poor;

        case association.modest:
            return basePrice.modest;

        case association.wealthy:
            return basePrice.wealthy;

        default:
            return basePrice.rich;
    }
};

export const QuestScene = (props: {
    fitting: StructuredTavernFits;
    basePrice: BasePrice;
    impressions: IImpression[];
    banner: BannerData;
    noticablesLeft: Map<Noticable, boolean>;
    onDataChange: (newData: Partial<TavernData>) => void;
    getImpliedChanges: (newImpressions?: IImpression[]) => Partial<TavernData>;
}) => {
    const [explanationDialog, setDialog] = useState({
        open: false,
        income: association.poor,
        jobExamples: '',
        currencyName: props.basePrice.currency,
        price: props.basePrice.poor,
    });
    const [fullKeys, setFullKeys] = useState(getFullKeys(props.impressions));
    const onDelete = (name: string) => {
        const otherImpressions = props.impressions.filter(
            (impression) => impression.name !== name
        );
        const bannerChanges = props.getImpliedChanges(otherImpressions);
        setFullKeys(getFullKeys(otherImpressions));
        props.onDataChange({ impressions: otherImpressions, ...bannerChanges });
    };
    const onReroll = (oldImpression: IImpression) => {
        const newImpressions = getImpressionsWithOneReroll(
            oldImpression.name,
            props.impressions,
            props.fitting,
            oldImpression.category,
            fullKeys.first,
            fullKeys.second
        );
        if (!newImpressions) {
            console.log('I am undefined');
        }
        if (newImpressions) {
            setFullKeys(getFullKeys(newImpressions));
            props.onDataChange({
                impressions: newImpressions,
            });
        }
    };

    const onAdd = (category: Noticable) => {
        const oldNames = props.impressions.map((impression) => impression.name);
        const newImpression = getRandomImpression(
            props.fitting,
            category,
            oldNames,
            fullKeys.first,
            fullKeys.second
        );
        const extendedImpressions = [...props.impressions, newImpression];
        setFullKeys(getFullKeys(extendedImpressions));
        const bannerChanges = props.getImpliedChanges(extendedImpressions);
        props.onDataChange({
            impressions: extendedImpressions,
            ...bannerChanges,
        });
    };
    const [priceSetter, setPriceSetter] = useState({
        open: false,
        income: association.poor,
        priceText: props.basePrice.poor.toString(),
        price: 12,
    });
    const [currencySetter, setCurrencySetter] = useState({
        open: false,
        currency: props.basePrice.currency,
    });

    const onInfoPress = (income: association) => {
        const price = getPriceFromIncome(income, props.basePrice);
        setDialog({
            open: true,
            income: income,
            jobExamples: incomeExampleMap.get(income)!,
            currencyName: props.basePrice.currency,
            price: price,
        });
    };
    const onPriceSetPress = (income: association) => {
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
        income?: association,
        newCurrency?: string
    ) => {
        if (newCurrency) {
            props.onDataChange({
                prices: {
                    currency: newCurrency,
                    poor: props.basePrice.poor,
                    modest: props.basePrice.modest,
                    wealthy: props.basePrice.wealthy,
                    rich: props.basePrice.rich,
                },
            });
        }
        if (income) {
            if (newPrice) {
                switch (income) {
                    case association.poor:
                        props.onDataChange({
                            prices: {
                                currency: props.basePrice.currency,
                                poor: newPrice,
                                modest: props.basePrice.modest,
                                wealthy: props.basePrice.wealthy,
                                rich: props.basePrice.rich,
                            },
                        });
                        break;

                    case association.modest:
                        props.onDataChange({
                            prices: {
                                currency: props.basePrice.currency,
                                poor: props.basePrice.poor,
                                modest: newPrice,
                                wealthy: props.basePrice.wealthy,
                                rich: props.basePrice.rich,
                            },
                        });
                        break;

                    case association.wealthy:
                        props.onDataChange({
                            prices: {
                                currency: props.basePrice.currency,
                                poor: props.basePrice.poor,
                                modest: props.basePrice.modest,
                                wealthy: newPrice,
                                rich: props.basePrice.rich,
                            },
                        });
                        break;

                    default:
                        props.onDataChange({
                            prices: {
                                currency: props.basePrice.currency,
                                poor: props.basePrice.poor,
                                modest: props.basePrice.modest,
                                wealthy: props.basePrice.wealthy,
                                rich: newPrice,
                            },
                        });
                        break;
                }
            }
        }
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
                onDataChange={props.onDataChange}
                getImpliedChanges={props.getImpliedChanges}
                bannerEnding={'Let the story begin!'}
                isAbout={WeServe.impressions}
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
                onDataChange={props.onDataChange}
                impressions={props.impressions}
                noticablesLeft={props.noticablesLeft}
                getImpliedChanges={props.getImpliedChanges}
            ></DetailsList>
        </ScrollView>
    );
};
