import React from 'react';
import { View } from 'react-native';
import { Subtitle, ImageBackground, Tile, Overlay, Heading } from '@shoutem/ui';

const Header = () => (
	<View>
		<ImageBackground
			styleName="large"
			source={{
				uri:
					'https://cdn.nba.net/nba-drupal-prod/2017-09/NBALP_M_image1_1440-2.png'
			}}
		/>
	</View>
);

export default Header;
