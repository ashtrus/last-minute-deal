import * as types from "src/common/actions/currentDeal.actions";
import { RESET_LOCAL_STORE } from "src/auth/auth.actions";

const INITIAL_STATE = {};

export default function currentDeal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_LOCAL_STORE:
      return INITIAL_STATE;

    case types.INIT_CURRENT_DEAL:
      return {
        ...action.payload
      };

    case types.UPDATE_CURRENT_DEAL:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}
