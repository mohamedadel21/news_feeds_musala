import { Dimensions } from 'react-native';
const currentDeviceWidth = Dimensions.get('window').width;
const iPhoneXWidth = 375;
const scalingMultiplier = currentDeviceWidth / iPhoneXWidth;

export const ScaleWidth = function (value) {
	if (typeof value === 'number') {
		return value * scalingMultiplier;
	} else {
		let valueNumber = parseFloat(value) / 100;
		return currentDeviceWidth * valueNumber;
	}
};
