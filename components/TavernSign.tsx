import React from 'react';
import { Button, Image, ImageBackground, Text, View } from 'react-native';

const SIGN_WIDTH = 357 * 1.1;
const SIGN_HEIGHT = 160 * 1.1;
const PADDING_BOTTOM = 10;
const PADDING_HORIZONTAL = 10;
const TRYOUT_FONTS = false;
const TRYOUT_COLORS = false;

const fontFamilies = TRYOUT_FONTS
    ? [
          'EnglishGothic',
          'Breitkopf',
          'primitive',
          'strassburg',
          'chomsky',
          'canterbury',
          'deutschGothic',
          'deutschZier',
          'fiddum',
          'metalMacabre',
          'pau',
          'rapscallion',
      ]
    : ['primitive'];
const fontSizes = TRYOUT_FONTS
    ? [32, 44, 32, 68, 34, 38, 36, 34, 38, 26, 36, 46]
    : [34];
const fontColors = TRYOUT_COLORS
    ? ['gold', 'goldenrod', 'navajowhite', 'firebrick', 'silver', 'gainsboro']
    : ['goldenrod'];

const TopFontControllButtons = (props: {
    setFamilyIndex: (index: number) => void;
    familyIndex: number;
    fontFamilies: string[];
}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Button
                title={'Family Forward'}
                onPress={() => {
                    props.setFamilyIndex(
                        (props.familyIndex + 1) % props.fontFamilies.length
                    );
                }}
            ></Button>
            <Button
                title={'Family Back'}
                onPress={() => {
                    props.setFamilyIndex(
                        (props.fontFamilies.length + props.familyIndex - 1) %
                            props.fontFamilies.length
                    );
                }}
            ></Button>
        </View>
    );
};

const BottomColorControlButtons = (props: {
    setColorIndex: (index: number) => void;
    colorIndex: number;
    fontColors: string[];
}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Button
                title={'Color Forward'}
                onPress={() => {
                    props.setColorIndex(
                        (props.colorIndex + 1) % props.fontColors.length
                    );
                }}
            ></Button>
            <Button
                title={'Color Back'}
                onPress={() => {
                    props.setColorIndex(
                        (props.fontColors.length + props.colorIndex - 1) %
                            props.fontColors.length
                    );
                }}
            >
                <Image
                    source={require('../assets/splash.png')}
                    style={{}}
                ></Image>
            </Button>
        </View>
    );
};

export const TavernSign = (props: { nameText: string }) => {
    const [familyIndex, setFamilyIndex] = React.useState(0);
    const [colorIndex, setColorIndex] = React.useState(0);

    const introText =
        props.nameText.length < 20 ? (
            <Text
                style={{
                    alignContent: 'center',
                    textAlign: 'center',
                    fontSize: fontSizes[familyIndex] / 2,
                    color: fontColors[colorIndex],
                    fontFamily: fontFamilies[familyIndex],
                    marginBottom: 10,
                }}
            >
                The
            </Text>
        ) : undefined;

    const bottomComponents = TRYOUT_FONTS ? (
        <BottomColorControlButtons
            setColorIndex={setColorIndex}
            colorIndex={colorIndex}
            fontColors={fontColors}
        ></BottomColorControlButtons>
    ) : undefined;
    const topComponents = TRYOUT_COLORS ? (
        <TopFontControllButtons
            setFamilyIndex={setFamilyIndex}
            familyIndex={familyIndex}
            fontFamilies={fontFamilies}
        ></TopFontControllButtons>
    ) : undefined;

    return (
        <View>
            {topComponents}
            <ImageBackground
                source={require('../assets/tavernSign.png')}
                style={{
                    width: SIGN_WIDTH,
                    height: SIGN_HEIGHT,
                    alignSelf: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <View
                    style={{
                        alignSelf: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: SIGN_WIDTH,
                        height: SIGN_HEIGHT,
                    }}
                >
                    {introText}
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: fontSizes[familyIndex],
                            color: fontColors[colorIndex],
                            fontFamily: fontFamilies[familyIndex],
                            paddingBottom: PADDING_BOTTOM,
                            paddingHorizontal: PADDING_HORIZONTAL,
                        }}
                    >
                        {props.nameText}
                    </Text>
                </View>
            </ImageBackground>
            {bottomComponents}
        </View>
    );
};
