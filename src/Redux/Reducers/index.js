import { combineReducers } from "redux";
import items from "./items.reducer";
import bundles from "./bundle.reducer";

const rootReducer = combineReducers({
  items,
  bundles,
});

export default rootReducer;
