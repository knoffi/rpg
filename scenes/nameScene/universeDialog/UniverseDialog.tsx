import React from 'react';
import { Dialog, Portal } from 'react-native-paper';
import { UniverseMap } from '../../../mainNavigator/UniverseMap';
import { UniverseSetting } from '../../startOptionsScene/UniverseSetting';

export const UniverseDialog = (props: {
    onConentSet: (map: UniverseMap) => void;
    isVisible: boolean;
    onDismiss: () => void;
    universe: UniverseMap;
}) => {
    return (
        <Portal>
            <Dialog
                dismissable={true}
                visible={props.isVisible}
                onDismiss={props.onDismiss}
            >
                <UniverseSetting
                    onAccept={(map: UniverseMap) => {
                        props.onConentSet(map);
                        props.onDismiss();
                    }}
                    acceptText="OKAY"
                    universe={props.universe}
                ></UniverseSetting>
            </Dialog>
        </Portal>
    );
};
