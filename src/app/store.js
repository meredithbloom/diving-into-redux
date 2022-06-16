import { configureStore, legacy_createStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';


const counterReducer = (state = { counter: 0}, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter+1
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter -1
    }
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter+action.amount
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