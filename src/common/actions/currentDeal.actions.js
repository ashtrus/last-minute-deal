import { updateDeal } from "./deals.actions";

export const INIT_CURRENT_DEAL = "INIT_CURRENT_DEAL";
export const REPLACE_CURRENT_DEAL = "REPLACE_CURRENT_DEAL";
export const UPDATE_CURRENT_DEAL = "UPDATE_CURRENT_DEAL";

export const loadCurrentDeal = id => (dispatch, getState) => {
  const { deals } = getState();

  let deal = deals.items.find(item => item.id === id);

  if (!deal) {
    throw { ...new Error("Cannot find current deal"), dealId: id };
  }

  return dispatch(initCurrentDeal(deal));
};

const initCurrentDeal = deal => {
  return {
    type: INIT_CURRENT_DEAL,
    payload: deal
  };
};

export const updateCurrentDeal = payload => (dispatch, getState) => {
  dispatch({
    type: UPDATE_CURRENT_DEAL,
    payload
  });
  dispatch(updateDeal(payload));
};

export const openDealPage = (props, navigator) => dispatch => {
  navigator.push({
    screen: "LastMinuteDeal.CompanySinglePage",
    title: "Deal details",
    backButtonTitle: "Back",
    passProps: props
  });
  dispatch(loadCurrentDeal(props.id));
};
