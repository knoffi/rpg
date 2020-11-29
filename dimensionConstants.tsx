import { Dimensions } from 'react-native';
//TODO: improve calculation of scaling
export const TEST_SCREEN_HEIGHT = 868.5714285714286;
export const TEST_SCREEN_WIDTH = 411.42857142857144;
export const TEST_WINDOW_HEIGHT = 789.7142857142857;
export const TEST_WINDOW_WIDTH = 411.42857142857144;
export const WIDTH_FACTOR = Dimensions.get('screen').width / TEST_SCREEN_WIDTH;
export const FONT_FACTOR = Dimensions.get('screen').width / TEST_SCREEN_WIDTH;
export const HEIGHT_FACTOR =
    Dimensions.get('screen').height / TEST_SCREEN_HEIGHT;
