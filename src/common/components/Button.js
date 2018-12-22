import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../colors';

export default class Button extends Component {
	render() {
		const { onPress, children, btnStyle, txtStyle } = this.props;
		const { buttonStyle, buttonTextStyle } = styles;

		return (
			<TouchableOpacity onPress={onPress} style={[buttonStyle, btnStyle]}>
				<Text style={[buttonTextStyle, txtStyle]}>{children}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	buttonStyle: {
		backgroundColor: colors.white,
		margin: 5,
		borderWidth: 1,
		borderColor: colors.blue
	},
	buttonTextStyle: {
		alignSelf: 'center',
		color: colors.blue,
		fontSize: 16,
		fontWeight: '400',
		padding: 10
	}
});
