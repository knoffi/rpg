import * as React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Button, Modal, Portal, Provider } from 'react-native-paper';
import { taverns } from '../examples/taverns';
import { buttonEmphasis, InfoIconButton } from './buttons/generalButtons';

export const EditStartModal = (props: {
    buildTavernTemplate: (name: string) => void;
}) => {
    const [visible, setVisible] = React.useState(true);
    const [onButtonView, setOnButtonView] = React.useState(true);
    const [onTavernListView, setOnTavernListView] = React.useState(false);
    const [onTavernInfoView, setOnTavernInfoView] = React.useState(false);
    const [tavernInfoText, setTavernInfoText] = React.useState('');
    const [templateKey, setTempletKey] = React.useState('');
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, zIndex: 3 };

    return (
        <Provider>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={containerStyle}
                >
                    {onButtonView ? (
                        <Button
                            style={{ margin: 16, padding: 16 }}
                            mode="contained"
                            onPress={() => {
                                props.buildTavernTemplate('default');
                                setVisible(false);
                            }}
                        >
                            New Tavern
                        </Button>
                    ) : undefined}
                    {onButtonView ? (
                        <Button
                            style={{ margin: 16, padding: 16 }}
                            mode="contained"
                            onPress={() => {
                                props.buildTavernTemplate('default');
                                setVisible(false);
                            }}
                        >
                            Random Tavern
                        </Button>
                    ) : undefined}
                    {onButtonView ? (
                        <Button
                            style={{ margin: 16, padding: 16 }}
                            mode="contained"
                            onPress={() => {
                                setOnButtonView(false);
                                setOnTavernListView(true);
                            }}
                        >
                            Saved Taverns
                        </Button>
                    ) : undefined}
                    {onButtonView ? (
                        <Button
                            style={{ margin: 16, padding: 16 }}
                            mode="contained"
                            onPress={() => {
                                setOnButtonView(false);
                                setOnTavernListView(true);
                            }}
                        >
                            Tavern Templates
                        </Button>
                    ) : undefined}
                    {onTavernListView ? (
                        <TavernsFlatList
                            onTavernInfoClick={(note: string, key: string) => {
                                setOnTavernListView(false);
                                setOnTavernInfoView(true);
                                setTavernInfoText(note);
                                setTempletKey(key);
                            }}
                            onTavernClick={(key: string) => {
                                props.buildTavernTemplate(key);
                                setVisible(false);
                            }}
                        ></TavernsFlatList>
                    ) : undefined}
                    {onTavernInfoView ? (
                        <TavernInfo
                            onStartButton={() => {
                                props.buildTavernTemplate(templateKey);
                                setVisible(false);
                            }}
                            note={tavernInfoText}
                            onBackButton={() => {
                                setOnTavernInfoView(false);
                                setOnTavernListView(true);
                            }}
                        ></TavernInfo>
                    ) : undefined}
                </Modal>
            </Portal>
        </Provider>
    );
};

const TavernInfo = (props: {
    note: string;
    onBackButton: () => void;
    onStartButton: () => void;
}) => {
    return (
        <View>
            <Text>{props.note}</Text>
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
                <Button mode="contained" onPress={props.onBackButton}>
                    BACK TO LIST
                </Button>
                <Button mode="contained" onPress={props.onStartButton}>
                    USE THIS TEMPLATE
                </Button>
            </View>
        </View>
    );
};

const TavernsFlatList = (props: {
    onTavernInfoClick: (note: string, key: string) => void;
    onTavernClick: (key: string) => void;
}) => {
    return (
        <SafeAreaView>
            <FlatList
                data={taverns}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            marginVertical: 16,
                            justifyContent: 'flex-start',
                        }}
                    >
                        <InfoIconButton
                            onPress={() =>
                                props.onTavernInfoClick(item.note, item.key)
                            }
                            size={24}
                            padding={10}
                        ></InfoIconButton>
                        <Button
                            onPress={() => props.onTavernClick(item.key)}
                            mode={buttonEmphasis.medium}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                {item.name.toUpperCase()}
                            </Text>
                        </Button>
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />
        </SafeAreaView>
    );
};
