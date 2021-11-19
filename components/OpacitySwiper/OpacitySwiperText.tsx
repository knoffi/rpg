import React, { createRef } from 'react';
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
    title: string;
    description: string;
    price: string;
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
    private onPanEvent: (...args: any[]) => void;
    private onGestureEvent: (...args: any[]) => void;
    private panRef = createRef<PanGestureHandler>();
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
        this.onGestureEvent = this.getStateHandler();
        this.springAnimConfig = {
            toValue: new Animated.Value(0),
            damping: 20,
            mass: 0.2,
            stiffness: FAST_STIFFNESS,
            overshootClamping: false,
            restSpeedThreshold: 0.2,
            restDisplacementThreshold: 0.2,
        };
        this.userMightClick = false;
        this.onPanEvent = Animated.event([
            {
                nativeEvent: ({ translationX }) =>
                    block([
                        cond(eq(this.gestureState, GestureState.ACTIVE), [
                            Animated.set(
                                this.state.anim.position,
                                translationX
                            ),
                        ]),
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
    }

    getStateHandler() {
        return Animated.event([
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
                                call([], () => {
                                    this.props.onSwipeRight();
                                }),
                                cond(
                                    eq(this.props.isUserMade ? 1 : 0, 1),
                                    [
                                        call([], () => {
                                            this.state.anim.position.setValue(
                                                0
                                            );
                                        }),
                                    ],
                                    startClock(this.clock)
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
                            [startClock(this.clock)]
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
    getStiffness() {
        return this.props.rightSwipePossible
            ? cond(
                  greaterThan(
                      this.state.anim.position,
                      this.props.swipeThreshold
                  ),
                  new Animated.Value(0),
                  new Animated.Value(FAST_STIFFNESS)
              )
            : FAST_STIFFNESS;
    }
    getTranslation() {
        const position = this.state.anim.position;
        return this.props.rightSwipePossible
            ? position
            : cond(
                  greaterThan(position, 0),
                  Animated.multiply(
                      Animated.divide(position, Animated.add(position, 100)),
                      this.props.swipeThreshold
                  ),
                  position
              );
    }

    render() {
        return (
            <PanGestureHandler
                ref={this.panRef}
                minDeltaX={10}
                onGestureEvent={this.onPanEvent}
                onHandlerStateChange={this.onGestureEvent}
            >
                <Animated.View>
                    <Animated.View>
                        <Animated.View style={{ opacity: this.getOpacity() }}>
                            <Animated.View
                                style={{
                                    flex: 1,
                                    transform: [
                                        {
                                            translateX: this.getTranslation(),
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
                                                        stiffness:
                                                            this.getStiffness(),
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
                                    title={this.props.title}
                                    description={this.props.description}
                                    price={this.props.price}
                                />
                            </Animated.View>
                        </Animated.View>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>
        );
    }
}
