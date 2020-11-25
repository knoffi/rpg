import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

export const EditFABGroup = (props: {
    onRedo: () => void;
    onUndo: () => void;
    onSave: () => void;
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
                                    size={24}
                                    color="black"
                                />
                            ),
                            onPress: props.onRedo,
                            label: 'REDO',
                        },
                        {
                            icon: (props) => (
                                <FontAwesome
                                    name="mail-reply"
                                    size={24}
                                    color="black"
                                />
                            ),
                            onPress: props.onUndo,
                            label: 'UNDO',
                        },
                        {
                            icon: (props) => (
                                <FontAwesome
                                    name="save"
                                    size={24}
                                    color="black"
                                />
                            ),
                            onPress: () => {
                                setGroupOpen(false);
                                setHoldClosing(false);
                                props.onSave();
                            },
                            label: 'SAVE',
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
