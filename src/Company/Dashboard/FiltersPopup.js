import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import Categories from './components/Categories';
import { dismissModal } from 'src/utils/navUtils';

import {
	Tile,
	ImageBackground,
	Overlay,
	Icon,
	Title,
	Caption,
	Image,
	Subtitle,
	Heading,
	Row,
	Switch,
	Divider,
	View
} from '@shoutem/ui';

class FiltersPopup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			switchOn: false
		};
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
	}

	onNavigatorEvent = event => {
		switch (event.id) {
			case 'saveFilters':
				return console.warn('saveFilters');
			case 'closeFilters':
				return dismissModal();
			default:
				return;
		}
	};

	render() {
		const { switchOn } = this.state;

		return (
			<ScrollView>
				<Divider styleName="section-header">
					<Caption>Distance</Caption>
					<Caption>km</Caption>
				</Divider>
				<Title>Slider here ----------- </Title>
				<Divider styleName="section-header">
					<Caption>Appointment time</Caption>
					<Caption>hh:mm</Caption>
				</Divider>
				<Title>Slider here ----------- </Title>
				<View styleName="space-between horizontal">
					<Text>Show Sold out</Text>
					<Switch
						onValueChange={() => this.setState({ switchOn: !switchOn })}
						value={switchOn}
					/>
				</View>
			</ScrollView>
		);
	}
}

export default connect(state => state)(FiltersPopup);
