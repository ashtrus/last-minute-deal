import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from 'src/common/colors';

export default class Divider extends Component {
	render() {
		const { text } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{text}</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.veryLightGray
	},
	text: {
		fontSize: 16,
		paddingHorizontal: 20,
		paddingVertical: 10
	}
});
