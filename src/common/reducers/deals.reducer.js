import * as types from "src/common/actions/deals.actions";

const INITIAL_STATE = {
  items: []
};

export default function deals(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_DEALS:
      return {
        ...state,
        items: action.payload
        // loading: false
      };

    case types.CREATE_DEAL:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    case types.UPDATE_DEAL:
      return {
        ...state,
        items: action.payload
      };

    case types.DELETE_DEAL:
      return {
        ...state,
        items: action.payload
      };

    case types.RESET_LOCAL_STORE:
      return INITIAL_STATE;

    default:
      return state;
  }
}
