import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice, { counterActions } from "./counter";
import privacySlice, { privacyActions } from "./privacy";



const counterStore = configureStore({reducer: {
  counter: counterSlice.reducer,
  privacy: privacySlice.reducer
}});

export { counterActions, privacyActions };
export default counterStore;

