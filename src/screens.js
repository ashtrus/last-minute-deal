import React from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import store from "./store";

import AddDealPopup from "./Company/Dashboard/AddDealPopup";
import CompanyDashboardPage from "./Company/Dashboard/DashboardPage";
import CompanyDetailsPage from "./Company/Details/DetailsPage";
import CompanySettingsPage from "./Company/Settings/SettingsPage";
import CompanySinglePage from "./Company/Dashboard/SinglePage";
import DashboardPage from "./Dashboard/DashboardPage";
import FiltersPopup from "./Dashboard/FiltersPopup";
import MapPage from "./Map/MapPage";
import ReceiptsPage from "./Receipts/ReceiptsPage";
import SettingsPage from "./Settings/SettingsPage";
import SinglePage from "./Dashboard/SinglePage";
import StartPage from "./auth/pages/StartPage";
import UserProfilePage from "./UserProfile/UserProfilePage";

const ReduxComponent = (Component, props) => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);

const ReduxWrapper = component => props => ReduxComponent(component, props);

function registerComponent(name, Component) {
  const NAME = `LastMinuteDeal.${name}`;
  Navigation.registerComponent(NAME, () => ReduxWrapper(Component));
}

export default function registerScreens() {
  registerComponent("AddDealPopup", AddDealPopup);
  registerComponent("CompanyDashboardPage", CompanyDashboardPage);
  registerComponent("CompanyDetailsPage", CompanyDetailsPage);
  registerComponent("CompanySettingsPage", CompanySettingsPage);
  registerComponent("CompanySinglePage", CompanySinglePage);
  registerComponent("DashboardPage", DashboardPage);
  registerComponent("FiltersPopup", FiltersPopup);
  registerComponent("MapPage", MapPage);
  registerComponent("ReceiptsPage", ReceiptsPage);
  registerComponent("SettingsPage", SettingsPage);
  registerComponent("SinglePage", SinglePage);
  registerComponent("StartPage", StartPage);
  registerComponent("UserProfilePage", UserProfilePage);
}
