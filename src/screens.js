import { Navigation } from 'react-native-navigation';

import DashboardPage from './Dashboard/DashboardPage';
import FiltersPopup from './Dashboard/FiltersPopup';
import SinglePage from './Dashboard/SinglePage';
import UserProfilePage from './UserProfile/UserProfilePage';
import MapPage from './Map/MapPage';
import ReceiptsPage from './Receipts/ReceiptsPage';
import SettingsPage from './Settings/SettingsPage';
import StartPage from './auth/pages/StartPage';
import CompanyDashboardPage from './Company/Dashboard/DashboardPage';
import CompanySettingsPage from './Company/Settings/SettingsPage';
import CompanyDetailsPage from './Company/Details/DetailsPage';

export const registerScreens = (store, Provider) => {
	Navigation.registerComponent(
		'bball.StartPage',
		() => StartPage,
		store,
		Provider
	);
	Navigation.registerComponent(
		'bball.DashboardPage',
		() => DashboardPage,
		store,
		Provider
	);
	Navigation.registerComponent(
		'bball.FiltersPopup',
		() => FiltersPopup,
		store,
		Provider
	);
	Navigation.registerComponent(
		'bball.SinglePage',
		() => SinglePage,
		store,
		Provider
	);
	Navigation.registerComponent('bball.MapPage', () => MapPage, store, Provider);
	Navigation.registerComponent(
		'bball.UserProfilePage',
		() => UserProfilePage,
		store,
		Provider
	);
	Navigation.registerComponent(
		'bball.SettingsPage',
		() => SettingsPage,
		store,
		Provider
	);
	Navigation.registerComponent(
		'bball.ReceiptsPage',
		() => ReceiptsPage,
		store,
		Provider
	);
	Navigation.registerComponent(
		'bball.CompanyDashboardPage',
		() => CompanyDashboardPage,
		store,
		Provider
	);
	Navigation.registerComponent(
		'bball.CompanySettingsPage',
		() => CompanySettingsPage,
		store,
		Provider
	);
	Navigation.registerComponent(
		'bball.CompanyDetailsPage',
		() => CompanyDetailsPage,
		store,
		Provider
	);
};
