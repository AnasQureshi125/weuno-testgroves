import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

export const updateState = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleUpdate: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { toggleUpdate } = updateState.actions;

export default updateState.reducer;
