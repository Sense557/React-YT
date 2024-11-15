import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: ["002", "003"],
  reducers: {
    // addInitialItems: (state, action) => {
    //   // Mutate the draft state directly
    //   state.splice(0, state.length, ...action.payload); // Clear current state and add new items
    // },
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;

