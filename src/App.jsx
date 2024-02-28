import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './Components/All'
import Javascript from './Components/Javascript'
import Mixes from './Components/Mixes'
import Music from './Components/Music'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  return (
    <>
   
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<All/>}/>
      <Route path='/javascript' element={<Javascript/>}/>
      <Route path='/mixes' element={<Mixes/>}/>
      <Route path='/music' element={<Music/>}/>
  
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
