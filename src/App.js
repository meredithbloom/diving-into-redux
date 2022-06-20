import React from 'react';
import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';

import Header from './components/Header'
import Auth from './components/Auth'
import Counter from './components/Counter';


function App() {
  return (
    <>
      <Header />
      <Auth />
      <Counter />
    </>
    
  );
}

export default App;
