import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
	Tile,
	ImageBackground,
	Overlay,
	Icon,
	Title,
	Caption,
	Subtitle,
	Row,
	Image,
	View
} from '@shoutem/ui';

export default class NewsItem extends Component {
	_onPress = () => {
		const { onPressItem, item } = this.props;
		onPressItem(item);
	};

	render() {
		// console.warn('props: ', this.props);
		const { title } = this.props;

		return (
			<TouchableOpacity onPress={this._onPress}>
				<Row>
					<Image
						styleName="medium rounded-corners"
						source={{
							uri:
								'https://shoutem.github.io/img/ui-toolkit/examples/image-1.png'
						}}
					/>
					<View styleName="vertical stretch space-between">
						<Subtitle>{title}</Subtitle>
						<View styleName="horizontal space-between">
							<Caption>post author</Caption>
							<Caption>12:16</Caption>
						</View>
					</View>
				</Row>
			</TouchableOpacity>
		);
	}
}
