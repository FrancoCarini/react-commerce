import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component'

function App() {
  return (
    <div>
      <Route exact={true} path='/' component={HomePage} />
      <HomePage />
    </div>
  )
}

export default App;