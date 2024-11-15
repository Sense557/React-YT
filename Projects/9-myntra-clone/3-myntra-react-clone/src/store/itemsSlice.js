import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      // Mutate the draft state directly
      state.splice(0, state.length, ...action.payload);  // Clear current state and add new items
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
