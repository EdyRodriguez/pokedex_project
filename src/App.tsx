
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AutoComplete from './components/AutoComplete/AutoComplete'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

const Home = () => <h1>Home</h1>

function App () {
  return (
    <div className="App">
      <AutoComplete/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetails/>} />
      </Routes>
    </div>
  )
}

export default App
