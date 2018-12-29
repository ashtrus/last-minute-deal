import { Navigation } from "react-native-navigation";

export const showModal = (screen, options) =>
  Navigation.showModal({
    screen: `LastMinuteDeal.${screen}`,
    passProps: options.props || {},
    title: options.title,
    navigatorStyle: options.navigatorStyle,
    navigatorButtons: options.navigatorButtons
  });

export const showLightBox = (screen, props = {}) =>
  Navigation.showLightBox({
    screen,
    passProps: props,
    style: {
      backgroundColor: "#00000060",
      tapBackgroundToDismiss: true
    }
  });

export const dismissModal = options => Navigation.dismissModal(options);

export const dismissLightBox = options => Navigation.dismissLightBox(options);
