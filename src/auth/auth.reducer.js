import * as actions from "./auth.actions";
import { types } from "src/common/actions/rootNavigation.actions";

export const INITIAL_STATE = {
  token: null,
  apiHost: "",
  loading: false
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.AUTH_LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case actions.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        apiHost: action.meta.apiHost,
        loading: false
      };
    case actions.AUTH_LOGIN_ERROR:
    case actions.RESET_LOCAL_STORE:
      return INITIAL_STATE;
    case types.CHANGE_ROOT:
      return {
        ...state,
        root: action.payload,
        currentRoot: action.payload
      };
    default:
      return state;
  }
}
