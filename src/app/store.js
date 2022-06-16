import { configureStore, legacy_createStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';


const initialState = {counter: 0, showCounter: true}

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }
  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    }
  }
  
  return state

}


const store = legacy_createStore(counterReducer)


// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export default store