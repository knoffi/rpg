import * as React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Modal, Paragraph, Portal, Provider } from 'react-native-paper';
import { ContentCreator } from '../../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../../classes/contentCreator/FantasKeys';
import {
    buttonEmphasis,
    InfoIconButton,
} from '../../components/buttons/Buttons';
import { HEIGHT_FACTOR, WIDTH_FACTOR } from '../../dimensionConstants';
import { WeServe } from '../../editNavigator/WeServe';
import {
    DEFAULT_LAZY_UNIVERSE_MAP,
    getUniverseMap,
    UniverseMap,
} from '../../mainNavigator/UniverseMap';
import { taverns } from '../../templates/taverns';
import { editModalStyles } from './editModalStyles';
export const EditModal = (props: {
    buildTavernTemplate: (name: string) => void;
    buildRandomTavern: (map: UniverseMap) => void;
}) => {
    const [visibility, setVisibility] = React.useState({
        ['thisModal']: true,
        ['menu']: true,
        ['templates']: false,
        ['tavernInfo']: false,
        ['universeSetting']: false,
    });
    const [tavernInfoText, setTavernInfoText] = React.useState('');
    const [templateKey, setTempletKey] = React.useState('');
    const hideModal = () => {
        setVisibility({ ...visibility, thisModal: false });
    };
    const onCancel = () => {
        hideModal();
        props.buildTavernTemplate('default');
    };

    return (
        <Provider>
            <Portal>
                <Modal
                    visible={visibility.thisModal}
                    onDismiss={onCancel}
                    dismissable={false}
                    contentContainerStyle={editModalStyles.containerStyle}
                >
                    <Paragraph style={editModalStyles.paragraph}>
                        START OPTIONS
                    </Paragraph>
                    {visibility['menu'] ? (
                        <Button
                            style={editModalStyles.button}
                            mode="contained"
                            onPress={onCancel}
                        >
                            New Tavern
                        </Button>
                    ) : undefined}
                    {visibility['menu'] ? (
                        <Button
                            style={editModalStyles.button}
                            mode="contained"
                            onPress={() => {
                                setVisibility({
                                    ...visibility,
                                    universeSetting: true,
                                    menu: false,
                                });
                            }}
                        >
                            Random Tavern
                        </Button>
                    ) : undefined}
                    {visibility['menu'] ? (
                        <Button
                            style={editModalStyles.button}
                            mode="contained"
                            onPress={() => {
                                setVisibility({
                                    ...visibility,
                                    templates: true,
                                    menu: false,
                                });
                            }}
                        >
                            Saved Taverns
                        </Button>
                    ) : undefined}
                    {visibility['menu'] ? (
                        <Button
                            style={editModalStyles.button}
                            mode="contained"
                            onPress={() => {
                                setVisibility({
                                    ...visibility,
                                    menu: false,
                                    templates: true,
                                });
                            }}
                        >
                            Tavern Templates
                        </Button>
                    ) : undefined}
                    {visibility['templates'] ? (
                        <TavernsFlatList
                            onTavernInfoClick={(note: string, key: string) => {
                                setVisibility({
                                    ...visibility,
                                    tavernInfo: true,
                                    templates: false,
                                });
                                setTavernInfoText(note);
                                setTempletKey(key);
                            }}
                            onTavernClick={(key: string) => {
                                props.buildTavernTemplate(key);
                                hideModal();
                            }}
                        ></TavernsFlatList>
                    ) : undefined}
                    {visibility['tavernInfo'] ? (
                        <TavernInfo
                            onStartButton={() => {
                                props.buildTavernTemplate(templateKey);
                                hideModal();
                            }}
                            note={tavernInfoText}
                            onBackButton={() => {
                                setVisibility({
                                    ...visibility,
                                    tavernInfo: false,
                                    templates: true,
                                });
                            }}
                        ></TavernInfo>
                    ) : undefined}
                    {visibility['universeSetting'] ? (
                        <UniverseSetting
                            onAccept={(map: UniverseMap) => {
                                props.buildRandomTavern(map);
                                hideModal();
                            }}
                            acceptText={'Generate Tavern'}
                        ></UniverseSetting>
                    ) : undefined}
                </Modal>
            </Portal>
        </Provider>
    );
};

const UniverseSetting = (props: {
    onAccept: (map: UniverseMap) => void;
    acceptText: string;
}) => {
    const [map, setMap] = React.useState(DEFAULT_LAZY_UNIVERSE_MAP);

    const getUniverseIncrementer = (isAbout: WeServe) => () => {
        const oldUniverse = map[isAbout];
        const newUniverse = ContentCreator.getNextKey(oldUniverse);
        setMap({ ...map, [isAbout]: newUniverse });
    };

    const buttons = Object.values(WeServe).map((isAbout) => (
        <UniverseButton
            category={isAbout}
            key={isAbout}
            universe={map[isAbout]}
            onPress={getUniverseIncrementer(isAbout)}
        ></UniverseButton>
    ));
    return (
        <ScrollView style={{ alignContent: 'flex-start' }}>
            {buttons}
            <Button
                onPress={() => props.onAccept(getUniverseMap(map))}
                style={{ margin: 10 }}
                mode="contained"
            >
                {props.acceptText}
            </Button>
        </ScrollView>
    );
};

const UniverseButton = (props: {
    category: string;
    universe: FantasyKeys;
    onPress: () => void;
}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginHorizontal: 10 * WIDTH_FACTOR,
                marginTop: 10 * HEIGHT_FACTOR,
                justifyContent: 'space-between',
            }}
        >
            <Text style={{ fontWeight: 'bold' }}>
                {props.category.toUpperCase() + ':'}
            </Text>
            <Button onPress={props.onPress} mode="contained">
                {props.universe}
            </Button>
        </View>
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
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    paddingTop: 10,
                }}
            >
                <Button mode="contained" onPress={props.onBackButton}>
                    BACK
                </Button>
                <Button mode="contained" onPress={props.onStartButton}>
                    START TEMPLATE
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
