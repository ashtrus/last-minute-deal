import React, { Component } from 'react';
import { Alert, ScrollView, View, Text, StyleSheet } from 'react-native';
import {
	Tile,
	ImageBackground,
	Overlay,
	Title,
	Caption,
	Image,
	Subtitle,
	Heading,
	Row
} from '@shoutem/ui';
import Button from 'src/common/components/Button';

export default class SinglePage extends Component {
	onBook = () => {
		this.validateBooking();
	};

	validateBooking = () => {
		Alert.alert(
			'Book appointment',
			'Are you sure',
			[
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				},
				{ text: 'OK', onPress: () => console.log('OK Pressed') }
			],
			{ cancelable: false }
		);
	};

	render() {
		const { title, body } = this.props;
		// console.warn('this.props', this.props);
		// const { item } = this.props;
		return (
			<ScrollView>
				<Tile>
					<Image
						styleName="large-banner"
						source={{
							uri:
								'https://shoutem.github.io/img/ui-toolkit/examples/image-5.png'
						}}
					/>
					<View styleName="content" style={styles.container}>
						<Title>{title}</Title>
						<View styleName="horizontal space-between">
							<Caption>14d 18:30</Caption>
							<Caption>100 / 30</Caption>
						</View>
					</View>
				</Tile>
				<View style={styles.container}>
					<Text style={styles.container}>{body}</Text>
					<Text style={styles.container}>{body}</Text>
					<Subtitle>CVR: 12345678</Subtitle>

					<Subtitle> Street 212 3th København 2300</Subtitle>
					<Button onPress={this.onBook}>Book</Button>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10
	}
});
