import * as React from 'react';
import { List } from 'react-native-paper';
import { OpacitySwiperText } from '../../../components/OpacitySwiper/OpacitySwiper';
import { WIDTH_FACTOR } from '../../../dimensionConstants';
import { productActions } from './productActions';

const SWIPE_THRESHOLD = 50 * WIDTH_FACTOR;
export const OfferListTopItem = (props: {
    drinkName: string;
    actions: productActions;
    noDrinkToAddLeft: boolean;
    priceString: string;
    isUserMade?: boolean;
}) => {
    const actions = props.actions;
    const drinkName = props.drinkName;
    const editPossible = props.isUserMade;
    const priceString = props.priceString;
    // const actionText =
    //     (text: string, inputRange: number[], outputRange: number[]) =>
    //     (progress: any, dragX: any) => {
    //         const scale = dragX.interpolate({
    //             inputRange: inputRange,
    //             outputRange: outputRange,
    //             extrapolate: 'clamp',
    //         });
    //         return (
    //             <View style={{ justifyContent: 'center' }}>
    //                 <View style={{ flexDirection: 'row-reverse' }}>
    //                     <Animated.Text
    //                         style={[
    //                             menuSceneStyles.animatedText,
    //                             { transform: [{ scale }] },
    //                         ]}
    //                     >
    //                         {text}
    //                     </Animated.Text>
    //                 </View>
    //             </View>
    //         );
    //     };

    return (
        <List.Item
            title=""
            onPressOut={actions.onShop}
            onLongPress={actions.onInfo}
            left={(props) => {
                return (
                    <OpacitySwiperText
                        swipeThreshold={SWIPE_THRESHOLD}
                        onSwipeRight={
                            editPossible
                                ? actions.onEdit
                                : //rerollPossible?
                                  () => {
                                      actions.onReroll();
                                  }
                            //: () => {}
                        }
                        onSwipeLeft={actions.onDelete}
                        onClick={actions.onShop}
                        descriptionText={drinkName}
                        priceString={priceString}
                    ></OpacitySwiperText>
                );
            }}
        ></List.Item>
    );
};
