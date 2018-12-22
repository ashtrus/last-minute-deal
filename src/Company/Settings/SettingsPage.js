import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { changeRoot, ROOTS } from 'src/common/actions/rootNavigation.actions';
import { Button, Divider } from 'src/common/components';
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
	View
} from '@shoutem/ui';
import commonStyles from 'src/common/styles';

class SettingsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			switchOn: false
		};
	}

	render() {
		const { switchOn } = this.state;

		return (
			<View>
				<TouchableOpacity style={commonStyles.listItem}>
					<View styleName="space-between horizontal">
						<Text>Business details</Text>
						<Icon styleName="disclosure" name="right-arrow" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={commonStyles.listItem}>
					<View styleName="space-between horizontal">
						<Text>Notify about new appointments</Text>
						<Switch
							onValueChange={() => this.setState({ switchOn: !switchOn })}
							value={switchOn}
						/>
					</View>
				</TouchableOpacity>

				<Divider />

				<Button onPress={this.onLogout}>Logout</Button>
			</View>
		);
	}

	onLogout = async () => {
		const { dispatch } = this.props;
		await dispatch(changeRoot(ROOTS.AUTH));

		// const {
		// 	dispatch,
		// 	email: predefinedEmail,
		// 	submitAction,
		// 	navigator
		// } = this.props;
		// const { password, email: typedEmail } = this.state;
		// const email = predefinedEmail || typedEmail;

		// this.setState({ formDirty: true });
		// if (!email.length || !password.length) {
		// 	return;
		// }
		// this.containerTouched();
		// return dispatch(submitAction(email, password, navigator))
		// 	.then(this.props.goToApp)
		// 	.catch(e => this.onError(e));
	};
}

export default connect(state => state)(SettingsPage);
