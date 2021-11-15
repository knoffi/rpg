import React from 'react';
import { Modal } from 'react-native-paper';
import { UniverseMap } from '../../../mainNavigator/UniverseMap';
import { UniverseSetting } from '../../startOptionsScene/UniverseSetting';

export const UniverseModal = (props: {
    onConentSet: (map: UniverseMap) => void;
    isVisible: boolean;
    onDismiss: () => void;
    universe: UniverseMap;
}) => {
    return (
        <Modal
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
        </Modal>
    );
};
