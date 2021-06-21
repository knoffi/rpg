import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { FONT_FACTOR } from '../../dimensionConstants';
import { nameSignStyles } from './nameSignStyles';

const NO_ARTICLE_BOUNDARY = 20;

export const TavernSign = (props: { nameText: string }) => {
    const [fontIndex, setFontIndex] = useState(0);
    const fonts = [
        'primitive',
        'vinque',
        'augusta',
        'kingthings1',
        'kingthings2',
        'kingthings3',
        'kingthings4',
        'aladin',
        'newrocker',
        'blackwood',
        'blackchancery',
        'wallau',
        'schampel',
        'berkshire',
        'goudy',
        'devinne',
        'skranji',
        'skranjibold',
        'baldur',
        'caslon',
        'caslonbold',
    ];
    const fontSizes = [
        34 * FONT_FACTOR,
        38 * FONT_FACTOR,
        42 * FONT_FACTOR,
        48 * FONT_FACTOR,
        44 * FONT_FACTOR,
        40 * FONT_FACTOR,
        42 * FONT_FACTOR,
        40 * FONT_FACTOR,
        38 * FONT_FACTOR,
        40 * FONT_FACTOR,
        38 * FONT_FACTOR,
        42 * FONT_FACTOR,
        36 * FONT_FACTOR,
        36 * FONT_FACTOR,
        36 * FONT_FACTOR,
        36 * FONT_FACTOR,
        36 * FONT_FACTOR,
        36 * FONT_FACTOR,
        36 * FONT_FACTOR,
        36 * FONT_FACTOR,
        36 * FONT_FACTOR,
    ];
    const introText =
        props.nameText.length < NO_ARTICLE_BOUNDARY ? (
            <Text
                style={{
                    ...nameSignStyles.articleText,
                    fontFamily: fonts[fontIndex],
                    fontSize: fontSizes[fontIndex] / 2,
                }}
            >
                The
            </Text>
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
                    <Text
                        style={{
                            ...nameSignStyles.nameText,
                            fontFamily: fonts[fontIndex],
                            fontSize: fontSizes[fontIndex],
                        }}
                    >
                        {props.nameText}
                    </Text>
                </View>
            </ImageBackground>
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
                <Button
                    onPress={() => {
                        setFontIndex((fontIndex - 1 + 21) % 21);
                    }}
                >
                    {' '}
                </Button>
                <Button
                    onPress={() => {
                        setFontIndex((fontIndex + 1) % 21);
                    }}
                >
                    {' '}
                </Button>
            </View>
        </View>
    );
};
