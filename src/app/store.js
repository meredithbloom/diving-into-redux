import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';



const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})



export default store