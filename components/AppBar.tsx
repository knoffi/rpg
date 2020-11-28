import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const APP_BAR_BG = '#63481F';
const ACTIVE_BUTTON_COLOR = '#F4EADB';
const INACTIVE_BUTTON_COLOR = 'grey';

const AppBar = (props: {
    onUndo: () => void;
    undoDisabled: boolean;
    onRedo: () => void;
    redoDisabled: boolean;
    onBackNavigation: () => void;
    sceneTitle: string;
}) => (
    <Appbar.Header style={{ backgroundColor: APP_BAR_BG }}>
        <Appbar.BackAction onPress={props.onBackNavigation} />
        <Appbar.Content title={props.sceneTitle} />
        <Appbar.Action
            color={
                props.undoDisabled ? INACTIVE_BUTTON_COLOR : ACTIVE_BUTTON_COLOR
            }
            icon={(props) => (
                <FontAwesome
                    name="mail-reply"
                    size={props.size}
                    color={props.color}
                />
            )}
            onPress={() => {
                if (!props.undoDisabled) {
                    props.onUndo();
                }
            }}
        />
        <Appbar.Action
            color={
                props.redoDisabled ? INACTIVE_BUTTON_COLOR : ACTIVE_BUTTON_COLOR
            }
            icon={(props) => (
                <FontAwesome
                    name="mail-forward"
                    size={props.size}
                    color={props.color}
                />
            )}
            onPress={() => {
                if (!props.redoDisabled) {
                    props.onRedo();
                }
            }}
        />
    </Appbar.Header>
);

export default AppBar;

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
});
