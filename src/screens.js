import { Navigation } from "react-native-navigation";

import DashboardPage from "./Dashboard/DashboardPage";
import FiltersPopup from "./Dashboard/FiltersPopup";
import SinglePage from "./Dashboard/SinglePage";
import UserProfilePage from "./UserProfile/UserProfilePage";
import MapPage from "./Map/MapPage";
import ReceiptsPage from "./Receipts/ReceiptsPage";
import SettingsPage from "./Settings/SettingsPage";
import StartPage from "./auth/pages/StartPage";
import CompanyDashboardPage from "./Company/Dashboard/DashboardPage";
import CompanySinglePage from "./Company/Dashboard/SinglePage";
import CompanySettingsPage from "./Company/Settings/SettingsPage";
import CompanyDetailsPage from "./Company/Details/DetailsPage";
import AddDealPopup from "./Company/Dashboard/AddDealPopup";

export const registerScreens = (store, Provider) => {
  Navigation.registerComponent("LastMinuteDeal.StartPage", () => StartPage, store, Provider);
  Navigation.registerComponent("LastMinuteDeal.DashboardPage", () => DashboardPage, store, Provider);
  Navigation.registerComponent("LastMinuteDeal.FiltersPopup", () => FiltersPopup, store, Provider);
  Navigation.registerComponent("LastMinuteDeal.SinglePage", () => SinglePage, store, Provider);
  Navigation.registerComponent("LastMinuteDeal.MapPage", () => MapPage, store, Provider);
  Navigation.registerComponent("LastMinuteDeal.UserProfilePage", () => UserProfilePage, store, Provider);
  Navigation.registerComponent("LastMinuteDeal.SettingsPage", () => SettingsPage, store, Provider);
  Navigation.registerComponent("LastMinuteDeal.ReceiptsPage", () => ReceiptsPage, store, Provider);
  Navigation.registerComponent("LastMinuteDeal.CompanyDashboardPage", () => CompanyDashboardPage, store, Provider);
  Navigation.registerComponent("LastMinuteDeal.CompanySinglePage", () => CompanySinglePage, store, Provider);
  Navigation.registerComponent("LastMinuteDeal.CompanySettingsPage", () => CompanySettingsPage, store, Provider);
  Navigation.registerComponent("LastMinuteDeal.CompanyDetailsPage", () => CompanyDetailsPage, store, Provider);
  Navigation.registerComponent("LastMinuteDeal.AddDealPopup", () => AddDealPopup, store, Provider);
};
