import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { association } from '../../classes/association';
import { TavernData } from '../../mainNavigator/TavernData';
import { BasePrice } from '../menuScene/basePrice';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { CurrencySetDialog } from './CurrencySetDialog';
import { DetailsList } from './DetailsList';
import { incomeExampleMap } from './incomeExampleMap';
import { PriceDescriptionDialog } from './PriceDescriptionDialog';
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
    fitting: { fits: association[]; misfits: association[] };
    basePrice: BasePrice;
    onDataChange: (newData: Partial<TavernData>) => void;
}) => {
    const [descriptionDialog, setDialog] = useState({
        open: false,
        income: association.poor,
        jobExamples: '',
        currencyName: props.basePrice.currency,
        price: props.basePrice.poor,
    });
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
            income: descriptionDialog.income,
            price: descriptionDialog.price,
            currencyName: descriptionDialog.currencyName,
            jobExamples: descriptionDialog.jobExamples,
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
            <PriceDescriptionDialog
                descriptionDialog={descriptionDialog}
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
                fits={props.fitting.fits}
                basePrice={props.basePrice}
                onInfoPress={onInfoPress}
                onPriceSetPress={onPriceSetPress}
                onCurrencySetPress={onCurrencySetPress}
            ></DetailsList>
        </ScrollView>
    );
};
