import { combineReducers } from "redux";

import auth from "./auth/auth.reducer";
import currentDeal from "src/common/reducers/currentDeal.reducer";
import currentReceipt from "src/common/reducers/currentReceipt.reducer";
import deals from "src/common/reducers/deals.reducer";
import navigation from "src/common/reducers/navigation.reducer";
import receipts from "src/common/reducers/receipts.reducer";
import rootNavigation from "src/common/reducers/rootNavigation.reducer";
import settings from "src/common/reducers/settings.reducer";
import userSettings from "src/common/reducers/userSettings.reducer";

const combinedReducers = combineReducers({
  auth,
  currentDeal,
  currentReceipt,
  deals,
  navigation,
  receipts,
  rootNavigation,
  settings,
  userSettings
});

export default function rootReducer(state, action) {
  try {
    return combinedReducers.apply(this, [state, action]);
  } catch (error) {
    throw error;
  }
}
