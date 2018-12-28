import { REHYDRATE } from "redux-persist/constants";

export default function navigation(state = {}, action) {
  switch (action.type) {
    case REHYDRATE:
      return checkLoadComplete({
        ...state,
        storageLoaded: true
      });
    default:
      return state;
  }
}

function checkLoadComplete(state) {
  return {
    ...state,
    loadComplete: state.storageLoaded
  };
}
