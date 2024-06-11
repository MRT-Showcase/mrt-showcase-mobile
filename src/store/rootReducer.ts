import { combineReducers } from "@reduxjs/toolkit";
import snackbarReducer from "./slices/snackbar";
import bottomSheetReducer from "./slices/bottomSheet";
import homeDyslexicReducer from "./slices/homeDyslexic";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  bottomSheet: bottomSheetReducer,
  homeDyslexic: homeDyslexicReducer,
});

export default rootReducer;
