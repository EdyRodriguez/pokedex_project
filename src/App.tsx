
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AutoComplete from './components/AutoComplete/AutoComplete'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

const Home = () => <h1 className="text-3xl font-bold underline" >Home</h1>

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
