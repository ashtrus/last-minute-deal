export const LOAD_SETTINGS = "LOAD_SETTINGS";
export const UPDATE_SETTINGS = "UPDATE_SETTINGS";
export const UPDATE_NOTIFICATION = "UPDATE_NOTIFICATION";
export const UPDATE_COMPANY_PROFILE = "UPDATE_COMPANY_PROFILE";

export const loadSettings = (options = {}) => (dispatch, getState) => {
  return dispatch({ type: LOAD_SETTINGS, payload: getState().settings });
};

export const updateSettings = settings => dispatch => {
  return dispatch({
    type: UPDATE_SETTINGS,
    payload: settings
  });
};

export const updateNotification = value => dispatch => {
  return dispatch({
    type: UPDATE_NOTIFICATION,
    payload: value
  });
};

export const updateCompanyProfile = value => dispatch => {
  return dispatch({
    type: UPDATE_COMPANY_PROFILE,
    payload: value
  });
};
