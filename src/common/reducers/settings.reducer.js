import * as types from "src/common/actions/settings.actions";

const INITIAL_STATE = {
  companyProfile: {
    name: "",
    address: "",
    countryCode: "",
    phone: "",
    email: ""
  },
  security: {
    touchIdEnabled: false
  },
  notifications: {
    enabled: false
  }
};

export default function settings(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_SETTINGS:
      return { ...state };

    case types.UPDATE_SETTINGS:
      return {
        ...state,
        ...action.payload
      };

    case types.UPDATE_NOTIFICATION:
      return {
        ...state,
        notifications: {
          enabled: action.payload
        }
      };

    default:
      return state;
  }
}
