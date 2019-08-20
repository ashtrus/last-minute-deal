import { Navigation } from "react-native-navigation";

export const showLightBox = (screen, props = {}) =>
  Navigation.showLightBox({
    screen,
    passProps: props,
    style: {
      backgroundColor: "#00000060",
      tapBackgroundToDismiss: true
    }
  });

export const dismissModal = ({ componentId }) => Navigation.dismissModal(componentId);

export const dismissAllModals = () => Navigation.dismissAllModals();

export const dismissLightBox = options => Navigation.dismissLightBox(options);
