import { combineReducers } from "@reduxjs/toolkit";
import snackbarReducer from "./slices/snackbar";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
});

export default rootReducer;
