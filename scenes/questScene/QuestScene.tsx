import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { association } from '../../classes/Adjectives';
import { DetailsList } from './DetailsList';
import { BasePrice } from '../menuScene/basePrice';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { CurrencySetDialog } from './CurrencySetDialog';
import { incomeExampleMap } from './incomeExampleMap';
import { PriceDescriptionDialog } from './PriceDescriptionDialog';
import { PriceSetDialog } from './PriceSetDialog';

export const QuestScene = (props: {
    fitting: { fits: association[]; misfits: association[] };
    basePrice: BasePrice;
    setBasePrice: (newPrices: BasePrice) => void;
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
        let price: number;
        switch (income) {
            case association.poor:
                price = props.basePrice.poor;
                break;
            case association.worker:
                price = props.basePrice.modest;
                break;
            case association.sophisticated:
                price = props.basePrice.wealthy;
                break;

            default:
                price = props.basePrice.rich;
                break;
        }
        setDialog({
            open: true,
            income: income,
            jobExamples: incomeExampleMap.get(income)!,
            currencyName: props.basePrice.currency,
            price: price,
        });
    };
    const onPriceSetPress = (income: association) => {
        let price: number;
        switch (income) {
            case association.poor:
                price = props.basePrice.poor;
                setPriceSetter({
                    open: false,
                    income: income,
                    price: price,
                    priceText: price.toString(),
                });
                break;
            case association.worker:
                price = props.basePrice.modest;
                setPriceSetter({
                    open: false,
                    income: income,
                    price: price,
                    priceText: price.toString(),
                });
                break;
            case association.sophisticated:
                price = props.basePrice.wealthy;
                setPriceSetter({
                    open: false,
                    income: income,
                    price: price,
                    priceText: price.toString(),
                });
                break;

            default:
                price = props.basePrice.rich;
                setPriceSetter({
                    open: false,
                    income: income,
                    price: price,
                    priceText: price.toString(),
                });
                break;
        }
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
            props.setBasePrice({
                currency: newCurrency,
                poor: props.basePrice.poor,
                modest: props.basePrice.modest,
                wealthy: props.basePrice.wealthy,
                rich: props.basePrice.rich,
            });
        }
        if (income) {
            if (newPrice) {
                switch (income) {
                    case association.poor:
                        props.setBasePrice({
                            currency: props.basePrice.currency,
                            poor: newPrice,
                            modest: props.basePrice.modest,
                            wealthy: props.basePrice.wealthy,
                            rich: props.basePrice.rich,
                        });
                        break;

                    case association.worker:
                        props.setBasePrice({
                            currency: props.basePrice.currency,
                            poor: props.basePrice.poor,
                            modest: newPrice,
                            wealthy: props.basePrice.wealthy,
                            rich: props.basePrice.rich,
                        });
                        break;

                    case association.sophisticated:
                        props.setBasePrice({
                            currency: props.basePrice.currency,
                            poor: props.basePrice.poor,
                            modest: props.basePrice.modest,
                            wealthy: newPrice,
                            rich: props.basePrice.rich,
                        });
                        break;

                    default:
                        props.setBasePrice({
                            currency: props.basePrice.currency,
                            poor: props.basePrice.poor,
                            modest: props.basePrice.modest,
                            wealthy: props.basePrice.wealthy,
                            rich: newPrice,
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
                basePrice={props.basePrice}
                onInfoPress={onInfoPress}
                onPriceSetPress={onPriceSetPress}
                onCurrencySetPress={onCurrencySetPress}
            ></DetailsList>
        </ScrollView>
    );
};
