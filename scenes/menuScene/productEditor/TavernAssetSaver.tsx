import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

interface TavernAssetSaverProps {
    name: string;
}
interface TavernAssetSaverState {
    saved: string;
}
const TEST_KEY = 'test';
export class TavernAssetSaver extends React.Component<
    TavernAssetSaverProps,
    TavernAssetSaverState
> {
    state = { saved: 'Nothing here' };
    constructor(props: any) {
        super(props);
        this.getData();
    }

    public render = () => {
        return (
            <View>
                <Button onPress={() => this.storeData(this.props.name)}>
                    save name
                </Button>
                <Button
                    onPress={() => {
                        console.log(this.state);
                    }}
                >
                    {this.state.saved}
                </Button>
            </View>
        );
    };
    storeData = async (value: string) => {
        try {
            await AsyncStorage.setItem(TEST_KEY, value);
        } catch (e) {
            console.log(e);
        }
    };

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem(TEST_KEY);
            if (value !== null) {
                this.setState({ saved: value });
            }
        } catch (e) {
            // error reading value
            console.log(e);
        }
    };
}
