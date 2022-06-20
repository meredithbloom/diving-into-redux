import React from 'react';
import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';

import Header from './components/Header'
import Auth from './components/Auth'
import Counter from './components/Counter';
import UserProfile from './components/UserProfile'

import {useSelector} from 'react-redux'

function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile/>}
      <Counter />
    </>
    
  );
}

export default App;
