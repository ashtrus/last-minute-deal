import React, { PropTypes, Component } from 'react';
import {
	ScrollView,
	Text,
	TouchableHighlight,
	View,
	FlatList,
	StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as moviesActions from '../../actions/moviesActions';
import { Header, NewsItem } from 'src/common';
import { showModal } from '../../utils/navUtils';

class Home extends Component {
	componentWillMount() {
		this.props.actions.fetchRedditNba();
		// this.props.actions.fetchPosts("nba");
	}

	componentWillReceiveProps(nextProps) {}

	render() {
		const { news } = this.props;
		// const arr = [1, 2, 3, 4, 5, 6, 7];
		// console.log("Zygi PROPS:", this.props);

		return (
			<ScrollView>
				<Header />
				<FlatList
					data={news}
					renderItem={({ item }) => (
						<NewsItem newsItem={item} onPress={this.openPage(item)} />
					)}
					keyExtractor={(item, index) => item.dob}
				/>
			</ScrollView>
		);
	}

	_keyExtractor = (item, index) => item.dob;

	openPage = item => () => {
		this.props.navigator.push({
			screen: 'bball.Single',
			title: item.title,
			passProps: { item },
			backButtonTitle: 'Back'
		});
	};
}

const styles = StyleSheet.create({
	headline: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});

Home.propTypes = {
	// actions: PropTypes.object.isRequired
	// news: PropTypes.object.isRequired
	// navigator: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {
		news: state.movies.news
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
