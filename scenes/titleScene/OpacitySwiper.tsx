import React from 'react';
import {
    PanGestureHandler,
    State as GestureState,
    State,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const {
    block,
    cond,
    and,
    eq,
    not,
    clockRunning,
    call,
    lessThan,
    greaterThan,
    startClock,
    spring,
    stopClock,
} = Animated;
type OpacitySwiperProps = {
    onSwipeRight: () => void;
    onSwipeLeft: () => void;
    onClick: () => void;
    swipeThreshold: number;
};
export class OpacitySwiper extends React.Component<OpacitySwiperProps, {}> {
    private clock: Animated.Clock;
    private gestureState: Animated.Value<State>;
    private onHandlerStateChange: (...args: any[]) => void;
    private onPanEvent: (...args: any[]) => void;
    private animState: {
        finished: Animated.Value<0>;
        position: Animated.Value<0>;
        velocity: Animated.Value<0>;
        time: Animated.Value<0>;
    };
    private springAnimConfig: {
        toValue: Animated.Value<0>;
        damping: number;
        mass: number;
        stiffness: number;
        overshootClamping: boolean;
        restSpeedThreshold: number;
        restDisplacementThreshold: number;
    };
    private userSwipedRight: boolean;
    private userSwipedLeft: boolean;
    private userMightClick: boolean;
    constructor(props: any) {
        super(props);
        this.clock = new Animated.Clock();
        this.gestureState = new Animated.Value(GestureState.UNDETERMINED);
        this.animState = {
            finished: new Animated.Value(0),
            position: new Animated.Value(0),
            velocity: new Animated.Value(0),
            time: new Animated.Value(0),
        };
        this.springAnimConfig = {
            toValue: new Animated.Value(0),
            damping: 20,
            mass: 0.2,
            stiffness: 5,
            overshootClamping: false,
            restSpeedThreshold: 0.2,
            restDisplacementThreshold: 0.2,
        };
        this.animState = {
            finished: new Animated.Value(0),
            position: new Animated.Value(0),
            velocity: new Animated.Value(0),
            time: new Animated.Value(0),
        };
        this.userSwipedLeft = false;
        this.userSwipedRight = false;
        this.userMightClick = false;
        this.onPanEvent = Animated.event([
            {
                nativeEvent: ({ translationX }) =>
                    block([
                        cond(eq(this.gestureState, GestureState.ACTIVE), [
                            // Update our translate animated value as the user pans
                            Animated.set(this.animState.position, translationX),
                            // If swipe distance exceeds threshold, delete item
                            cond(
                                greaterThan(
                                    translationX,
                                    this.props.swipeThreshold
                                ),
                                call(
                                    [this.animState.position],
                                    () => (this.userSwipedRight = true)
                                ),
                                call(
                                    [this.animState.position],
                                    () => (this.userSwipedRight = false)
                                )
                            ),
                            cond(
                                lessThan(
                                    translationX,
                                    -this.props.swipeThreshold
                                ),
                                call(
                                    [this.animState.position],
                                    () => (this.userSwipedLeft = true)
                                ),
                                call(
                                    [this.animState.position],
                                    () => (this.userSwipedLeft = false)
                                )
                            ),
                        ]),
                    ]),
            },
        ]);
        this.onHandlerStateChange = Animated.event([
            {
                nativeEvent: ({ state }) =>
                    block([
                        // Update our animated value that tracks gesture state
                        Animated.set(this.gestureState, state),
                        cond(
                            eq(state, GestureState.BEGAN),
                            call([], () => (this.userMightClick = true))
                        ),
                        cond(
                            and(
                                eq(state, GestureState.END),
                                eq(this.animState.position, 0)
                            ),
                            call([this.animState.position], () => {
                                if (this.userMightClick) {
                                    this.props.onClick();
                                    this.userMightClick = false;
                                }
                            })
                        ),
                        cond(
                            eq(state, GestureState.END),
                            call([this.animState.position], () => {
                                if (this.userSwipedLeft) {
                                    this.userSwipedLeft = false;
                                    this.props.onSwipeLeft();
                                } else {
                                    if (this.userSwipedRight) {
                                        this.userSwipedRight = false;
                                        this.props.onSwipeRight();
                                    }
                                }
                            })
                        ),
                        // Spring row back into place when user lifts their finger
                        cond(
                            and(
                                eq(state, GestureState.END),
                                not(clockRunning(this.clock))
                            ),
                            startClock(this.clock)
                        ),
                    ]),
            },
        ]);
    }

    getOpacity() {
        return Animated.divide(
            Animated.min(
                Animated.sub(
                    this.props.swipeThreshold,
                    this.animState.position
                ),
                Animated.add(this.props.swipeThreshold, this.animState.position)
            ),
            this.props.swipeThreshold
        );
    }

    render() {
        return (
            <PanGestureHandler
                minDeltaX={10}
                onGestureEvent={this.onPanEvent}
                onHandlerStateChange={this.onHandlerStateChange}
            >
                <Animated.View
                    style={{
                        flex: 1,
                        opacity: this.getOpacity(),
                        transform: [{ translateX: this.animState.position }],
                    }}
                >
                    <Animated.Code>
                        {() =>
                            block([
                                // If the clock is running, increment position in next tick by calling spring()
                                cond(clockRunning(this.clock), [
                                    spring(
                                        this.clock,
                                        this.animState,
                                        this.springAnimConfig
                                    ),
                                    // Stop and reset clock when spring is complete
                                    cond(this.animState.finished, [
                                        stopClock(this.clock),
                                        Animated.set(
                                            this.animState.finished,
                                            0
                                        ),
                                    ]),
                                ]),
                            ])
                        }
                    </Animated.Code>
                    {this.props.children}
                </Animated.View>
            </PanGestureHandler>
        );
    }
}
