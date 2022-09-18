import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import AutoComplete from './components/AutoComplete/AutoComplete'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

const Home = () => {
  const [pokemon, setPokemon] = useState('')
  const handleInputChange = (event: any) => {
    console.log(event.target.value)
    setPokemon(event.target.value)
  }
  return (
    <div className="home">
      <h1 className="text-3xl font-bold underline">Home</h1>
      <p>
        You can search every pokemon and get its data just type and click in
        search!
      </p>
      <h2> I still working on the home page XD </h2>
      <input
        type="text"
        placeholder="Search"
        className="searchHome"
        onChange={handleInputChange}
      />
      <Link className="Button" to={{ pathname: `/pokemon/${pokemon}` }}>
        {'Search'}
      </Link>
    </div>
  )
}

function App () {
  return (
    <div className="App">
      <AutoComplete />
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
    </div>
  )
}

export default App
