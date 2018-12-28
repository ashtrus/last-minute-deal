import { changeRoot, ROOTS } from "src/common/actions/rootNavigation.actions";
import { loadSettings } from "src/common/actions/settings.actions";
import { loadUserSettings } from "src/common/actions/userSettings.actions";

export const RESET_LOCAL_STORE = "RESET_LOCAL_STORE";

export const login = (email, password) => async dispatch => {
  await dispatch({ type: RESET_LOCAL_STORE });
  await dispatch(performPostLoginActions());
};

export const performPostLoginActions = () => async dispatch => {
  await dispatch(loadSettings());
  await dispatch(loadUserSettings());
  await dispatch(changeRoot(ROOTS.MAIN_APP));
};

export const logout = (options = {}) => dispatch => {
  dispatch({ type: RESET_LOCAL_STORE });
};
