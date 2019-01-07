import * as types from "src/common/actions/receipts.actions";

const INITIAL_STATE = {
  items: []
};

export default function receipts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_RECEIPTS:
      return {
        ...state,
        items: action.payload
        // loading: false
      };

    case types.CREATE_RECEIPT:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    case types.UPDATE_RECEIPT:
      return {
        ...state,
        items: action.payload
      };

    case types.DELETE_RECEIPT:
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
