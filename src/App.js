import { Component } from "react";
import { YellowBox } from "react-native";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import store from "./store";
import { registerScreens } from "./screens";

import { noNavigatorStyle } from "./common/styles";
import colors from "./common/colors";
import { iconsLoaded, iconsMap } from "./utils/theme";
import { ROOTS } from "./common/actions/rootNavigation.actions";

registerScreens(store, Provider);

export default class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate);
  }

  onStoreUpdate = async () => {
    const state = store.getState();
    const {
      rootNavigation: { root },
      navigation: { storageLoaded }
    } = state;

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
            label: "Home",
            screen: "LastMinuteDeal.StartPage",
            title: "Last Minute Deal",
            navigatorStyle: noNavigatorStyle
          },
          animationType: "fade"
        });
        break;
      case ROOTS.MAIN_APP:
        Navigation.startTabBasedApp({
          tabs: [
            {
              label: "Home",
              title: "Last Minute Deal",
              screen: "LastMinuteDeal.DashboardPage",
              icon: iconsMap.home,
              navigatorButtons: {
                leftButtons: [
                  {
                    icon: iconsMap.filter,
                    id: "iconFilter"
                  }
                ]
              }
            },
            {
              label: "Map",
              title: "Map",
              screen: "LastMinuteDeal.MapPage",
              icon: iconsMap.map
            },
            {
              label: "Receipts",
              title: "Receipts",
              screen: "LastMinuteDeal.ReceiptsPage",
              icon: iconsMap.receipt
            },
            {
              label: "Settings",
              title: "Settings",
              screen: "LastMinuteDeal.SettingsPage",
              icon: iconsMap.settings
            }
          ],
          tabsStyle: {
            tabBarButtonColor: colors.gray,
            tabBarSelectedButtonColor: colors.blue,
            tabBarBackgroundColor: colors.white,
            initialTabIndex: 0
          },
          appStyle: {
            orientation: "portrait",
            tabBarSelectedButtonColor: colors.blue
          },
          passProps: {},
          animationType: "fade"
        });
        break;
      case ROOTS.MAIN_APP_COMPANY:
        Navigation.startTabBasedApp({
          tabs: [
            {
              label: "Home",
              // TODO: set to user company name
              title: "Company name",
              screen: "LastMinuteDeal.CompanyDashboardPage",
              icon: iconsMap.home,
              navigatorButtons: {
                rightButtons: [
                  {
                    icon: iconsMap.plus,
                    id: "iconAdd"
                  }
                ]
              }
            },
            {
              label: "Receipts",
              title: "Receipts",
              screen: "LastMinuteDeal.ReceiptsPage",
              icon: iconsMap.receipt
            },
            {
              label: "Settings",
              title: "Settings",
              screen: "LastMinuteDeal.CompanySettingsPage",
              icon: iconsMap.settings
            }
          ],
          tabsStyle: {
            tabBarButtonColor: colors.gray,
            tabBarSelectedButtonColor: colors.blue,
            tabBarBackgroundColor: colors.white,
            initialTabIndex: 0
          },
          appStyle: {
            orientation: "portrait",
            tabBarSelectedButtonColor: colors.blue
          },
          passProps: {},
          animationType: "fade"
        });
        break;
      default:
        Navigation.startSingleScreenApp({
          screen: {
            screen: "LastMinuteDeal.StartPage",
            title: "Welcome",
            navigatorStyle: noNavigatorStyle
          },
          passProps: { testMode: false },
          animationType: "none"
        });
    }
  }
}

YellowBox.ignoreWarnings(["Require cycle:"]);
