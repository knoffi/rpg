import React, { useState } from 'react';
import { View } from 'react-native';
import {
    Button,
    Dialog,
    HelperText,
    Portal,
    TextInput,
} from 'react-native-paper';
import { association } from '../../classes/association';

export const PriceSetDialog = (props: {
    priceText: string;
    lastPrice: number;
    setPriceText: (priceText: string) => void;
    income: association;
    open: boolean;
    onDismiss: () => void;
    setPrice: (newPrice: number, income: association) => void;
}) => {
    const [textIsValid, setTextIsValid] = useState(true);

    const textIsNumber = (text: string) => {
        return text.match(/^[0-9]+$/) != null;
    };
    return (
        <Portal>
            <Dialog
                visible={props.open}
                onDismiss={() => {
                    props.setPriceText(props.lastPrice.toString());
                    props.onDismiss();
                }}
            >
                <Dialog.Content>
                    <TextInput
                        mode="outlined"
                        value={props.priceText}
                        label="New price"
                        placeholder={props.income.toUpperCase()}
                        onChangeText={(text: string) => {
                            props.setPriceText(text);
                            if (textIsNumber(text)) {
                                setTextIsValid(true);
                            } else {
                                setTextIsValid(false);
                            }
                        }}
                    ></TextInput>
                    <HelperText type="error" visible={!textIsValid}>
                        Only positive numbers, please.
                    </HelperText>
                    <View>
                        <Button
                            onPress={() => {
                                props.setPrice(
                                    parseInt(props.priceText),
                                    props.income
                                );
                                props.onDismiss();
                            }}
                            disabled={!textIsValid}
                            mode="contained"
                        >
                            Okay!
                        </Button>
                    </View>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
};
