import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
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
import { Team } from 'src/common';

class Schedule extends Component {
	constructor(props) {
		super(props);

		this.state = {
			games: [
				{
					team1: {
						title: 'Warriors',
						city: 'Golden State',
						league: 'NBA',
						score: 102,
						balance: '44-22',
						logo:
							'http://cdn.bleacherreport.net/images/team_logos/328x328/golden_state_warriors.png'
					}
				},
				{
					team2: {
						title: 'Trail Blazers',
						city: 'Portland',
						league: 'NBA',
						score: 88,
						balance: '42-24',
						logo:
							'https://www.seeklogo.net/wp-content/uploads/2016/11/portland-trail-blazers-logo-preview-400x400.png'
					}
				}
			],
			gameStatus: 'finished',
			isLoading: false
		};
	}

	render() {
		const { team1 } = this.state.games[0];
		const { team2 } = this.state.games[1];
		return (
			<ScrollView>
				<TouchableHighlight onPress={this.openGameDetails}>
					<Row>
						<Team
							title={team1.title}
							city={team1.city}
							balance={team1.balance}
							league={team1.league}
							logo={team1.logo}
						/>

						<Tile styleName="small clear">
							<Heading styleName="content">102</Heading>
						</Tile>

						<Tile styleName="small clear">
							<Subtitle styleName="content">{this.state.gameStatus}</Subtitle>
						</Tile>

						<Tile styleName="small clear">
							<Heading styleName="content">88</Heading>
						</Tile>

						<Team
							title={team2.title}
							city={team2.city}
							balance={team2.balance}
							league={team2.league}
							logo={team2.logo}
						/>
					</Row>
				</TouchableHighlight>
			</ScrollView>
		);
	}

	openGameDetails = () => {
		const selectedGame = this.state.games[0];
		this.props.navigator.push({
			screen: 'bball.GameDetails',
			title: 'Game details',
			passProps: { selectedGame },
			backButtonTitle: 'Back'
		});
	};
}

export default Schedule;
