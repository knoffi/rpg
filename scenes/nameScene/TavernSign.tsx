import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { FONT_FACTOR, HEIGHT_FACTOR } from '../../dimensionConstants';
import { nameSignStyles } from './nameSignStyles';

const BIG_FONT_SIZE = 42 * FONT_FACTOR;
const ARTICLE_SCALING = 0.7;
const MISSING_ARTICLE_SCALING = 1.2;
const STANDARD_MAX_LINE_HEIGHT = 155 * HEIGHT_FACTOR;
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

    const getSplittedTextLines = (name: string, maxLength: number) => {
        const wordLengths = name.split(' ').map((word) => word.length);
        if (wordLengths[0] > maxLength) {
            return {
                first: name.substring(0, maxLength),
                second: name.substring(maxLength),
            };
        }
        const splitIndex = wordLengths.reduce(
            (prev, cur) => (prev + cur > maxLength ? prev : prev + cur + 1),
            -1
        );
        if (name.split(' ')[0].toUpperCase() === 'THE') {
            return { first: name.substring(0, 3), second: name.substring(4) };
        }
        return {
            first: name.substring(0, splitIndex),
            second: name.substring(splitIndex + 1),
        };
    };
    const getStyleFromName = (
        text: string,
        portion: number,
        hasArticle = false
    ) => {
        const sizeFactor =
            text.toUpperCase() === 'THE'
                ? ARTICLE_SCALING
                : hasArticle
                ? MISSING_ARTICLE_SCALING
                : 1;
        return {
            ...nameSignStyles.nameText,
            fontFamily: fonts[fontIndex],
            maxHeight:
                portion > 0
                    ? (STANDARD_MAX_LINE_HEIGHT / portion) * sizeFactor
                    : STANDARD_MAX_LINE_HEIGHT,
            fontSize: BIG_FONT_SIZE * sizeFactor,
            paddingTop: 5 * HEIGHT_FACTOR,
            paddingBottom: 5 * HEIGHT_FACTOR,
        };
    };
    const getTexts = (texts: string[]) => {
        const numberOfTexts = texts.length;
        const startsWithArticle = texts[0].toUpperCase() === 'THE';
        return texts.map((text, index) => (
            <Text
                style={getStyleFromName(text, numberOfTexts, startsWithArticle)}
                adjustsFontSizeToFit={true}
                minimumFontScale={0.2}
                key={index.toString() + text}
            >
                {text}
            </Text>
        ));
    };
    const getTextLines = () => {
        const MAX_LINE_CHARS = 14;
        const firstSplit = getSplittedTextLines(props.nameText, MAX_LINE_CHARS);
        const firstText = firstSplit.first;
        if (firstSplit.second.length === 0) {
            return getTexts(['The', firstText]);
        }
        const secondSplit = getSplittedTextLines(
            firstSplit.second,
            MAX_LINE_CHARS
        );
        const secondText = secondSplit.first;
        if (secondSplit.second.length === 0) {
            return getTexts([firstText, secondText]);
        }
        const thirdText = secondSplit.second;
        return getTexts([firstText, secondText, thirdText]);
    };
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
                <View style={nameSignStyles.textView}>{getTextLines()}</View>
            </ImageBackground>
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
                <Button
                    onPress={() => {
                        setFontIndex(
                            (fontIndex - 1 + fonts.length) % fonts.length
                        );
                    }}
                >
                    {' '}
                </Button>
                <Button
                    onPress={() => {
                        setFontIndex((fontIndex + 1) % fonts.length);
                    }}
                >
                    {' '}
                </Button>
            </View>
        </View>
    );
};
