const {Dimensions} = require('react-native');

const {height, width} = Dimensions.get('window');
// ui được thiết kế cho size màn hình là (360x592)
const standarWidth = 412;
const standardHeight = 772;
export const unitW = Math.round((1 / standarWidth) * width);
export const unitH = Math.round((1 / standardHeight) * height);
export const settingH = `${height * 0.2}px`;
export const settingW = `${width * 0.65}px`;
