import * as React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Modal, Paragraph, Portal, Provider } from 'react-native-paper';
import { ContentCreator } from '../../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../../classes/contentCreator/FantasKeys';
import { Noticable } from '../../classes/idea/Noticable';
import { Drinkable, Eatable } from '../../classes/TavernProduct';
import {
    buttonEmphasis,
    InfoIconButton,
} from '../../components/buttons/Buttons';
import { HEIGHT_FACTOR, WIDTH_FACTOR } from '../../dimensionConstants';
import { Describable } from '../../mainNavigator/TavernData';
import {
    DEFAULT_UNIVERSE_MAP,
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
                                    thisModal: false,
                                    universeSetting: true,
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
                    //{' '}
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
                            startUniverse={(map: UniverseMap) => {
                                props.buildRandomTavern(map);
                                hideModal();
                            }}
                        ></UniverseSetting>
                    ) : undefined}
                </Modal>
            </Portal>
        </Provider>
    );
};
const UniverseSetting = (props: {
    startUniverse: (map: UniverseMap) => void;
}) => {
    const [map, setMap] = React.useState(DEFAULT_UNIVERSE_MAP);
    const allCategories: Describable[] = Object.values(
        Noticable || Drinkable || Eatable
    );
    const getUniverseIncrementer = (category: Describable) => () => {
        const oldUniverse = map[category];
        const newUniverse = ContentCreator.getNextKey(oldUniverse);
        setMap({ ...map, [category]: newUniverse });
    };

    const buttons = allCategories.map((category) => (
        <UniverseButton
            category={category}
            key={category}
            universe={map[category]}
            onPress={getUniverseIncrementer(category)}
        ></UniverseButton>
    ));
    return (
        <ScrollView style={{ alignContent: 'flex-start' }}>
            {buttons}
            <Button
                onPress={() => props.startUniverse(map)}
                style={{ margin: 10 }}
                mode="contained"
            >
                Generate Tavern
            </Button>
        </ScrollView>
    );
};

const UniverseButton = (props: {
    category: Describable;
    universe: FantasyKeys;
    onPress: () => void;
}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginHorizontal: 10 * WIDTH_FACTOR,
                marginTop: 10 * HEIGHT_FACTOR,
                alignContent: 'center',
            }}
        >
            <Text>{props.category + ':'}</Text>
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
