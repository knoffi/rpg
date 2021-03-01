import React from 'react';
import { Text } from 'react-native';
import { Dialog, Portal } from 'react-native-paper';
import { association } from '../../classes/association';

export interface descriptionDialog {
    open: boolean;
    income: association;
    jobExamples: string;
    currencyName: string;
    price: number;
}

export const PriceDescriptionDialog = (props: {
    descriptionDialog: descriptionDialog;
    onDismiss: () => void;
}) => {
    return (
        <Portal>
            <Dialog
                visible={props.descriptionDialog.open}
                onDismiss={props.onDismiss}
            >
                <Dialog.Content>
                    <Text>
                        <Text style={{ fontSize: 18 }}>
                            {props.descriptionDialog.price.toString() +
                                ' ' +
                                props.descriptionDialog.currencyName +
                                ' stands for the average price which ' +
                                props.descriptionDialog.income +
                                ' customers pay for a drink.\n\n'}
                        </Text>
                        <Text style={{ textDecorationLine: 'underline' }}>
                            {'We recommend this for:\n'}
                        </Text>
                        <Text style={{ fontStyle: 'italic' }}>
                            {props.descriptionDialog.jobExamples}
                        </Text>
                    </Text>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
};
