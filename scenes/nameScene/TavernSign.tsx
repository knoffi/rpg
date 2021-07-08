import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { FONT_FACTOR, HEIGHT_FACTOR } from '../../dimensionConstants';
import { nameSignStyles } from './nameSignStyles';

const BIG_FONT_SIZE = 42 * FONT_FACTOR;
const ARTICLE_SCALING = 0.7;
const MISSING_ARTICLE_SCALING = 1.2;
const STANDARD_MAX_LINE_HEIGHT = 185 * HEIGHT_FACTOR;
const MAIN_TEXT_HEIGHT = 150 * HEIGHT_FACTOR;
const MAX_LINE_NUMBER = 3;
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

    const getStyleFromName = (
        text: string,
        portion: number,
        hideArticle?: boolean
    ) => {
        if (text.toUpperCase() === 'THE') {
            return {
                ...nameSignStyles.nameText,
                fontFamily: fonts[fontIndex],
                maxHeight:
                    portion > 0
                        ? (STANDARD_MAX_LINE_HEIGHT / portion) * ARTICLE_SCALING
                        : STANDARD_MAX_LINE_HEIGHT,
                fontSize: BIG_FONT_SIZE * ARTICLE_SCALING,
                paddingTop: 5 * HEIGHT_FACTOR,
                paddingBottom: 5 * HEIGHT_FACTOR,
                opacity: hideArticle ? 0 : 1,
            };
        } else {
            const sizeFactor = MISSING_ARTICLE_SCALING;
            return {
                ...nameSignStyles.nameText,
                fontFamily: fonts[fontIndex],
                maxHeight:
                    portion > 0
                        ? (STANDARD_MAX_LINE_HEIGHT / portion) * sizeFactor
                        : STANDARD_MAX_LINE_HEIGHT,
                fontSize: BIG_FONT_SIZE * sizeFactor,
            };
        }
    };
    const getArticleLine = (article: string, hideArticle: boolean) => {
        const articleLine = (
            <View key="articleLine">
                <Text style={getStyleFromName('The', 1, hideArticle)}>
                    {article}
                </Text>
            </View>
        );
        return articleLine;
    };
    const getTexts = (texts: string[], hideArticle: boolean) => {
        const startArticleContained =
            texts[0].substring(0, 4).toUpperCase() === 'THE ';
        const article = startArticleContained
            ? texts[0].substring(0, 3)
            : 'The';
        const articleLine = getArticleLine(
            article,
            hideArticle && !startArticleContained
        );
        //remove article to give it a certain style specialized for article
        if (startArticleContained) {
            const articleFreeFirstText = texts[0].substring(4);
            texts[0] = articleFreeFirstText;
        }
        const filteredTexts = texts.filter((text) => text.length > 0);
        const nonArticleTexts = filteredTexts.map((text, index) => {
            return (
                <Text
                    style={getStyleFromName(text, filteredTexts.length)}
                    adjustsFontSizeToFit={true}
                    minimumFontScale={0.2}
                    key={index.toString() + text}
                >
                    {text}
                </Text>
            );
        });
        const nonArticleLines = (
            <View
                key="nonArticle"
                style={{
                    height: MAIN_TEXT_HEIGHT,
                    justifyContent: 'space-evenly',
                }}
            >
                <Text
                    numberOfLines={MAX_LINE_NUMBER}
                    adjustsFontSizeToFit={true}
                    style={{ textAlign: 'center' }}
                >
                    {nonArticleTexts}
                </Text>
            </View>
        );
        return [articleLine, nonArticleLines];
    };

    const getTextLines = () => {
        const containsPersonName = props.nameText
            .split('')
            .some((char) => char === "'");

        return getTexts([props.nameText], containsPersonName);
    };
    return (
        <View>
            <ImageBackground
                source={require('../../assets/bigTavernSign.png')}
                style={{
                    alignSelf: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
                imageStyle={{
                    resizeMode: 'center',
                }}
            >
                <View
                    style={{
                        ...nameSignStyles.textView,
                        justifyContent: 'flex-start',
                    }}
                >
                    {getTextLines()}
                </View>
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
