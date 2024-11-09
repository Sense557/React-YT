import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counterVal: 0},
  reducers: {
    increment: (state) => {
      console.log("state, action");
    },
    decrement: (state) => {
      console.log("state, action");
    },
    add: (state) => {
      console.log("state, action");
    },
    substract: (state) => {
      console.log("state, action");
    }
  }
})




const counterStore = configureStore({reducer: {
  counter: counterSlice.reducer
}});

export const counterActions = counterSlice.actions;
export default counterStore;


/*
const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
}


const counterReducer = (store = INITIAL_VALUE, action) => {

  if(action.type === 'INCREMENT') {
    return {...store, counter: store.counter + 1};
  }else if(action.type === 'DECREMENT') {
    return {...store, counter: store.counter - 1};
  }else if(action.type === 'ADD') {
    return {...store, counter: store.counter + Number(action.payload.num)};
  }else if(action.type === 'SUBSTRACT') {
    return {...store, counter: store.counter - Number(action.payload.num)};
  }else if(action.type === 'PRIVACY_TOGGLE') {
    return {...store, privacy: !store.privacy};
  }

  return store;
}
*/