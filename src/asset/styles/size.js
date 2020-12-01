const {Dimensions} = require('react-native');

const {height, width} = Dimensions.get('window');
// ui được thiết kế cho size màn hình là (360x592)
const standarWidth = 412;
const standardHeight = 772;
export const unitW = (1 / standarWidth) * width;
export const unitH = (1 / standardHeight) * height;
export const itemSongHeight = (60 / standardHeight) * height;
