import { ADD_BUNDLE, DELETE_BUNDLE } from "../Actions/bundle.action";

const bundles = (state = [], action) => {
  switch (action.type) {
    case ADD_BUNDLE: {
      return [...state, action.payload];
    }
    case DELETE_BUNDLE: {
      let newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default bundles;
