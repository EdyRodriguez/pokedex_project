import React, { useState } from 'react'
import './PokemonDetails.css'
import { useParams } from 'react-router-dom'
import { getPokemon } from '../../utils/ApiCalls'
import {
  pokemonTemplate,
  pokemonTemplateDefault
} from '../../utils/pokemonTemplate'

function PokemonDetails () {
  let imageArray: any[] = [];
  const { pokemonName } = useParams()
  const [pokemon, setPokemon] = useState<pokemonTemplate>(
    pokemonTemplateDefault
  )
  const [pokemonImage, setPokemonImage] = useState({ key: '', value: '' })
  const [pokemonImages, setPokemonImages] = useState([{ key: '', value: '' }])

  React.useEffect(() => {
    getPokemon(pokemonName)
      .then((response) => {
        setPokemon(response)
        mapImagePokemon(response.sprites, imageArray)
        setPokemonImage(imageArray[0])
        setPokemonImages(imageArray)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [pokemonName])

  const mapImagePokemon = (sprites: any, imageArray: any[]) => {
    for (const [key, value] of Object.entries(sprites)) {
      if (value !== null && key.includes('front')) {
        imageArray.push({ key, value })
      }
    }
  }

  const pokemonUpperCase = (pokemonName: string) => {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
  }

  return (
    <div className="PokemonDetails">
      <>
        {pokemon.name === ''
          ? (
          <h1>Loading...</h1>
            )
          : (
          <>
            <div className="pokemon-card">
              <h2 className="pokemon-title">
                {pokemon.name ?'No.' + pokemon.id + ' ' + pokemonUpperCase(pokemon.name) : 'Loading...'}
              </h2>
              <div className="pokemon-container">
                <div className="pokemon-image-gallery">
                  <img
                  className='selected-image'
                  src={pokemonImage.value}
                  alt={pokemonImage.key}
                  />
                  <div className="pokemon-image-gallery-container">
                    {pokemonImages.map((image, index) => (
                      <>
                      <img
                      style={{ border: pokemonImage.key === image.key ? '4px solid red' : '' }}
                      className='pokemon-image-gallery-item'
                      key={index}
                      src={image?.value}
                      alt={image?.key}
                      onClick={() => setPokemonImage(image)}
                      />
                      </>
                    ))}
                  </div>
                </div>
                <div className='stats-container'>
                  <h2 className='stats-title'>Base Stats: </h2>
                  <div className="stats-items">
                    <h3>HP: {pokemon.stats[0].base_stat}</h3>
                    <h3>Attack: {pokemon.stats[1].base_stat}</h3>
                    <h3>Defense: {pokemon.stats[2].base_stat}</h3>
                    <h3>Sp-Attack: {pokemon.stats[3].base_stat}</h3>
                    <h3>Sp-Defense: {pokemon.stats[4].base_stat}</h3>
                    <h3>Speed: {pokemon.stats[5].base_stat}</h3>
                  </div>
                  <div>
                    <h2 className='stats-title'>Abilities: </h2>
                    <ul className='abs-list'>
                      {pokemon.abilities.map((ability, index) => (
                        <li key={index}>{ability.is_hidden ? pokemonUpperCase(ability.ability.name) + ' (hidden)' : pokemonUpperCase(ability.ability.name) }</li>
                      ))}
                    </ul>
                    <h2 className='stats-title'>Types: </h2>
                    <div>
                      {}
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
            )}
      </>
    </div>
  )
}

export default PokemonDetails
