/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useState } from 'react'
import './PokemonDetails.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPokemon } from '../../utils/ApiCalls'
import TypesImages from '../../utils/TypesImages'
import { WiStars } from 'react-icons/wi'
import {
  pokemonTemplate,
  pokemonTemplateDefault
} from '../../utils/pokemonTemplate'

function PokemonDetails () {
  const navigate = useNavigate()
  const imageArray: any[] = []
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
        navigate('/404')
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

  const getType = (typeName: string) => {
    const type = TypesImages.findIndex(e => e.name === typeName)
    return type !== -1 ? TypesImages[type].image : ''
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
              <div className="pokemon-card-top">
                {pokemon.id > 1
                  ? (
                  <Link
                    className="arrows"
                    to={{ pathname: `/pokemon/${pokemon.id - 1}` }}
                  >
                    {'<'}{' '}
                  </Link>
                    )
                  : (
                  <a></a>
                    )}
                <h2 className="pokemon-title">
                  {pokemon.name
                    ? 'No.' + pokemon.id + ' ' + pokemonUpperCase(pokemon.name)
                    : 'Loading...'}
                </h2>
                <Link
                  className="arrows"
                  to={{ pathname: `/pokemon/${pokemon.id + 1}` }}
                >
                  {'>'}{' '}
                </Link>
              </div>
              <div className="pokemon-container">
                <div className="pokemon-image-gallery">
                  <img
                    className="selected-image"
                    src={pokemonImage.value}
                    alt={pokemonImage.key}
                  />
                  <div className="pokemon-image-gallery-container">
                    {pokemonImages.map((image, index) => (
                      <>
                        <img
                          style={{
                            border:
                              pokemonImage.key === image.key
                                ? '4px solid red'
                                : ''
                          }}
                          className= {image.key.includes('female') ? 'pokemon-image-gallery-item female' : 'pokemon-image-gallery-item male'}
                          key={index}
                          src={image?.value}
                          alt={image?.key}
                          onClick={() => setPokemonImage(image)}
                        />
                        {image.key.includes('shiny') ? (<div className='shiny' key={index + 10}> <WiStars /> </div>) : '' }
                      </>
                    ))}
                  </div>
                  <p className='note'>*pink represents female sprites</p>
                </div>
                <div className="stats-container">
                  <div className="stats-items">
                  <h2 className="stats-title">Base Stats: </h2>
                    <h3>HP: {pokemon.stats[0].base_stat}</h3>
                    <h3>Attack: {pokemon.stats[1].base_stat}</h3>
                    <h3>Defense: {pokemon.stats[2].base_stat}</h3>
                    <h3>Sp-Attack: {pokemon.stats[3].base_stat}</h3>
                    <h3>Sp-Defense: {pokemon.stats[4].base_stat}</h3>
                    <h3>Speed: {pokemon.stats[5].base_stat}</h3>
                  </div>
                  <div>
                    <h2 className="stats-title">Abilities: </h2>
                    <ul className="abs-list">
                      {pokemon.abilities.map((ability, index) => (
                        <li key={index}>
                          {ability.is_hidden
                            ? pokemonUpperCase(ability.ability.name) +
                              ' (hidden)'
                            : pokemonUpperCase(ability.ability.name)}
                        </li>
                      ))}
                    </ul>
                    <h2 className="stats-title">Types: </h2>
                    <div className='types-container'>{pokemon.types.map((type, index) => (
                      <img
                        key={index}
                        className="type-image"
                        src={ getType(type.type.name) }
                        alt={type.type.name}
                      />
                    )) }</div>
                    <div></div>
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
