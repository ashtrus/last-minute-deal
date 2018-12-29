import * as types from "app/common/actions/settings.actions";

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
  }
};

export default function settings(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_SETTINGS:
      return { ...action.payload };

    default:
      return state;
  }
}
