import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomeDyslexicState {
  editMode: boolean;
}

const initialState: HomeDyslexicState = {
  editMode: false,
};

const homeDyslexicSlice = createSlice({
  name: "homeDyslexic",
  initialState,
  reducers: {
    setEditMode: (state, action: PayloadAction<boolean>) => {
      state.editMode = action.payload;
    },
    toggleEditMode: (state) => {
      state.editMode = !state.editMode;
    },
  },
});

export const { setEditMode, toggleEditMode } = homeDyslexicSlice.actions;
export default homeDyslexicSlice.reducer;
