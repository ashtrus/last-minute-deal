import React, { Component } from 'react';
import { TouchableHighlight, View } from 'react-native';
import {
	Tile,
	ImageBackground,
	Overlay,
	Icon,
	Title,
	Caption,
	Subtitle
} from '@shoutem/ui';

export default class NewsItem extends Component {
	render() {
		// console.warn('props: ', this.props);
		const { onPress } = this.props;
		const { phone, email, picture, dob, name } = this.props.newsItem;

		return (
			<TouchableHighlight onPress={onPress}>
				<Tile>
					<ImageBackground
						styleName="large-banner"
						source={{
							uri: picture.large
						}}>
						<Overlay styleName="rounded-small">
							<Icon name="play" />
						</Overlay>
					</ImageBackground>
					<View styleName="content">
						<Title>{name}</Title>
						<Subtitle>{email}</Subtitle>
						<View styleName="horizontal space-between">
							<Caption>{phone}</Caption>
							<Caption>15:34</Caption>
						</View>
					</View>
				</Tile>
			</TouchableHighlight>
		);
	}
}
