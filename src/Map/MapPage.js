import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class MapPage extends Component {
	render() {
		return (
			<View>
				<Text> MapPage </Text>
			</View>
		);
	}
}

export default connect(state => state)(MapPage);
