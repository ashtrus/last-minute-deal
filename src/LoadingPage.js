import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { BORDER_WIDTH, HEADER_HEIGHT, FOOTER_HEIGHT } from 'src/common/styles';
import colors from 'src/common/colors';

class LoadingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasNavigated: false
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header} />
				<View style={styles.image} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(255, 255, 255, 0)'
	},
	header: {
		backgroundColor: colors.modalHeaderColor,
		top: 0,
		left: 0,
		right: 0,
		height: HEADER_HEIGHT,
		position: 'absolute'
	},
	image: {
		bottom: FOOTER_HEIGHT - BORDER_WIDTH,
		left: 0,
		right: 0,
		height: 0,
		position: 'absolute',
		borderTopColor: '#ECECEC',
		borderTopWidth: BORDER_WIDTH
	}
});

export default connect(state => state)(LoadingPage);
