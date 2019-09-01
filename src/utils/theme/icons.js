import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { PixelRatio } from "react-native";
import { isAndroid } from "src/common/styles";

const navIconSize = isAndroid() ? PixelRatio.getPixelSizeForLayoutSize(25) : 25;

const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const icons = {
  home: [navIconSize, AntDesign],
  filter: [navIconSize, AntDesign],
  search: [navIconSize, AntDesign],
  calendar: [navIconSize, AntDesign],
  location: [navIconSize, Entypo],
  settings: [navIconSize, SimpleLineIcons],
  receipt: [navIconSize, MaterialCommunityIcons],
  user: [navIconSize, AntDesign],
  logout: [navIconSize, AntDesign],
  heart: [navIconSize, AntDesign],
  plus: [navIconSize, AntDesign],
  close: [navIconSize, AntDesign]
};

const iconsMap = {};

const iconsLoaded = async () => {
  try {
    const sources = await Promise.all(
      Object.keys(icons).map(iconName => {
        const Provider = icons[iconName][1];
        return Provider.getImageSource(iconName.replace(replaceSuffixPattern, ""), icons[iconName][0]);
      })
    );
    await Object.keys(icons).forEach((iconName, i) => (iconsMap[iconName] = sources[i]));
  } catch (error) {
    console.warn("ERROR", error);
  }
};

export { iconsMap, iconsLoaded };
