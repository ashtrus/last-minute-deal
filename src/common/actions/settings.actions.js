export const LOAD_SETTINGS = "LOAD_SETTINGS";

export const loadSettings = (options = {}) => dispatch => {
  return dispatch({ type: LOAD_SETTINGS });
};
