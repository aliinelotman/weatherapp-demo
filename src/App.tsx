import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css';

import Home from './Home.tsx'
import WeatherGraph from './WeatherGraph.tsx';
import Navigationbar from './Navigationbar.tsx';


function App() {

  return (
    <div>
    <BrowserRouter>
    <Navigationbar />
        <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="weathergraph" element={<WeatherGraph/>} />
        </Routes> 
    </BrowserRouter>
   
    </div>
  )
}

export default App
