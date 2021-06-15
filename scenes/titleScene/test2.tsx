import React from 'react';
import { View } from 'react-native';
import {
    PanGestureHandler,
    State as GestureState,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
interface OpacitySwiperState {}
interface OpacitySwiperProps {
    onSwipe: () => void;
    swipeThreshold: number;
}
export class OpacitySwiper extends React.Component<
    OpacitySwiperProps,
    OpacitySwiperState
> {
    private clock: Animated.Clock;
    private gestureState: Animated.Value<0>;
    private animState: {
        finished: Animated.Value<0>;
        position: Animated.Value<0>;
        velocity: Animated.Value<0>;
        time: Animated.Value<0>;
    };
    private animConfig: {
        toValue: Animated.Value<0>;
        damping: number;
        mass: number;
        stiffness: number;
        overshootClamping: boolean;
        restSpeedThreshold: number;
        restDisplacementThreshold: number;
    };
    private onHandlerStateChange: (...args: any[]) => void;
    private onPanEvent: (...args: any[]) => void;
    constructor(props: OpacitySwiperProps) {
        super(props);
        this.clock = new Animated.Clock();
        this.gestureState = new Animated.Value(GestureState.UNDETERMINED);
        this.animState = {
            finished: new Animated.Value(0),
            position: new Animated.Value(0),
            velocity: new Animated.Value(0),
            time: new Animated.Value(0),
        };

        this.animConfig = {
            toValue: new Animated.Value(0),
            damping: 20,
            mass: 0.2,
            stiffness: 100,
            overshootClamping: false,
            restSpeedThreshold: 0.2,
            restDisplacementThreshold: 0.2,
        };
        this.onHandlerStateChange = Animated.event([
            {
                nativeEvent: ({ state }) =>
                    Animated.block([
                        // Update our animated value that tracks gesture state
                        Animated.set(this.gestureState, state),
                        // Spring row back into place when user lifts their finger before reaching threshold
                        Animated.cond(
                            Animated.and(
                                Animated.eq(state, GestureState.END),
                                Animated.not(Animated.clockRunning(this.clock))
                            ),
                            Animated.startClock(this.clock)
                        ),
                    ]),
            },
        ]);

        this.onPanEvent = Animated.event([
            {
                nativeEvent: ({ translationX }) =>
                    Animated.block([
                        Animated.cond(
                            Animated.eq(this.gestureState, GestureState.ACTIVE),
                            [
                                // Update our translate animated value as the user pans
                                Animated.set(
                                    this.animState.position,
                                    translationX
                                ),
                                // If swipe distance exceeds threshold, delete item
                                Animated.cond(
                                    Animated.lessThan(
                                        translationX,
                                        this.props.swipeThreshold
                                    ),
                                    Animated.call(
                                        [this.animState.position],
                                        () => {
                                            this.props.onSwipe();
                                            console.log(translationX);
                                        }
                                    )
                                ),
                            ]
                        ),
                    ]),
            },
        ]);
    }
    render() {
        const { children } = this.props;
        return (
            <PanGestureHandler
                minDeltaX={10}
                onGestureEvent={this.onPanEvent}
                onHandlerStateChange={this.onHandlerStateChange}
            >
                <Animated.View
                    style={{
                        flex: 1,
                        transform: [{ translateX: this.animState.position }],
                    }}
                >
                    <Animated.Code>
                        {() =>
                            Animated.block([
                                // If the clock is running, increment position in next tick by calling spring()
                                Animated.cond(
                                    Animated.clockRunning(this.clock),
                                    [
                                        Animated.spring(
                                            this.clock,
                                            this.animState,
                                            this.animConfig
                                        ),
                                        // Stop and reset clock when spring is complete
                                        Animated.cond(this.animState.finished, [
                                            Animated.stopClock(this.clock),
                                            Animated.set(
                                                this.animState.finished,
                                                0
                                            ),
                                        ]),
                                    ]
                                ),
                            ])
                        }
                    </Animated.Code>
                    <View
                        style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                        }}
                    >
                        {children}
                    </View>
                </Animated.View>
            </PanGestureHandler>
        );
    }
}
