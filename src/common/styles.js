import React, { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from './colors';
import DeviceInfo from 'react-native-device-info';
const dimension = () => Dimensions.get('window');
const IPHONE4 = 480;
const IPHONE5 = 568;
const IPHONE6 = 667;
const IPHONEX = 812;
const IPHONE6PLUS = 736;
const IPAD_PRO = 1366;
const IPAD = 1024;

export const SAFE_AREA_TOP = isIPHONEX() ? 20 : 0;
export const SAFE_AREA_BOTTOM = isIPHONEX() ? 34 : 0;
export const SAFE_AREA_TOTAL = isIPHONEX() ? 54 : 0;
export const IPHONE_X_INVOICE_DESIGNER_EXTRA = isIPHONEX() ? 98 : 0;

export const HEADER_HEIGHT = isIOS()
	? isIPHONEX()
		? 64 + SAFE_AREA_TOP
		: 64
	: 54;
export const NAVBAR_HEIGHT = isIPHONE4or5() ? 44 : 50.5;
export const BLUE_NAVBAR_HEIGHT = isIPHONE4or5()
	? 48
	: isIPHONEX()
		? 54.5 + SAFE_AREA_TOP
		: 54.5;
export const FOOTER_HEIGHT = 50;
export const BORDER_COLOR = colors.modalHeaderColor;
export const BORDER_WIDTH = isIPHONE4or5()
	? StyleSheet.hairlineWidth * 2
	: StyleSheet.hairlineWidth * 3;
export const BORDER_RADIUS = 15;
export const INVOICE_FOOTER_HEIGHT = isIPHONEX() ? 69 + SAFE_AREA_BOTTOM : 69;
export const INVOICE_DESIGNER_HEIGHT = 140;
export const INVOICE_DESIGNER_ITEM_WIDTH = 100;

export const noNavigatorStyle = {
	navBarHidden: true
};

export const standardNvigatorStyle = {
	navBarButtonColor: colors.backArrowBlue,
	navBarBackgroundColor: colors.bgGray
};

export const WIZZARD_MARGIN = 10;

export const getDeviceHeight = (withoutSafeAreas = false) =>
	withoutSafeAreas
		? dimension().height
		: isIPHONEX()
			? dimension().height - SAFE_AREA_TOTAL
			: dimension().height;

export const getDeviceWidth = () => dimension().width;

export function getA4HeightFromWidth(width) {
	return width * 1.414;
}

export function isLandscape() {
	return dimension().width > dimension().height;
}

export function getContentHeight() {
	return (
		getDeviceHeight() -
		INVOICE_FOOTER_HEIGHT -
		HEADER_HEIGHT +
		SAFE_AREA_TOTAL -
		(isAndroid() ? 20 : 0)
	);
}

export function getPdfContentHeight() {
	return (
		getDeviceHeight() -
		INVOICE_FOOTER_HEIGHT -
		INVOICE_DESIGNER_HEIGHT -
		HEADER_HEIGHT +
		SAFE_AREA_TOTAL -
		(isAndroid() ? 20 : 0)
	);
}

export function getPixelSize(pixels) {
	return Math.ceil((pixels * Math.min(dimension().height, IPHONE6)) / IPHONE6);
}

export function getWidthPercent(percentage) {
	return (dimension().width * percentage) / 100;
}

export function getHeightPercent(percentage) {
	return (dimension().height * percentage) / 100;
}

export function getPercent(percentage) {
	return (((dimension().height + dimension().width) / 2) * percentage) / 100;
}

export function isIOS() {
	return Platform.OS === 'ios';
}

export function isAndroid() {
	return Platform.OS === 'android';
}

export function isIPHONE5() {
	return dimension().height === IPHONE5;
}

export function isIPHONE4() {
	return dimension().height === IPHONE4;
}

export function isIPHONE4or5() {
	return isIPHONE4() || isIPHONE5();
}

export function isIPHONEX() {
	return dimension().height === IPHONEX;
}

export function isIPAD() {
	if (isLandscape()) {
		return dimension().width === IPAD ||
			dimension().width === IPAD_PRO ||
			DeviceInfo.getModel()
			? DeviceInfo.getModel().includes('iPad')
			: false;
	} else {
		return dimension().height === IPAD ||
			dimension().height === IPAD_PRO ||
			DeviceInfo.getModel()
			? DeviceInfo.getModel().includes('iPad')
			: false;
	}
}

export function isIPHONE6PLUS() {
	return dimension().height === IPHONE6PLUS;
}

export const FONT_WEIGHT = isIOS() ? '500' : '400';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	containerCenter: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	flexContainer: {
		flex: 1
	},
	flexRowContainer: {
		flexDirection: 'row'
	},
	pageContainer: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: HEADER_HEIGHT
		// paddingBottom: FOOTER_HEIGHT
	},
	pageNoTabsContainer: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: HEADER_HEIGHT
	},
	listItem: {
		paddingHorizontal: 10,
		paddingVertical: 7
	},
	button: {
		marginBottom: 10,
		padding: 10,
		fontSize: 16,
		backgroundColor: 'white',
		color: colors.iconBlue,
		borderColor: colors.iconBlue,
		borderWidth: 1,
		borderRadius: 3
	},
	deleteButton: {
		marginBottom: 10,
		padding: 10,
		fontSize: 16,
		backgroundColor: colors.red,
		color: 'white',
		borderRadius: 3,
		overflow: 'hidden'
	},
	buttonStyle: {
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.blue,
		borderRadius: 5,
		marginHorizontal: 10
	},
	label: {
		paddingVertical: 10,
		fontWeight: FONT_WEIGHT,
		color: '#313131'
	},
	title: {
		paddingLeft: 20,
		paddingVertical: 10,
		fontWeight: '400'
	},
	smallMargin: {
		marginTop: 3
	},
	smallText: {
		color: colors.gray,
		fontWeight: FONT_WEIGHT,
		fontSize: 12
	},
	middleText: {
		fontSize: isIPHONE4or5() ? 13 : 14,
		fontWeight: FONT_WEIGHT,
		color: colors.black
	},
	middleMargin: {
		marginTop: 6
	},
	bigMargin: {
		marginTop: 9
	},
	italicText: {
		fontStyle: 'italic',
		color: colors.black
	},
	boldText: {
		fontWeight: 'bold',
		color: colors.black
	},
	whiteText: {
		color: 'white'
	},
	greenText: {
		color: colors.green
	},
	grayText: {
		color: colors.gray
	},
	blueText: {
		color: colors.lightBlue
	},
	orangeText: {
		color: colors.gold
	},
	normalText: {
		fontSize: isIPHONE4or5() ? 15 : 16,
		color: colors.black
	},
	normalBoldText: {
		fontSize: isIPHONE4or5() ? 15 : 16,
		fontWeight: FONT_WEIGHT,
		color: colors.black
	},
	bigText: {
		fontWeight: FONT_WEIGHT,
		fontSize: isIPHONE4() ? 16 : isIPHONE4or5() ? 17 : 18,
		color: colors.black
	},
	requiredField: {
		color: colors.blue
	},
	error: {
		backgroundColor: colors.lightRed
	},
	welcomeText: {
		color: colors.lightViolet,
		fontSize: getPixelSize(50),
		fontWeight: '200',
		textAlign: 'center'
	},
	border: {
		borderColor: BORDER_COLOR
	},
	borderBottom: {
		borderBottomWidth: BORDER_WIDTH,
		borderBottomColor: BORDER_COLOR
	},
	grayBg: {
		backgroundColor: colors.bgGray
	},
	navBar: {
		backgroundColor: colors.modalHeaderColor,
		borderBottomColor: colors.modalHeaderBorder,
		borderBottomWidth: BORDER_WIDTH
	},
	navBarTitle: {
		fontWeight: '700',
		fontSize: isIPHONE4or5() ? 16 : 17,
		color: colors.black
	},
	navBarButtonText: {
		fontWeight: '500',
		fontSize: isIPHONE4or5() ? 16 : 17,
		color: colors.blue
	},
	tabBar: {
		backgroundColor: '#fff',
		borderTopColor: '#ECECEC',
		borderTopWidth: BORDER_WIDTH
	},
	modalRouteStyle: {
		backgroundColor: 'transparent',
		shadowOpacity: 0,
		shadowRadius: 0,
		shadowColor: 'red',
		shadowOffset: { width: 0, height: 0 }
	},
	itemNoConnection: {
		backgroundColor: '#EDF1F5'
	},
	searchBar: {
		borderBottomWidth: 0
	},
	labelContainer: {
		width: getDeviceWidth()
	}
});

console.ignoredYellowBox = ['Shadow'].concat(console.ignoredYellowBox);
