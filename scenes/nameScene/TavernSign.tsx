import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { nameSignStyles } from './nameSignStyles';

const NO_ARTICAL_BOUNDARY = 20;

export const TavernSign = (props: { nameText: string }) => {
    const introText =
        props.nameText.length < NO_ARTICAL_BOUNDARY ? (
            <Text style={nameSignStyles.articalText}>The</Text>
        ) : undefined;

    return (
        <View>
            <ImageBackground
                source={require('../../assets/tavernSign.png')}
                style={{
                    alignSelf: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
                imageStyle={{
                    resizeMode: 'center',
                }}
            >
                <View style={nameSignStyles.textView}>
                    {introText}
                    <Text style={nameSignStyles.nameText}>
                        {props.nameText}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};
