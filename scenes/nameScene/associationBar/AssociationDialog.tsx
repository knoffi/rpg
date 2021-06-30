import * as React from 'react';
import { Text, View } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { association, AssociationTypes } from '../../../classes/association';
import { StructuredTavernFits } from '../../../classes/idea/StructuredTavernFits';

export const AssociationDialog = (props: {
    pickAssociationList: association[];
    startText: string;
    onPick: (newFit: Partial<StructuredTavernFits>) => void;
    onLongPress: () => void;
    color: string;
    type: AssociationTypes;
}) => {
    const [visible, setVisible] = React.useState(false);

    const openDialog = () => setVisible(true);

    const closeDialog = () => {
        setVisible(false);
    };
    const pickList = props.pickAssociationList.map(
        (association: association) => {
            return (
                <Dialog.Actions key={association + props.startText}>
                    <AssociationButton
                        setPick={() => {
                            closeDialog();
                            props.onPick({ [props.type]: association });
                        }}
                        pick={association}
                    />
                </Dialog.Actions>
            );
        }
    );
    pickList.push(
        <Dialog.Actions key={'delete' + props.startText}>
            <AssociationButton
                setPick={() => {
                    closeDialog();
                    props.onPick({ [props.type]: undefined });
                }}
                pick={<Text style={{ color: 'red' }}>CLEAR</Text>}
            />
        </Dialog.Actions>
    );

    return (
        <View
            style={{
                paddingTop: 10,
                flexDirection: 'row',
                justifyContent: 'center',
            }}
        >
            <Button
                onPress={() => {
                    openDialog();
                }}
                onLongPress={props.onLongPress}
                compact={true}
                mode="contained"
                color={props.color}
            >
                {props.startText}
            </Button>
            <Portal>
                <Dialog visible={visible} onDismiss={closeDialog}>
                    <Dialog.Title
                        style={{
                            textDecorationLine: 'underline',
                            fontWeight: 'bold',
                        }}
                        onTextLayout={() => {}}
                        dataDetectorType={'none'}
                    >
                        {props.startText.toUpperCase()}
                    </Dialog.Title>
                    {getDialogInput(pickList, props.startText)}
                </Dialog>
            </Portal>
        </View>
    );
};

const getDialogInput = (dialogActions: JSX.Element[], dialogName: string) => {
    return dialogActions.reduce((buttonPairs, buttonAction, index) => {
        if (index % 2 !== 0) {
            return buttonPairs;
        }
        const newbuttonPair = (
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
                key={index.toString() + dialogName}
            >
                {dialogActions[index]}
                {index + 1 < dialogActions.length
                    ? dialogActions[index + 1]
                    : undefined}
            </View>
        );
        return [...buttonPairs, newbuttonPair];
    }, [] as JSX.Element[]);
};

const AssociationButton = (props: any) => {
    return <Button onPress={props.setPick}>{props.pick}</Button>;
};
