import React from 'react';
import {
    PanGestureHandler,
    State as GestureState,
    State,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { SwiperText } from './SwiperText';

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
type OpacitySwiperTextProps = {
    rightSwipeActionPossible: boolean;
    leftSwipeActionPossible: boolean;
    onSwipeRight: () => void;
    onSwipeLeft: () => void;
    onClick: () => void;
    swipeThreshold: number;
    descriptionText: string;
    priceString: string;
};
type OpacitySwiperTextState = {
    stiffness: number;
};
const FAST_STIFFNESS = 5;
const NO_MOVE_STIFFNESS = 0.001;
export class OpacitySwiperText extends React.Component<
    OpacitySwiperTextProps,
    OpacitySwiperTextState
> {
    private clock: Animated.Clock;
    private gestureState: Animated.Value<State>;
    private onHandlerStateChange: (...args: any[]) => void;
    private onPanEvent: (...args: any[]) => void;
    private userChangedText: boolean;
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
        this.state = { stiffness: FAST_STIFFNESS };
        this.clock = new Animated.Clock();
        this.userChangedText = false;
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
            stiffness: FAST_STIFFNESS,
            overshootClamping: false,
            restSpeedThreshold: 0.2,
            restDisplacementThreshold: 0.2,
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
                                call([this.animState.position], () => {
                                    this.adjustToSwipeSuccess('right');
                                }),
                                call([this.animState.position], () =>
                                    this.adjustToSwipeCancel('right')
                                )
                            ),
                            cond(
                                lessThan(
                                    translationX,
                                    -this.props.swipeThreshold
                                ),
                                call([this.animState.position], () =>
                                    this.adjustToSwipeSuccess('left')
                                ),
                                call([this.animState.position], () =>
                                    this.adjustToSwipeCancel('left')
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
                                if (this.userChangedText) {
                                    this.animState.position =
                                        new Animated.Value(0);
                                    this.userChangedText = false;
                                }
                                if (this.userSwipedLeft) {
                                    this.userSwipedLeft = false;
                                    this.props.onSwipeLeft();
                                } else {
                                    if (this.userSwipedRight) {
                                        this.userSwipedRight = false;
                                        if (
                                            this.props.rightSwipeActionPossible
                                        ) {
                                            console.log('I was possible');
                                            this.props.onSwipeRight();
                                        }
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

    adjustToSwipeSuccess(direction: 'left' | 'right') {
        if (
            !this.userSwipedRight &&
            direction === 'right' &&
            true
            //this.props.rightSwipeActionPossible
        ) {
            this.setState({ stiffness: NO_MOVE_STIFFNESS });
            this.userSwipedRight = true;
        }
        if (
            !this.userSwipedLeft &&
            direction === 'left' &&
            this.props.leftSwipeActionPossible
        ) {
            this.setState({ stiffness: NO_MOVE_STIFFNESS });
            this.userSwipedLeft = true;
        }
    }

    adjustToSwipeCancel(direction: 'left' | 'right') {
        if (this.userSwipedRight && direction === 'right') {
            this.userSwipedRight = false;
        }
        if (this.userSwipedLeft && direction === 'left') {
            this.userSwipedLeft = false;
        }
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
    adjustToTextChanges() {
        //DO NOT change anim.position in this method. Although it would be beautiful code, it won't work
        this.userChangedText = true;
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
                                    spring(this.clock, this.animState, {
                                        ...this.springAnimConfig,
                                        stiffness: this.state.stiffness,
                                    }),
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
                    <SwiperText
                        drinkName={this.props.descriptionText}
                        priceString={this.props.priceString}
                        onTextChange={this.adjustToTextChanges.bind(this)}
                    />
                </Animated.View>
            </PanGestureHandler>
        );
    }
}
