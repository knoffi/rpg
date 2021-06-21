import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import React from 'react';
import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { MainNavigator } from './mainNavigator/MainNavigator';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        background: '#E8D7B4',
        accent: '#462c99',
    },
};

const MyApp = () => {
    const [fontsLoaded] = useFonts({
        primitive: require('./assets/fonts/primitive.ttf'),
        vinque: require('./assets/fonts/vinque.regular.ttf'),
        augusta: require('./assets/fonts/augusta.regular.ttf'),
        kingthings1: require('./assets/fonts/kingthings-calligraphica.2.ttf'),
        kingthings2: require('./assets/fonts/kingthings-calligraphica.light.ttf'),
        kingthings3: require('./assets/fonts/kingthings-foundation.regular.ttf'),
        kingthings4: require('./assets/fonts/kingthings-petrock.regular.ttf'),
        aladin: require('./assets/fonts/aladin.regular.ttf'),
        blackchancery: require('./assets/fonts/blackchancery.regular.ttf'),
        blackwood: require('./assets/fonts/blackwood-castle.shadow.ttf'),
        wallau: require('./assets/fonts/ds-wallau.osf.ttf'),
        newrocker: require('./assets/fonts/new-rocker.regular.ttf'),
        schampel: require('./assets/fonts/schampel.regular.ttf'),
        devinne: require('./assets/fonts/devinne-swash.regular.ttf'),
        goudy: require('./assets/fonts/goudy.mediaeval-demibold.ttf'),
        caslonbold: require('./assets/fonts/caslon-antique.bold.ttf'),
        caslon: require('./assets/fonts/caslon-antique.regular.ttf'),
        skranjibold: require('./assets/fonts/skranji.bold.ttf'),
        skranji: require('./assets/fonts/skranji.regular.ttf'),
        baldur: require('./assets/fonts/baldur.regular.ttf'),
        berkshire: require('./assets/fonts/berkshire-swash.regular.ttf'),
        icons: require('./assets/fonts/icomoon.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <PaperProvider theme={theme}>
                <MainNavigator />
            </PaperProvider>
        );
    }
};

export default MyApp;
