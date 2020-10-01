export const ADD_BUNDLE = "ADD_BUNDLE";
export const DELETE_BUNDLE = "DELETE_BUNDLE";

export const add_bundle_action = (bundle) => (dispatch, state) => {
  return dispatch({
    type: ADD_BUNDLE,
    payload: item,
  });
};

export const delete_bundle_action = (code) => (dispatch, state) => {
  return dispatch({
    type: DELETE_BUNDLE,
    payload: "",
  });
};
