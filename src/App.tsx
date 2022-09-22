import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

function App () {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
        <Route
          path="*"
          element={
            <>
              <h1>404: Not Found</h1>
              <br></br>
              <Link className="Button" to={{ pathname: '/' }}>
                {'Home'}
              </Link>
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
