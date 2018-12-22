import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Image, Subtitle, Caption, Title, Tile } from '@shoutem/ui';

export default class ListItem extends Component {
	render() {
		const { title, city, balance, league, logo } = this.props;
		// console.warn(this.props);
		return (
			<Tile styleName="small clear">
				<Image
					styleName="small"
					source={{
						uri: logo
					}}
				/>
				<View styleName="content">
					<Subtitle>{title}</Subtitle>
					<Caption>{city}</Caption>
					<Caption>{balance}</Caption>
					<Caption>{league}</Caption>
				</View>
			</Tile>
		);
	}
}
