import { combineReducers } from "@reduxjs/toolkit";
import snackbarReducer from "./slices/snackbar";
import bottomSheetReducer from "./slices/bottomSheet";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  bottomSheet: bottomSheetReducer,
});

export default rootReducer;
