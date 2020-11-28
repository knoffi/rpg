import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

export const EditFABGroup = (props: {
    onRedo: () => void;
    onUndo: () => void;
    onSave: () => void;
    disableRedo: boolean;
    disableUndo: boolean;
    disableSave: boolean;
}) => {
    const [isGroupOpen, setGroupOpen] = React.useState(false);
    const [holdClosing, setHoldClosing] = React.useState(false);

    return (
        <Provider>
            <Portal>
                <FAB.Group
                    open={isGroupOpen}
                    icon={
                        isGroupOpen
                            ? (props) => (
                                  <MaterialIcons name="cancel" size={24} />
                              )
                            : (props) => (
                                  <AntDesign
                                      name="tool"
                                      size={24}
                                      color="black"
                                  />
                              )
                    }
                    visible={true}
                    style={{
                        padding: 40,
                        zIndex: 3,
                    }}
                    actions={[
                        {
                            icon: (props) => (
                                <FontAwesome
                                    name="mail-forward"
                                    size={props.size}
                                    color={props.color}
                                />
                            ),
                            onPress: props.disableRedo
                                ? () => {}
                                : props.onRedo,
                            label: 'REDO',
                            color: props.disableRedo ? 'grey' : 'blue',
                        },
                        {
                            icon: (props) => (
                                <FontAwesome
                                    name="mail-reply"
                                    size={props.size}
                                    color={props.color}
                                />
                            ),
                            onPress: props.disableUndo
                                ? () => {}
                                : props.onUndo,
                            label: 'UNDO',
                            color: props.disableUndo ? 'grey' : 'blue',
                        },
                        {
                            icon: (props) => (
                                <FontAwesome
                                    name="save"
                                    size={props.size}
                                    color={props.color}
                                />
                            ),
                            onPress: props.disableSave
                                ? () => {}
                                : () => {
                                      setGroupOpen(false);
                                      setHoldClosing(false);
                                      props.onSave();
                                  },
                            label: 'SAVE',
                            color: props.disableSave ? 'grey' : 'green',
                        },
                    ]}
                    onStateChange={(state: { open: boolean }) => {
                        if (!holdClosing) {
                            setGroupOpen(state.open);
                        }
                    }}
                    onPress={() => {
                        if (holdClosing) {
                            setGroupOpen(false);
                            setHoldClosing(false);
                        } else {
                            setHoldClosing(true);
                        }
                    }}
                ></FAB.Group>
            </Portal>
        </Provider>
    );
};
