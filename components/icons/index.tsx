import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';

// We use the IcoMoon app (https://icomoon.io) to generate a custom font made up
// of SVG icons. The actual font file is loaded up-front in src/index.js.
export default createIconSetFromIcoMoon(icoMoonConfig, 'icons');
