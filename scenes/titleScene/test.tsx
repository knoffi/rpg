import React, { Component } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import {
    GestureEvent,
    PanGestureHandler,
    PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

export default class RnGestureHandler extends Component<{
    opacity: Animated.Value;
}> {
    state = { fadeAnim: new Animated.Value(1) };
    translateX = new Animated.Value(0);
    adjustOpacity = (event: GestureEvent<PanGestureHandlerEventPayload>) => {
        //this.opacity.setValue(200 - event.nativeEvent.x / 200);
        const pointerX = event.nativeEvent.translationX;
        //console.log(' I am:' + pointerX.toString());
        const dist = Math.abs(100 - pointerX);
        console.log(pointerX);
        this.state.fadeAnim.setValue(1 - dist / 100);
    };
    handleGesture = Animated.event(
        [
            {
                nativeEvent: {
                    translationX: this.translateX,
                },
            },
        ],
        { useNativeDriver: true, listener: this.adjustOpacity }
    );
    render() {
        const circleTransformStyle = {
            transform: [
                {
                    translateX: this.translateX,
                },
            ],
        };

        return (
            <View style={[styles.container]}>
                <PanGestureHandler onGestureEvent={this.handleGesture}>
                    <Animated.View
                        style={[
                            styles.circle,
                            circleTransformStyle,
                            { opacity: this.state.fadeAnim },
                        ]}
                    />
                </PanGestureHandler>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    circle: {
        width: 150,
        height: 150,
        backgroundColor: '#c00000',
        borderRadius: 100,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
    },
    leftItem: {
        flex: 1,
        backgroundColor: '#76a21e',
        justifyContent: 'center',
    },
});
