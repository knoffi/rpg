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
