import { configureStore, legacy_createStore, createSlice } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';

const initialCounterState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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


const initialAuthState = {isAuthenticated: false}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
     },
    logout(state) {
      state.isAuthenticated = false
    }
  }
})

//const store = legacy_createStore(counterSlice.reducer)

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
})

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions


export default store