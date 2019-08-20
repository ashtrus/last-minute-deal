import { Component } from "react";
import { YellowBox } from "react-native";
import { Navigation } from "react-native-navigation";
import store from "./store";
import registerScreens from "./screens";
import { iconsLoaded } from "./utils/theme";
import { ROOTS } from "./common/actions/rootNavigation.actions";
import { startPage, userPage, companyPage, setDefaultOptions } from "./navigation";

registerScreens();

export default class App extends Component {
  constructor() {
    super();
    Navigation.events().registerAppLaunchedListener(() => {
      setDefaultOptions();
      store.subscribe(this.onStoreUpdate);
      this.startApp();
    });
  }

  onStoreUpdate = async () => {
    const {
      rootNavigation: { root },
      navigation: { storageLoaded }
    } = store.getState();
    console.log("🔥 props", store.getState());

    if (root !== this.currentRoot && storageLoaded) {
      this.currentRoot = root;
      await iconsLoaded();
      await this.startApp(root);
    }
  };

  startApp = (root = "AUTH") => {
    switch (root) {
      case ROOTS.AUTH:
        startPage();
        break;
      case ROOTS.MAIN_APP:
        userPage();
        break;
      case ROOTS.MAIN_APP_COMPANY:
        companyPage();
        break;
      default:
        startPage();
    }
  };
}

YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger", "Failed prop type"]);
