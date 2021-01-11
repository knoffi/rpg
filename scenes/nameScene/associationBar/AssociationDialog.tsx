import * as React from 'react';
import { Text, View } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { association, getAssociation } from '../../../classes/Adjectives';

export const AssociationDialog = (props: {
    pickAssociationList: association[];
    startText: string;
    onPick: (oldAssociation: association, newAssociation: association) => void;
    color: string;
}) => {
    const [visible, setVisible] = React.useState(false);
    const [text, setText] = React.useState(props.startText);

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
                            setText(association);
                            closeDialog();
                            props.onPick(getAssociation(text), association);
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
                    setText(props.startText);
                    closeDialog();
                    props.onPick(getAssociation(text), association.empty);
                }}
                pick={<Text style={{ color: 'red' }}>DELETE</Text>}
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
    return (
        <Button
            onPress={() => {
                props.setPick();
            }}
        >
            {props.pick}
        </Button>
    );
};
