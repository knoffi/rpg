import React from 'react';
import {
    PanGestureHandler,
    State as GestureState,
    State,
} from 'react-native-gesture-handler';
import Animated, { or } from 'react-native-reanimated';
import { MemoizedSwiperText } from './SwiperText';
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
    set,
} = Animated;
type OpacitySwiperTextProps = {
    onSwipeRight: () => void;
    onSwipeLeft: () => void;
    onClick: () => void;
    swipeThreshold: number;
    descriptionText: string;
    priceString: string;
    isUserMade: boolean;
    leftSwipePossible: boolean;
    rightSwipePossible: boolean;
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
const IS_NO_CLICK_THRESHOLD = 2;
export class OpacitySwiperText extends React.Component<
    OpacitySwiperTextProps,
    OpacitySwiperTextState
> {
    private clock: Animated.Clock;
    private gestureState: Animated.Value<State>;
    private onHandlerStateChange: (...args: any[]) => void;
    private onPanEvent: (...args: any[]) => void;
    private swiperIsOnLeftSide: boolean;
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
        this.swiperIsOnLeftSide = false;
        this.userMightClick = false;
        this.onPanEvent = Animated.event([
            {
                nativeEvent: ({ translationX }) =>
                    block([
                        cond(
                            and(
                                eq(this.gestureState, GestureState.ACTIVE),
                                or(
                                    lessThan(translationX, 30),
                                    eq(this.props.rightSwipePossible ? 1 : 0, 1)
                                )
                            ),
                            [
                                Animated.set(
                                    this.state.anim.position,
                                    translationX
                                ),
                            ]
                        ),
                        cond(
                            and(
                                eq(this.gestureState, GestureState.ACTIVE),
                                or(
                                    greaterThan(
                                        translationX,
                                        IS_NO_CLICK_THRESHOLD
                                    ),
                                    lessThan(
                                        translationX,
                                        -IS_NO_CLICK_THRESHOLD
                                    )
                                )
                            ),
                            call([], () => {
                                this.userMightClick = false;
                            })
                        ),
                    ]),
            },
        ]);
        this.onHandlerStateChange = Animated.event([
            {
                nativeEvent: ({ state }) =>
                    block([
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
                            and(
                                eq(state, GestureState.END),
                                greaterThan(
                                    this.state.anim.position,

                                    this.props.swipeThreshold
                                )
                            ),
                            [
                                cond(
                                    eq(
                                        !this.props.isUserMade &&
                                            this.props.rightSwipePossible
                                            ? 1
                                            : 0,
                                        1
                                    ),
                                    [
                                        stopClock(this.clock),
                                        call([], () => {
                                            this.props.onSwipeRight();
                                        }),
                                    ]
                                ),
                                cond(eq(this.props.isUserMade ? 1 : 0, 1), [
                                    call([], () => {
                                        this.props.onSwipeRight();
                                        this.state.anim.position.setValue(0);
                                    }),
                                ]),
                                cond(
                                    eq(
                                        !this.props.isUserMade &&
                                            !this.props.rightSwipePossible
                                            ? 1
                                            : 0,
                                        1
                                    ),
                                    [startClock(this.clock)]
                                ),
                            ]
                        ),
                        cond(
                            and(
                                eq(state, GestureState.END),
                                lessThan(
                                    this.state.anim.position,
                                    -this.props.swipeThreshold
                                )
                            ),
                            [
                                stopClock(this.clock),
                                call([], () => {
                                    this.props.onSwipeLeft();
                                }),
                            ]
                        ),
                        cond(
                            and(
                                eq(state, GestureState.END),
                                not(clockRunning(this.clock)),
                                and(
                                    lessThan(
                                        this.state.anim.position,
                                        this.props.swipeThreshold
                                    ),
                                    greaterThan(
                                        this.state.anim.position,
                                        -this.props.swipeThreshold
                                    )
                                )
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
                    this.props.rightSwipePossible
                        ? this.props.swipeThreshold
                        : Animated.add(
                              this.props.swipeThreshold,
                              this.state.anim.position
                          ),
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
                <Animated.View>
                    <Animated.View>
                        <Animated.View style={{ opacity: this.getOpacity() }}>
                            <Animated.View
                                style={{
                                    flex: 1,
                                    transform: [
                                        {
                                            translateX:
                                                this.state.anim.position,
                                        },
                                    ],
                                }}
                            >
                                <Animated.Code>
                                    {() =>
                                        block([
                                            cond(clockRunning(this.clock), [
                                                spring(
                                                    this.clock,

                                                    this.state.anim,

                                                    {
                                                        ...this
                                                            .springAnimConfig,
                                                    }
                                                ),
                                                cond(this.state.anim.finished, [
                                                    stopClock(this.clock),
                                                    Animated.set(
                                                        this.state.anim
                                                            .finished,
                                                        0
                                                    ),
                                                ]),
                                            ]),
                                        ])
                                    }
                                </Animated.Code>
                                <MemoizedSwiperText
                                    drinkName={this.props.descriptionText}
                                    priceString={this.props.priceString}
                                />
                            </Animated.View>
                        </Animated.View>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>
        );
    }
}
