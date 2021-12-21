import React from 'react';
import { Text } from 'react-native';
import { Dialog, Portal } from 'react-native-paper';
import { association } from '../../classes/association';

interface ExplanationDialog {
    open: boolean;
    income: association;
    jobExamples: string;
    currencyName: string;
    price: number;
}

export const PriceExplanationDialog = (props: {
    explanationDialog: ExplanationDialog;
    onDismiss: () => void;
}) => {
    return (
        <Portal>
            <Dialog
                visible={props.explanationDialog.open}
                onDismiss={props.onDismiss}
            >
                <Dialog.Content>
                    <Text>
                        <Text style={{ fontSize: 18 }}>
                            {props.explanationDialog.price.toString() +
                                ' ' +
                                props.explanationDialog.currencyName +
                                ' stands for the average price which ' +
                                props.explanationDialog.income +
                                ' customers pay for a drink.\n\n'}
                        </Text>
                        <Text style={{ textDecorationLine: 'underline' }}>
                            {'We recommend this for:\n'}
                        </Text>
                        <Text style={{ fontStyle: 'italic' }}>
                            {props.explanationDialog.jobExamples}
                        </Text>
                    </Text>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
};
