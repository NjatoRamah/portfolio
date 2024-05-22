import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Themes from './components/Themes'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Portefolio from './pages/portefolio/Portefolio'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Themes/>
      <Routes>
        <Route index element={<Home/> }/>
        <Route path='about' element={<About/> } />
        
        <Route path='portefolio' element={<Portefolio/>}/>
        <Route path='contact' element={<Contact/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App