import * as types from "src/common/actions/deals.actions";

const INITIAL_STATE = {
  items: []
};

export default function deals(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_DEALS:
      return { ...state };

    case types.LOAD_DEAL:
      return {
        ...action.payload
      };

    case types.CREATE_DEAL:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case types.UPDATE_DEAL:
      return {
        ...action.payload
      };

    default:
      return state;
  }
}
