import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const currentDeviceHeight = Dimensions.get('window').height;
const iPhonePlusHeight = 763;
const scalingMultiplier = currentDeviceHeight / iPhonePlusHeight;

export const ScaleHeight = function (value) {
	if (typeof value === 'number') {
		return value * scalingMultiplier + (value - value * scalingMultiplier) / 4;
	} else {
		let valueNumber = parseFloat(value) / 100;
		return currentDeviceHeight * valueNumber;
	}
};

//Guideline sizes are based on standard ~5" screen mobile device Width = 350 Height = 680
//iphone 8 = 667 height , width 375

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

export const Scale = (size) => (width / guidelineBaseWidth) * size;
export const VerticalScale = (size) => (height / guidelineBaseHeight) * size;
export const ModerateScale = (size, factor = 0.5) =>
	size + (Scale(size) - size) * factor;
