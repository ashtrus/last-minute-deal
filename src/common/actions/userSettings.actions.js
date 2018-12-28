export const LOAD_USER_SETTINGS = "LOAD_USER_SETTINGS";

export const loadUserSettings = (options = {}) => dispatch => {
  return dispatch({ type: LOAD_USER_SETTINGS });
};
