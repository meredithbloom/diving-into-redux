import { configureStore, legacy_createStore, createSlice } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';

const initialState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) { 
      state.counter++
    },
    decrement(state) { 
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
     },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
})



//const store = legacy_createStore(counterSlice.reducer)

const store = configureStore({
  reducer: counterSlice.reducer
})

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export const counterActions = counterSlice.actions



export default store