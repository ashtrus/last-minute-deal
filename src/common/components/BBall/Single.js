import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Single extends Component {
	componentWillMount() {
		// this._retrieveDetails();
	}

	render() {
		const { item } = this.props;
		// console.log("###", this.props);

		return (
			<View>
				<Text>Single Page</Text>
				<Text>
					{item.name.first} {item.name.last}
				</Text>
			</View>
		);
	}

	_retrieveDetails() {
		this.props.actions.retrieveMovieDetails(this.props.itemId).then(() => {});
	}
}

export default Single;
