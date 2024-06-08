import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SnackbarState {
  message: string | undefined;
}

const initialState: SnackbarState = {
  message: undefined,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    removeMessage: (state) => {
      state.message = undefined;
    },
  },
});

export const { setMessage, removeMessage } = snackbarSlice.actions;
export default snackbarSlice.reducer;
