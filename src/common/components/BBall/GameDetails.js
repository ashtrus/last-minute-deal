import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
	Tile,
	ImageBackground,
	Overlay,
	Icon,
	Title,
	Caption,
	Row,
	Image,
	Subtitle,
	Heading
} from '@shoutem/ui';
import { Header } from 'src/common';

class GameDetails extends Component {
	componentWillMount() {
		// this._retrieveDetails();
	}

	render() {
		const { selectedGame } = this.props;
		// console.log("###", this.props);

		return (
			<ScrollView>
				<Title>Warriors 100 - 102 Trail Blazzers</Title>
				<Title>Title of the article goes here</Title>
				<ImageBackground
					styleName="large"
					source={{
						uri:
							'https://cdn.nba.net/nba-drupal-prod/2017-09/NBALP_M_image1_1440-2.png'
					}}
				/>
				<Caption>This is caption</Caption>

				<Row>
					<Image
						styleName="small rounded-corners"
						source={{
							uri:
								'https://eparisextra.com/wp-content/uploads/2017/07/214152-300x300.png'
						}}
					/>
					<View styleName="vertical stretch space-between">
						<Subtitle>LeBron James</Subtitle>
						<Caption>20pts 8reb 8as 55% fg</Caption>
					</View>
				</Row>

				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
					distinctio, eligendi doloribus sunt suscipit sint expedita rerum
					repudiandae similique consectetur itaque ratione id porro nesciunt
					architecto facilis eum cumque nihil!
				</Text>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
					distinctio, eligendi doloribus sunt suscipit sint expedita rerum
					repudiandae similique consectetur itaque ratione id porro nesciunt
					architecto facilis eum cumque nihil!
				</Text>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
					distinctio, eligendi doloribus sunt suscipit sint expedita rerum
					repudiandae similique consectetur itaque ratione id porro nesciunt
					architecto facilis eum cumque nihil!
				</Text>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
					distinctio, eligendi doloribus sunt suscipit sint expedita rerum
					repudiandae similique consectetur itaque ratione id porro nesciunt
					architecto facilis eum cumque nihil!
				</Text>
			</ScrollView>
		);
	}

	_retrieveDetails() {
		this.props.actions.retrieveMovieDetails(this.props.itemId).then(() => {});
	}
}

export default GameDetails;
