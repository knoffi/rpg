import React, { useState } from 'react';
import {
    Button,
    Dialog,
    HelperText,
    Portal,
    TextInput,
} from 'react-native-paper';

const MAX_NAME_LENGTH = 42;
export const NameSetDialog = (props: {
    startText: string;
    setStartText: (text: string) => void;
    open: boolean;
    tavernName: string;
    setTavernName: (text: string) => void;
    onDismiss: () => void;
}) => {
    const [textIsValid, setTextIsValid] = useState(true);

    const checkText = (text: string) => {
        if (text.length > MAX_NAME_LENGTH) {
            setTextIsValid(false);
        } else {
            setTextIsValid(true);
        }
    };

    return (
        <Portal>
            <Dialog visible={props.open} onDismiss={props.onDismiss}>
                <Dialog.Content>
                    <TextInput
                        textAlign={false}
                        label="Tavern Name"
                        value={props.startText}
                        onChangeText={(text: string) => {
                            props.setStartText(text);
                            checkText(text);
                        }}
                    ></TextInput>
                    <HelperText
                        type="error"
                        visible={!textIsValid}
                        onTextLayout={() => {}}
                        dataDetectorType={'none'}
                    >
                        I am afriad this name might be too long for a proper
                        display.
                    </HelperText>
                    <Button
                        onPress={() => {
                            props.onDismiss();
                            props.setTavernName(props.startText);
                        }}
                    >
                        Okay!
                    </Button>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
};
