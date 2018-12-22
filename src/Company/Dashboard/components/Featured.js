import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
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
	View
} from '@shoutem/ui';
import PostItem from './PostItem';

class Featured extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		};
	}

	_keyExtractor = (item, index) => item.id.toString();

	_onPressItem = id => {
		console.warn('props', this.props);
		console.warn('pressed on featured', id);
	};

	_renderItem = ({ item }) => {
		return (
			<PostItem
				id={item.id}
				item={item}
				onPressItem={this.props.onOpen}
				title={item.title}
			/>
		);
	};

	render() {
		const { posts } = this.props;
		return (
			<View>
				<FlatList
					data={posts}
					extraData={this.state}
					keyExtractor={this._keyExtractor}
					renderItem={this._renderItem}
					ListHeaderComponent={
						<Title style={{ paddingLeft: 20, paddingVertical: 10 }}>
							Featured
						</Title>
					}
				/>
			</View>
		);
	}
}

export default connect(state => state)(Featured);
