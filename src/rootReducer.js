import { combineReducers } from "redux";

import auth from "./auth/auth.reducer";
import navigation from "src/common/reducers/navigation.reducer";
import rootNavigation from "src/common/reducers/rootNavigation.reducer";

const combinedReducers = combineReducers({
  auth,
  navigation,
  rootNavigation
});

export default function rootReducer(state, action) {
  try {
    return combinedReducers.apply(this, [state, action]);
  } catch (error) {
    throw error;
  }
}
