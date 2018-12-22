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
	render() {
		return (
			<View>
				<Divider text="General" />
				<TouchableOpacity>
					<Row>
						<Image
							styleName="small-avatar"
							source={{
								uri:
									'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png'
							}}
						/>
						<Text>User profile</Text>
					</Row>
				</TouchableOpacity>

				<TouchableOpacity style={commonStyles.listItem}>
					<View styleName="space-between horizontal">
						<Text>Notifications</Text>
						<Icon styleName="disclosure" name="right-arrow" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={commonStyles.listItem}>
					<View styleName="space-between horizontal">
						<Text>How it works</Text>
						<Icon styleName="disclosure" name="right-arrow" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={commonStyles.listItem}>
					<View styleName="space-between horizontal">
						<Text>Join Appointment ASAP</Text>
						<Icon styleName="disclosure" name="right-arrow" />
					</View>
				</TouchableOpacity>

				<Divider text="Contact" />

				<TouchableOpacity style={commonStyles.listItem}>
					<View styleName="space-between horizontal">
						<Text>Contact us</Text>
						<Icon styleName="disclosure" name="right-arrow" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={commonStyles.listItem}>
					<View styleName="space-between horizontal">
						<Text>Find us on Facebook</Text>
						<Icon styleName="disclosure" name="right-arrow" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={commonStyles.listItem}>
					<View styleName="space-between horizontal">
						<Text>Follow us on Instagram</Text>
						<Icon styleName="disclosure" name="right-arrow" />
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
