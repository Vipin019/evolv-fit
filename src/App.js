import React from 'react'
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nutrition from './Components/Dashboard/Nutrition';
import Workout from './Components/Dashboard/Workout';

const App = () => {
  return (
    <div id='app'>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Dashboard />}/>
        <Route exact path='/userId/workout' element={<Workout />}/>
        <Route exact path='/userId/nutrition' element={<Nutrition />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
