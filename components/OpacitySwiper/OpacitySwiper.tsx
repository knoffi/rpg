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
    onSwipeRight: () => void;
    onSwipeLeft: () => void;
    onClick: () => void;
    swipeThreshold: number;
    descriptionText: string;
    priceString: string;
};
type OpacitySwiperTextState = {
    stiffness: number;
    anim: {
        position: Animated.Value<0>;
        finished: Animated.Value<0>;
        velocity: Animated.Value<0>;
        time: Animated.Value<0>;
    };
};
const FAST_STIFFNESS = 10;
const NO_MOVE_STIFFNESS = 0.0001;
export class OpacitySwiperText extends React.Component<
    OpacitySwiperTextProps,
    OpacitySwiperTextState
> {
    private clock: Animated.Clock;
    private gestureState: Animated.Value<State>;
    private onHandlerStateChange: (...args: any[]) => void;
    private onPanEvent: (...args: any[]) => void;
    //private userChangedText: boolean;
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
        this.state = {
            stiffness: FAST_STIFFNESS,
            anim: {
                finished: new Animated.Value(0),
                position: new Animated.Value(0),
                velocity: new Animated.Value(0),
                time: new Animated.Value(0),
            },
        };
        this.clock = new Animated.Clock();
        // this.userChangedText = false;
        this.gestureState = new Animated.Value(GestureState.UNDETERMINED);
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
                            Animated.set(
                                this.state.anim.position,
                                translationX
                            ),

                            // If swipe distance exceeds threshold, delete item
                            cond(
                                greaterThan(
                                    translationX,
                                    this.props.swipeThreshold
                                ),
                                call([], () => {
                                    this.adjustToSwipeSuccess('right');
                                }),
                                call([], () =>
                                    this.adjustToSwipeCancel('right')
                                )
                            ),
                            cond(
                                lessThan(
                                    translationX,
                                    -this.props.swipeThreshold
                                ),
                                call([], () =>
                                    this.adjustToSwipeSuccess('left')
                                ),
                                call([], () => this.adjustToSwipeCancel('left'))
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
                                eq(this.state.anim.position, 0)
                            ),
                            call([], () => {
                                if (this.userMightClick) {
                                    this.props.onClick();
                                    this.userMightClick = false;
                                }
                            })
                        ),
                        cond(
                            eq(state, GestureState.END),
                            call([], () => {
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

    adjustToSwipeSuccess(direction: 'left' | 'right') {
        if (!this.userSwipedRight && direction === 'right') {
            this.userSwipedRight = true;
        }
        if (!this.userSwipedLeft && direction === 'left') {
            this.userSwipedLeft = true;
        }
        this.setState({ stiffness: NO_MOVE_STIFFNESS });
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
                    this.state.anim.position
                ),
                Animated.add(
                    this.props.swipeThreshold,
                    this.state.anim.position
                )
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
                <Animated.View style={{ opacity: this.getOpacity() }}>
                    <Animated.View
                        style={{
                            flex: 1,
                            transform: [
                                { translateX: this.state.anim.position },
                            ],
                        }}
                    >
                        <Animated.Code>
                            {() =>
                                block([
                                    // If the clock is running, increment position in next tick by calling spring()
                                    cond(clockRunning(this.clock), [
                                        spring(
                                            this.clock,

                                            this.state.anim,

                                            {
                                                ...this.springAnimConfig,
                                                stiffness: this.state.stiffness,
                                            }
                                        ),
                                        // Stop and reset clock when spring is complete
                                        cond(this.state.anim.finished, [
                                            stopClock(this.clock),
                                            Animated.set(
                                                this.state.anim.finished,
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
                        />
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>
        );
    }
}
