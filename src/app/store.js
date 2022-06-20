import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';




//const store = legacy_createStore(counterSlice.reducer)

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });





export default store