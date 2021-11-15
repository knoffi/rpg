import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { ContentCreator } from '../../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../../classes/contentCreator/FantasKeys';
import { HEIGHT_FACTOR, WIDTH_FACTOR } from '../../dimensionConstants';
import { WeServe } from '../../editNavigator/WeServe';
import {
    getLazyUniverseMap,
    getUniverseMap,
    UniverseMap,
} from '../../mainNavigator/UniverseMap';

export const UniverseSetting = (props: {
    onAccept: (map: UniverseMap) => void;
    acceptText: string;
    universe: UniverseMap;
}) => {
    const [map, setMap] = React.useState(getLazyUniverseMap(props.universe));

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
