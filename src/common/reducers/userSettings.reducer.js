import * as types from "src/common/actions/userSettings.actions";

const INITIAL_STATE = {
  dateFormat: "",
  defaultSettings: {
    baseCurrencyCode: "",
    countryCode: ""
  },
  languageCode: ""
};

export default function userSettings(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_USER_SETTINGS:
      return { ...action.payload };
    case types.SET_USER_LANGUAGE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
