import { Dimensions, Platform, StyleSheet } from "react-native";
// import DeviceInfo from "react-native-device-info";
import colors from "./colors";

const dimension = () => Dimensions.get("window");

const IPHONE4 = 480;
const IPHONE5 = 568;
const IPHONE6 = 667;
const IPHONE6PLUS = 736;
const IPHONEX = 812;

export const isIOS = () => Platform.OS === "ios";
export const isAndroid = () => Platform.OS === "android";
// export const isEmulator = DeviceInfo.isEmulator();

export const isIphone4 = () => dimension().height === IPHONE4;
export const isIphone5 = () => dimension().height === IPHONE5;
export const isIphone4or5 = () => isIphone4() || isIphone5();
export const isIphone6 = () => dimension().height === IPHONE6;
export const isIphone6Plus = () => dimension().height === IPHONE6PLUS;
export const isIphoneX = () => dimension().height === IPHONEX;

// export const isTablet = DeviceInfo.isTablet();
export const isIPAD = () => Platform.isPad();

export const isLandscape = () => dimension().width > dimension().height;

export const getDeviceWidth = () => dimension().width;

// prettier-ignore
export const getDeviceHeight = (withoutSafeAreas = false) =>
  withoutSafeAreas
    ? dimension().height
    : isIphoneX()
    ? dimension().height - SAFE_AREA_TOTAL
    : dimension().height;

export const SAFE_AREA_TOP = isIphoneX() ? 20 : 0;
export const SAFE_AREA_BOTTOM = isIphoneX() ? 34 : 0;
// prettier-ignore
export const SAFE_AREA_TOTAL = isIphoneX()
  ? SAFE_AREA_TOP + SAFE_AREA_BOTTOM
  : 0;
// prettier-ignore
export const HEADER_HEIGHT = isIOS()
  ? isIphoneX()
    ? 64 + SAFE_AREA_TOP
    : 64
  : 54;
export const NAVBAR_HEIGHT = isIphone4or5() ? 44 : 50.5;
export const FOOTER_HEIGHT = 50;
export const FONT_WEIGHT = isIOS() ? "500" : "400";

export const BORDER_COLOR = colors.blue;
export const BORDER_RADIUS = 15;

// prettier-ignore
export const BORDER_WIDTH = isIphone4or5()
  ? StyleSheet.hairlineWidth * 2
  : StyleSheet.hairlineWidth * 3;

export const defaultNvigatorStyle = {
  navBarButtonColor: colors.blue,
  navBarBackgroundColor: colors.gray
};

export const noNavigatorStyle = {
  navBarHidden: true
};

export default StyleSheet.create({
  container: {
    flex: 1
  },
  containerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  containerBottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "center"
  },
  row: {
    flexDirection: "row"
  },
  pageContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
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
    backgroundColor: colors.white,
    color: colors.blue,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 3
  },
  title: {
    fontSize: 20,
    fontWeight: "400"
  },
  subtitle: {
    fontSize: 16,
    color: colors.black
  },
  caption: {
    fontSize: 12,
    color: colors.gray
  },
  center: {
    textAlign: "center"
  },
  thumbnail: {
    width: 120,
    height: 90
  },
  banner: {
    height: 200,
    width: null,
    flex: 1
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32
  },
  smallText: {
    color: colors.gray,
    fontWeight: FONT_WEIGHT,
    fontSize: 12
  },
  mediumText: {
    fontSize: isIphone4or5() ? 13 : 14,
    fontWeight: FONT_WEIGHT,
    color: colors.black
  },
  borderBottom: {
    borderBottomWidth: BORDER_WIDTH,
    borderBottomColor: BORDER_COLOR
  },
  navBar: {
    backgroundColor: colors.blue,
    borderBottomColor: colors.blue,
    borderBottomWidth: BORDER_WIDTH
  }
});
