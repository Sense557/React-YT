import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      // Mutate the draft state directly
      state.splice(0, state.length, ...action.payload);  // Clear current state and add new items
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default bagSlice;
