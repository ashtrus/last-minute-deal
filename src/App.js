import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from './store';
import { registerScreens } from './screens';

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

	onStoreUpdate = async () => {
		const state = store.getState();
		const { rootNavigation: { root }, navigation: { storageLoaded } } = state;

		if (root !== this.currentRoot && storageLoaded) {
			this.currentRoot = root;
			iconsLoaded.then(() => this.startApp(root));
		}
	};

	startApp(root) {
		switch (root) {
			case ROOTS.AUTH:
				Navigation.startSingleScreenApp({
					screen: {
						label: 'Home',
						screen: 'LastMinuteDeal.StartPage',
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
							screen: 'LastMinuteDeal.DashboardPage',
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
							screen: 'LastMinuteDeal.MapPage',
							icon: iconsMap.map
						},
						{
							label: 'Receipts',
							title: 'Receipts',
							screen: 'LastMinuteDeal.ReceiptsPage',
							icon: iconsMap.receipt
						},
						{
							label: 'Settings',
							title: 'Settings',
							screen: 'LastMinuteDeal.SettingsPage',
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
							screen: 'LastMinuteDeal.CompanyDashboardPage',
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
							screen: 'LastMinuteDeal.ReceiptsPage',
							icon: iconsMap.receipt
						},
						{
							label: 'Settings',
							title: 'Settings',
							screen: 'LastMinuteDeal.CompanySettingsPage',
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
						screen: 'LastMinuteDeal.StartPage',
						title: 'Welcome',
						navigatorStyle: noNavigatorStyle
					},
					passProps: { testMode: false },
					animationType: 'none'
				});
		}
	}
}
