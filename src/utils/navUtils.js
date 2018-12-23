import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from './../store';
import { noNavigatorStyle } from 'src/common/styles';

export const showPage = (screen, props) =>
	Navigation.push({
		screen: `LastMinuteDeal.${screen}`,
		animated: true,
		passProps: props || {}
	});

export const showModal = (screen, options) =>
	Navigation.showModal({
		screen: `LastMinuteDeal.${screen}`,
		passProps: options.props || {},
		title: options.title,
		navigatorStyle: options.navigatorStyle,
		navigatorButtons: options.navigatorButtons
	});

export const showToast = props =>
	Navigation.showInAppNotification({
		screen: 'LastMinuteDeal.Toast',
		passProps: props || {},
		autoDismissTimerSec: props.duration || 7
	});

export const showLightBox = (screen, props = {}) =>
	Navigation.showLightBox({
		screen,
		passProps: props,
		style: {
			backgroundColor: '#00000060',
			tapBackgroundToDismiss: true
		}
	});

export const dismissModal = options => Navigation.dismissModal(options);

export const dismissLightBox = options => Navigation.dismissLightBox(options);
