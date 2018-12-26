export const ROOTS = {
  AUTH: "AUTH",
  MAIN_APP: "MAIN_APP",
  MAIN_APP_COMPANY: "MAIN_APP_COMPANY"
};

export const types = {
  CHANGE_ROOT: "CHANGE_ROOT"
};

export const changeRoot = root => dispatch => {
  return dispatch({ type: types.CHANGE_ROOT, payload: root });
};
