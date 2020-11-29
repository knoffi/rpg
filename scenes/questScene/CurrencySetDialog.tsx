import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';

export const CurrencySetDialog = (props: {
    currency: string;
    open: boolean;
    onDismiss: () => void;
    setCurrency: (newCurrency: string) => void;
}) => {
    const [text, setText] = useState(props.currency);

    return (
        <Portal>
            <Dialog visible={props.open} onDismiss={props.onDismiss}>
                <Dialog.Content>
                    <TextInput
                        mode="outlined"
                        value={text}
                        label="New currency"
                        placeholder={props.currency}
                        onChangeText={setText}
                    ></TextInput>
                    <View>
                        <Button
                            onPress={() => {
                                props.setCurrency(text);
                                props.onDismiss();
                            }}
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
