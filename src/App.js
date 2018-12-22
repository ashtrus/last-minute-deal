import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from './store';
import { registerScreens } from './screens';
import { YellowBox } from 'react-native';

import { noNavigatorStyle } from './common/styles';
import colors from './common/colors';
import { iconsLoaded, iconsMap } from './utils/theme';
import { ROOTS } from './common/actions/rootNavigation.actions';

registerScreens(store, Provider);

export default class App extends Component {
	constructor(props) {
		super(props);
		store.subscribe(this.onStoreUpdate);
	}

	/* eslint-disable no-undef */
	onStoreUpdate = async () => {
		const state = store.getState();
		const { rootNavigation, navigation } = state;
		const { root } = rootNavigation;
		const { storageLoaded } = navigation;

		if (root !== this.currentRoot && storageLoaded) {
			this.currentRoot = root;
			iconsLoaded.then(() => this.startApp(root));
		}
	};
	/* eslint-disable no-undef */

	startApp(root) {
		switch (root) {
			case ROOTS.AUTH:
				Navigation.startSingleScreenApp({
					screen: {
						label: 'Home',
						screen: 'bball.StartPage',
						title: 'Last Minute Deals',
						navigatorStyle: noNavigatorStyle
					},
					animationType: 'fade'
				});
				break;
			case ROOTS.MAIN_APP:
				Navigation.startTabBasedApp({
					tabs: [
						{
							label: 'Home',
							title: 'Appointment ASAP',
							screen: 'bball.DashboardPage',
							icon: iconsMap.home,
							navigatorButtons: {
								leftButtons: [
									{
										icon: iconsMap.filter,
										id: 'iconFilter'
									}
								]
							}
						},
						{
							label: 'Map',
							title: 'Map',
							screen: 'bball.MapPage',
							icon: iconsMap.map
						},
						{
							label: 'Receipts',
							title: 'Receipts',
							screen: 'bball.ReceiptsPage',
							icon: iconsMap.receipt
						},
						{
							label: 'Settings',
							title: 'Settings',
							screen: 'bball.SettingsPage',
							icon: iconsMap.settings
						}
					],
					tabsStyle: {
						tabBarButtonColor: colors.gray,
						tabBarSelectedButtonColor: colors.headerBlue,
						tabBarBackgroundColor: colors.bgGray,
						initialTabIndex: 0
					},
					appStyle: {
						orientation: 'portrait',
						tabBarSelectedButtonColor: colors.headerBlue
					},
					passProps: {},
					animationType: 'fade'
				});
				break;
			case ROOTS.MAIN_APP_COMPANY:
				Navigation.startTabBasedApp({
					tabs: [
						{
							label: 'Home',
							title: 'Appointment ASAP',
							screen: 'bball.CompanyDashboardPage',
							icon: iconsMap.home,
							navigatorButtons: {
								leftButtons: [
									{
										icon: iconsMap.filter,
										id: 'iconFilter'
									}
								]
							}
						},
						{
							label: 'Receipts',
							title: 'Receipts',
							screen: 'bball.ReceiptsPage',
							icon: iconsMap.receipt
						},
						{
							label: 'Settings',
							title: 'Settings',
							screen: 'bball.CompanySettingsPage',
							icon: iconsMap.settings
						}
					],
					tabsStyle: {
						tabBarButtonColor: colors.gray,
						tabBarSelectedButtonColor: colors.headerBlue,
						tabBarBackgroundColor: colors.bgGray,
						initialTabIndex: 0
					},
					appStyle: {
						orientation: 'portrait',
						tabBarSelectedButtonColor: colors.headerBlue
					},
					passProps: {},
					animationType: 'fade'
				});
				break;
			default:
				Navigation.startSingleScreenApp({
					screen: {
						screen: 'bball.StartPage',
						title: 'Welcome',
						navigatorStyle: noNavigatorStyle
					},
					passProps: { testMode: false },
					animationType: 'none'
				});
		}
	}
}

// TODO: Remove this when we upgrade to react-native > 0.56.0
// https://github.com/facebook/react-native/issues/18868
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

YellowBox.ignoreWarnings([
	'Warning: componentWillReceiveProps is deprecated',
	'Warning: componentWillUpdate',
	'Module RCTImageLoader requires',
	'RCTBridge required dispatch_sync'
]);
