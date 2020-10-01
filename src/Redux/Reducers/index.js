import { combineReducers } from "redux";
import dataItems from "./itemsReducer";

const rootReducer = combineReducers({
  dataItems,
});

export default rootReducer;
