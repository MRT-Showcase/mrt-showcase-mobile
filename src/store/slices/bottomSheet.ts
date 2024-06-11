import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface BottomSheetState {
  children: ReactNode | undefined;
}

const initialState: BottomSheetState = {
  children: undefined,
};

const bottomSheetSlice = createSlice({
  name: "bottomSheet",
  initialState,
  reducers: {
    setBottomSheet: (state, action: PayloadAction<ReactNode>) => {
      state.children = action.payload;
    },
    removeBottomSheet: (state) => {
      state.children = undefined;
    },
  },
});

export const { setBottomSheet, removeBottomSheet } = bottomSheetSlice.actions;
export default bottomSheetSlice.reducer;
