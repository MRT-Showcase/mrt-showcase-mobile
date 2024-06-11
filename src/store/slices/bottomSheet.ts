import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface BottomSheetState {
    componentKey: string | null;
}

const initialState: BottomSheetState = {
    componentKey: null,
};

const bottomSheetSlice = createSlice({
    name: "bottomSheet",
    initialState,
    reducers: {
        setBottomSheet: (state, action: PayloadAction<string>) => {
            state.componentKey = action.payload;
        },
        removeBottomSheet: (state) => {
            state.componentKey = null;
        },
    },
});

export const {setBottomSheet, removeBottomSheet} = bottomSheetSlice.actions;
export default bottomSheetSlice.reducer;
