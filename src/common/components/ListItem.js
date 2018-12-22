import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import {
	Image,
	Subtitle,
	Row,
	Caption,
	Button,
	Icon,
	Title,
	Tile
} from '@shoutem/ui';

export default class ListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { author, title, softtext, url } = this.props.newsItem;
		const { onOpenModal } = this.props;
		console.log(this.props);

		return (
			<TouchableWithoutFeedback onPress={onOpenModal}>
				<Row>
					<Tile>
						<Title>{title}</Title>
						<Subtitle>{softtext}</Subtitle>
					</Tile>

					<Caption />

					<Button styleName="right-icon">
						<Text>View</Text>
						<Icon name="right-arrow" />
					</Button>
				</Row>
			</TouchableWithoutFeedback>
		);
	}
}
