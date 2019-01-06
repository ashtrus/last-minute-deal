import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { PixelRatio } from "react-native";
import { isAndroid } from "../../common/styles";

const navIconSize = isAndroid() ? PixelRatio.getPixelSizeForLayoutSize(25) : 25;

const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const icons = {
  home: [navIconSize, MaterialCommunityIcons],
  filter: [navIconSize, MaterialCommunityIcons],
  "ios-search": [navIconSize, Ionicons],
  calendar: [navIconSize, MaterialCommunityIcons],
  map: [navIconSize, MaterialCommunityIcons],
  "map-marker": [navIconSize, MaterialCommunityIcons],
  settings: [navIconSize, MaterialCommunityIcons],
  receipt: [navIconSize, MaterialCommunityIcons],
  user: [navIconSize, SimpleLineIcons],
  logout: [navIconSize, SimpleLineIcons],
  heart: [navIconSize, SimpleLineIcons],
  plus: [navIconSize, MaterialCommunityIcons]
};

const iconsMap = {};

const iconsLoaded = new Promise((resolve, reject) => {
  // eslint-disable-next-line
  new Promise.all(
    Object.keys(icons).map(iconName => {
      const Provider = icons[iconName][1];
      return Provider.getImageSource(iconName.replace(replaceSuffixPattern, ""), icons[iconName][0]);
    })
  ).then(sources => {
    Object.keys(icons).forEach((iconName, i) => (iconsMap[iconName] = sources[i]));
    resolve(true);
  });
});

export { iconsMap, iconsLoaded };
