import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform, PixelRatio } from 'react-native';

const navIconSize =
	__DEV__ === false && Platform.OS === 'android'
		? PixelRatio.getPixelSizeForLayoutSize(25)
		: 25;

const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const icons = {
	home: [navIconSize, MaterialCommunityIcons],
	filter: [navIconSize, MaterialCommunityIcons],
	'ios-search': [navIconSize, Ionicons],
	table: [navIconSize, FontAwesome],
	calendar: [navIconSize, MaterialCommunityIcons],
	numeric: [navIconSize, MaterialCommunityIcons],
	map: [navIconSize, MaterialCommunityIcons],
	'map-marker': [navIconSize, MaterialCommunityIcons],
	settings: [navIconSize, MaterialCommunityIcons],
	receipt: [navIconSize, MaterialCommunityIcons],
	user: [navIconSize, SimpleLineIcons],
	logout: [navIconSize, SimpleLineIcons],
	heart: [navIconSize, SimpleLineIcons]
};

const iconsMap = {};

const iconsLoaded = new Promise((resolve, reject) => {
	new Promise.all(
		Object.keys(icons).map(iconName => {
			const Provider = icons[iconName][1];
			return Provider.getImageSource(
				iconName.replace(replaceSuffixPattern, ''),
				icons[iconName][0]
			);
		})
	).then(sources => {
		Object.keys(icons).forEach(
			(iconName, i) => (iconsMap[iconName] = sources[i])
		);
		resolve(true);
	});
});

export { iconsMap, iconsLoaded };
