import React, { createRef } from 'react';
import { View } from 'react-native';
import {
    PanGestureHandler,
    State as GestureState,
    State,
} from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import Animated, { greaterOrEq, lessOrEq, or } from 'react-native-reanimated';
import { nameSceneStyles } from '../../scenes/nameScene/nameSceneStyles';
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
    overRightThreshhold: boolean;
    overLeftThreshhold: boolean;
    swipeAndAnimFreeze: boolean;
};
const FAST_STIFFNESS = 700;
const IS_NO_CLICK_THRESHOLD = 2;
export class OpacitySwiperText extends React.Component<
    OpacitySwiperTextProps,
    OpacitySwiperTextState
> {
    private bounceBackClock: Animated.Clock;
    private gestureState: Animated.Value<State>;
    private onPanEvent: (...args: any[]) => void;
    private onGestureEvent: (...args: any[]) => void;
    private willRerenderSoon = false;
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
            overRightThreshhold: false,
            overLeftThreshhold: false,
            swipeAndAnimFreeze: false,
        };
        this.bounceBackClock = new Animated.Clock();
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
                        cond(
                            or(
                                greaterThan(
                                    translationX,
                                    this.props.swipeThreshold
                                ),
                                lessThan(
                                    translationX,
                                    -this.props.swipeThreshold
                                )
                            ),
                            cond(
                                greaterThan(translationX, 0),
                                call([], () => {
                                    if (!this.state.overRightThreshhold) {
                                        this.setState({
                                            overRightThreshhold: true,
                                        });
                                    }
                                }),
                                call([], () => {
                                    if (!this.state.overLeftThreshhold) {
                                        this.setState({
                                            overLeftThreshhold: true,
                                        });
                                    }
                                })
                            ),
                            call([], () => {
                                if (this.state.overLeftThreshhold) {
                                    this.setState({
                                        overLeftThreshhold: false,
                                    });
                                }
                                if (this.state.overRightThreshhold) {
                                    this.setState({
                                        overRightThreshhold: false,
                                    });
                                }
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
                                greaterThan(this.state.anim.position, 0)
                            ),
                            [
                                call([], () => {
                                    if (
                                        this.state.overRightThreshhold &&
                                        !this.willRerenderSoon &&
                                        this.props.rightSwipePossible
                                    ) {
                                        this.setState({
                                            swipeAndAnimFreeze: true,
                                        });
                                        this.props.onSwipeRight();
                                        const swipeMightNotChangeAnything =
                                            this.props.isUserMade;
                                        if (!swipeMightNotChangeAnything) {
                                            this.willRerenderSoon = true;
                                        }
                                    }
                                }),
                                cond(eq(this.props.isUserMade ? 1 : 0, 1), [
                                    call([], () => {
                                        this.state.anim.position.setValue(0);
                                    }),
                                ]),
                            ]
                        ),
                        cond(
                            and(
                                eq(state, GestureState.END),
                                lessThan(this.state.anim.position, 0)
                            ),
                            [
                                call([], () => {
                                    if (
                                        this.state.overLeftThreshhold &&
                                        !this.willRerenderSoon &&
                                        this.props.leftSwipePossible
                                    ) {
                                        this.setState({
                                            swipeAndAnimFreeze: true,
                                        });
                                        this.props.onSwipeLeft();
                                        this.willRerenderSoon = true;
                                    }
                                }),
                            ]
                        ),
                        cond(
                            and(
                                eq(state, GestureState.END),
                                not(clockRunning(this.bounceBackClock)),
                                //do not use state here
                                this.insideTreshholdNode()
                            ),
                            [startClock(this.bounceBackClock)]
                        ),
                    ]),
            },
        ]);
    }
    insideTreshholdNode() {
        return and(
            greaterOrEq(this.state.anim.position, -this.props.swipeThreshold),
            lessOrEq(this.state.anim.position, this.props.swipeThreshold)
        );
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
    getLeftActionScale() {
        const position = this.state.anim.position;
        const value = !this.props.leftSwipePossible
            ? new Animated.Value(0)
            : Animated.min(
                  Animated.max(
                      Animated.divide(
                          Animated.atan(
                              Animated.divide(
                                  Animated.multiply(-1, position),
                                  this.props.swipeThreshold / 7
                              )
                          ),
                          1
                      ),
                      0
                  ),
                  8
              );
        return value;
    }
    getBGColor(): string {
        if (this.state.overLeftThreshhold && this.props.leftSwipePossible) {
            return 'red';
        } else {
            if (
                this.state.overRightThreshhold &&
                this.props.rightSwipePossible
            ) {
                return 'blue';
            } else {
                return 'grey';
            }
        }
    }
    render() {
        return (
            <PanGestureHandler
                ref={this.panRef}
                minDeltaX={10}
                onGestureEvent={this.onPanEvent}
                onHandlerStateChange={this.onGestureEvent}
                enabled={!this.state.swipeAndAnimFreeze}
            >
                <Animated.View>
                    <Animated.View>
                        <Animated.View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                zIndex: -1,
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                            }}
                        >
                            <Animated.View
                                style={{
                                    zIndex: -1, //-1
                                    backgroundColor: this.getBGColor(),
                                    width: '50%',
                                    height: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {this.state
                                        .overLeftThreshhold ? undefined : (
                                        <Text
                                            style={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: 25,
                                                marginLeft: 10,
                                            }}
                                        >
                                            REROLL!
                                        </Text>
                                    )}
                                </View>
                            </Animated.View>
                            <Animated.View
                                style={{
                                    zIndex: -1, //-1
                                    backgroundColor: this.getBGColor(),
                                    width: '50%',
                                    height: '100%',
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'flex-start',
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {this.state
                                        .overRightThreshhold ? undefined : (
                                        <Text
                                            style={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: 25,
                                                marginRight: 10,
                                            }}
                                        >
                                            DELETE!
                                        </Text>
                                    )}
                                </View>
                            </Animated.View>
                        </Animated.View>
                        <Animated.View>
                            <Animated.View
                                style={{
                                    backgroundColor:
                                        nameSceneStyles.backgroundView
                                            .backgroundColor,
                                    flex: 1,
                                    transform: [
                                        {
                                            translateX: this.getTranslation(),
                                        },
                                    ],
                                }}
                            >
                                <Animated.View>
                                    <Animated.Code>
                                        {() =>
                                            block([
                                                cond(
                                                    clockRunning(
                                                        this.bounceBackClock
                                                    ),
                                                    [
                                                        spring(
                                                            this
                                                                .bounceBackClock,

                                                            this.state.anim,

                                                            {
                                                                ...this
                                                                    .springAnimConfig,
                                                            }
                                                        ),
                                                        cond(
                                                            this.state.anim
                                                                .finished,
                                                            [
                                                                stopClock(
                                                                    this
                                                                        .bounceBackClock
                                                                ),
                                                                Animated.set(
                                                                    this.state
                                                                        .anim
                                                                        .finished,
                                                                    0
                                                                ),
                                                                call([], () => {
                                                                    this.setState(
                                                                        {
                                                                            swipeAndAnimFreeze:
                                                                                false,
                                                                        }
                                                                    );
                                                                }),
                                                            ]
                                                        ),
                                                    ]
                                                ),
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
                </Animated.View>
            </PanGestureHandler>
        );
    }
}
