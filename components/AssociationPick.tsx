import * as React from 'react';
import { Menu } from 'react-native-paper';

export const AssociationPick = (props: any) => {
    return (
        <Menu.Item
            onPress={() => {
                props.setPick();
            }}
            title={props.pick}
        />
    );
};
