import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
    block,
    Clock,
    cond,
    EasingNode,
    neq,
    set,
    startClock,
    stopClock,
    timing,
} from 'react-native-reanimated';

export const AppearingView = (props: {
    children: JSX.Element;
    noAnimation: boolean;
}) => {
    const clock = new Clock();
    useEffect(() => {});
    const getOpacity = (clock: Animated.Clock) => {
        const state = {
            finished: new Animated.Value(0),
            position: new Animated.Value(0),
            frameTime: new Animated.Value(0),
            time: new Animated.Value(0),
        };

        const config = {
            duration: 500,
            toValue: new Animated.Value(-1),
            easing: EasingNode.inOut(EasingNode.ease),
        };

        return block([
            cond(neq(config.toValue, 1), [
                set(state.position, 0),
                set(state.frameTime, 0),
                set(state.time, 0),
                set(state.finished, 0),
                set(config.toValue, 1),
            ]),
            startClock(clock),
            timing(clock, state, config),
            cond(state.finished, stopClock(clock)),
            Animated.interpolateNode(state.position, {
                inputRange: [0, 1],
                outputRange: [0, 1],
            }),
        ]);
    };
    return props.noAnimation ? (
        <View>{props.children}</View>
    ) : (
        <Animated.View style={{ opacity: getOpacity(clock) }}>
            {props.children}
        </Animated.View>
    );
};
