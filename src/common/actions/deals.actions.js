import axios from "axios";

export const LOAD_DEALS = "LOAD_DEALS";
export const CREATE_DEAL = "CREATE_DEAL";
export const UPDATE_DEAL = "UPDATE_DEAL";
export const DELETE_DEAL = "DELETE_DEAL";
export const RESET_LOCAL_STORE = "RESET_LOCAL_STORE";

// export const loadDeals = (options = {}) => async (dispatch, getState) => {
//   const deals = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   await dispatch({ type: LOAD_DEALS, payload: deals.data });
// };

export const loadDeals = (options = {}) => (dispatch, getState) => {
  return dispatch({ type: LOAD_DEALS, payload: getState().deals.items });
};

export const createDeal = deal => (dispatch, getState) => {
  return dispatch({
    type: CREATE_DEAL,
    payload: deal
  });
};

export const updateDeal = deal => (dispatch, getState) => {
  const updatedDeals = getState().deals.items.map(item => {
    if (item.id === deal.id) {
      return deal;
    }
    return item;
  });

  return dispatch({
    type: UPDATE_DEAL,
    payload: updatedDeals
  });
};

export const deleteDeal = id => (dispatch, getState) => {
  const updatedDeals = getState().deals.items.filter(deal => deal.id !== id);

  return dispatch({
    type: DELETE_DEAL,
    payload: updatedDeals
  });
};
