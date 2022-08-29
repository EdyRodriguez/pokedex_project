import React, { useState } from 'react'
import './PokemonDetails.css'
import { useParams } from 'react-router-dom'
import { getPokemon } from '../../utils/ApiCalls'
import { pokemonTemplate, pokemonTemplateDefault } from '../../utils/pokemonTemplate'

function PokemonDetails () {
  const { pokemonName } = useParams()
  const [pokemon, setPokemon] = useState<pokemonTemplate>(pokemonTemplateDefault)

  React.useEffect(() => {
    getPokemon(pokemonName)
      .then((response) => {
        setPokemon(response)
      }
      )
      .catch((error) => {
        console.log(error)
      }
      )
  }
  , [pokemonName])
  return (
    <div className='PokemonDetails'>
        <>
          { pokemon.name === ''
            ? (<h1>Loading...</h1>)
            : (
              <>
                <h2>
                  {pokemon?.name ? pokemon.name : 'Loading...'}
                </h2>
                <img src={pokemon?.sprites?.front_default} alt="pokemon_default" />
              </>
              )
          }
        </>
    </div>
  )
}

export default PokemonDetails
